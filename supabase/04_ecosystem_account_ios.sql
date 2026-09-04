-- BreakOut Ecosystem — Stage 1: shared account for macOS + iOS + website
-- Run once in the SAME Supabase project already used by BreakOut for macOS.
-- This migration does not change the one-Mac licence rule. iPhone/iPad companion
-- devices are tracked separately and therefore never consume the licensed Mac slot.

begin;

create table if not exists public.companion_devices (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  installation_id text not null,
  name text not null default 'iPhone',
  platform text not null default 'iOS' check (platform in ('iOS','iPadOS')),
  app_version text,
  activated_at timestamptz not null default now(),
  last_seen_at timestamptz not null default now(),
  revoked_at timestamptz,
  unique(user_id, installation_id)
);

create index if not exists companion_devices_user_id_idx
  on public.companion_devices(user_id);

-- A physical mobile installation may belong to only one active BreakOut account.
-- This prevents a signed-in companion from silently hopping between accounts.
create unique index if not exists companion_devices_active_installation_idx
  on public.companion_devices(installation_id)
  where revoked_at is null;

create or replace function public.register_companion_device(
  p_installation_id text,
  p_name text,
  p_platform text,
  p_app_version text
)
returns void
language plpgsql
security definer
set search_path = ''
as $$
declare
  v_uid uuid := auth.uid();
  v_has_access boolean;
  v_other_owner uuid;
begin
  if v_uid is null then raise exception 'Not authenticated'; end if;
  if p_installation_id is null or length(trim(p_installation_id)) < 16 then
    raise exception 'Invalid companion installation id';
  end if;
  if coalesce(trim(p_platform), '') not in ('iOS','iPadOS') then
    raise exception 'Unsupported companion platform';
  end if;

  select (s.status = 'active' and s.expires_at > now())
    into v_has_access
  from public.subscriptions s
  where s.user_id = v_uid
  order by case when s.status = 'active' and s.expires_at > now() then 0 else 1 end,
           s.expires_at desc
  limit 1;

  if coalesce(v_has_access, false) = false then
    raise exception 'No active access';
  end if;

  if exists (
    select 1 from public.companion_devices
    where user_id = v_uid
      and installation_id = trim(p_installation_id)
      and revoked_at is not null
  ) then
    raise exception 'Companion device revoked';
  end if;

  select user_id into v_other_owner
  from public.companion_devices
  where installation_id = trim(p_installation_id)
    and revoked_at is null
  limit 1;

  if v_other_owner is not null and v_other_owner <> v_uid then
    raise exception 'Companion device linked to another account';
  end if;

  update public.companion_devices
     set name = coalesce(nullif(trim(p_name), ''), name),
         platform = trim(p_platform),
         app_version = nullif(trim(coalesce(p_app_version, '')), ''),
         last_seen_at = now()
   where user_id = v_uid
     and installation_id = trim(p_installation_id)
     and revoked_at is null;

  if found then return; end if;

  insert into public.companion_devices(user_id, installation_id, name, platform, app_version)
  values(
    v_uid,
    trim(p_installation_id),
    coalesce(nullif(trim(p_name), ''), case when trim(p_platform) = 'iPadOS' then 'iPad' else 'iPhone' end),
    trim(p_platform),
    nullif(trim(coalesce(p_app_version, '')), '')
  );
end;
$$;

create or replace function public.revoke_companion_device(p_device_id uuid)
returns void
language plpgsql
security definer
set search_path = ''
as $$
begin
  if auth.uid() is null then raise exception 'Not authenticated'; end if;
  update public.companion_devices
     set revoked_at = now()
   where id = p_device_id and user_id = auth.uid();
end;
$$;

alter table public.companion_devices enable row level security;

drop policy if exists "companion_devices_select_own" on public.companion_devices;
create policy "companion_devices_select_own"
  on public.companion_devices
  for select to authenticated
  using ((select auth.uid()) = user_id);

revoke all on public.companion_devices from anon;
revoke insert, update, delete on public.companion_devices from authenticated;
grant select on public.companion_devices to authenticated;
grant execute on function public.register_companion_device(text, text, text, text) to authenticated;
grant execute on function public.revoke_companion_device(uuid) to authenticated;

commit;
