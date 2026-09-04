(() => {
  const cfg = window.BREAKOUT_CONFIG || {};
  const storageKey = 'breakout-supabase-session-v1';

  function configured(){
    return /^https:\/\/.+\.supabase\.co\/?$/.test(cfg.supabaseURL || '') &&
      typeof cfg.supabasePublishableKey === 'string' &&
      cfg.supabasePublishableKey.startsWith('sb_publishable_') &&
      !cfg.supabasePublishableKey.startsWith('PASTE_');
  }

  function headers(token){
    const h = {'Content-Type':'application/json','Accept':'application/json','apikey':cfg.supabasePublishableKey};
    if(token) h.Authorization = `Bearer ${token}`;
    return h;
  }

  async function request(path,{method='GET',body,token}={}){
    if(!configured()) throw new Error('SUPABASE_NOT_CONFIGURED');
    const res = await fetch(`${cfg.supabaseURL.replace(/\/$/,'')}/${path.replace(/^\//,'')}`,{
      method,headers:headers(token),body:body===undefined?undefined:JSON.stringify(body)
    });
    const text = await res.text();
    let data = null;
    if(text){try{data=JSON.parse(text)}catch{data=text}}
    if(!res.ok){
      const raw = data?.message || data?.msg || data?.error_description || data?.error || data?.details || data?.hint || `HTTP ${res.status}`;
      const e = new Error(String(raw)); e.status=res.status; e.data=data; throw e;
    }
    return data;
  }

  function normalizeAuth(data,emailFallback){
    if(!data?.access_token || !data?.user) return null;
    return {
      access_token:data.access_token,
      refresh_token:data.refresh_token || '',
      expires_at:Date.now() + Math.max(60,Number(data.expires_in||3600))*1000,
      user:{id:data.user.id,email:data.user.email || emailFallback || ''}
    };
  }
  function saveSession(s){ if(s) localStorage.setItem(storageKey,JSON.stringify(s)); else localStorage.removeItem(storageKey); }
  function getSession(){ try{return JSON.parse(localStorage.getItem(storageKey)||'null')}catch{return null} }

  async function refreshSession(s=getSession()){
    if(!s?.refresh_token) return s;
    const data=await request('auth/v1/token?grant_type=refresh_token',{method:'POST',body:{refresh_token:s.refresh_token}});
    const next=normalizeAuth(data,s.user?.email)||s; saveSession(next); return next;
  }

  async function ensureSession(){
    let s=getSession(); if(!s) return null;
    if(!s.expires_at || s.expires_at-Date.now()<90_000){
      try{s=await refreshSession(s)}catch{saveSession(null); return null}
    }
    return s;
  }

  async function signUp(email,password){
    const data=await request('auth/v1/signup',{method:'POST',body:{email,password}});
    const session=normalizeAuth(data,email); if(session) saveSession(session);
    return {data,session,needsEmailConfirmation:!session};
  }
  async function signIn(email,password){
    const data=await request('auth/v1/token?grant_type=password',{method:'POST',body:{email,password}});
    const session=normalizeAuth(data,email); if(!session) throw new Error('INVALID_AUTH_RESPONSE'); saveSession(session); return session;
  }
  async function signOut(){
    const s=getSession();
    if(s?.access_token){try{await request('auth/v1/logout',{method:'POST',body:{},token:s.access_token})}catch{}}
    saveSession(null);
  }
  async function sendPasswordReset(email){
    const redirectTo = `${location.origin}${location.pathname}?mode=recovery`;
    const path = `auth/v1/recover?redirect_to=${encodeURIComponent(redirectTo)}`;
    return request(path,{method:'POST',body:{email}});
  }
  function consumeRecoveryHash(){
    const p=new URLSearchParams(location.hash.replace(/^#/,''));
    if(p.get('type')!=='recovery' || !p.get('access_token')) return false;
    const s={access_token:p.get('access_token'),refresh_token:p.get('refresh_token')||'',expires_at:Date.now()+Number(p.get('expires_in')||3600)*1000,user:{id:'',email:''},recovery:true};
    saveSession(s); history.replaceState({},'',location.pathname+'?mode=recovery'); return true;
  }
  async function updatePassword(password){
    const s=await ensureSession(); if(!s?.access_token) throw new Error('NO_SESSION');
    const data=await request('auth/v1/user',{method:'PUT',body:{password},token:s.access_token});
    return data;
  }
  async function currentAccess(){
    const s=await ensureSession(); if(!s?.access_token) throw new Error('NO_SESSION');
    const rows=await request('rest/v1/rpc/current_access',{method:'POST',body:{},token:s.access_token});
    return Array.isArray(rows)?rows[0]||null:rows;
  }
  async function devices(){
    const s=await ensureSession(); if(!s?.access_token) throw new Error('NO_SESSION');
    return request('rest/v1/devices?select=id,installation_id,name,platform,activated_at,last_seen_at,revoked_at&revoked_at=is.null&order=activated_at.asc',{token:s.access_token});
  }
  async function revokeDevice(id){
    const s=await ensureSession(); if(!s?.access_token) throw new Error('NO_SESSION');
    return request('rest/v1/rpc/revoke_device',{method:'POST',body:{p_device_id:id},token:s.access_token});
  }

  async function companionDevices(){
    const s=await ensureSession(); if(!s?.access_token) throw new Error('NO_SESSION');
    return request('rest/v1/companion_devices?select=id,installation_id,name,platform,app_version,activated_at,last_seen_at,revoked_at&revoked_at=is.null&order=last_seen_at.desc',{token:s.access_token});
  }
  async function revokeCompanionDevice(id){
    const s=await ensureSession(); if(!s?.access_token) throw new Error('NO_SESSION');
    return request('rest/v1/rpc/revoke_companion_device',{method:'POST',body:{p_device_id:id},token:s.access_token});
  }

  window.BreakOutSupabase={configured,signUp,signIn,signOut,sendPasswordReset,updatePassword,consumeRecoveryHash,currentAccess,devices,revokeDevice,companionDevices,revokeCompanionDevice,getSession,ensureSession};
})();
