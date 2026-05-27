import type { AppState, Habit } from '../types';

export const defaultHabits: Habit[] = [
  {
    id: 'habit-workout',
    name: 'Workout / movement',
    description: 'Complete the planned workout, short backup workout, or intentional movement.',
    category: 'training',
    isDefault: true,
    createdAt: '2026-01-01T00:00:00.000Z',
  },
  {
    id: 'habit-study',
    name: 'Focused study block',
    description: 'Do a focused block of school/university work without phone distraction.',
    category: 'study',
    isDefault: true,
    createdAt: '2026-01-01T00:00:00.000Z',
  },
  {
    id: 'habit-sleep',
    name: '8+ hours sleep opportunity',
    description: 'Give yourself enough time in bed to realistically get about 8+ hours.',
    category: 'sleep',
    isDefault: true,
    createdAt: '2026-01-01T00:00:00.000Z',
  },
  {
    id: 'habit-phone-away',
    name: 'Phone away before bed',
    description: 'Move the phone away from bed and reduce late-night scrolling.',
    category: 'sleep',
    isDefault: true,
    createdAt: '2026-01-01T00:00:00.000Z',
  },
  {
    id: 'habit-nutrition',
    name: 'Good nutrition baseline',
    description: 'Eat consistently, include a protein source, and avoid skipping dinner when possible.',
    category: 'nutrition',
    isDefault: true,
    createdAt: '2026-01-01T00:00:00.000Z',
  },
  {
    id: 'habit-outside',
    name: 'Went outside / walked',
    description: 'Spend time outdoors, walk, or meet friends when realistic.',
    category: 'lifestyle',
    isDefault: true,
    createdAt: '2026-01-01T00:00:00.000Z',
  },
  {
    id: 'habit-posture',
    name: 'Posture / mobility mini-routine',
    description: 'Do a short posture, shoulder, or mobility routine.',
    category: 'recovery',
    isDefault: true,
    createdAt: '2026-01-01T00:00:00.000Z',
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
      sleepTargetHours: 8,
      weekStartsOn: 0,
    },
    habits: defaultHabits,
    entries: {},
    workoutCompletions: {},
    quickNotes: 'Keep it simple: train, eat consistently, sleep earlier, study with the phone away.',
  };
}
