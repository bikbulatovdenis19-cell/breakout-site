(()=>{
  const cfg=window.BREAKOUT_CONFIG||{};
  if(!cfg.supabaseURL||!cfg.supabasePublishableKey)return;
  const endpoint=cfg.supabaseURL.replace(/\/$/,'')+'/rest/v1/rpc/record_site_event';
  const storageKey='breakout-analytics-visitor-v1';
  const sessionKey='breakout-supabase-session-v1';
  const uuid=()=>{try{return crypto.randomUUID()}catch{return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g,c=>{const r=Math.random()*16|0,v=c==='x'?r:(r&3|8);return v.toString(16)})}};
  let visitorId;try{visitorId=localStorage.getItem(storageKey)||uuid();localStorage.setItem(storageKey,visitorId)}catch{visitorId=uuid()}
  const token=()=>{try{return JSON.parse(localStorage.getItem(sessionKey)||'null')?.access_token||''}catch{return ''}};
  const deviceType=()=>innerWidth<=760?'mobile':innerWidth<=1080?'tablet':'desktop';
  const send=(eventName,element='',metadata={})=>{
    const headers={'Content-Type':'application/json','apikey':cfg.supabasePublishableKey,'Accept':'application/json'};
    const t=token();if(t)headers.Authorization='Bearer '+t;
    const body={p_visitor_id:visitorId,p_event_name:eventName,p_page_path:location.pathname||'/',p_element:element||null,p_language:document.documentElement.lang||navigator.language||null,p_referrer:document.referrer||null,p_viewport_width:Math.round(innerWidth||0),p_device_type:deviceType(),p_metadata:metadata||{}};
    fetch(endpoint,{method:'POST',headers,body:JSON.stringify(body),keepalive:true}).catch(()=>{});
  };
  addEventListener('DOMContentLoaded',()=>send('page_view','page',{title:document.title}),{once:true});
  document.addEventListener('click',e=>{
    const el=e.target.closest?.('a,button');if(!el)return;
    const label=(el.dataset.i18n||el.getAttribute('aria-label')||el.textContent||el.id||el.className||'control').trim().slice(0,120);
    const href=el.tagName==='A'?(el.getAttribute('href')||''):'';
    send('click',label,{href:href.slice(0,240),action:(el.dataset.action||'').slice(0,80)});
  },{capture:true,passive:true});
  window.BreakOutAnalytics={track:send};
})();
