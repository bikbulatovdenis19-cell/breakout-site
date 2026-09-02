(()=>{
  const cfg=window.BREAKOUT_CONFIG||{},state=document.getElementById('state'),dash=document.getElementById('dashboard');
  const sessionKey='breakout-supabase-session-v1';
  let session=null;try{session=JSON.parse(localStorage.getItem(sessionKey)||'null')}catch{}
  const fail=(html)=>{state.classList.add('error');state.innerHTML=html};
  if(!session?.access_token){fail('Нужно войти в аккаунт владельца BreakOut, чтобы открыть статистику. <br><a class="login" href="account.html?mode=signin">Войти</a>');return}
  const headers={'Content-Type':'application/json','Accept':'application/json','apikey':cfg.supabasePublishableKey,'Authorization':'Bearer '+session.access_token};

  const elementRu={
    signIn:'Войти',navShowcase:'Рабочие экраны',navPricing:'Тарифы',navSports:'Виды спорта',
    navSupport:'Поддержка',contactSupport:'Связаться с поддержкой',supportAccessButton:'Посмотреть тарифы',
    navAccount:'Аккаунт',navFeatures:'Инструменты',navReviews:'Отзывы',navDemo:'Демо',navDownload:'Скачать BreakOut',
    startTrial:'Начать пробный период',downloadPlan:'Скачать BreakOut',buyPlan:'Купить',chooseSix:'Выбрать 6 месяцев',
    chooseYear:'Выбрать 1 год',close:'Закрыть',page:'Страница'
  };
  const eventRu={page_view:'Просмотр страницы',click:'Нажатие'};
  const pageRu={
    '/':'Главная','/index.html':'Главная','/account.html':'Аккаунт','/support.html':'Поддержка',
    '/privacy.html':'Конфиденциальность','/terms.html':'Условия','/analytics.html':'Аналитика'
  };
  const labelElement=v=>elementRu[String(v||'')]||humanize(v)||'Элемент';
  const labelEvent=v=>eventRu[String(v||'')]||humanize(v)||'Действие';
  const labelPage=v=>{
    const raw=String(v||'');
    const path=raw.split('?')[0].split('#')[0]||'/';
    return pageRu[path]||raw||'Страница';
  };
  function humanize(v){
    const raw=String(v||'').trim(); if(!raw)return '';
    return raw.replace(/[_-]+/g,' ').replace(/([a-zа-я])([A-ZА-Я])/g,'$1 $2').replace(/^./,c=>c.toUpperCase());
  }

  fetch(cfg.supabaseURL.replace(/\/$/,'')+'/rest/v1/rpc/site_analytics_dashboard',{method:'POST',headers,body:JSON.stringify({p_days:30})})
    .then(async r=>{const txt=await r.text();let data;try{data=JSON.parse(txt)}catch{data=txt}if(!r.ok)throw new Error(typeof data==='string'?data:(data?.message||'Ошибка'));return data})
    .then(data=>{
      state.hidden=true;dash.hidden=false;
      const set=(id,v)=>document.getElementById(id).textContent=Number(v||0).toLocaleString('ru-RU');
      set('todayVisitors',data.today?.visitors);set('todayViews',data.today?.views);set('weekVisitors',data.last7?.visitors);set('weekViews',data.last7?.views);set('monthVisitors',data.last30?.visitors);set('monthViews',data.last30?.views);
      const daily=data.daily||[],max=Math.max(1,...daily.map(x=>Number(x.views||0)));
      document.getElementById('daily').innerHTML=daily.map(x=>`<div class="row"><div style="flex:1"><b>${formatDay(x.day)}</b><div class="bar"><i style="width:${Math.max(2,Number(x.views||0)/max*100)}%"></i></div></div><div>${x.visitors} посет. / ${x.views} просм.</div></div>`).join('');
      document.getElementById('clicks').innerHTML=(data.topClicks||[]).map(x=>`<div class="row"><span>${esc(labelElement(x.element))}</span><b>${x.count}</b></div>`).join('')||'<div class="muted">Пока нет нажатий</div>';
      document.getElementById('users').innerHTML=(data.recentAuthenticated||[]).map(x=>`<div class="row"><div><b>${esc(x.email||'')}</b><div class="muted">${esc(labelPage(x.page))} · ${esc(labelEvent(x.event))}${x.element?' · '+esc(labelElement(x.element)):''}</div></div><time>${new Date(x.time).toLocaleString('ru-RU')}</time></div>`).join('')||'<div class="muted">Пока нет действий вошедших пользователей.</div>';
    }).catch(err=>fail('Статистика пока недоступна. Если это первая установка аналитики, запусти в Supabase SQL файл <b>supabase/02_site_analytics.sql</b>.<br><br>'+esc(err.message)));

  function formatDay(v){const d=new Date(String(v)+'T00:00:00');return Number.isNaN(d.getTime())?esc(v):d.toLocaleDateString('ru-RU',{day:'2-digit',month:'2-digit',year:'numeric'})}
  function esc(v){return String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]))}
})();
