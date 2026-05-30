import { ChangeEvent, useRef, useState } from 'react';
import { Button } from '../components/ui/Button';
import { Card, CardTitle } from '../components/ui/Card';
import { Input, Select } from '../components/ui/Input';
import { useAppState } from '../context/AppStateContext';
import { useAuth } from '../context/AuthContext';
import type { AccentColor, ThemeMode } from '../types';
import { downloadBackup, readBackupFile } from '../lib/storage';

const accents: AccentColor[] = ['blue', 'emerald', 'violet', 'orange', 'slate'];

function statusText(status: string): string {
  switch (status) {
    case 'loading': return 'Loading cloud data...';
    case 'ready': return 'Cloud data loaded.';
    case 'saving': return 'Saving to cloud...';
    case 'saved': return 'Saved to cloud.';
    case 'error': return 'Cloud sync needs attention.';
    case 'signed-out': return 'Signed out.';
    default: return status;
  }
}

export function SettingsPage() {
  const { state, dispatch, cloudStatus, cloudError } = useAppState();
  const { logout, userEmail } = useAuth();
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [message, setMessage] = useState('');

  async function onImport(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    if (!file) return;
    try {
      const imported = await readBackupFile(file);
      if (confirm('Import this backup and replace the current dashboard data? It will also sync to Supabase after import.')) {
        dispatch({ type: 'IMPORT_STATE', state: imported });
        setMessage('Backup imported successfully. It will sync to the cloud automatically.');
      }
    } catch (error) {
      setMessage(error instanceof Error ? error.message : 'Import failed.');
    } finally {
      event.target.value = '';
    }
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-main">Settings</h1>
        <p className="mt-2 max-w-3xl text-muted">Customize appearance, back up your data, and manage cloud-synced tracker settings. Data is saved to Supabase when you are signed in, with a local browser cache as a fallback.</p>
      </div>

      {message ? <div className="rounded-2xl accent-soft px-4 py-3 text-sm accent-text">{message}</div> : null}

      <Card>
        <CardTitle title="Cloud sync" subtitle="Use the same Supabase email/password on every device to see the same tracker data." />
        <div className="grid gap-3 md:grid-cols-3">
          <div className="rounded-2xl app-surface-soft p-4">
            <p className="text-xs uppercase tracking-wide text-muted">Signed in as</p>
            <p className="mt-1 break-all font-semibold text-main">{userEmail || 'Unknown account'}</p>
          </div>
          <div className="rounded-2xl app-surface-soft p-4">
            <p className="text-xs uppercase tracking-wide text-muted">Sync status</p>
            <p className="mt-1 font-semibold text-main">{statusText(cloudStatus)}</p>
          </div>
          <div className="rounded-2xl app-surface-soft p-4">
            <p className="text-xs uppercase tracking-wide text-muted">Storage model</p>
            <p className="mt-1 font-semibold text-main">Supabase + local cache</p>
          </div>
        </div>
        {cloudError ? <p className="mt-4 rounded-xl bg-red-50 px-3 py-2 text-sm text-red-700 dark:bg-red-950/40 dark:text-red-200">{cloudError}</p> : null}
      </Card>

      <Card>
        <CardTitle title="Appearance" subtitle="Default is light mode, with dark mode and accent colors available." />
        <div className="grid gap-4 md:grid-cols-3">
          <Input label="Dashboard name" value={state.settings.dashboardName} onChange={(e) => dispatch({ type: 'UPDATE_SETTINGS', settings: { dashboardName: e.target.value } })} />
          <Select label="Theme" value={state.settings.themeMode} onChange={(e) => dispatch({ type: 'UPDATE_SETTINGS', settings: { themeMode: e.target.value as ThemeMode } })}>
            <option value="light">Light</option>
            <option value="dark">Dark</option>
            <option value="system">System</option>
          </Select>
          <Select label="Accent color" value={state.settings.accentColor} onChange={(e) => dispatch({ type: 'UPDATE_SETTINGS', settings: { accentColor: e.target.value as AccentColor } })}>
            {accents.map((accent) => <option key={accent} value={accent}>{accent}</option>)}
          </Select>
        </div>
      </Card>

      <Card>
        <CardTitle title="Backup and data" subtitle="Cloud sync is the main storage now, but export backups are still useful before big changes." />
        <div className="flex flex-wrap gap-3">
          <Button onClick={() => downloadBackup(state)}>Export JSON backup</Button>
          <Button variant="secondary" onClick={() => fileInputRef.current?.click()}>Import JSON backup</Button>
          <input ref={fileInputRef} type="file" accept="application/json,.json" className="hidden" onChange={onImport} />
          <Button
            variant="danger"
            onClick={() => {
              if (confirm('Reset tracker entries, workout completions, and quick notes? Habits and settings will stay. This change will sync to Supabase.')) {
                dispatch({ type: 'RESET_TRACKING_DATA' });
                setMessage('Tracker data reset. The reset will sync to the cloud automatically.');
              }
            }}
          >
            Reset tracker data
          </Button>
        </div>
      </Card>

      <Card>
        <CardTitle title="Login/privacy" subtitle="This version uses Supabase Auth instead of the old local username/password gate." />
        <div className="space-y-3 text-sm text-muted">
          <p>Only users you create in Supabase Authentication can sign in. Row Level Security on the dashboard_states table is what protects each user’s saved tracker data.</p>
          <p>Keep the Supabase service-role/secret key out of GitHub and out of this app. The browser app should only use the project URL and publishable key.</p>
        </div>
        <Button className="mt-4" variant="secondary" onClick={() => void logout()}>Log out</Button>
      </Card>
    </div>
  );
}
