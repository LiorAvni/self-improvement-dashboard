# Six-Month Self-Improvement Dashboard

A private, local-first dashboard for tracking a 6-month self-improvement project: habits, workouts, sleep, study consistency, nutrition consistency, notes, and progress trends.

This project is designed to be simple to edit, free to deploy, and easy to upload to GitHub + Vercel.

## Tech stack

- React
- Vite
- TypeScript
- React Router
- Tailwind CSS via the Vite plugin
- Browser `localStorage` for data persistence
- JSON export/import for backups
- Vercel-compatible static deployment

## What is included

- Dashboard page with today, weekly, and monthly progress stats
- Calendar-style weekly tracker: days as columns and habits as rows
- Automatic current-date highlighting in the tracker
- Future tracker days are locked and cannot be checked early
- Default habits and custom habit creation/deletion
- Expanded workout plan page divided by Month 1 through Month 6
- Each month includes the best weekly split, exact day-by-day workout division, progression rules, deload rules, tracking focus, and safety notes
- Detailed workout templates with warm-up, exercises, sets, reps/time, rest, form cues, regressions, progressions, and stop rules
- Nutrition plan page with realistic meal options based on familiar foods
- General info page with lifestyle, sleep, training, tracking, nutrition, and safety principles
- Settings page for theme, accent color, backup/export/import, reset, and logout
- Simple username/password gate
- Responsive layout for desktop, laptop, tablet, and phone

## Important privacy note

This version is frontend-only. It uses a simple client-side gate for personal use.

Default credentials are stored in:

```txt
src/config/auth.ts
```

Default username:

```txt
john
```

Default password:

```txt
123
```

Change those values before deploying if you want different credentials.

This is **not real backend security**. Anyone who can inspect the source code can find the credentials. For real secure login, you would need a backend/auth service such as Supabase Auth. Version 1 avoids that complexity on purpose.

## How data is stored

User data is saved in the browser using `localStorage` under this key:

```txt
six-month-dashboard:v1
```

This means:

- Data stays after refresh.
- Data is stored only in that browser/device.
- Data does not automatically sync between devices.
- Clearing browser data can delete the dashboard data.
- Private/incognito browsing may clear data when the session ends.

Use **Settings → Export JSON backup** regularly.

## Run locally

Install Node.js first. Then open a terminal in the project folder and run:

```bash
npm install
npm run dev
```

Open the local URL Vite prints, usually:

```txt
http://localhost:5173
```

Login with:

```txt
username: john
password: 123
```

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
5. Do **not** upload `node_modules`, `dist`, `.vercel`, `.env`, or `tsconfig.tsbuildinfo`.
6. This ZIP intentionally does not include `package-lock.json`; Vercel can install from `package.json`.
7. Commit the files.

Your repository should look like this:

```txt
repository/
├── src/
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
5. Use these settings if Vercel asks:

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

6. Deploy.

The included `vercel.json` rewrites all routes to `index.html`, which prevents refresh errors on client-side routes such as `/tracker` or `/settings`.

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

The Settings page allows changing:

- Light / dark / system theme
- Accent color
- Dashboard name

## Safe use notes

This app is a tracker and planning aid. It is not medical advice.

For a teenager:

- Do not use it for extreme dieting.
- Do not use it for rapid weight loss.
- Do not train through pain.
- Stop exercise and involve an adult/doctor for strong chest tightness, chest pain, dizziness, fainting, wheezing, or unusual breathing symptoms.
- Keep nutrition focused on consistency, energy, growth, and recovery.

## Suggested build order for future improvements

1. Use this version for 1–2 weeks.
2. Review which habits are actually useful.
3. Add better charts only after the tracker data is stable.
4. Add IndexedDB only if localStorage becomes too small.
5. Add Supabase only if real login or cross-device sync becomes necessary.
