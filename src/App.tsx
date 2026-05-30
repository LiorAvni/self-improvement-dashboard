import { Navigate, Route, Routes } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { LoginPage } from './pages/LoginPage';
import { DashboardPage } from './pages/DashboardPage';
import { TrackerPage } from './pages/TrackerPage';
import { InfoPage } from './pages/InfoPage';
import { WorkoutPage } from './pages/WorkoutPage';
import { NutritionPage } from './pages/NutritionPage';
import { SettingsPage } from './pages/SettingsPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { useAuth } from './context/AuthContext';
import { useAppState } from './context/AppStateContext';

function LoadingScreen({ label }: { label: string }) {
  return (
    <div className="flex min-h-screen items-center justify-center app-bg px-4">
      <div className="rounded-3xl app-surface p-6 text-center shadow-sm">
        <div className="mx-auto mb-4 h-10 w-10 animate-pulse rounded-2xl accent-bg" />
        <p className="font-semibold text-main">{label}</p>
        <p className="mt-1 text-sm text-muted">Preparing your private dashboard.</p>
      </div>
    </div>
  );
}

function ProtectedApp() {
  const { authenticated, loading } = useAuth();
  const { cloudStatus } = useAppState();

  if (loading) return <LoadingScreen label="Checking login" />;
  if (!authenticated) return <Navigate to="/login" replace />;
  if (cloudStatus === 'loading') return <LoadingScreen label="Loading cloud data" />;

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/tracker" element={<TrackerPage />} />
        <Route path="/info" element={<InfoPage />} />
        <Route path="/workout" element={<WorkoutPage />} />
        <Route path="/nutrition" element={<NutritionPage />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Layout>
  );
}

export function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/*" element={<ProtectedApp />} />
    </Routes>
  );
}
