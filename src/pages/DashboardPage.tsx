import { Link } from 'react-router-dom';
import { Card, CardTitle } from '../components/ui/Card';
import { Textarea } from '../components/ui/Input';
import { Button } from '../components/ui/Button';
import { StatCard } from '../components/StatCard';
import { useAppState } from '../context/AppStateContext';
import { activeHabits, bestHabitStreak, categoryCompletionToday, completedDaysInCurrentWeek, completionForDate, monthCompletion, weekCompletion, workoutCountThisWeek } from '../lib/stats';
import { formatLongDate, todayKey } from '../lib/dates';
import { findUpcomingWorkout, workoutPageLinkForCurrentDate } from '../lib/projectSchedule';

export function DashboardPage() {
  const { state, dispatch } = useAppState();
  const today = todayKey();
  const todayStats = completionForDate(state, today);
  const weekStats = weekCompletion(state);
  const monthStats = monthCompletion(state);
  const streak = bestHabitStreak(state);
  const workouts = workoutCountThisWeek(state);
  const perfectDays = completedDaysInCurrentWeek(state);
  const upcomingWorkout = findUpcomingWorkout(state);
  const workoutLink = workoutPageLinkForCurrentDate(state);
  const habits = activeHabits(state);

  const summary = todayStats.percent >= 80
    ? 'Strong day. Keep the finish simple and protect sleep.'
    : todayStats.percent >= 45
      ? 'Good enough progress. Finish one more important habit if possible.'
      : 'No panic. Pick the smallest useful win: phone away, dinner, or one focused block.';

  const completedToday = habits.filter((habit) => state.entries[today]?.habits?.[habit.id]).map((habit) => habit.name);
  const remainingToday = habits.filter((habit) => !state.entries[today]?.habits?.[habit.id]).map((habit) => habit.name);

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

      <div className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
        <Card>
          <CardTitle title="Today at a glance" subtitle="Quick read-only overview. Mark habits on the Tracker page so the calendar remains the source of truth." />
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-3xl app-surface-soft p-4">
              <h3 className="font-semibold text-main">Done today</h3>
              {completedToday.length ? (
                <div className="mt-3 flex flex-wrap gap-2">
                  {completedToday.map((habit) => <span key={habit} className="rounded-full bg-green-100 px-3 py-1 text-sm text-green-700 dark:bg-green-950/40 dark:text-green-200">✓ {habit}</span>)}
                </div>
              ) : <p className="mt-3 text-sm text-muted">Nothing marked yet. Start with the smallest useful win.</p>}
            </div>
            <div className="rounded-3xl app-surface-soft p-4">
              <h3 className="font-semibold text-main">Still open</h3>
              {remainingToday.length ? (
                <div className="mt-3 flex flex-wrap gap-2">
                  {remainingToday.slice(0, 8).map((habit) => <span key={habit} className="rounded-full app-surface px-3 py-1 text-sm text-muted">{habit}</span>)}
                </div>
              ) : <p className="mt-3 text-sm text-muted">All active habits are marked for today.</p>}
            </div>
          </div>
          <Link to="/tracker" className="mt-5 block"><Button variant="secondary">Open tracker</Button></Link>
        </Card>

        <div className="space-y-6">
          <Card>
            <CardTitle title="Upcoming workout" subtitle={upcomingWorkout ? `${upcomingWorkout.isToday ? 'Today' : formatLongDate(upcomingWorkout.date)} · Month ${upcomingWorkout.plan.month}: ${upcomingWorkout.plan.calendarMonth}` : 'No planned workout found in the next weeks'} />
            {upcomingWorkout ? (
              <>
                <h3 className="text-xl font-bold text-main">{upcomingWorkout.workout.name}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{upcomingWorkout.trainingDay.exactTask}</p>
                <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
                  <div className="rounded-2xl app-surface-soft p-3"><span className="text-muted">This week</span><br /><strong>{workouts} workouts</strong></div>
                  <div className="rounded-2xl app-surface-soft p-3"><span className="text-muted">Duration</span><br /><strong>{upcomingWorkout.workout.duration}</strong></div>
                </div>
                <Link to={workoutLink} className="mt-4 block"><Button className="w-full" variant="secondary">Open workout plan</Button></Link>
              </>
            ) : (
              <p className="text-sm text-muted">Open the workout page and review the current month.</p>
            )}
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
