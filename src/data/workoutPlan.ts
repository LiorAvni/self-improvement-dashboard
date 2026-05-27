export interface ExerciseItem {
  name: string;
  sets: string;
  reps: string;
  rest: string;
  purpose: string;
  cues: string;
  easier: string;
  harder: string;
  stopRule: string;
}

export interface WorkoutTemplate {
  id: string;
  name: string;
  dayHint: string;
  goal: string;
  warmup: string[];
  exercises: ExerciseItem[];
  core: ExerciseItem[];
  cooldown: string[];
}

export interface MonthPhase {
  month: number;
  title: string;
  focus: string;
  weeklyStructure: string;
  progression: string;
  deload: string;
  track: string[];
}

export const monthPhases: MonthPhase[] = [
  {
    month: 1,
    title: 'Foundation and technique',
    focus: 'Learn clean form, build the habit, and avoid doing too much too soon.',
    weeklyStructure: '3 main sessions + optional walking/mobility. Use 25–35 minute sessions.',
    progression: 'Leave 2–3 reps in reserve. Add reps only when form stays clean.',
    deload: 'Week 4 can be 70% volume if school stress or soreness is high.',
    track: ['Workout completed', 'Push-up quality', 'Pull-up quality', 'Sleep routine', 'Phone-away habit'],
  },
  {
    month: 2,
    title: 'Consistency and volume',
    focus: 'Add total quality work for push, pull, legs, core, and posture.',
    weeklyStructure: '3–4 sessions depending on workload. Keep one easy recovery day.',
    progression: 'Add one set to one or two movements per week, not everything at once.',
    deload: 'Every 4th week: keep the schedule but reduce sets by 25–35%.',
    track: ['Weekly completion rate', 'Pull-up total reps', 'Dips/push-ups total reps', 'Dinner consistency'],
  },
  {
    month: 3,
    title: 'Strength progression',
    focus: 'Move toward harder variations while staying safe and balanced.',
    weeklyStructure: 'Upper/pull emphasis, lower/core, upper/push emphasis, optional skill/recovery.',
    progression: 'Progress exercise difficulty before adding lots of extra volume.',
    deload: 'Use an easier variation if joints feel stressed or sleep is poor.',
    track: ['Max clean push-ups', 'Max clean pull-ups', 'Wall sit', 'Plank/side plank', 'Energy'],
  },
  {
    month: 4,
    title: 'Hypertrophy and skill progression',
    focus: 'Use controlled reps, more time under tension, and basic skill prep.',
    weeklyStructure: '4-day option when schedule allows; otherwise 3-day minimum still counts.',
    progression: 'Use slower eccentrics, pauses, and harder leverage gradually.',
    deload: 'One lighter week if motivation or joints feel low.',
    track: ['Workout streaks', 'Skill practice consistency', 'Posture notes', 'Nutrition baseline'],
  },
  {
    month: 5,
    title: 'Higher performance and conditioning',
    focus: 'Improve work capacity without turning the plan into exhausting cardio.',
    weeklyStructure: '3 strength sessions + 1 optional short conditioning/skill day.',
    progression: 'Add density carefully: same work in slightly less time or one extra round.',
    deload: 'Never push conditioning through chest tightness, dizziness, or pain.',
    track: ['Short conditioning quality', 'Walking consistency', 'Sleep', 'Soreness'],
  },
  {
    month: 6,
    title: 'Consolidation, testing, and next-step transition',
    focus: 'Retest safely, keep what worked, and prepare the next 6 months.',
    weeklyStructure: '2 test-focused weeks, one normal week, one easier review week.',
    progression: 'Do not max out daily. Use clean benchmark tests once or twice.',
    deload: 'Final week: reduce volume, review trends, set next-phase goals.',
    track: ['Strength benchmarks', 'Habit trends', 'Sleep trend', 'Food consistency', 'Confidence/energy'],
  },
];

