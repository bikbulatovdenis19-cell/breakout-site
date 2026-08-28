-- Add the 1-month paid access option to an existing BreakOut database.

alter table public.subscriptions drop constraint if exists subscriptions_plan_check;
alter table public.subscriptions add constraint subscriptions_plan_check check (plan in ('trial','monthly','six_months','annual','complimentary'));

alter table public.payments drop constraint if exists payments_plan_check;
alter table public.payments add constraint payments_plan_check check (plan in ('monthly','six_months','annual'));
