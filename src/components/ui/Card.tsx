import type React from 'react';
export function Card({ className = '', children }: { className?: string; children: React.ReactNode }) {
  return <section className={`app-surface card-shadow rounded-3xl border border-soft p-5 ${className}`}>{children}</section>;
}

export function CardTitle({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="mb-4">
      <h2 className="text-lg font-semibold text-main">{title}</h2>
      {subtitle ? <p className="mt-1 text-sm text-muted">{subtitle}</p> : null}
    </div>
  );
}
