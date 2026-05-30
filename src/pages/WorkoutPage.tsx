import { useEffect, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { Card, CardTitle } from '../components/ui/Card';
import { getWorkoutTemplate, monthPlans, progressionRules, safetyPrinciples } from '../data/workoutPlan';
import { useAppState } from '../context/AppStateContext';
import { formatLongDate, todayKey } from '../lib/dates';
import { getAllWeeklyDays, getCurrentMonthPlan, getProjectMonthNumber, getTrainingDayForDate } from '../lib/projectSchedule';

function priorityClasses(priority: string) {
  if (priority === 'Main') return 'accent-soft accent-text';
  if (priority === 'Optional') return 'bg-amber-50 text-amber-700 dark:bg-amber-950/30 dark:text-amber-200';
  return 'app-surface-soft text-muted';
}

export function WorkoutPage() {
  const { state, dispatch } = useAppState();
  const [searchParams, setSearchParams] = useSearchParams();
  const currentMonth = getProjectMonthNumber();
  const currentPlan = getCurrentMonthPlan();
  const queryMonth = Number(searchParams.get('month'));
  const selectedMonth = Number.isFinite(queryMonth) && queryMonth >= 1 && queryMonth <= 6 ? queryMonth : currentMonth;
  const selectedPlan = monthPlans.find((plan) => plan.month === selectedMonth) ?? monthPlans[0];
  const highlightedWorkout = searchParams.get('workout');
  const todayTraining = getTrainingDayForDate(new Date());
  const today = todayKey();
  const todayWorkoutDone = Boolean(state.entries[today]?.habits?.['habit-workout']);

  const weeklyTables = useMemo(() => [
    { label: `${selectedPlan.calendarMonth} main division`, subtitle: selectedPlan.bestWeeklySplit, weeklyDays: selectedPlan.weeklyDays },
    ...(selectedPlan.weeklyAlternates ?? []),
  ], [selectedPlan]);

  const workoutsInMonth = useMemo(() => {
    const ids = new Set(getAllWeeklyDays(selectedPlan).map((day) => day.workoutId).filter(Boolean));
    return [...ids].map((id) => getWorkoutTemplate(id)).filter(Boolean) as NonNullable<ReturnType<typeof getWorkoutTemplate>>[];
  }, [selectedPlan]);

  useEffect(() => {
    if (!highlightedWorkout) return;
    window.setTimeout(() => {
      document.getElementById(`workout-${highlightedWorkout}`)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 60);
  }, [highlightedWorkout, selectedMonth]);

  function selectMonth(month: number) {
    setSearchParams((prev) => {
      const next = new URLSearchParams(prev);
      next.set('month', String(month));
      next.delete('workout');
      return next;
    });
  }

  function jumpToWorkout(workoutId: string) {
    setSearchParams((prev) => {
      const next = new URLSearchParams(prev);
      next.set('month', String(selectedPlan.month));
      next.set('workout', workoutId);
      return next;
    });
    window.setTimeout(() => document.getElementById(`workout-${workoutId}`)?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 20);
  }

  function markTodayWorkout(workoutId: string) {
    dispatch({ type: 'MARK_WORKOUT_COMPLETED', date: today, workoutId });
  }

  return (
    <div className="space-y-6">
      <div className="hero-panel rounded-[2rem] border border-soft app-surface p-6 md:p-8">
        <div className="flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
          <div>
            <p className="text-sm font-semibold accent-text">Teen-safe calisthenics · no gym · realistic schedule</p>
            <h1 className="mt-2 text-3xl font-bold text-main md:text-4xl">Workout Plan</h1>
            <p className="mt-3 max-w-3xl text-muted">
              A structured 6-month training system based on full-body strength, posture, skill foundations, recovery, and consistency. The month tabs follow the real project calendar: Month 1 is June, Month 2 is July, Month 3 is August, Month 4 is September, Month 5 is October, and Month 6 is November.
            </p>
          </div>
          <div className="rounded-3xl app-surface-soft p-4 text-sm text-muted lg:w-80">
            <p className="font-semibold text-main">Today</p>
            <p>{formatLongDate(new Date())}</p>
            <p className="mt-2">Current phase: <strong className="text-main">Month {currentPlan.month} · {currentPlan.calendarMonth}</strong>.</p>
          </div>
        </div>
      </div>

      <Card>
        <CardTitle title="Choose the month / phase" subtitle="The current month is opened automatically from the project start date, but you can review any phase." />
        <div className="grid gap-2 sm:grid-cols-3 xl:grid-cols-6">
          {monthPlans.map((plan) => (
            <button
              key={plan.month}
              onClick={() => selectMonth(plan.month)}
              className={`focus-ring rounded-2xl border p-3 text-left transition ${plan.month === selectedMonth ? 'border-transparent accent-bg text-white shadow-lg' : 'border-soft app-surface-soft text-main hover-surface-soft'}`}
            >
              <span className="text-xs opacity-80">Month {plan.month} · {plan.calendarMonth}</span>
              <span className="mt-1 block font-semibold leading-tight">{plan.title}</span>
            </button>
          ))}
        </div>
      </Card>

      <Card>
        <div className="grid gap-6 xl:grid-cols-[1.15fr_0.85fr]">
          <div>
            <p className="text-sm font-semibold accent-text">Month {selectedPlan.month} · {selectedPlan.calendarMonth}</p>
            <h2 className="mt-1 text-2xl font-bold text-main md:text-3xl">{selectedPlan.title}</h2>
            <p className="mt-3 text-muted leading-7">{selectedPlan.generalExplanation}</p>
            <div className="mt-5 rounded-3xl app-surface-soft p-5">
              <p className="text-sm font-semibold text-main">Phase goal</p>
              <p className="mt-2 text-muted">{selectedPlan.phaseGoal}</p>
            </div>
          </div>
          <div className="space-y-3">
            <div className="rounded-3xl app-surface-soft p-4">
              <p className="text-sm font-semibold text-main">Best weekly split for your schedule</p>
              <p className="mt-2 text-sm leading-6 text-muted">{selectedPlan.bestWeeklySplit}</p>
            </div>
            <div className="rounded-3xl app-surface-soft p-4">
              <p className="text-sm font-semibold text-main">Expected weekly time</p>
              <p className="mt-2 text-sm leading-6 text-muted">{selectedPlan.expectedWeeklyTime}</p>
            </div>
            <div className="rounded-3xl app-surface-soft p-4">
              <p className="text-sm font-semibold text-main">Intensity rule</p>
              <p className="mt-2 text-sm leading-6 text-muted">{selectedPlan.intensityRule}</p>
            </div>
          </div>
        </div>
      </Card>

      {weeklyTables.map((table) => (
        <Card key={table.label}>
          <CardTitle title={table.label} subtitle={table.subtitle} />
          <div className="overflow-x-auto rounded-3xl border border-soft">
            <table className="w-full min-w-[860px] border-collapse text-sm">
              <thead>
                <tr className="app-surface-soft text-left">
                  <th className="px-4 py-3 font-semibold text-main">Day</th>
                  <th className="px-4 py-3 font-semibold text-main">Priority</th>
                  <th className="px-4 py-3 font-semibold text-main">Best timing</th>
                  <th className="px-4 py-3 font-semibold text-main">Exactly what to do</th>
                  <th className="px-4 py-3 font-semibold text-main">Why this day</th>
                </tr>
              </thead>
              <tbody>
                {table.weeklyDays.map((day) => {
                  const workout = getWorkoutTemplate(day.workoutId);
                  return (
                    <tr key={`${table.label}-${day.day}-${day.workoutId ?? 'none'}`} className="border-t border-soft align-top">
                      <td className="px-4 py-4 font-semibold text-main">{day.day}</td>
                      <td className="px-4 py-4"><span className={`rounded-full px-3 py-1 text-xs font-semibold ${priorityClasses(day.priority)}`}>{day.priority}</span></td>
                      <td className="px-4 py-4 text-muted">{day.timing}</td>
                      <td className="px-4 py-4 text-muted">
                        {workout ? <button type="button" onClick={() => jumpToWorkout(workout.id)} className="mb-1 text-left font-semibold accent-text hover:underline">{workout.name}</button> : null}
                        <p>{day.exactTask}</p>
                      </td>
                      <td className="px-4 py-4 text-muted">{day.whyThisDay}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </Card>
      ))}

      <div className="grid gap-6 lg:grid-cols-3">
        <Card>
          <CardTitle title="Progression" />
          <p className="text-sm leading-6 text-muted">{selectedPlan.progressionRule}</p>
        </Card>
        <Card>
          <CardTitle title="Deload / easier week" />
          <p className="text-sm leading-6 text-muted">{selectedPlan.deloadRule}</p>
        </Card>
        <Card>
          <CardTitle title="Main targets" />
          <ul className="list-disc space-y-1 pl-5 text-sm text-muted">
            {selectedPlan.mainTargets.map((target) => <li key={target}>{target}</li>)}
          </ul>
        </Card>
      </div>

      <Card>
        <CardTitle title="Workout templates used this month" subtitle="Only the workout scheduled for today shows a completion button. Marking it also marks the Workout habit in the calendar tracker." />
        <div className="space-y-5">
          {workoutsInMonth.map((workout) => {
            const isTodaysWorkout = selectedPlan.month === currentPlan.month && todayTraining?.workout.id === workout.id;
            return (
              <article id={`workout-${workout.id}`} key={workout.id} className={`scroll-mt-24 rounded-[1.75rem] border p-5 transition ${highlightedWorkout === workout.id ? 'border-[rgb(var(--accent))] app-surface-soft shadow-xl' : 'border-soft app-surface-soft'}`}>
                <div className="flex flex-col justify-between gap-4 md:flex-row md:items-start">
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="text-xl font-bold text-main">{workout.name}</h3>
                      <span className="rounded-full app-surface px-3 py-1 text-xs text-muted">{workout.duration}</span>
                    </div>
                    <p className="mt-2 max-w-4xl text-sm leading-6 text-muted">{workout.goal}</p>
                    <p className="mt-2 text-xs text-muted">{workout.dayHint}</p>
                  </div>
                  {isTodaysWorkout ? (
                    <Button variant={todayWorkoutDone ? 'secondary' : 'primary'} disabled={todayWorkoutDone} onClick={() => markTodayWorkout(workout.id)}>
                      {todayWorkoutDone ? 'Completed today ✓' : 'Mark completed today'}
                    </Button>
                  ) : null}
                </div>

                <div className="mt-5 grid gap-4 lg:grid-cols-2">
                  <div className="rounded-2xl app-surface p-4">
                    <p className="font-semibold text-main">Warm-up</p>
                    <ol className="mt-2 list-decimal space-y-1 pl-5 text-sm text-muted">
                      {workout.warmup.map((item) => <li key={item}>{item}</li>)}
                    </ol>
                  </div>
                  <div className="rounded-2xl app-surface p-4">
                    <p className="font-semibold text-main">Cooldown</p>
                    <ol className="mt-2 list-decimal space-y-1 pl-5 text-sm text-muted">
                      {workout.cooldown.map((item) => <li key={item}>{item}</li>)}
                    </ol>
                  </div>
                </div>

                <div className="mt-5 space-y-4">
                  {[...workout.exercises, ...workout.core].map((exercise) => (
                    <div key={exercise.name} className="rounded-2xl border border-soft app-surface p-4">
                      <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                        <div>
                          <h4 className="font-bold text-main">{exercise.name}</h4>
                          <p className="mt-1 text-sm text-muted">{exercise.purpose}</p>
                        </div>
                        <div className="grid grid-cols-3 gap-2 text-center text-xs md:min-w-[330px]">
                          <span className="rounded-xl app-surface-soft px-2 py-2"><strong className="block text-main">Sets</strong>{exercise.sets}</span>
                          <span className="rounded-xl app-surface-soft px-2 py-2"><strong className="block text-main">Reps/time</strong>{exercise.reps}</span>
                          <span className="rounded-xl app-surface-soft px-2 py-2"><strong className="block text-main">Rest</strong>{exercise.rest}</span>
                        </div>
                      </div>
                      <div className="mt-4 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
                        <p className="text-sm text-muted"><strong className="text-main">Form cues:</strong> {exercise.cues}</p>
                        <p className="text-sm text-muted"><strong className="text-main">Easier:</strong> {exercise.easier}</p>
                        <p className="text-sm text-muted"><strong className="text-main">Harder:</strong> {exercise.harder}</p>
                        <p className="text-sm text-muted"><strong className="text-main">Stop/modify:</strong> {exercise.stopRule}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </Card>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardTitle title="Tracking focus this month" />
          <div className="flex flex-wrap gap-2">
            {selectedPlan.trackingFocus.map((item) => <span key={item} className="rounded-full app-surface-soft px-3 py-1 text-sm text-muted">{item}</span>)}
          </div>
        </Card>
        <Card>
          <CardTitle title="Safety notes for this month" />
          <ul className="list-disc space-y-2 pl-5 text-sm text-muted">
            {selectedPlan.safetyNotes.map((note) => <li key={note}>{note}</li>)}
          </ul>
        </Card>
      </div>

      <Card>
        <CardTitle title="Rules that apply for all 6 months" subtitle="These keep the plan realistic, safe, and evidence-based for a teenager." />
        <div className="grid gap-4 lg:grid-cols-2">
          <div>
            <h3 className="font-semibold text-main">Progression rules</h3>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-muted">
              {progressionRules.map((rule) => <li key={rule}>{rule}</li>)}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-main">Safety principles</h3>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-muted">
              {safetyPrinciples.map((rule) => <li key={rule}>{rule}</li>)}
            </ul>
          </div>
        </div>
      </Card>
    </div>
  );
}
