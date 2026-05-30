# Six-Month Self-Improvement Dashboard

A private, cloud-synced dashboard for tracking a 6-month self-improvement project: habits, workouts, sleep, study consistency, nutrition consistency, notes, and progress trends.

The project is designed for GitHub + Vercel deployment and Supabase cloud storage. Use the same Supabase email/password on every device to see the same data.

## Tech stack

- React
- Vite
- TypeScript
- React Router
- Tailwind CSS via the Vite plugin
- Supabase Auth for email/password login
- Supabase PostgreSQL table with Row Level Security for cloud data
- Browser localStorage as a fallback/cache
- JSON export/import for backups
- Vercel-compatible static deployment

## What is included

- Dashboard page with today, weekly, and monthly progress stats
- Date-aware upcoming workout card that opens the correct month and workout automatically
- Calendar-style weekly tracker: days as columns and habits as rows
- Clean tracker table with no habit descriptions/categories in the grid
- Custom habit/task modal with a dark overlay
- Automatic current-date highlighting in the tracker
- Future tracker days are locked and cannot be checked early
- Default habits and custom habit creation/deletion
- Expanded workout plan page divided by Month 1 through Month 6, with Month 1 = June 2026 and the corrected schedule logic: school until June 20, summer from June 20 through August 31, old university through September 10, and the new university semester starting October 25
- Each month includes the best weekly split, exact day-by-day workout division, progression rules, deload rules, tracking focus, and safety notes
- Workout names in weekly tables jump to the matching workout template
- Today's workout can be marked complete from the workout page, and it syncs with the Workout checkbox in the tracker
- Detailed workout templates with warm-up, exercises, sets, reps/time, rest, form cues, regressions, progressions, and stop rules
- Nutrition plan page with realistic meal options based on familiar foods
- General info page with lifestyle, sleep, training, tracking, nutrition, and safety principles
- Settings page for theme, accent color, cloud sync status, backup/export/import, reset, and logout
- Responsive layout for desktop, laptop, tablet, and phone

## Supabase setup

This app expects a Supabase table called `dashboard_states`.

Run this SQL in Supabase SQL Editor:

```sql
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
```

The same SQL is also included in:

```txt
supabase/dashboard_states.sql
```

## Environment variables

The app needs these variables in Vercel:

```txt
VITE_SUPABASE_URL=https://your-project-id.supabase.co
VITE_SUPABASE_PUBLISHABLE_KEY=your-supabase-publishable-key
```

Use only the Supabase **publishable** key in this frontend app. Never put the service-role key or a secret key in GitHub, Vercel client variables, or browser code.

For local development, copy `.env.example` to `.env.local` and fill in the real values.

## How data is stored

Main storage:

```txt
Supabase table: public.dashboard_states
```

Each user has one row:

```txt
user_id = Supabase Auth user id
state = full dashboard state as JSONB
updated_at = last cloud save time
```

The app also writes a local browser cache under:

```txt
six-month-dashboard:v1
```

This cache helps the app keep a local backup, but Supabase is the main cross-device source of truth after login.

## Run locally

Install Node.js first. Then open a terminal in the project folder and run:

```bash
npm install
cp .env.example .env.local
```

Edit `.env.local` and add your real Supabase values.

Then run:

```bash
npm run dev
```

Open the local URL Vite prints, usually:

```txt
http://localhost:5173
```

Sign in with the Supabase user you created in Authentication → Users.

## Build locally

```bash
npm run build
npm run preview
```

## Upload to GitHub

1. Create a new GitHub repository under your personal GitHub account.
2. Extract this project ZIP.
3. Upload the project files to the repository.
4. Make sure `package.json` is at the top level of the repository.
5. Do **not** upload `node_modules`, `dist`, `.vercel`, `.env`, `.env.local`, `package-lock.json`, or `tsconfig.tsbuildinfo`.
6. Commit the files.

Your repository should look like this:

```txt
repository/
├── src/
├── supabase/
├── index.html
├── package.json
├── tsconfig.json
├── vercel.json
├── vite.config.ts
├── README.md
└── .gitignore
```

It should **not** look like this:

```txt
repository/
└── self-improvement-dashboard/
    ├── package.json
    └── src/
```

## Deploy to Vercel

1. Go to Vercel.
2. Click **New Project**.
3. Import your GitHub repository.
4. Vercel should detect Vite automatically.
5. In Project Settings → Environment Variables, add:

```txt
VITE_SUPABASE_URL
VITE_SUPABASE_PUBLISHABLE_KEY
```

6. Use these settings if Vercel asks:

Build command:

```bash
npm run build
```

Install command:

```bash
npm install
```

Output directory:

```txt
dist
```

7. Deploy or redeploy without build cache.

The included `vercel.json` rewrites all routes to `index.html`, which prevents refresh errors on client-side routes such as `/tracker` or `/settings`.

## Project calendar logic

The app assumes the six-month project starts on **June 1, 2026**:

- Month 1: June 2026
- Month 2: July 2026
- Month 3: August 2026
- Month 4: September 2026
- Month 5: October 2026
- Month 6: November 2026

Corrected schedule assumptions used by the workout logic:

- June 1–19: school schedule.
- June 20–August 31: summer schedule.
- The old summer university schedule continues until September 10.
- School is assumed to restart in September, with exact hours unknown.
- The new university semester is assumed to begin October 25 and continue into January, with probably three evening course blocks.

Date-aware workout navigation and upcoming workout logic are in:

```txt
src/lib/projectSchedule.ts
```

The Workout habit uses this default habit ID:

```txt
habit-workout
```

Marking the scheduled workout complete on the Workout page also marks the Workout checkbox for today in the Calendar Tracker. Marking or unmarking that checkbox in the tracker changes whether the Workout page shows today as completed.

## Customize habits

Default habits are defined in:

```txt
src/data/defaultState.ts
```

You can also add custom habits directly in the Tracker page.

Default habits cannot be deleted from the UI to prevent accidental removal. Custom habits can be deleted.

## Customize workout content

Workout phases, exact weekly divisions, monthly notes, safety rules, and exercise templates are in:

```txt
src/data/workoutPlan.ts
```

## Customize nutrition content

Nutrition principles, meal options, and example days are in:

```txt
src/data/nutrition.ts
```

## Customize general info content

General guidance cards are in:

```txt
src/data/info.ts
```

## Customize colors and themes

Theme variables are in:

```txt
src/styles.css
```

The Settings page allows changing theme mode and accent color without editing code.

## Safety and privacy notes

- Supabase Auth is real authentication, but Row Level Security policies are what protect dashboard data.
- Do not disable RLS on `dashboard_states`.
- Do not use the Supabase service-role key in this app.
- Keep a JSON backup before major edits.
- This is a personal dashboard, not a medical app.
