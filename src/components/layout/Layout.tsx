import type React from 'react';
import { NavLink } from 'react-router-dom';
import { useAppState } from '../../context/AppStateContext';
import { weekCompletion } from '../../lib/stats';

const navItems = [
  { to: '/', label: 'Dashboard', icon: '◎' },
  { to: '/tracker', label: 'Tracker', icon: '✓' },
  { to: '/workout', label: 'Workout', icon: '◆' },
  { to: '/nutrition', label: 'Nutrition', icon: '●' },
  { to: '/info', label: 'Info', icon: 'i' },
  { to: '/settings', label: 'Settings', icon: '⚙' },
];

export function Layout({ children }: { children: React.ReactNode }) {
  const { state } = useAppState();
  const week = weekCompletion(state);

  return (
    <div className="min-h-screen app-bg">
      <aside className="fixed left-0 top-0 hidden h-full w-72 border-r border-soft app-surface/95 p-5 backdrop-blur lg:block">
        <div className="mb-8">
          <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-2xl accent-bg font-bold text-white shadow-lg">6M</div>
          <h1 className="text-xl font-bold text-main">{state.settings.dashboardName}</h1>
          <p className="mt-1 text-sm text-muted">Private local-first tracker</p>
        </div>

        <div className="mb-6 rounded-3xl app-surface-soft p-4">
          <div className="mb-2 flex justify-between text-sm"><span className="text-main">This week</span><span className="accent-text font-semibold">{week.percent}%</span></div>
          <div className="h-2 rounded-full app-surface"><div className="h-2 rounded-full accent-bg" style={{ width: `${week.percent}%` }} /></div>
          <p className="mt-2 text-xs text-muted">Future days are not counted. Build trends, not perfection.</p>
        </div>

        <nav className="space-y-2">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              className={({ isActive }) =>
                `flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium transition ${isActive ? 'accent-soft accent-text' : 'text-muted hover-surface-soft hover:text-main'}`
              }
            >
              <span className="flex h-7 w-7 items-center justify-center rounded-xl app-surface text-xs font-bold">{item.icon}</span>
              {item.label}
            </NavLink>
          ))}
        </nav>
      </aside>

      <div className="lg:pl-72">
        <header className="sticky top-0 z-30 border-b border-soft app-surface/95 backdrop-blur lg:hidden">
          <div className="flex items-center justify-between px-4 py-3">
            <div>
              <p className="text-sm text-muted">Six-Month</p>
              <p className="font-semibold text-main">Dashboard</p>
            </div>
            <div className="rounded-full accent-soft px-3 py-1 text-xs font-semibold accent-text">{week.percent}% week</div>
          </div>
          <nav className="flex gap-2 overflow-x-auto px-4 pb-3">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === '/'}
                className={({ isActive }) =>
                  `shrink-0 rounded-full px-3 py-1.5 text-sm font-medium ${isActive ? 'accent-bg text-white' : 'app-surface-soft text-muted'}`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </header>
        <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">{children}</main>
      </div>
    </div>
  );
}
