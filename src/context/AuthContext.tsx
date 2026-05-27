import type React from 'react';
import { createContext, useContext, useMemo, useState } from 'react';
import { AUTH_SESSION_KEY, DEFAULT_PASSWORD, DEFAULT_USERNAME } from '../config/auth';

interface AuthContextValue {
  authenticated: boolean;
  login: (username: string, password: string) => boolean;
  logout: () => void;
}

const AuthContext = createContext<AuthContextValue | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [authenticated, setAuthenticated] = useState(() => localStorage.getItem(AUTH_SESSION_KEY) === 'true');

  const value = useMemo<AuthContextValue>(() => ({
    authenticated,
    login: (username, password) => {
      const ok = username === DEFAULT_USERNAME && password === DEFAULT_PASSWORD;
      if (ok) {
        localStorage.setItem(AUTH_SESSION_KEY, 'true');
        setAuthenticated(true);
      }
      return ok;
    },
    logout: () => {
      localStorage.removeItem(AUTH_SESSION_KEY);
      setAuthenticated(false);
    },
  }), [authenticated]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used inside AuthProvider');
  return ctx;
}
