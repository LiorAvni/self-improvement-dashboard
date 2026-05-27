import { useMemo } from 'react';
import { Card, CardTitle } from '../components/ui/Card';
import { Textarea } from '../components/ui/Input';
import { StatCard } from '../components/StatCard';
import { useAppState } from '../context/AppStateContext';
import { workoutTemplates } from '../data/workoutPlan';
import { activeHabits, bestHabitStreak, categoryCompletionToday, completionForDate, monthCompletion, weekCompletion, workoutCountThisWeek } from '../lib/stats';
import { formatLongDate, todayKey } from '../lib/dates';

export function DashboardPage() {
  const { state, dispatch } = useAppState();
  const today = todayKey();
  const todayStats = completionForDate(state, today);
  const weekStats = weekCompletion(state);
  const monthStats = monthCompletion(state);
  const streak = bestHabitStreak(state);
  const workouts = workoutCountThisWeek(state);

  const upcomingWorkout = useMemo(() => {
    const day = new Date().getDay();
    if (day === 0 || day === 2) return workoutTemplates[0];
    if (day === 1 || day === 4) return workoutTemplates[1];
    if (day === 3 || day === 5) return workoutTemplates[2];
    return workoutTemplates[3];
  }, []);

  const habits = activeHabits(state);
  const todayEntry = state.entries[today];

  return (
    <div className="space-y-6">
      <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
        <div>
          <p className="text-sm text-muted">{formatLongDate(new Date())}</p>
          <h1 className="text-3xl font-bold text-main">Dashboard</h1>
          <p className="mt-2 max-w-2xl text-muted">A realistic control center: train consistently, eat enough, sleep earlier, study with less phone distraction, and keep momentum even on busy weeks.</p>
        </div>
        <div className="rounded-2xl accent-soft px-4 py-3 text-sm accent-text">
          Today: <strong>{todayStats.done}/{todayStats.total}</strong> habits complete
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <StatCard label="Today’s progress" value={`${todayStats.percent}%`} detail={`${todayStats.done} of ${todayStats.total} habits done`} tone={todayStats.percent >= 70 ? 'success' : 'neutral'} />
        <StatCard label="Weekly progress" value={`${weekStats.percent}%`} detail={`${weekStats.done} completed cells this week`} />
        <StatCard label="Monthly progress" value={`${monthStats.percent}%`} detail="Trend matters more than one day" />
        <StatCard label="Best current streak" value={`${streak.streak}d`} detail={streak.habitName} tone={streak.streak >= 3 ? 'success' : 'neutral'} />
      </div>

      <div className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
        <Card>
          <CardTitle title="Today’s habit checklist" subtitle="Use this for a fast check-in. More detail is on the Tracker page." />
          <div className="grid gap-3 sm:grid-cols-2">
            {habits.map((habit) => {
              const done = Boolean(todayEntry?.habits?.[habit.id]);
              return (
                <button
                  key={habit.id}
                  onClick={() => dispatch({ type: 'TOGGLE_HABIT_ENTRY', date: today, habitId: habit.id })}
                  className={`tracker-cell rounded-2xl border p-4 text-left ${done ? 'border-green-300 bg-green-50 dark:border-green-900 dark:bg-green-950/30' : 'border-soft app-surface-soft'}`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="font-semibold text-main">{habit.name}</p>
                      <p className="mt-1 text-sm text-muted">{habit.description}</p>
                    </div>
                    <span className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border ${done ? 'border-green-500 bg-green-500 text-white' : 'border-soft app-surface'}`}>{done ? '✓' : ''}</span>
                  </div>
                </button>
              );
            })}
          </div>
        </Card>

        <div className="space-y-6">
          <Card>
            <CardTitle title="Upcoming workout" subtitle={upcomingWorkout.dayHint} />
            <h3 className="text-xl font-bold text-main">{upcomingWorkout.name}</h3>
            <p className="mt-2 text-sm text-muted">{upcomingWorkout.goal}</p>
            <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
              <div className="rounded-2xl app-surface-soft p-3"><span className="text-muted">This week workouts</span><br /><strong>{workouts}</strong></div>
              <div className="rounded-2xl app-surface-soft p-3"><span className="text-muted">Target</span><br /><strong>3–4</strong></div>
            </div>
          </Card>

          <Card>
            <CardTitle title="Life balance today" subtitle="A quick view by category." />
            {(['training', 'study', 'sleep', 'nutrition', 'lifestyle', 'recovery'] as const).map((category) => (
              <div key={category} className="mb-3 last:mb-0">
                <div className="mb-1 flex justify-between text-sm"><span className="capitalize text-main">{category}</span><span className="text-muted">{categoryCompletionToday(state, category)}%</span></div>
                <div className="h-2 rounded-full app-surface-soft"><div className="h-2 rounded-full accent-bg" style={{ width: `${categoryCompletionToday(state, category)}%` }} /></div>
              </div>
            ))}
          </Card>
        </div>
      </div>

      <Card>
        <CardTitle title="Quick notes" subtitle="Use this for simple reminders, not pressure." />
        <Textarea value={state.quickNotes} onChange={(e) => dispatch({ type: 'SET_QUICK_NOTES', notes: e.target.value })} rows={4} />
      </Card>
    </div>
  );
}
