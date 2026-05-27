const formatter = new Intl.DateTimeFormat('en-CA', {
  year: 'numeric',
  month: '2-digit',
  day: '2-digit',
});

export function toDateKey(date: Date): string {
  return formatter.format(date);
}

export function todayKey(): string {
  return toDateKey(new Date());
}

export function parseDateKey(key: string): Date {
  const [year, month, day] = key.split('-').map(Number);
  const parsed = new Date(year, month - 1, day);
  parsed.setHours(0, 0, 0, 0);
  return parsed;
}

export function compareDateKeys(a: string, b: string): number {
  return a.localeCompare(b);
}

export function isFutureDateKey(key: string): boolean {
  return compareDateKeys(key, todayKey()) > 0;
}

export function isPastDateKey(key: string): boolean {
  return compareDateKeys(key, todayKey()) < 0;
}

export function isTodayDateKey(key: string): boolean {
  return compareDateKeys(key, todayKey()) === 0;
}

export function addDays(date: Date, days: number): Date {
  const next = new Date(date);
  next.setDate(next.getDate() + days);
  next.setHours(0, 0, 0, 0);
  return next;
}

export function startOfWeek(date: Date): Date {
  const start = new Date(date);
  const day = start.getDay(); // 0 is Sunday
  start.setHours(0, 0, 0, 0);
  start.setDate(start.getDate() - day);
  return start;
}

export function getWeekDates(base: Date): Date[] {
  const start = startOfWeek(base);
  return Array.from({ length: 7 }, (_, i) => addDays(start, i));
}

export function getMonthDateKeys(base: Date): string[] {
  const first = new Date(base.getFullYear(), base.getMonth(), 1);
  const last = new Date(base.getFullYear(), base.getMonth() + 1, 0);
  first.setHours(0, 0, 0, 0);
  last.setHours(0, 0, 0, 0);
  const keys: string[] = [];
  for (let d = new Date(first); d <= last; d = addDays(d, 1)) keys.push(toDateKey(d));
  return keys;
}

export function formatShortDay(date: Date): string {
  return new Intl.DateTimeFormat('en', { weekday: 'short', day: 'numeric' }).format(date);
}

export function formatCompactDate(date: Date): string {
  return new Intl.DateTimeFormat('en', { month: 'short', day: 'numeric' }).format(date);
}

export function formatLongDate(date: Date): string {
  return new Intl.DateTimeFormat('en', { weekday: 'long', month: 'short', day: 'numeric', year: 'numeric' }).format(date);
}

export function formatWeekRange(dates: Date[]): string {
  if (!dates.length) return '';
  const first = dates[0];
  const last = dates[dates.length - 1];
  return `${formatCompactDate(first)} – ${formatCompactDate(last)}`;
}

export function isSameDateKey(date: Date, key: string): boolean {
  return toDateKey(date) === key;
}
