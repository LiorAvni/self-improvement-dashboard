import type { AppState } from '../types';
import { createDefaultState } from '../data/defaultState';
import { supabase } from './supabaseClient';

export const STORAGE_KEY = 'six-month-dashboard:v1';
const DASHBOARD_TABLE = 'dashboard_states';

export function validateImportedState(value: unknown): AppState {
  if (!value || typeof value !== 'object') throw new Error('Backup file is not an object.');
  const maybe = value as Partial<AppState>;
  if (maybe.schemaVersion !== 1) throw new Error('Unsupported or missing schemaVersion.');
  if (!Array.isArray(maybe.habits)) throw new Error('Backup is missing habits.');
  if (!maybe.settings || typeof maybe.settings !== 'object') throw new Error('Backup is missing settings.');
  if (!maybe.entries || typeof maybe.entries !== 'object') throw new Error('Backup is missing entries.');
  return maybe as AppState;
}

export function loadLocalState(): AppState {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return createDefaultState();
    return validateImportedState(JSON.parse(raw));
  } catch (error) {
    console.warn('Could not load saved local dashboard state. Using defaults.', error);
    return createDefaultState();
  }
}

export function saveLocalState(state: AppState): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ ...state, updatedAt: new Date().toISOString() }));
  } catch (error) {
    console.error('Could not save local dashboard state.', error);
  }
}

// Backward-compatible names used by older code.
export const loadState = loadLocalState;
export const saveState = saveLocalState;

export async function loadCloudState(userId: string): Promise<AppState | null> {
  if (!supabase) return null;

  const { data, error } = await supabase
    .from(DASHBOARD_TABLE)
    .select('state')
    .eq('user_id', userId)
    .maybeSingle();

  if (error) throw error;
  if (!data?.state) return null;
  return validateImportedState(data.state);
}

export async function saveCloudState(userId: string, state: AppState): Promise<void> {
  if (!supabase) return;

  const { error } = await supabase
    .from(DASHBOARD_TABLE)
    .upsert(
      {
        user_id: userId,
        state: { ...state, updatedAt: new Date().toISOString() },
        updated_at: new Date().toISOString(),
      },
      { onConflict: 'user_id' },
    );

  if (error) throw error;
}

export function downloadBackup(state: AppState): void {
  const stamp = new Date().toISOString().slice(0, 10);
  const blob = new Blob([JSON.stringify(state, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement('a');
  anchor.href = url;
  anchor.download = `six-month-dashboard-backup-${stamp}.json`;
  document.body.appendChild(anchor);
  anchor.click();
  anchor.remove();
  URL.revokeObjectURL(url);
}

export async function readBackupFile(file: File): Promise<AppState> {
  const text = await file.text();
  return validateImportedState(JSON.parse(text));
}
