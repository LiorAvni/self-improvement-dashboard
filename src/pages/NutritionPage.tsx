import { useMemo, useState } from 'react';
import { Card, CardTitle } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { exampleDays, mealOptions, nutritionPrinciples } from '../data/nutrition';

type MealCategory = 'all' | 'breakfast' | 'lunch' | 'dinner' | 'snack' | 'preworkout' | 'postworkout';
const filters: MealCategory[] = ['all', 'breakfast', 'lunch', 'dinner', 'snack', 'preworkout', 'postworkout'];

export function NutritionPage() {
  const [filter, setFilter] = useState<MealCategory>('all');
  const meals = useMemo(() => filter === 'all' ? mealOptions : mealOptions.filter((meal) => meal.category === filter), [filter]);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-main">Nutrition Plan</h1>
        <p className="mt-2 max-w-3xl text-muted">A flexible meal system based on familiar foods. No calorie-counting, no aggressive bulking/cutting, and no forcing a perfect diet.</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
        {nutritionPrinciples.map((item) => (
          <Card key={item.title} className="p-4">
            <h2 className="font-semibold text-main">{item.title}</h2>
            <p className="mt-2 text-sm text-muted">{item.body}</p>
          </Card>
        ))}
      </div>

      <Card>
        <CardTitle title="Meal options" subtitle="Choose realistic meals. The best plan is the one that actually happens during school/university weeks." />
        <div className="mb-5 flex gap-2 overflow-x-auto pb-1">
          {filters.map((item) => (
            <Button key={item} variant={filter === item ? 'primary' : 'secondary'} size="sm" onClick={() => setFilter(item)} className="shrink-0 capitalize">{item.replace('workout', '-workout')}</Button>
          ))}
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {meals.map((meal) => (
            <div key={meal.id} className="rounded-3xl border border-soft app-surface-soft p-5">
              <div className="mb-2 flex items-center justify-between gap-3">
                <h3 className="text-lg font-bold text-main">{meal.title}</h3>
                <span className="rounded-full app-surface px-2 py-1 text-xs capitalize text-muted">{meal.category}</span>
              </div>
              <p className="text-sm text-main"><strong>Foods:</strong> {meal.foods}</p>
              <p className="mt-3 text-sm text-muted"><strong>Why it fits:</strong> {meal.why}</p>
              <p className="mt-2 text-sm text-muted"><strong>When to use:</strong> {meal.when}</p>
              <p className="mt-2 text-sm text-muted"><strong>Adjust:</strong> {meal.adjust}</p>
            </div>
          ))}
        </div>
      </Card>

      <Card>
        <CardTitle title="Example full days" subtitle="Use these as patterns, not strict rules." />
        <div className="grid gap-4 md:grid-cols-3">
          {exampleDays.map((day) => (
            <div key={day.title} className="rounded-2xl app-surface-soft p-4">
              <h3 className="font-semibold text-main">{day.title}</h3>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-muted">
                {day.meals.map((meal) => <li key={meal}>{meal}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </Card>

      <Card>
        <CardTitle title="Family-meal and busy-day rules" />
        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl app-surface-soft p-4"><strong>Minimum dinner</strong><p className="mt-2 text-sm text-muted">If a full dinner feels too much, eat a small familiar option with protein: pita toast + egg, hummus + pita, or leftovers.</p></div>
          <div className="rounded-2xl app-surface-soft p-4"><strong>Protein opportunity</strong><p className="mt-2 text-sm text-muted">Aim to include an accepted protein source in main meals: egg, chicken/schnitzel, fish, hummus, or tolerated cheese.</p></div>
          <div className="rounded-2xl app-surface-soft p-4"><strong>Fruit/veg exposure</strong><p className="mt-2 text-sm text-muted">Start with cucumber/pickles. Later, test tiny additions only if they are low-pressure and not forced.</p></div>
        </div>
      </Card>
    </div>
  );
}
