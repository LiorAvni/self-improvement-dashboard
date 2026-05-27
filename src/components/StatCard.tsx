import { Card } from './ui/Card';

export function StatCard({ label, value, detail, tone = 'neutral' }: { label: string; value: string; detail: string; tone?: 'neutral' | 'success' | 'warning' }) {
  const toneClass = tone === 'success' ? 'success-text' : tone === 'warning' ? 'warning-text' : 'accent-text';
  return (
    <Card className="p-4">
      <p className="text-sm text-muted">{label}</p>
      <p className={`mt-2 text-3xl font-bold ${toneClass}`}>{value}</p>
      <p className="mt-2 text-sm text-muted">{detail}</p>
    </Card>
  );
}
