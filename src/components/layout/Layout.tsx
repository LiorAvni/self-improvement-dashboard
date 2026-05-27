import type React from 'react';
import { NavLink } from 'react-router-dom';
import { useAppState } from '../../context/AppStateContext';

const navItems = [
  { to: '/', label: 'Dashboard' },
  { to: '/tracker', label: 'Tracker' },
  { to: '/workout', label: 'Workout' },
  { to: '/nutrition', label: 'Nutrition' },
  { to: '/info', label: 'Info' },
  { to: '/settings', label: 'Settings' },
];

export function Layout({ children }: { children: React.ReactNode }) {
  const { state } = useAppState();
  return (
    <div className="min-h-screen app-bg">
      <aside className="fixed left-0 top-0 hidden h-full w-72 border-r border-soft app-surface p-5 lg:block">
        <div className="mb-8">
          <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-2xl accent-bg font-bold text-white">6M</div>
          <h1 className="text-xl font-bold text-main">{state.settings.dashboardName}</h1>
          <p className="mt-1 text-sm text-muted">Private local-first tracker</p>
        </div>
        <nav className="space-y-2">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              className={({ isActive }) =>
                `block rounded-2xl px-4 py-3 text-sm font-medium transition ${isActive ? 'accent-soft accent-text' : 'text-muted hover-surface-soft hover:text-main'}`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </aside>

      <div className="lg:pl-72">
        <header className="sticky top-0 z-30 border-b border-soft app-surface backdrop-blur lg:hidden">
          <div className="flex items-center justify-between px-4 py-3">
            <div>
              <p className="text-sm text-muted">Six-Month</p>
              <p className="font-semibold text-main">Dashboard</p>
            </div>
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
