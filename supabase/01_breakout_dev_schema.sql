-- BreakOut Dev — Supabase schema
-- Run this ONCE in Supabase Dashboard -> SQL Editor -> New query -> Run.
-- This DEV schema automatically gives each new account 30 days of complimentary
-- access so website <-> Mac integration can be tested before YooKassa exists.
-- Remove the complimentary insert in handle_new_user() before commercial launch.

create extension if not exists pgcrypto;

create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  email text not null,
  display_name text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.subscriptions (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  plan text not null check (plan in ('trial','monthly','six_months','annual','complimentary')),
  status text not null default 'active' check (status in ('active','payment_issue','revoked','expired')),
  starts_at timestamptz not null default now(),
  expires_at timestamptz not null,
  max_devices integer not null default 2 check (max_devices between 1 and 20),
  source text not null default 'manual',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists subscriptions_user_id_idx on public.subscriptions(user_id);
create index if not exists subscriptions_user_expiry_idx on public.subscriptions(user_id, expires_at desc);

create table if not exists public.devices (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  installation_id text not null,
  name text not null default 'Mac',
  platform text not null default 'macOS',
  activated_at timestamptz not null default now(),
  last_seen_at timestamptz not null default now(),
  revoked_at timestamptz,
  unique(user_id, installation_id)
);

create index if not exists devices_user_id_idx on public.devices(user_id);

create table if not exists public.payments (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  provider text not null default 'yookassa',
  provider_payment_id text,
  plan text check (plan in ('monthly','six_months','annual')),
  amount_minor bigint,
  currency text not null default 'RUB',
  status text not null default 'pending',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique(provider, provider_payment_id)
);

-- New Auth users get a profile and a 30-day DEV entitlement.
create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = ''
as $$
begin
  insert into public.profiles(id, email)
  values(new.id, coalesce(new.email, ''))
  on conflict (id) do update set email = excluded.email, updated_at = now();

  if not exists (select 1 from public.subscriptions where user_id = new.id) then
    insert into public.subscriptions(user_id, plan, status, starts_at, expires_at, max_devices, source)
    values(new.id, 'complimentary', 'active', now(), now() + interval '30 days', 2, 'dev_signup_30d');
  end if;
  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
after insert on auth.users
for each row execute procedure public.handle_new_user();

-- Backfill any users that were created before this SQL was installed.
insert into public.profiles(id, email)
select id, coalesce(email, '') from auth.users
on conflict (id) do update set email = excluded.email, updated_at = now();

insert into public.subscriptions(user_id, plan, status, starts_at, expires_at, max_devices, source)
select u.id, 'complimentary', 'active', now(), now() + interval '30 days', 2, 'dev_backfill_30d'
from auth.users u
where not exists (select 1 from public.subscriptions s where s.user_id = u.id);

-- Client-visible account summary. The authenticated user can only receive their
-- own row because auth.uid() is used inside the function.
create or replace function public.current_access()
returns table (
  user_id uuid,
  email text,
  subscription_id uuid,
  plan text,
  status text,
  starts_at timestamptz,
  expires_at timestamptz,
  max_devices integer,
  active_devices integer,
  server_time timestamptz
)
language plpgsql
stable
security definer
set search_path = ''
as $$
declare
  v_uid uuid := auth.uid();
  v_sub public.subscriptions%rowtype;
begin
  if v_uid is null then
    raise exception 'Not authenticated';
  end if;

  select s.* into v_sub
  from public.subscriptions s
  where s.user_id = v_uid
  order by
    case when s.status = 'active' and s.expires_at > now() then 0 else 1 end,
    s.expires_at desc
  limit 1;

  return query
  select
    v_uid,
    coalesce(auth.jwt() ->> 'email', ''),
    v_sub.id,
    v_sub.plan,
    case
      when v_sub.id is null then 'expired'
      when v_sub.status = 'active' and v_sub.expires_at <= now() then 'expired'
      else v_sub.status
    end,
    v_sub.starts_at,
    coalesce(v_sub.expires_at, now() - interval '1 second'),
    coalesce(v_sub.max_devices, 0),
    (select count(*)::integer from public.devices d where d.user_id = v_uid and d.revoked_at is null),
    now();
end;
$$;

-- Register/update the current Mac. Device limits are enforced here, on the
-- database side, rather than trusting the website or app.
create or replace function public.register_device(
  p_installation_id text,
  p_name text,
  p_platform text
)
returns void
language plpgsql
security definer
set search_path = ''
as $$
declare
  v_uid uuid := auth.uid();
  v_limit integer;
  v_count integer;
  v_has_access boolean;
begin
  if v_uid is null then
    raise exception 'Not authenticated';
  end if;

  select s.max_devices,
         (s.status = 'active' and s.expires_at > now())
    into v_limit, v_has_access
  from public.subscriptions s
  where s.user_id = v_uid
  order by
    case when s.status = 'active' and s.expires_at > now() then 0 else 1 end,
    s.expires_at desc
  limit 1;

  if coalesce(v_has_access, false) = false then
    raise exception 'No active access';
  end if;

  -- Existing current device does not consume another slot. A device that
  -- was explicitly revoked in the account portal is not allowed to silently
  -- reactivate itself using a still-cached session.
  if exists (
    select 1 from public.devices
    where user_id = v_uid and installation_id = p_installation_id and revoked_at is not null
  ) then
    raise exception 'Device revoked';
  end if;

  update public.devices
     set name = coalesce(nullif(trim(p_name), ''), name),
         platform = coalesce(nullif(trim(p_platform), ''), platform),
         last_seen_at = now()
   where user_id = v_uid and installation_id = p_installation_id and revoked_at is null;

  if found then
    return;
  end if;

  select count(*)::integer into v_count
  from public.devices
  where user_id = v_uid and revoked_at is null;

  if v_count >= coalesce(v_limit, 0) then
    raise exception 'Device limit reached';
  end if;

  insert into public.devices(user_id, installation_id, name, platform)
  values(
    v_uid,
    p_installation_id,
    coalesce(nullif(trim(p_name), ''), 'Mac'),
    coalesce(nullif(trim(p_platform), ''), 'macOS')
  );
end;
$$;

create or replace function public.revoke_device(p_device_id uuid)
returns void
language plpgsql
security definer
set search_path = ''
as $$
begin
  if auth.uid() is null then raise exception 'Not authenticated'; end if;
  update public.devices
     set revoked_at = now()
   where id = p_device_id and user_id = auth.uid();
end;
$$;

-- RLS: publishable keys are safe only when data policies are in place.
alter table public.profiles enable row level security;
alter table public.subscriptions enable row level security;
alter table public.devices enable row level security;
alter table public.payments enable row level security;

-- Re-running the schema remains safe.
drop policy if exists "profiles_select_own" on public.profiles;
create policy "profiles_select_own" on public.profiles for select to authenticated using ((select auth.uid()) = id);

drop policy if exists "profiles_update_own" on public.profiles;
create policy "profiles_update_own" on public.profiles for update to authenticated using ((select auth.uid()) = id) with check ((select auth.uid()) = id);

drop policy if exists "subscriptions_select_own" on public.subscriptions;
create policy "subscriptions_select_own" on public.subscriptions for select to authenticated using ((select auth.uid()) = user_id);

drop policy if exists "devices_select_own" on public.devices;
create policy "devices_select_own" on public.devices for select to authenticated using ((select auth.uid()) = user_id);

-- No client write policies for subscriptions/payments/devices. Writes happen
-- through security-definer RPCs now and, later, trusted payment/backend code.
revoke all on public.subscriptions from anon;
revoke insert, update, delete on public.subscriptions from authenticated;
revoke all on public.payments from anon, authenticated;
revoke insert, update, delete on public.devices from anon, authenticated;

grant select on public.profiles, public.subscriptions, public.devices to authenticated;
grant update(display_name, updated_at) on public.profiles to authenticated;
grant execute on function public.current_access() to authenticated;
grant execute on function public.register_device(text, text, text) to authenticated;
grant execute on function public.revoke_device(uuid) to authenticated;
