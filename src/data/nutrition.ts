export interface MealOption {
  id: string;
  category: 'breakfast' | 'lunch' | 'dinner' | 'snack' | 'preworkout' | 'postworkout';
  title: string;
  foods: string;
  why: string;
  when: string;
  adjust: string;
}

export const nutritionPrinciples = [
  {
    title: 'Consistency before perfection',
    body: 'The first target is not a strict diet. It is eating enough regular meals to support growth, school energy, and training recovery.',
  },
  {
    title: 'Protein in familiar forms',
    body: 'Use foods already accepted: eggs, chicken/schnitzel, fish, hummus, and cheese inside familiar meals if tolerated.',
  },
  {
    title: 'Carbs are useful',
    body: 'Pasta, bread, pita, rice, potatoes, and similar foods support school focus and training. They are not the enemy.',
  },
  {
    title: 'Fruit and vegetable strategy: tiny exposure',
    body: 'Do not force a huge change. Start with cucumber/pickles and consider tiny low-pressure trials of sauces, soups, or blended options later.',
  },
  {
    title: 'No extreme tracking',
    body: 'For a teenager, the app focuses on meal consistency, protein opportunities, hydration, and energy—not calorie obsession.',
  },
];

export const mealOptions: MealOption[] = [
  {
    id: 'breakfast-omelet-bun',
    category: 'breakfast',
    title: 'Omelet + cheese bun',
    foods: 'Bun, omelet, yellow cheese if tolerated, water.',
    why: 'Already familiar, realistic, and contains protein plus carbs for school energy.',
    when: 'Best on school mornings or as the 10:00 school meal.',
    adjust: 'Add one extra egg or a bigger bun if hunger and growth/training demand increase.',
  },
  {
    id: 'breakfast-pita-egg',
    category: 'breakfast',
    title: 'Pita egg toast',
    foods: 'Pita, egg/omelet, light cheese if accepted, cucumber on the side if possible.',
    why: 'Keeps the same flavor profile but makes breakfast easy at home.',
    when: 'Use when there is more time before school or on vacation days.',
    adjust: 'If appetite is low, eat half first and save the rest for later.',
  },
  {
    id: 'lunch-schnitzel-pasta',
    category: 'lunch',
    title: 'Schnitzel + pasta with sauce',
    foods: 'Chicken schnitzel, pasta, tomato-style sauce if accepted, cucumber/pickle optional.',
    why: 'Matches current routine and gives protein + carbs for recovery and afternoon focus.',
    when: 'Main school-day lunch.',
    adjust: 'Add a second small protein piece when training volume increases.',
  },
  {
    id: 'lunch-fish-pita',
    category: 'lunch',
    title: 'Fish + pita / bread + hummus',
    foods: 'Fish, pita or bread, hummus, cucumber/pickle.',
    why: 'Adds variety while staying inside accepted foods.',
    when: 'Good for weekends, home lunches, or lighter dinners.',
    adjust: 'Use more pita/rice/pasta if it follows a workout.',
  },
  {
    id: 'dinner-pita-toast-plus',
    category: 'dinner',
    title: 'Pita toast plus protein',
    foods: 'Pita toast plus egg, tuna/fish, chicken leftovers, or hummus if available.',
    why: 'Turns a current low-effort dinner into a recovery-supporting meal.',
    when: 'Best on busy evenings after school/university.',
    adjust: 'Minimum version: pita toast + water. Better version: add protein.',
  },
  {
    id: 'dinner-leftover-bowl',
    category: 'dinner',
    title: 'Leftover bowl',
    foods: 'Leftover pasta/rice/potatoes + chicken/fish/egg + cucumber or pickles.',
    why: 'Low-effort, family-meal friendly, and useful after workouts.',
    when: 'Use when parents already cooked lunch or dinner ingredients.',
    adjust: 'Make it smaller if eating late, larger after training.',
  },
  {
    id: 'snack-hummus-pita',
    category: 'snack',
    title: 'Hummus + pita snack',
    foods: 'Hummus with pita/bread and water.',
    why: 'Easy calories and some protein from a liked food.',
    when: 'Useful between school and university or before piano/university.',
    adjust: 'Add cucumber/pickle if acceptable.',
  },
  {
    id: 'snack-egg-sandwich',
    category: 'snack',
    title: 'Mini egg sandwich',
    foods: 'Bread/bun/pita with egg or omelet.',
    why: 'A simple protein snack that fits current preferences.',
    when: 'Good on long school days or before evening commitments.',
    adjust: 'Use half-size if appetite is low.',
  },
  {
    id: 'preworkout-simple-carb',
    category: 'preworkout',
    title: 'Simple pre-workout food',
    foods: 'Bread, pita, pasta leftovers, or a small toast 60–120 minutes before training.',
    why: 'Gives energy without forcing new foods.',
    when: 'Use before evening workouts if lunch was early.',
    adjust: 'Keep it smaller if training soon after eating.',
  },
  {
    id: 'postworkout-protein-meal',
    category: 'postworkout',
    title: 'Post-workout normal meal',
    foods: 'Schnitzel/pasta, egg bun, fish + pita, or pita toast with added protein.',
    why: 'Recovery does not require special shakes; a normal meal works.',
    when: 'Use after workouts, especially if dinner might otherwise be skipped.',
    adjust: 'Prioritize protein + carbs; vegetables can stay gradual.',
  },
];

export const exampleDays = [
  {
    title: 'School day with evening workout',
    meals: ['10:00 omelet bun', '13:00–15:30 schnitzel + pasta', '17:00 small pita/hummus if hungry', 'After workout: pita toast + egg or leftover chicken/fish'],
  },
  {
    title: 'Heavy university day',
    meals: ['10:00 familiar breakfast', 'Main lunch before university', 'Quick snack before Zoom', 'Small but real dinner after Zoom'],
  },
  {
    title: 'Weekend / flexible day',
    meals: ['Later breakfast: pita egg toast', 'Family meal or fish/chicken + carbs', 'Snack if walking/training', 'Easy dinner: leftovers or pita toast plus protein'],
  },
];
