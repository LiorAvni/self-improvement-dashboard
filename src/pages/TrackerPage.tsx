import { FormEvent, useMemo, useState } from 'react';
import { Button } from '../components/ui/Button';
import { Card, CardTitle } from '../components/ui/Card';
import { Input, Select, Textarea } from '../components/ui/Input';
import { useAppState } from '../context/AppStateContext';
import type { HabitCategory } from '../types';
import { addDays, formatShortDay, getWeekDates, startOfWeek, toDateKey } from '../lib/dates';
import { activeHabits, completionForDates } from '../lib/stats';

const categories: HabitCategory[] = ['training', 'sleep', 'nutrition', 'study', 'lifestyle', 'recovery'];

export function TrackerPage() {
  const { state, dispatch } = useAppState();
  const [baseDate, setBaseDate] = useState(() => startOfWeek(new Date()));
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState<HabitCategory>('lifestyle');

  const weekDates = useMemo(() => getWeekDates(baseDate), [baseDate]);
  const weekKeys = weekDates.map(toDateKey);
  const habits = activeHabits(state);
  const weekStats = completionForDates(state, weekKeys);

  function addHabit(event: FormEvent) {
    event.preventDefault();
    if (!name.trim()) return;
    dispatch({ type: 'ADD_HABIT', name, description, category });
    setName('');
    setDescription('');
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col justify-between gap-3 md:flex-row md:items-end">
        <div>
          <h1 className="text-3xl font-bold text-main">Calendar Tracker</h1>
          <p className="mt-2 text-muted">One week at a time. Each day is a column, each habit is a row. Default habits cannot be accidentally deleted.</p>
        </div>
        <div className="flex gap-2">
          <Button variant="secondary" onClick={() => setBaseDate(addDays(baseDate, -7))}>← Previous</Button>
          <Button variant="secondary" onClick={() => setBaseDate(startOfWeek(new Date()))}>This week</Button>
          <Button variant="secondary" onClick={() => setBaseDate(addDays(baseDate, 7))}>Next →</Button>
        </div>
      </div>

      <Card>
        <div className="mb-4 flex flex-col justify-between gap-3 md:flex-row md:items-center">
          <div>
            <h2 className="text-lg font-semibold text-main">Weekly completion: {weekStats.percent}%</h2>
            <p className="text-sm text-muted">{weekStats.done} of {weekStats.total} cells complete this week.</p>
          </div>
          <div className="h-3 rounded-full app-surface-soft md:w-64"><div className="h-3 rounded-full accent-bg" style={{ width: `${weekStats.percent}%` }} /></div>
        </div>
        <div className="overflow-x-auto rounded-2xl border border-soft">
          <table className="w-full min-w-[760px] border-collapse text-sm">
            <thead>
              <tr className="app-surface-soft">
                <th className="sticky left-0 z-10 w-64 border-r border-soft app-surface-soft px-3 py-3 text-left font-semibold text-main">Habit / task</th>
                {weekDates.map((date) => (
                  <th key={toDateKey(date)} className="border-r border-soft px-3 py-3 text-center font-semibold text-main last:border-r-0">{formatShortDay(date)}</th>
                ))}
                <th className="px-3 py-3 text-center font-semibold text-main">Actions</th>
              </tr>
            </thead>
            <tbody>
              {habits.map((habit) => (
                <tr key={habit.id} className="border-t border-soft">
                  <td className="sticky left-0 z-10 border-r border-soft app-surface px-3 py-3">
                    <div className="font-medium text-main">{habit.name}</div>
                    <div className="mt-1 text-xs text-muted">{habit.description}</div>
                    <span className="mt-2 inline-block rounded-full app-surface-soft px-2 py-0.5 text-xs capitalize text-muted">{habit.category}</span>
                  </td>
                  {weekKeys.map((dateKey) => {
                    const done = Boolean(state.entries[dateKey]?.habits?.[habit.id]);
                    return (
                      <td key={dateKey} className="border-r border-soft px-3 py-3 text-center last:border-r-0">
                        <button
                          aria-label={`Toggle ${habit.name} on ${dateKey}`}
                          onClick={() => dispatch({ type: 'TOGGLE_HABIT_ENTRY', date: dateKey, habitId: habit.id })}
                          className={`tracker-cell mx-auto flex h-9 w-9 items-center justify-center rounded-xl border text-lg ${done ? 'border-green-500 bg-green-500 text-white' : 'border-soft app-surface-soft text-muted'}`}
                        >
                          {done ? '✓' : ''}
                        </button>
                      </td>
                    );
                  })}
                  <td className="px-3 py-3 text-center">
                    {habit.isDefault ? (
                      <span className="rounded-full app-surface-soft px-2 py-1 text-xs text-muted">Default</span>
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
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      <Card>
        <CardTitle title="Add a custom habit/task" subtitle="Use this for personal goals, study tasks, social/outdoor goals, or recovery actions." />
        <form className="grid gap-4 md:grid-cols-4" onSubmit={addHabit}>
          <Input label="Habit name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Example: Practice piano" />
          <Select label="Category" value={category} onChange={(e) => setCategory(e.target.value as HabitCategory)}>
            {categories.map((item) => <option key={item} value={item}>{item}</option>)}
          </Select>
          <div className="md:col-span-2"><Textarea label="Description" value={description} onChange={(e) => setDescription(e.target.value)} rows={1} placeholder="What counts as done?" /></div>
          <div className="md:col-span-4"><Button type="submit">Add habit</Button></div>
        </form>
      </Card>
    </div>
  );
}
