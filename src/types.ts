export type ThemeMode = 'light' | 'dark' | 'system';
export type AccentColor = 'blue' | 'emerald' | 'violet' | 'orange' | 'slate';

export type HabitCategory = 'training' | 'sleep' | 'nutrition' | 'study' | 'lifestyle' | 'recovery';

export interface Habit {
  id: string;
  name: string;
  description: string;
  category: HabitCategory;
  isDefault: boolean;
  createdAt: string;
  archived?: boolean;
}

export interface DayEntry {
  habits: Record<string, boolean>;
  note?: string;
  energy?: 1 | 2 | 3 | 4 | 5;
}

export interface WorkoutCompletion {
  completed: boolean;
  note?: string;
  completedAt?: string;
}

export interface Settings {
  themeMode: ThemeMode;
  accentColor: AccentColor;
  dashboardName: string;
  sleepTargetHours: number;
  weekStartsOn: 0;
}

export interface AppState {
  schemaVersion: 1;
  createdAt: string;
  updatedAt: string;
  settings: Settings;
  habits: Habit[];
  entries: Record<string, DayEntry>;
  workoutCompletions: Record<string, WorkoutCompletion>;
  quickNotes: string;
}

export type AppStateAction =
  | { type: 'TOGGLE_HABIT_ENTRY'; date: string; habitId: string }
  | { type: 'SET_DAY_NOTE'; date: string; note: string }
  | { type: 'SET_DAY_ENERGY'; date: string; energy?: DayEntry['energy'] }
  | { type: 'ADD_HABIT'; name: string; description: string; category: HabitCategory }
  | { type: 'DELETE_CUSTOM_HABIT'; habitId: string }
  | { type: 'UPDATE_SETTINGS'; settings: Partial<Settings> }
  | { type: 'SET_QUICK_NOTES'; notes: string }
  | { type: 'TOGGLE_WORKOUT'; key: string }
  | { type: 'RESET_TRACKING_DATA' }
  | { type: 'IMPORT_STATE'; state: AppState };
