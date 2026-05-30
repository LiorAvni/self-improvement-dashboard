-- Supabase setup for the self-improvement dashboard.
-- Run this in Supabase SQL Editor after creating your Auth user.

create table if not exists public.dashboard_states (
  user_id uuid primary key references auth.users(id) on delete cascade,
  state jsonb not null default '{}'::jsonb,
  updated_at timestamptz not null default now()
);

alter table public.dashboard_states enable row level security;

drop policy if exists "Users can read their own dashboard state" on public.dashboard_states;
create policy "Users can read their own dashboard state"
on public.dashboard_states
for select
to authenticated
using ((select auth.uid()) = user_id);

drop policy if exists "Users can insert their own dashboard state" on public.dashboard_states;
create policy "Users can insert their own dashboard state"
on public.dashboard_states
for insert
to authenticated
with check ((select auth.uid()) = user_id);

drop policy if exists "Users can update their own dashboard state" on public.dashboard_states;
create policy "Users can update their own dashboard state"
on public.dashboard_states
for update
to authenticated
using ((select auth.uid()) = user_id)
with check ((select auth.uid()) = user_id);

drop policy if exists "Users can delete their own dashboard state" on public.dashboard_states;
create policy "Users can delete their own dashboard state"
on public.dashboard_states
for delete
to authenticated
using ((select auth.uid()) = user_id);
