-- BreakOut website analytics — run once after 01_breakout_dev_schema.sql.
-- Records page views and interface clicks without attempting to identify anonymous people.
-- Signed-in visitors can be associated with their existing BreakOut account.

create table if not exists public.site_events (
  id bigint generated always as identity primary key,
  occurred_at timestamptz not null default now(),
  visitor_id uuid not null,
  user_id uuid references auth.users(id) on delete set null,
  event_name text not null,
  page_path text not null,
  element text,
  language text,
  referrer text,
  viewport_width integer,
  device_type text,
  metadata jsonb not null default '{}'::jsonb
);

create index if not exists site_events_occurred_at_idx on public.site_events(occurred_at desc);
create index if not exists site_events_visitor_idx on public.site_events(visitor_id, occurred_at desc);
create index if not exists site_events_event_idx on public.site_events(event_name, occurred_at desc);
create index if not exists site_events_user_idx on public.site_events(user_id, occurred_at desc);

create table if not exists public.site_analytics_admins (
  email text primary key,
  created_at timestamptz not null default now()
);
insert into public.site_analytics_admins(email)
values ('denbikbulatov@yandex.com')
on conflict (email) do nothing;

alter table public.site_events enable row level security;
alter table public.site_analytics_admins enable row level security;
revoke all on public.site_events from anon, authenticated;
revoke all on public.site_analytics_admins from anon, authenticated;

create or replace function public.record_site_event(
  p_visitor_id uuid,
  p_event_name text,
  p_page_path text,
  p_element text default null,
  p_language text default null,
  p_referrer text default null,
  p_viewport_width integer default null,
  p_device_type text default null,
  p_metadata jsonb default '{}'::jsonb
)
returns void
language plpgsql
security definer
set search_path = ''
as $$
begin
  if p_visitor_id is null or length(coalesce(p_event_name,'')) = 0 then return; end if;
  insert into public.site_events(visitor_id,user_id,event_name,page_path,element,language,referrer,viewport_width,device_type,metadata)
  values(
    p_visitor_id,
    auth.uid(),
    left(p_event_name,80),
    left(coalesce(p_page_path,'/'),300),
    left(p_element,160),
    left(p_language,24),
    left(p_referrer,500),
    p_viewport_width,
    left(p_device_type,24),
    coalesce(p_metadata,'{}'::jsonb)
  );
end;
$$;

grant execute on function public.record_site_event(uuid,text,text,text,text,text,integer,text,jsonb) to anon, authenticated;

create or replace function public.site_analytics_dashboard(p_days integer default 30)
returns jsonb
language plpgsql
stable
security definer
set search_path = ''
as $$
declare
  v_email text := lower(coalesce(auth.jwt() ->> 'email',''));
  v_days integer := greatest(1,least(coalesce(p_days,30),365));
  v_result jsonb;
begin
  if auth.uid() is null or not exists(select 1 from public.site_analytics_admins a where lower(a.email)=v_email) then
    raise exception 'Not authorized for site analytics';
  end if;

  select jsonb_build_object(
    'today', jsonb_build_object(
      'views', (select count(*) from public.site_events where event_name='page_view' and occurred_at >= date_trunc('day',now())),
      'visitors', (select count(distinct visitor_id) from public.site_events where event_name='page_view' and occurred_at >= date_trunc('day',now()))
    ),
    'last7', jsonb_build_object(
      'views', (select count(*) from public.site_events where event_name='page_view' and occurred_at >= now()-interval '7 days'),
      'visitors', (select count(distinct visitor_id) from public.site_events where event_name='page_view' and occurred_at >= now()-interval '7 days')
    ),
    'last30', jsonb_build_object(
      'views', (select count(*) from public.site_events where event_name='page_view' and occurred_at >= now()-interval '30 days'),
      'visitors', (select count(distinct visitor_id) from public.site_events where event_name='page_view' and occurred_at >= now()-interval '30 days')
    ),
    'daily', coalesce((select jsonb_agg(x order by x->>'day') from (
      select jsonb_build_object('day',to_char(d::date,'YYYY-MM-DD'),'views',count(e.id),'visitors',count(distinct e.visitor_id)) x
      from generate_series((current_date-(v_days-1)),current_date,interval '1 day') d
      left join public.site_events e on e.event_name='page_view' and e.occurred_at>=d and e.occurred_at<d+interval '1 day'
      group by d
    ) q),'[]'::jsonb),
    'topClicks', coalesce((select jsonb_agg(x) from (
      select jsonb_build_object('element',coalesce(element,'(без названия)'),'count',count(*)) x
      from public.site_events where event_name='click' and occurred_at>=now()-(v_days||' days')::interval
      group by element order by count(*) desc limit 12
    ) q),'[]'::jsonb),
    'recentAuthenticated', coalesce((select jsonb_agg(x) from (
      select jsonb_build_object('time',e.occurred_at,'email',p.email,'event',e.event_name,'element',e.element,'page',e.page_path) x
      from public.site_events e join public.profiles p on p.id=e.user_id
      where e.user_id is not null order by e.occurred_at desc limit 25
    ) q),'[]'::jsonb)
  ) into v_result;
  return v_result;
end;
$$;

grant execute on function public.site_analytics_dashboard(integer) to authenticated;
