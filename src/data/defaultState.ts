import type { AppState, Habit } from '../types';

export const defaultHabits: Habit[] = [
  {
    id: 'habit-sleep',
    name: '8.5+ hours sleep',
    description: 'Give yourself a real sleep opportunity. For this plan, that means aiming for enough time in bed and an earlier phone-away routine, not chasing perfection.',
    category: 'sleep',
    isDefault: true,
    createdAt: '2026-06-01T00:00:00.000Z',
  },
  {
    id: 'habit-workout',
    name: 'Workout',
    description: 'Complete the planned workout for the day. If the day has no planned workout, leave this empty unless a real make-up workout was done.',
    category: 'training',
    isDefault: true,
    createdAt: '2026-06-01T00:00:00.000Z',
  },
  {
    id: 'habit-movement',
    name: 'Movement',
    description: 'Do at least 5–10 minutes of intentional movement: walking, mobility, posture routine, easy skill practice, or a backup mini-session.',
    category: 'training',
    isDefault: true,
    createdAt: '2026-06-01T00:00:00.000Z',
  },
  {
    id: 'habit-outside',
    name: 'Went outside',
    description: 'Spend time outside, walk to the outdoor garden, meet friends, or get daylight when realistic.',
    category: 'lifestyle',
    isDefault: true,
    createdAt: '2026-06-01T00:00:00.000Z',
  },
  {
    id: 'habit-study',
    name: 'Focused studying',
    description: 'Complete at least one focused study block with the phone away from reach.',
    category: 'study',
    isDefault: true,
    createdAt: '2026-06-01T00:00:00.000Z',
  },
  {
    id: 'habit-no-netflix',
    name: 'No netflix/..',
    description: 'Avoid falling into Netflix/TikTok/Instagram scrolling during the time that should be used for schoolwork, recovery, or sleep.',
    category: 'lifestyle',
    isDefault: true,
    createdAt: '2026-06-01T00:00:00.000Z',
  },
  {
    id: 'habit-nutrition',
    name: 'Good nutrition',
    description: 'Eat consistently enough for growth and training: protein opportunities, real dinner/back-up dinner, water, and familiar carbs.',
    category: 'nutrition',
    isDefault: true,
    createdAt: '2026-06-01T00:00:00.000Z',
  },
  {
    id: 'habit-phone-away',
    name: 'Phone away before bed',
    description: 'No scrolling in bed. Put the phone away from the bed zone before sleep.',
    category: 'sleep',
    isDefault: true,
    createdAt: '2026-06-01T00:00:00.000Z',
  },
];

export function createDefaultState(): AppState {
  const now = new Date().toISOString();
  return {
    schemaVersion: 1,
    createdAt: now,
    updatedAt: now,
    settings: {
      themeMode: 'light',
      accentColor: 'blue',
      dashboardName: 'My 6-Month Dashboard',
      sleepTargetHours: 8.5,
      weekStartsOn: 0,
    },
    habits: defaultHabits,
    entries: {},
    workoutCompletions: {},
    quickNotes: 'Top priorities: train on the planned days, eat a real dinner/back-up dinner, keep the phone out of bed, study with the phone away, and restart fast after imperfect days.',
  };
}
