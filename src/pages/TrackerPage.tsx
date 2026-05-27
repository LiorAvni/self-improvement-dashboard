import { FormEvent, useMemo, useState } from 'react';
import { Button } from '../components/ui/Button';
import { Card, CardTitle } from '../components/ui/Card';
import { Input, Select, Textarea } from '../components/ui/Input';
import { useAppState } from '../context/AppStateContext';
import type { HabitCategory } from '../types';
import { addDays, formatCompactDate, formatShortDay, formatWeekRange, getWeekDates, parseDateKey, isFutureDateKey, isPastDateKey, isTodayDateKey, startOfWeek, toDateKey } from '../lib/dates';
import { activeHabits, completionForDates } from '../lib/stats';

const categories: HabitCategory[] = ['training', 'sleep', 'nutrition', 'study', 'lifestyle', 'recovery'];

function dayHeaderClass(dateKey: string) {
  if (isTodayDateKey(dateKey)) return 'today-header';
  if (isFutureDateKey(dateKey)) return 'future-header';
  return '';
}

export function TrackerPage() {
  const { state, dispatch } = useAppState();
  const [baseDate, setBaseDate] = useState(() => startOfWeek(new Date()));
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState<HabitCategory>('lifestyle');

  const weekDates = useMemo(() => getWeekDates(baseDate), [baseDate]);
  const weekKeys = weekDates.map(toDateKey);
  const today = toDateKey(new Date());
  const habits = activeHabits(state);
  const weekStats = completionForDates(state, weekKeys);
  const countedDays = weekKeys.filter((key) => !isFutureDateKey(key)).length;
  const futureDays = weekKeys.filter(isFutureDateKey).length;

  function addHabit(event: FormEvent) {
    event.preventDefault();
    if (!name.trim()) return;
    dispatch({ type: 'ADD_HABIT', name, description, category });
    setName('');
    setDescription('');
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
        <div>
          <p className="text-sm font-semibold accent-text">Calendar-style habit tracker</p>
          <h1 className="mt-1 text-3xl font-bold text-main md:text-4xl">Calendar Tracker</h1>
          <p className="mt-2 max-w-3xl text-muted">
            One week at a time. Each day is a column and each habit is a row. Today is highlighted automatically, and future days are locked so progress stays honest.
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <Button variant="secondary" onClick={() => setBaseDate(addDays(baseDate, -7))}>← Previous</Button>
          <Button variant="secondary" onClick={() => setBaseDate(startOfWeek(new Date()))}>This week</Button>
          <Button variant="secondary" onClick={() => setBaseDate(addDays(baseDate, 7))}>Next →</Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        <Card className="p-4 md:col-span-2">
          <p className="text-sm text-muted">Showing week</p>
          <p className="mt-1 text-2xl font-bold text-main">{formatWeekRange(weekDates)}</p>
          <p className="mt-2 text-sm text-muted">Today is <strong className="text-main">{today}</strong>. Future cells are view-only.</p>
        </Card>
        <Card className="p-4">
          <p className="text-sm text-muted">Weekly progress</p>
          <p className="mt-1 text-2xl font-bold accent-text">{weekStats.percent}%</p>
          <p className="mt-2 text-sm text-muted">{weekStats.done}/{weekStats.total} available cells</p>
        </Card>
        <Card className="p-4">
          <p className="text-sm text-muted">Available days</p>
          <p className="mt-1 text-2xl font-bold text-main">{countedDays}/7</p>
          <p className="mt-2 text-sm text-muted">{futureDays ? `${futureDays} future day${futureDays === 1 ? '' : 's'} locked` : 'No future days in this view'}</p>
        </Card>
      </div>

      <Card>
        <div className="mb-4 flex flex-col justify-between gap-3 md:flex-row md:items-center">
          <div>
            <h2 className="text-lg font-semibold text-main">Week completion: {weekStats.percent}%</h2>
            <p className="text-sm text-muted">Only today and past dates count. Future days do not reduce your score and cannot be checked early.</p>
          </div>
          <div className="h-3 rounded-full app-surface-soft md:w-64"><div className="h-3 rounded-full accent-bg" style={{ width: `${weekStats.percent}%` }} /></div>
        </div>

        <div className="mb-4 flex flex-wrap gap-2 text-xs">
          <span className="rounded-full today-pill px-3 py-1">Today</span>
          <span className="rounded-full app-surface-soft px-3 py-1 text-muted">Past days editable</span>
          <span className="rounded-full future-pill px-3 py-1">Future days locked</span>
        </div>

        <div className="overflow-x-auto rounded-3xl border border-soft tracker-table-wrap">
          <table className="w-full min-w-[860px] border-collapse text-sm">
            <thead>
              <tr className="app-surface-soft">
                <th className="sticky left-0 z-20 w-72 border-r border-soft app-surface-soft px-3 py-3 text-left font-semibold text-main">Habit / task</th>
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
                <th className="px-3 py-3 text-center font-semibold text-main">Actions</th>
              </tr>
            </thead>
            <tbody>
              {habits.map((habit) => {
                const rowDone = weekKeys.filter((dateKey) => !isFutureDateKey(dateKey) && state.entries[dateKey]?.habits?.[habit.id]).length;
                const rowTotal = weekKeys.filter((dateKey) => !isFutureDateKey(dateKey)).length;
                return (
                  <tr key={habit.id} className="border-t border-soft">
                    <td className="sticky left-0 z-10 border-r border-soft app-surface px-3 py-3">
                      <div className="font-medium text-main">{habit.name}</div>
                      <div className="mt-1 text-xs leading-5 text-muted">{habit.description}</div>
                      <div className="mt-2 flex flex-wrap items-center gap-2">
                        <span className="rounded-full app-surface-soft px-2 py-0.5 text-xs capitalize text-muted">{habit.category}</span>
                        <span className="rounded-full app-surface-soft px-2 py-0.5 text-xs text-muted">{rowDone}/{rowTotal || 0} this week</span>
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
                    <td className="px-3 py-3 text-center">
                      {habit.isDefault ? (
                        <span className="rounded-full app-surface-soft px-2 py-1 text-xs text-muted">Protected default</span>
                      ) : (
                        <Button
                          size="sm"
                          variant="danger"
                          onClick={() => {
                            if (confirm(`Delete custom habit "${habit.name}"? This removes its tracker data too.`)) {
                              dispatch({ type: 'DELETE_CUSTOM_HABIT', habitId: habit.id });
                            }
                          }}
                        >
                          Delete
                        </Button>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </Card>

      <Card>
        <CardTitle title="Add a custom habit/task" subtitle="Use this for personal goals, study tasks, social/outdoor goals, recovery actions, or anything that supports the 6-month project." />
        <form className="grid gap-4 md:grid-cols-4" onSubmit={addHabit}>
          <Input label="Habit name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Example: Practice piano" />
          <Select label="Category" value={category} onChange={(e) => setCategory(e.target.value as HabitCategory)}>
            {categories.map((item) => <option key={item} value={item}>{item}</option>)}
          </Select>
          <div className="md:col-span-2"><Textarea label="Description" value={description} onChange={(e) => setDescription(e.target.value)} rows={1} placeholder="What counts as done? Keep it specific and realistic." /></div>
          <div className="md:col-span-4"><Button type="submit">Add habit</Button></div>
        </form>
      </Card>
    </div>
  );
}
