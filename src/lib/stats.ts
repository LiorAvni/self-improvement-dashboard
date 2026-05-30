import type { AppState, Habit } from '../types';
import { addDays, getMonthDateKeys, getWeekDates, isFutureDateKey, parseDateKey, todayKey, toDateKey } from './dates';

export function activeHabits(state: AppState): Habit[] {
  return state.habits.filter((habit) => !habit.archived);
}

export function completionForDate(state: AppState, dateKey: string): { done: number; total: number; percent: number } {
  if (isFutureDateKey(dateKey)) return { done: 0, total: 0, percent: 0 };
  const habits = activeHabits(state);
  const entry = state.entries[dateKey];
  const done = habits.reduce((sum, habit) => sum + (entry?.habits?.[habit.id] ? 1 : 0), 0);
  const total = habits.length;
  return { done, total, percent: total ? Math.round((done / total) * 100) : 0 };
}

export function completionForDates(state: AppState, dateKeys: string[], includeFuture = false): { done: number; total: number; percent: number } {
  const datesToCount = includeFuture ? dateKeys : dateKeys.filter((dateKey) => !isFutureDateKey(dateKey));
  const habits = activeHabits(state);
  const total = habits.length * datesToCount.length;
  const done = datesToCount.reduce((sum, dateKey) => {
    const entry = state.entries[dateKey];
    return sum + habits.reduce((inner, habit) => inner + (entry?.habits?.[habit.id] ? 1 : 0), 0);
  }, 0);
  return { done, total, percent: total ? Math.round((done / total) * 100) : 0 };
}

export function weekCompletion(state: AppState, base = new Date()) {
  return completionForDates(state, getWeekDates(base).map(toDateKey));
}

export function monthCompletion(state: AppState, base = new Date()) {
  return completionForDates(state, getMonthDateKeys(base));
}

export function habitStreak(state: AppState, habitId: string): number {
  let streak = 0;
  let date = parseDateKey(todayKey());
  while (true) {
    const key = toDateKey(date);
    if (state.entries[key]?.habits?.[habitId]) {
      streak += 1;
      date = addDays(date, -1);
    } else {
      break;
    }
  }
  return streak;
}

export function bestHabitStreak(state: AppState): { habitName: string; streak: number } {
  const habits = activeHabits(state);
  const results = habits.map((habit) => ({ habitName: habit.name, streak: habitStreak(state, habit.id) }));
  return results.sort((a, b) => b.streak - a.streak)[0] ?? { habitName: 'No habits yet', streak: 0 };
}

export function workoutCountThisWeek(state: AppState): number {
  const weekKeys = getWeekDates(new Date()).map(toDateKey).filter((key) => !isFutureDateKey(key));
  return weekKeys.filter((key) => Boolean(state.entries[key]?.habits?.['habit-workout'])).length;
}

export function categoryCompletionToday(state: AppState, category: Habit['category']): number {
  const habits = activeHabits(state).filter((habit) => habit.category === category);
  if (!habits.length) return 0;
  const entry = state.entries[todayKey()];
  const done = habits.reduce((sum, habit) => sum + (entry?.habits?.[habit.id] ? 1 : 0), 0);
  return Math.round((done / habits.length) * 100);
}

export function completedDaysInCurrentWeek(state: AppState): number {
  const habits = activeHabits(state);
  if (!habits.length) return 0;
  return getWeekDates(new Date()).map(toDateKey).filter((key) => {
    if (isFutureDateKey(key)) return false;
    const entry = state.entries[key];
    return habits.every((habit) => entry?.habits?.[habit.id]);
  }).length;
}
