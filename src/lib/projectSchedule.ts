import type { AppState } from '../types';
import { getWorkoutTemplate, monthPlans, type MonthPlan, type MonthTrainingDay } from '../data/workoutPlan';
import { addDays, toDateKey } from './dates';

export const PROJECT_START_DATE = new Date(2026, 5, 1); // June 1, 2026. Month 1 starts in June.

const dayNameFormatter = new Intl.DateTimeFormat('en', { weekday: 'long' });

function atStartOfDay(date: Date): Date {
  const copy = new Date(date);
  copy.setHours(0, 0, 0, 0);
  return copy;
}

export function getProjectMonthNumber(date = new Date()): number {
  const monthNumber = (date.getFullYear() - PROJECT_START_DATE.getFullYear()) * 12 + (date.getMonth() - PROJECT_START_DATE.getMonth()) + 1;
  return Math.min(6, Math.max(1, monthNumber));
}

export function getCurrentMonthPlan(date = new Date()): MonthPlan {
  return monthPlans.find((plan) => plan.month === getProjectMonthNumber(date)) ?? monthPlans[0];
}

export function getDayName(date = new Date()): string {
  return dayNameFormatter.format(date);
}

export function getAllWeeklyDays(plan: MonthPlan): MonthTrainingDay[] {
  return [plan.weeklyDays, ...(plan.weeklyAlternates?.map((alternate) => alternate.weeklyDays) ?? [])].flat();
}

export function getActiveWeeklyDaysForDate(date = new Date()): MonthTrainingDay[] {
  const plan = getCurrentMonthPlan(date);
  const key = toDateKey(date);

  // Month 1 is a real hybrid: June 1–19 is school + old university, then June 20 starts an open-summer block with no school and no university.
  if (plan.month === 1 && key >= '2026-06-20' && plan.weeklyAlternates?.[0]) {
    return plan.weeklyAlternates[0].weeklyDays;
  }

  // Month 2 is also a hybrid: July 1–11 has no school and no university; summer university starts on July 12.
  if (plan.month === 2 && key < '2026-07-12' && plan.weeklyAlternates?.[0]) {
    return plan.weeklyAlternates[0].weeklyDays;
  }

  // Month 4 is a transition: September 1–10 still has summer university; September 11–October 24 has no university.
  if (plan.month === 4 && key <= '2026-09-10' && plan.weeklyAlternates?.[0]) {
    return plan.weeklyAlternates[0].weeklyDays;
  }

  return plan.weeklyDays;
}

export function getTrainingDayForDate(date = new Date()) {
  if (atStartOfDay(date) < atStartOfDay(PROJECT_START_DATE)) return undefined;
  const day = getDayName(date);
  const plan = getCurrentMonthPlan(date);
  const trainingDay = getActiveWeeklyDaysForDate(date).find((item) => item.day === day && item.workoutId);
  const workout = getWorkoutTemplate(trainingDay?.workoutId);
  return workout && trainingDay ? { plan, trainingDay, workout } : undefined;
}

function isWorkoutHabitCompleted(state: AppState, dateKey: string): boolean {
  return Boolean(state.entries[dateKey]?.habits?.['habit-workout']);
}

export function isTodayWorkoutCompleted(state: AppState): boolean {
  return isWorkoutHabitCompleted(state, toDateKey(new Date()));
}

export function findUpcomingWorkout(state: AppState, fromDate = new Date(), maxDays = 21) {
  const start = atStartOfDay(fromDate) < atStartOfDay(PROJECT_START_DATE) ? atStartOfDay(PROJECT_START_DATE) : atStartOfDay(fromDate);

  for (let offset = 0; offset <= maxDays; offset += 1) {
    const date = addDays(start, offset);
    const dateKey = toDateKey(date);
    const training = getTrainingDayForDate(date);
    if (!training) continue;

    // If today has a workout but it is already marked done in the tracker, show the next planned workout.
    if (offset === 0 && isWorkoutHabitCompleted(state, dateKey)) continue;

    return { ...training, date, dateKey, isToday: offset === 0 };
  }

  return undefined;
}

export function workoutPageLinkForCurrentDate(state?: AppState, date = new Date()): string {
  const upcoming = state ? findUpcomingWorkout(state, date) : undefined;
  const month = upcoming?.plan.month ?? getProjectMonthNumber(date);
  const workout = upcoming?.workout.id;
  return workout ? `/workout?month=${month}&workout=${workout}` : `/workout?month=${month}`;
}
