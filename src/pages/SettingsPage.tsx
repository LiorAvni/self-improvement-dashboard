import { ChangeEvent, useRef, useState } from 'react';
import { Button } from '../components/ui/Button';
import { Card, CardTitle } from '../components/ui/Card';
import { Input, Select } from '../components/ui/Input';
import { useAppState } from '../context/AppStateContext';
import { useAuth } from '../context/AuthContext';
import type { AccentColor, ThemeMode } from '../types';
import { downloadBackup, readBackupFile } from '../lib/storage';

const accents: AccentColor[] = ['blue', 'emerald', 'violet', 'orange', 'slate'];

export function SettingsPage() {
  const { state, dispatch } = useAppState();
  const { logout } = useAuth();
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [message, setMessage] = useState('');

  async function onImport(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    if (!file) return;
    try {
      const imported = await readBackupFile(file);
      if (confirm('Import this backup and replace current local dashboard data?')) {
        dispatch({ type: 'IMPORT_STATE', state: imported });
        setMessage('Backup imported successfully.');
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
        <p className="mt-2 max-w-3xl text-muted">Customize appearance, backup your data, and manage the local tracker. Data is saved in this browser with localStorage.</p>
      </div>

      {message ? <div className="rounded-2xl accent-soft px-4 py-3 text-sm accent-text">{message}</div> : null}

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
        <CardTitle title="Backup and data" subtitle="Export regularly. Browser storage can be cleared by browser settings, private browsing, or device changes." />
        <div className="flex flex-wrap gap-3">
          <Button onClick={() => downloadBackup(state)}>Export JSON backup</Button>
          <Button variant="secondary" onClick={() => fileInputRef.current?.click()}>Import JSON backup</Button>
          <input ref={fileInputRef} type="file" accept="application/json,.json" className="hidden" onChange={onImport} />
          <Button
            variant="danger"
            onClick={() => {
              if (confirm('Reset tracker entries, workout completions, and quick notes? Habits and settings will stay.')) {
                dispatch({ type: 'RESET_TRACKING_DATA' });
                setMessage('Tracker data reset.');
              }
            }}
          >
            Reset tracker data
          </Button>
        </div>
      </Card>

      <Card>
        <CardTitle title="Login/privacy" subtitle="Version 1 uses a simple client-side gate only." />
        <div className="space-y-3 text-sm text-muted">
          <p>The default username is <strong className="text-main">john</strong> and the default password is <strong className="text-main">123</strong>.</p>
          <p>Change them in <code className="rounded app-surface-soft px-1 py-0.5">src/config/auth.ts</code>. This is not real secure authentication because the app is frontend-only and the code can be inspected.</p>
          <p>For real multi-device private login later, add a backend such as Supabase Auth. Version 1 intentionally avoids that complexity.</p>
        </div>
        <Button className="mt-4" variant="secondary" onClick={logout}>Log out</Button>
      </Card>
    </div>
  );
}
