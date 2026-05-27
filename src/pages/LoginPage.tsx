import { FormEvent, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { Input } from '../components/ui/Input';

export function LoginPage() {
  const { authenticated, login } = useAuth();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  if (authenticated) return <Navigate to="/" replace />;

  function onSubmit(event: FormEvent) {
    event.preventDefault();
    const ok = login(username.trim(), password);
    if (!ok) setError('Wrong username or password.');
  }

  return (
    <div className="flex min-h-screen items-center justify-center app-bg px-4 py-10">
      <Card className="w-full max-w-md">
        <div className="mb-6">
          <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl accent-bg text-lg font-bold text-white">6M</div>
          <h1 className="text-2xl font-bold text-main">Private Dashboard</h1>
          <p className="mt-2 text-sm text-muted">A simple local gate for personal use. This is not real server-side security.</p>
        </div>
        <form className="space-y-4" onSubmit={onSubmit}>
          <Input label="Username" value={username} onChange={(e) => setUsername(e.target.value)} autoComplete="username" />
          <Input label="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} autoComplete="current-password" autoFocus />
          {error ? <p className="rounded-xl bg-red-50 px-3 py-2 text-sm text-red-700 dark:bg-red-950/40 dark:text-red-200">{error}</p> : null}
          <Button className="w-full" type="submit">Enter dashboard</Button>
        </form>
      </Card>
    </div>
  );
}