export const workoutTemplates: WorkoutTemplate[] = [
  {
    id: 'upper-pull-posture',
    name: 'Upper Pull + Posture',
    dayHint: 'Best on Sunday, Tuesday, or any day with 25–35 minutes.',
    goal: 'Build back, biceps, posture, grip, and the foundation for a V-shape without overtraining.',
    warmup: ['2 minutes easy walking or marching', '10 shoulder circles each way', '10 scapular pull-up shrugs', '10 arm swings', '20–30 second dead hang if comfortable'],
    exercises: [
      {
        name: 'Pull-ups or chin-ups',
        sets: '3–4',
        reps: '2–5 clean reps',
        rest: '90–150 sec',
        purpose: 'Main vertical pull for back and arm strength.',
        cues: 'Start from control, ribs down, pull elbows toward pockets, stop before form breaks.',
        easier: 'Use smaller sets, negatives, or foot-assisted reps.',
        harder: 'Add reps, slower lowering, or pause at the top.',
        stopRule: 'Stop if shoulders pinch, elbows hurt, or reps become jerky.',
      },
      {
        name: 'Inverted rows at outdoor bar / table row alternative',
        sets: '3',
        reps: '6–12',
        rest: '60–90 sec',
        purpose: 'Horizontal pulling for upper back and posture.',
        cues: 'Keep body straight, squeeze shoulder blades, control the lower.',
        easier: 'Stand more upright or bend knees.',
        harder: 'Lower the bar angle or elevate feet later.',
        stopRule: 'Modify if wrists or shoulders feel uncomfortable.',
      },
      {
        name: 'Backpack reverse fly or 3 kg dumbbell reverse fly',
        sets: '2–3',
        reps: '10–15',
        rest: '45–60 sec',
        purpose: 'Rear delts and upper back for shoulder balance.',
        cues: 'Small controlled movement, no swinging, neck relaxed.',
        easier: 'Use no weight and focus on squeeze.',
        harder: 'Add a pause at the top.',
        stopRule: 'Stop if neck takes over or shoulders pinch.',
      },
    ],
    core: [
      {
        name: 'Hollow hold or dead bug',
        sets: '2–3',
        reps: '20–40 sec',
        rest: '45 sec',
        purpose: 'Core control for calisthenics skills.',
        cues: 'Low back gently controlled, breathe, avoid shaking into bad form.',
        easier: 'Dead bug or one leg extended.',
        harder: 'Longer hollow hold or hollow rocks later.',
        stopRule: 'Regress if lower back arches hard.',
      },
    ],
    cooldown: ['Doorway chest stretch 30 sec each side', 'Child’s pose breathing 45 sec', 'Neck reset: chin tucks x 8 slow reps'],
  },
  {
    id: 'upper-push-core',
    name: 'Upper Push + Core',
    dayHint: 'Good for Monday, Thursday, or an outdoor garden day.',
    goal: 'Build chest, shoulders, triceps, and core while keeping shoulders healthy.',
    warmup: ['Wrist circles 30 sec', 'Scapular push-ups x 10', 'Incline push-ups x 8', 'Arm circles x 10 each way'],
    exercises: [
      {
        name: 'Push-ups',
        sets: '3–4',
        reps: '8–15',
        rest: '60–120 sec',
        purpose: 'Main horizontal push for chest, shoulders, and triceps.',
        cues: 'Body straight, elbows about 30–60 degrees, chest moves as one unit.',
        easier: 'Incline push-ups on a bench.',
        harder: 'Slow lower, pause push-ups, decline push-ups later.',
        stopRule: 'Stop or regress if wrists, shoulders, or lower back hurt.',
      },
      {
        name: 'Bench or parallel bar dips',
        sets: '2–3',
        reps: '5–10',
        rest: '90 sec',
        purpose: 'Triceps/chest strength if shoulders tolerate it well.',
        cues: 'Shoulders down, controlled depth, no bouncing.',
        easier: 'Assisted dips or reduced range.',
        harder: 'More reps or slower lower, not deeper than comfortable.',
        stopRule: 'Stop immediately for shoulder pain, pinching, or sternum discomfort.',
      },
      {
        name: 'Pike push-up prep',
        sets: '2–3',
        reps: '5–10',
        rest: '60–90 sec',
        purpose: 'Shoulder strength for future calisthenics skills.',
        cues: 'Hips high, head moves forward/down, control the range.',
        easier: 'Hands elevated or smaller range.',
        harder: 'Feet elevated later.',
        stopRule: 'Regress if neck or wrists feel strained.',
      },
    ],
    core: [
      {
        name: 'Side plank',
        sets: '2 each side',
        reps: '20–45 sec',
        rest: '30–45 sec',
        purpose: 'Core stability and shoulder control.',
        cues: 'Straight line, hips lifted, neck relaxed.',
        easier: 'Knees down side plank.',
        harder: 'Longer hold or top-leg raise later.',
        stopRule: 'Stop if shoulder pain appears.',
      },
    ],
    cooldown: ['Wrist flexor stretch 20 sec each', 'Chest stretch 30 sec', 'Slow nasal breathing 60 sec'],
  },
  {
    id: 'legs-core-athletic',
    name: 'Legs + Core + Athletic Base',
    dayHint: 'Good midweek or Friday if upper body is tired.',
    goal: 'Build balanced legs, hips, knees, and core so the physique and athletic base are not upper-body only.',
    warmup: ['Bodyweight squat x 10', 'Hip hinges x 10', 'Walking lunges x 6 each leg', 'Ankle rocks x 8 each side'],
    exercises: [
      {
        name: 'Bodyweight squats',
        sets: '3–4',
        reps: '10–20',
        rest: '60–90 sec',
        purpose: 'Main lower-body pattern for quads and general strength.',
        cues: 'Whole foot on ground, knees track toes, chest tall.',
        easier: 'Box squat to a bench.',
        harder: 'Tempo squats, backpack squats, or split squats.',
        stopRule: 'Modify if knees hurt or form collapses.',
      },
      {
        name: 'Reverse lunges',
        sets: '2–3 each leg',
        reps: '6–12',
        rest: '60–90 sec',
        purpose: 'Single-leg strength and balance.',
        cues: 'Step back softly, front foot stable, torso controlled.',
        easier: 'Hold a wall or use shorter range.',
        harder: 'Add backpack or slow tempo.',
        stopRule: 'Stop if sharp knee pain appears.',
      },
      {
        name: 'Glute bridge / single-leg bridge later',
        sets: '3',
        reps: '10–15',
        rest: '45–60 sec',
        purpose: 'Glutes and posterior chain for posture and athleticism.',
        cues: 'Ribs down, squeeze glutes, avoid arching low back.',
        easier: 'Two-leg bridge only.',
        harder: 'Single-leg bridge or feet elevated bridge.',
        stopRule: 'Regress if lower back cramps.',
      },
      {
        name: 'Wall sit',
        sets: '2–3',
        reps: '20–45 sec',
        rest: '60 sec',
        purpose: 'Leg endurance and simple measurable progress.',
        cues: 'Back flat, knees comfortable, breathe.',
        easier: 'Higher position.',
        harder: 'Lower position or longer time.',
        stopRule: 'Stop for knee pain, not just muscle burn.',
      },
    ],
    core: [
      {
        name: 'Plank',
        sets: '2–3',
        reps: '30–75 sec',
        rest: '45 sec',
        purpose: 'General trunk strength.',
        cues: 'Squeeze glutes, ribs down, breathe slowly.',
        easier: 'Shorter holds or elevated plank.',
        harder: 'RKC-style harder plank for shorter time.',
        stopRule: 'Stop if lower back sags or hurts.',
      },
    ],
    cooldown: ['Hip flexor stretch 30 sec each', 'Hamstring stretch 30 sec each', 'Calf stretch 20 sec each'],
  },
  {
    id: 'skill-recovery-conditioning',
    name: 'Skill + Recovery + Light Conditioning',
    dayHint: 'Optional Saturday morning/evening or light day during a busy week.',
    goal: 'Practice calisthenics skills safely while improving conditioning without exhausting recovery.',
    warmup: ['Easy walk 3–5 minutes', 'Wrist prep 60 sec', 'Shoulder circles x 10', 'Scapular push-ups x 8'],
    exercises: [
      {
        name: 'Skill prep circuit: tuck hold, scapular pulls, frog stand prep',
        sets: '3 rounds',
        reps: '10–25 sec each',
        rest: '60 sec',
        purpose: 'Build foundations for front lever/planche-like skills without rushing.',
        cues: 'Stay fresh, smooth reps, no max effort attempts.',
        easier: 'Use easier tucks and shorter holds.',
        harder: 'Add 5 seconds or one round after several easy weeks.',
        stopRule: 'Stop for wrist/shoulder pain, dizziness, or poor control.',
      },
      {
        name: 'Easy conditioning: brisk walk or gentle intervals',
        sets: '1',
        reps: '10–20 min',
        rest: 'As needed',
        purpose: 'Improve base fitness without intense running.',
        cues: 'You should be able to speak in short sentences.',
        easier: 'Walk only.',
        harder: 'Short jog intervals only if no chest tightness.',
        stopRule: 'Stop for chest pain, strong tightness, wheezing, dizziness, or faintness.',
      },
    ],
    core: [
      {
        name: 'Bird dog',
        sets: '2 each side',
        reps: '8–12 slow reps',
        rest: '30 sec',
        purpose: 'Low-back friendly core control.',
        cues: 'Move slowly, keep hips level, reach long.',
        easier: 'Shorter range.',
        harder: 'Pause 2 seconds each rep.',
        stopRule: 'Stop if back discomfort increases.',
      },
    ],
    cooldown: ['Thoracic rotations x 6 each side', 'Wall slides x 8', 'Relaxed breathing 60 sec'],
  },
];

export const progressionRules = [
  'Use clean reps. A rep only counts if form stays controlled.',
  'Most sets should end with about 1–3 reps left in reserve.',
  'Progress only one variable at a time: reps, sets, tempo, or harder variation.',
  'If sleep is poor or school stress is high, use the easier version and keep the habit alive.',
  'Pain, dizziness, unusual chest symptoms, or sharp joint discomfort means stop and modify; involve an adult/doctor if symptoms repeat or feel serious.',
];
