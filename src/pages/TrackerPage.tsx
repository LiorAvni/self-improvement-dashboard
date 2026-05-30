import { FormEvent, useMemo, useState } from 'react';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { Input } from '../components/ui/Input';
import { useAppState } from '../context/AppStateContext';
import { addDays, formatCompactDate, formatShortDay, getWeekDates, parseDateKey, isFutureDateKey, isPastDateKey, isTodayDateKey, startOfWeek, toDateKey } from '../lib/dates';
import { activeHabits, completionForDates } from '../lib/stats';

function dayHeaderClass(dateKey: string) {
  if (isTodayDateKey(dateKey)) return 'today-header';
  if (isFutureDateKey(dateKey)) return 'future-header';
  return '';
}

export function TrackerPage() {
  const { state, dispatch } = useAppState();
  const [baseDate, setBaseDate] = useState(() => startOfWeek(new Date()));
  const [isAddOpen, setIsAddOpen] = useState(false);
  const [name, setName] = useState('');

  const weekDates = useMemo(() => getWeekDates(baseDate), [baseDate]);
  const weekKeys = weekDates.map(toDateKey);
  const habits = activeHabits(state);
  const weekStats = completionForDates(state, weekKeys);

  function addHabit(event: FormEvent) {
    event.preventDefault();
    const cleanName = name.trim();
    if (!cleanName) return;
    dispatch({ type: 'ADD_HABIT', name: cleanName, description: '', category: 'lifestyle' });
    setName('');
    setIsAddOpen(false);
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
        <div>
          <p className="text-sm font-semibold accent-text">Calendar-style habit tracker</p>
          <h1 className="mt-1 text-3xl font-bold text-main md:text-4xl">Calendar Tracker</h1>
        </div>
        <div className="flex flex-wrap gap-2">
          <Button variant="secondary" onClick={() => setBaseDate(addDays(baseDate, -7))}>← Previous</Button>
          <Button variant="secondary" onClick={() => setBaseDate(startOfWeek(new Date()))}>This week</Button>
          <Button variant="secondary" onClick={() => setBaseDate(addDays(baseDate, 7))}>Next →</Button>
        </div>
      </div>

      <Card>
        <div className="mb-4 flex flex-col justify-between gap-3 md:flex-row md:items-center">
          <Button onClick={() => setIsAddOpen(true)}>+ Add a custom habit/task</Button>
          <div className="flex items-center gap-3">
            <span className="text-sm text-muted">Week progress</span>
            <div className="h-3 w-36 rounded-full app-surface-soft"><div className="h-3 rounded-full accent-bg" style={{ width: `${weekStats.percent}%` }} /></div>
            <span className="text-sm font-semibold accent-text">{weekStats.percent}%</span>
          </div>
        </div>

        <div className="overflow-x-auto rounded-3xl border border-soft tracker-table-wrap">
          <table className="w-full min-w-[720px] border-collapse text-sm">
            <thead>
              <tr className="app-surface-soft">
                <th className="sticky left-0 z-20 w-56 border-r border-soft app-surface-soft px-3 py-3 text-left font-semibold text-main">Habit / task</th>
                {weekDates.map((date) => {
                  const dateKey = toDateKey(date);
                  return (
                    <th key={dateKey} className={`border-r border-soft px-3 py-3 text-center font-semibold text-main last:border-r-0 ${dayHeaderClass(dateKey)}`}>
                      <div>{formatShortDay(date)}</div>
                      <div className="mt-1 text-[11px] font-medium text-muted">{dateKey}</div>
                      {isTodayDateKey(dateKey) ? <div className="mt-1 text-[11px] font-bold accent-text">TODAY</div> : null}
                      {isFutureDateKey(dateKey) ? <div className="mt-1 text-[11px] font-semibold text-muted">LOCKED</div> : null}
                    </th>
                  );
                })}
              </tr>
            </thead>
            <tbody>
              {habits.map((habit) => (
                <tr key={habit.id} className="border-t border-soft">
                  <td className="sticky left-0 z-10 border-r border-soft app-surface px-3 py-3">
                    <div className="flex items-center justify-between gap-3">
                      <span className="font-medium text-main">{habit.name}</span>
                      {!habit.isDefault ? (
                        <button
                          className="focus-ring rounded-full px-2 py-1 text-xs danger-text hover-surface-soft"
                          onClick={() => {
                            if (confirm(`Delete custom habit "${habit.name}"? This removes its tracker data too.`)) {
                              dispatch({ type: 'DELETE_CUSTOM_HABIT', habitId: habit.id });
                            }
                          }}
                        >
                          Delete
                        </button>
                      ) : null}
                    </div>
                  </td>
                  {weekKeys.map((dateKey) => {
                    const done = Boolean(state.entries[dateKey]?.habits?.[habit.id]);
                    const future = isFutureDateKey(dateKey);
                    const todayCell = isTodayDateKey(dateKey);
                    const past = isPastDateKey(dateKey);
                    return (
                      <td key={dateKey} className={`border-r border-soft px-3 py-3 text-center last:border-r-0 ${todayCell ? 'today-cell-bg' : future ? 'future-cell-bg' : ''}`}>
                        <button
                          aria-label={`${future ? 'Future locked' : 'Toggle'} ${habit.name} on ${dateKey}`}
                          title={future ? `You cannot mark ${formatCompactDate(parseDateKey(dateKey))} yet.` : `Toggle ${habit.name}`}
                          disabled={future}
                          onClick={() => dispatch({ type: 'TOGGLE_HABIT_ENTRY', date: dateKey, habitId: habit.id })}
                          className={`tracker-cell mx-auto flex h-10 w-10 items-center justify-center rounded-2xl border text-lg font-bold ${done ? 'border-green-500 bg-green-500 text-white' : future ? 'border-soft app-surface text-muted opacity-50' : past || todayCell ? 'border-soft app-surface-soft text-muted hover:border-[rgb(var(--accent))]' : 'border-soft app-surface-soft text-muted'}`}
                        >
                          {done ? '✓' : future ? '·' : ''}
                        </button>
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      {isAddOpen ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/50 px-4 backdrop-blur-sm" role="dialog" aria-modal="true">
          <div className="w-full max-w-md rounded-[2rem] border border-soft app-surface p-6 shadow-2xl">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 className="text-xl font-bold text-main">Add a custom habit/task</h2>
                <p className="mt-2 text-sm text-muted">Add only the task name. Keep it short so the calendar stays clean.</p>
              </div>
              <button className="focus-ring rounded-full app-surface-soft px-3 py-1 text-muted" onClick={() => setIsAddOpen(false)}>✕</button>
            </div>
            <form className="mt-5 space-y-4" onSubmit={addHabit}>
              <Input label="Habit/task name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Example: Practice piano" autoFocus />
              <div className="flex justify-end gap-2">
                <Button type="button" variant="secondary" onClick={() => setIsAddOpen(false)}>Cancel</Button>
                <Button type="submit">Add</Button>
              </div>
            </form>
          </div>
        </div>
      ) : null}
    </div>
  );
}
