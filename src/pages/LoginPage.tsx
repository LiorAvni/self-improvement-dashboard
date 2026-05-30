import { FormEvent, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { Input } from '../components/ui/Input';

export function LoginPage() {
  const { authenticated, loading, login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  if (authenticated) return <Navigate to="/" replace />;

  async function onSubmit(event: FormEvent) {
    event.preventDefault();
    setError('');
    setSubmitting(true);
    const result = await login(email.trim(), password);
    setSubmitting(false);
    if (!result.ok) setError(result.error ?? 'Could not sign in.');
  }

  return (
    <div className="flex min-h-screen items-center justify-center app-bg px-4 py-10">
      <Card className="w-full max-w-md">
        <div className="mb-6">
          <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl accent-bg text-lg font-bold text-white">6M</div>
          <h1 className="text-2xl font-bold text-main">Private Dashboard</h1>
          <p className="mt-2 text-sm text-muted">Sign in with the Supabase email and password created for this personal dashboard.</p>
        </div>
        <form className="space-y-4" onSubmit={onSubmit}>
          <Input label="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} autoComplete="email" autoFocus />
          <Input label="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} autoComplete="current-password" />
          {error ? <p className="rounded-xl bg-red-50 px-3 py-2 text-sm text-red-700 dark:bg-red-950/40 dark:text-red-200">{error}</p> : null}
          <Button className="w-full" type="submit" disabled={loading || submitting}>{submitting ? 'Signing in...' : 'Enter dashboard'}</Button>
        </form>
        <p className="mt-5 text-xs text-muted">Cloud sync uses Supabase Auth and Row Level Security. Use the same account on every device to see the same data.</p>
      </Card>
    </div>
  );
}
