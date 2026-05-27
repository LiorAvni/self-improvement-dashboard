import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardTitle } from '../components/ui/Card';
import { Textarea } from '../components/ui/Input';
import { Button } from '../components/ui/Button';
import { StatCard } from '../components/StatCard';
import { useAppState } from '../context/AppStateContext';
import { workoutTemplates } from '../data/workoutPlan';
import { activeHabits, bestHabitStreak, categoryCompletionToday, completedDaysInCurrentWeek, completionForDate, monthCompletion, weekCompletion, workoutCountThisWeek } from '../lib/stats';
import { formatLongDate, todayKey } from '../lib/dates';

export function DashboardPage() {
  const { state, dispatch } = useAppState();
  const today = todayKey();
  const todayStats = completionForDate(state, today);
  const weekStats = weekCompletion(state);
  const monthStats = monthCompletion(state);
  const streak = bestHabitStreak(state);
  const workouts = workoutCountThisWeek(state);
  const perfectDays = completedDaysInCurrentWeek(state);

  const upcomingWorkout = useMemo(() => {
    const day = new Date().getDay();
    if (day === 1) return workoutTemplates.find((w) => w.id === 'upper-push-core') ?? workoutTemplates[0];
    if (day === 4) return workoutTemplates.find((w) => w.id === 'upper-pull-posture') ?? workoutTemplates[0];
    if (day === 6) return workoutTemplates.find((w) => w.id === 'legs-core-athletic') ?? workoutTemplates[0];
    return workoutTemplates.find((w) => w.id === 'skill-recovery-conditioning') ?? workoutTemplates[0];
  }, []);

  const habits = activeHabits(state);
  const todayEntry = state.entries[today];

  const summary = todayStats.percent >= 80
    ? 'Strong day. Keep the finish simple and protect sleep.'
    : todayStats.percent >= 45
      ? 'Good enough progress. Finish one more important habit if possible.'
      : 'No panic. Pick the smallest useful win: phone away, dinner, or one focused block.';

  return (
    <div className="space-y-6">
      <div className="hero-panel rounded-[2rem] border border-soft app-surface p-6 md:p-8">
        <div className="flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
          <div>
            <p className="text-sm font-semibold accent-text">{formatLongDate(new Date())}</p>
            <h1 className="mt-2 text-3xl font-bold text-main md:text-4xl">Dashboard</h1>
            <p className="mt-3 max-w-3xl text-muted">
              A realistic control center for the 6-month project: train consistently, eat enough, sleep earlier, study with less phone distraction, and keep momentum even when the schedule is heavy.
            </p>
          </div>
          <div className="rounded-3xl accent-soft px-5 py-4 text-sm accent-text lg:w-80">
            <p className="font-semibold">Progress summary</p>
            <p className="mt-1 text-base font-bold">{summary}</p>
          </div>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
        <StatCard label="Today’s progress" value={`${todayStats.percent}%`} detail={`${todayStats.done} of ${todayStats.total} habits done`} tone={todayStats.percent >= 70 ? 'success' : 'neutral'} />
        <StatCard label="Weekly progress" value={`${weekStats.percent}%`} detail={`${weekStats.done} completed cells this week`} />
        <StatCard label="Monthly progress" value={`${monthStats.percent}%`} detail="Trend matters more than one day" />
        <StatCard label="Best current streak" value={`${streak.streak}d`} detail={streak.habitName} tone={streak.streak >= 3 ? 'success' : 'neutral'} />
        <StatCard label="Workouts this week" value={`${workouts}`} detail="Target: 3 main sessions, optional 4th" tone={workouts >= 3 ? 'success' : 'neutral'} />
      </div>

      <div className="grid gap-6 xl:grid-cols-[1.15fr_0.85fr]">
        <Card>
          <CardTitle title="Today’s habit checklist" subtitle="Fast check-in. Today is the only day you can edit here; weekly planning lives on the Tracker page." />
          <div className="grid gap-3 sm:grid-cols-2">
            {habits.map((habit) => {
              const done = Boolean(todayEntry?.habits?.[habit.id]);
              return (
                <button
                  key={habit.id}
                  onClick={() => dispatch({ type: 'TOGGLE_HABIT_ENTRY', date: today, habitId: habit.id })}
                  className={`tracker-cell rounded-3xl border p-4 text-left ${done ? 'border-green-300 bg-green-50 dark:border-green-900 dark:bg-green-950/30' : 'border-soft app-surface-soft'}`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="font-semibold text-main">{habit.name}</p>
                      <p className="mt-1 text-sm leading-5 text-muted">{habit.description}</p>
                    </div>
                    <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-2xl border font-bold ${done ? 'border-green-500 bg-green-500 text-white' : 'border-soft app-surface'}`}>{done ? '✓' : ''}</span>
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
            <p className="mt-2 text-sm leading-6 text-muted">{upcomingWorkout.goal}</p>
            <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
              <div className="rounded-2xl app-surface-soft p-3"><span className="text-muted">This week</span><br /><strong>{workouts} workouts</strong></div>
              <div className="rounded-2xl app-surface-soft p-3"><span className="text-muted">Duration</span><br /><strong>{upcomingWorkout.duration}</strong></div>
            </div>
            <Link to="/workout" className="mt-4 block"><Button className="w-full" variant="secondary">Open workout plan</Button></Link>
          </Card>

          <Card>
            <CardTitle title="Life balance today" subtitle="Completion by category." />
            {(['training', 'study', 'sleep', 'nutrition', 'lifestyle', 'recovery'] as const).map((category) => {
              const percent = categoryCompletionToday(state, category);
              return (
                <div key={category} className="mb-3 last:mb-0">
                  <div className="mb-1 flex justify-between text-sm"><span className="capitalize text-main">{category}</span><span className="text-muted">{percent}%</span></div>
                  <div className="h-2 rounded-full app-surface-soft"><div className="h-2 rounded-full accent-bg" style={{ width: `${percent}%` }} /></div>
                </div>
              );
            })}
          </Card>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <Card>
          <CardTitle title="This week’s practical target" />
          <p className="text-sm leading-6 text-muted">Aim for 3 main workouts, no phone in bed on most nights, one focused study block per day, and a real dinner/protein backup instead of skipping food.</p>
        </Card>
        <Card>
          <CardTitle title="Perfect days are optional" />
          <p className="text-sm leading-6 text-muted">You have {perfectDays} fully completed day{perfectDays === 1 ? '' : 's'} this week. The goal is not perfection; the goal is restarting fast and collecting enough good days.</p>
        </Card>
        <Card>
          <CardTitle title="Best next action" />
          <p className="text-sm leading-6 text-muted">If you feel stuck, do the smallest useful action: 10 push-ups, 10-minute walk, protein snack, phone away, or one 25-minute study block.</p>
        </Card>
      </div>

      <Card>
        <CardTitle title="Quick notes" subtitle="Use this for simple reminders, observations, or next-step ideas. Keep it practical, not self-critical." />
        <Textarea value={state.quickNotes} onChange={(e) => dispatch({ type: 'SET_QUICK_NOTES', notes: e.target.value })} rows={5} />
      </Card>
    </div>
  );
}
