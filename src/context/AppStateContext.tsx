import type React from 'react';
import { createContext, useContext, useEffect, useMemo, useReducer } from 'react';
import type { AppState, AppStateAction, Habit } from '../types';
import { createDefaultState } from '../data/defaultState';
import { loadState, saveState } from '../lib/storage';
import { isFutureDateKey } from '../lib/dates';

function makeId(prefix: string): string {
  return `${prefix}-${Math.random().toString(36).slice(2, 9)}-${Date.now().toString(36)}`;
}

function touch(state: AppState): AppState {
  return { ...state, updatedAt: new Date().toISOString() };
}

function reducer(state: AppState, action: AppStateAction): AppState {
  switch (action.type) {
    case 'TOGGLE_HABIT_ENTRY': {
      if (isFutureDateKey(action.date)) return state;
      const existing = state.entries[action.date] ?? { habits: {} };
      const current = Boolean(existing.habits[action.habitId]);
      return touch({
        ...state,
        entries: {
          ...state.entries,
          [action.date]: {
            ...existing,
            habits: { ...existing.habits, [action.habitId]: !current },
          },
        },
      });
    }
    case 'SET_DAY_NOTE': {
      const existing = state.entries[action.date] ?? { habits: {} };
      return touch({ ...state, entries: { ...state.entries, [action.date]: { ...existing, note: action.note } } });
    }
    case 'SET_DAY_ENERGY': {
      const existing = state.entries[action.date] ?? { habits: {} };
      return touch({ ...state, entries: { ...state.entries, [action.date]: { ...existing, energy: action.energy } } });
    }
    case 'ADD_HABIT': {
      const habit: Habit = {
        id: makeId('habit'),
        name: action.name.trim(),
        description: action.description?.trim() || '',
        category: action.category ?? 'lifestyle',
        isDefault: false,
        createdAt: new Date().toISOString(),
      };
      return touch({ ...state, habits: [...state.habits, habit] });
    }
    case 'DELETE_CUSTOM_HABIT': {
      const habit = state.habits.find((item) => item.id === action.habitId);
      if (!habit || habit.isDefault) return state;
      const entries = Object.fromEntries(
        Object.entries(state.entries).map(([date, entry]) => {
          const { [action.habitId]: _removed, ...habits } = entry.habits;
          return [date, { ...entry, habits }];
        }),
      );
      return touch({ ...state, habits: state.habits.filter((item) => item.id !== action.habitId), entries });
    }
    case 'UPDATE_SETTINGS':
      return touch({ ...state, settings: { ...state.settings, ...action.settings } });
    case 'SET_QUICK_NOTES':
      return touch({ ...state, quickNotes: action.notes });
    case 'TOGGLE_WORKOUT': {
      const existing = state.workoutCompletions[action.key];
      return touch({
        ...state,
        workoutCompletions: {
          ...state.workoutCompletions,
          [action.key]: {
            completed: !existing?.completed,
            completedAt: !existing?.completed ? new Date().toISOString() : undefined,
          },
        },
      });
    }
    case 'MARK_WORKOUT_COMPLETED': {
      if (isFutureDateKey(action.date)) return state;
      const existingEntry = state.entries[action.date] ?? { habits: {} };
      const key = `${action.date}:${action.workoutId}`;
      return touch({
        ...state,
        entries: {
          ...state.entries,
          [action.date]: {
            ...existingEntry,
            habits: { ...existingEntry.habits, 'habit-workout': true },
          },
        },
        workoutCompletions: {
          ...state.workoutCompletions,
          [key]: { completed: true, completedAt: new Date().toISOString() },
        },
      });
    }
    case 'RESET_TRACKING_DATA':
      return touch({ ...state, entries: {}, workoutCompletions: {}, quickNotes: createDefaultState().quickNotes });
    case 'IMPORT_STATE':
      return touch(action.state);
    default:
      return state;
  }
}

interface AppStateContextValue {
  state: AppState;
  dispatch: React.Dispatch<AppStateAction>;
}

const AppStateContext = createContext<AppStateContextValue | null>(null);

export function AppStateProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(reducer, createDefaultState(), () => loadState());

  useEffect(() => {
    saveState(state);
  }, [state]);

  useEffect(() => {
    const root = document.documentElement;
    const applyTheme = () => {
      const mode = state.settings.themeMode;
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      root.dataset.theme = mode === 'system' ? (prefersDark ? 'dark' : 'light') : mode;
      root.dataset.accent = state.settings.accentColor;
    };
    applyTheme();
    const media = window.matchMedia('(prefers-color-scheme: dark)');
    media.addEventListener('change', applyTheme);
    return () => media.removeEventListener('change', applyTheme);
  }, [state.settings.themeMode, state.settings.accentColor]);

  useEffect(() => {
    const onStorage = (event: StorageEvent) => {
      if (event.key && event.key.includes('six-month-dashboard')) {
        // A full state reload is intentionally not automatic to avoid overwriting in-progress edits.
      }
    };
    window.addEventListener('storage', onStorage);
    return () => window.removeEventListener('storage', onStorage);
  }, []);

  const value = useMemo(() => ({ state, dispatch }), [state]);
  return <AppStateContext.Provider value={value}>{children}</AppStateContext.Provider>;
}

export function useAppState() {
  const ctx = useContext(AppStateContext);
  if (!ctx) throw new Error('useAppState must be used inside AppStateProvider');
  return ctx;
}
