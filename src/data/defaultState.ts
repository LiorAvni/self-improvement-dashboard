import type { AppState, Habit } from '../types';

export const defaultHabits: Habit[] = [
  {
    id: 'habit-workout',
    name: 'Workout / movement',
    description: 'Complete the planned workout, a short backup workout, or at least intentional movement/walking.',
    category: 'training',
    isDefault: true,
    createdAt: '2026-01-01T00:00:00.000Z',
  },
  {
    id: 'habit-study',
    name: 'Focused study block',
    description: 'Do at least one focused school/university block with the phone away from reach.',
    category: 'study',
    isDefault: true,
    createdAt: '2026-01-01T00:00:00.000Z',
  },
  {
    id: 'habit-sleep',
    name: '8+ hours sleep opportunity',
    description: 'Give yourself enough time in bed to realistically get about 8+ hours, especially on school nights.',
    category: 'sleep',
    isDefault: true,
    createdAt: '2026-01-01T00:00:00.000Z',
  },
  {
    id: 'habit-phone-away',
    name: 'Phone away before bed',
    description: 'No scrolling in bed. The phone should be away from the bed zone before sleep.',
    category: 'sleep',
    isDefault: true,
    createdAt: '2026-01-01T00:00:00.000Z',
  },
  {
    id: 'habit-nutrition',
    name: 'Good nutrition baseline',
    description: 'Eat consistently, include protein at meals, and avoid skipping dinner when possible.',
    category: 'nutrition',
    isDefault: true,
    createdAt: '2026-01-01T00:00:00.000Z',
  },
  {
    id: 'habit-protein',
    name: '3 protein opportunities',
    description: 'Hit three familiar protein opportunities: eggs, chicken/schnitzel, fish, hummus, or tolerated cheese.',
    category: 'nutrition',
    isDefault: true,
    createdAt: '2026-01-01T00:00:00.000Z',
  },
  {
    id: 'habit-water',
    name: 'Water bottle routine',
    description: 'Drink water through the day, especially before/after training and during long school days.',
    category: 'recovery',
    isDefault: true,
    createdAt: '2026-01-01T00:00:00.000Z',
  },
  {
    id: 'habit-outside',
    name: 'Went outside / walked',
    description: 'Spend time outdoors, walk, use the outdoor fitness garden, or meet friends when realistic.',
    category: 'lifestyle',
    isDefault: true,
    createdAt: '2026-01-01T00:00:00.000Z',
  },
  {
    id: 'habit-posture',
    name: 'Posture / mobility mini-routine',
    description: 'Do a short shoulder, neck, upper-back, hip, or mobility routine.',
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
    quickNotes: 'Keep it simple: train, eat consistently, sleep earlier, study with the phone away, and restart fast after imperfect days.',
  };
}
