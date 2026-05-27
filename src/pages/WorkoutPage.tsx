import { useState } from 'react';
import { Button } from '../components/ui/Button';
import { Card, CardTitle } from '../components/ui/Card';
import { monthPhases, progressionRules, workoutTemplates } from '../data/workoutPlan';
import { useAppState } from '../context/AppStateContext';
import { todayKey } from '../lib/dates';

export function WorkoutPage() {
  const { state, dispatch } = useAppState();
  const [selectedMonth, setSelectedMonth] = useState(1);
  const selectedPhase = monthPhases.find((phase) => phase.month === selectedMonth) ?? monthPhases[0];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-main">Workout Plan</h1>
        <p className="mt-2 max-w-3xl text-muted">Calisthenics-first, no gym, balanced full-body training. The goal is strength, muscle, posture, energy, and confidence—not extreme training.</p>
      </div>

      <Card>
        <CardTitle title="6-month structure" subtitle="Use the month tabs as phases. If school gets intense, repeat a month rather than forcing progression." />
        <div className="flex gap-2 overflow-x-auto pb-2">
          {monthPhases.map((phase) => (
            <Button key={phase.month} variant={phase.month === selectedMonth ? 'primary' : 'secondary'} onClick={() => setSelectedMonth(phase.month)} className="shrink-0">
              Month {phase.month}
            </Button>
          ))}
        </div>
        <div className="mt-5 rounded-3xl app-surface-soft p-5">
          <h2 className="text-2xl font-bold text-main">Month {selectedPhase.month}: {selectedPhase.title}</h2>
          <p className="mt-2 text-muted">{selectedPhase.focus}</p>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            <div><p className="text-sm font-semibold text-main">Weekly structure</p><p className="mt-1 text-sm text-muted">{selectedPhase.weeklyStructure}</p></div>
            <div><p className="text-sm font-semibold text-main">Progression</p><p className="mt-1 text-sm text-muted">{selectedPhase.progression}</p></div>
            <div><p className="text-sm font-semibold text-main">Deload/easier week</p><p className="mt-1 text-sm text-muted">{selectedPhase.deload}</p></div>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            {selectedPhase.track.map((item) => <span key={item} className="rounded-full app-surface px-3 py-1 text-xs text-muted">Track: {item}</span>)}
          </div>
        </div>
      </Card>

      <Card>
        <CardTitle title="Weekly schedule template" subtitle="Pick the 3-day version on heavy weeks. Add the optional day only if recovery, school, and sleep are okay." />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          <div className="rounded-2xl app-surface-soft p-4"><strong>Day 1</strong><p className="mt-1 text-sm text-muted">Upper Pull + Posture</p></div>
          <div className="rounded-2xl app-surface-soft p-4"><strong>Day 2</strong><p className="mt-1 text-sm text-muted">Upper Push + Core</p></div>
          <div className="rounded-2xl app-surface-soft p-4"><strong>Day 3</strong><p className="mt-1 text-sm text-muted">Legs + Core + Athletic Base</p></div>
          <div className="rounded-2xl app-surface-soft p-4"><strong>Optional Day 4</strong><p className="mt-1 text-sm text-muted">Skill + Recovery + Light Conditioning</p></div>
        </div>
      </Card>

      <div className="grid gap-6">
        {workoutTemplates.map((workout) => {
          const key = `${todayKey()}:${workout.id}`;
          const completed = Boolean(state.workoutCompletions[key]?.completed);
          return (
            <Card key={workout.id}>
              <div className="mb-4 flex flex-col justify-between gap-3 md:flex-row md:items-start">
                <div>
                  <h2 className="text-2xl font-bold text-main">{workout.name}</h2>
                  <p className="mt-1 text-sm text-muted">{workout.dayHint}</p>
                  <p className="mt-3 max-w-3xl text-muted">{workout.goal}</p>
                </div>
                <Button variant={completed ? 'secondary' : 'primary'} onClick={() => dispatch({ type: 'TOGGLE_WORKOUT', key })}>{completed ? 'Completed today ✓' : 'Mark done today'}</Button>
              </div>

              <div className="mb-5 rounded-2xl app-surface-soft p-4">
                <p className="font-semibold text-main">Warm-up</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-muted">{workout.warmup.map((item) => <li key={item}>{item}</li>)}</ul>
              </div>

              <div className="overflow-x-auto rounded-2xl border border-soft">
                <table className="w-full min-w-[900px] text-left text-sm">
                  <thead className="app-surface-soft">
                    <tr>
                      <th className="px-3 py-3">Exercise</th>
                      <th className="px-3 py-3">Sets</th>
                      <th className="px-3 py-3">Reps/time</th>
                      <th className="px-3 py-3">Rest</th>
                      <th className="px-3 py-3">Purpose / cues</th>
                      <th className="px-3 py-3">Modify</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[...workout.exercises, ...workout.core].map((exercise) => (
                      <tr key={exercise.name} className="border-t border-soft align-top">
                        <td className="px-3 py-3 font-semibold text-main">{exercise.name}</td>
                        <td className="px-3 py-3 text-muted">{exercise.sets}</td>
                        <td className="px-3 py-3 text-muted">{exercise.reps}</td>
                        <td className="px-3 py-3 text-muted">{exercise.rest}</td>
                        <td className="px-3 py-3 text-muted"><strong className="text-main">{exercise.purpose}</strong><br />{exercise.cues}</td>
                        <td className="px-3 py-3 text-muted"><strong>Easier:</strong> {exercise.easier}<br /><strong>Harder:</strong> {exercise.harder}<br /><strong>Stop:</strong> {exercise.stopRule}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="mt-5 rounded-2xl app-surface-soft p-4">
                <p className="font-semibold text-main">Cooldown</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-muted">{workout.cooldown.map((item) => <li key={item}>{item}</li>)}</ul>
              </div>
            </Card>
          );
        })}
      </div>

      <Card>
        <CardTitle title="Progression rules" subtitle="These are the guardrails that keep the plan productive and safe." />
        <ul className="grid gap-3 md:grid-cols-2">
          {progressionRules.map((rule) => <li key={rule} className="rounded-2xl app-surface-soft p-4 text-sm text-muted">{rule}</li>)}
        </ul>
      </Card>
    </div>
  );
}
