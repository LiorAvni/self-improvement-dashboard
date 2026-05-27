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
  duration: string;
  goal: string;
  warmup: string[];
  exercises: ExerciseItem[];
  core: ExerciseItem[];
  cooldown: string[];
}

export interface MonthTrainingDay {
  day: string;
  priority: 'Main' | 'Optional' | 'Recovery';
  workoutId?: string;
  timing: string;
  exactTask: string;
  whyThisDay: string;
}

export interface MonthPlan {
  month: number;
  title: string;
  phaseGoal: string;
  generalExplanation: string;
  bestWeeklySplit: string;
  expectedWeeklyTime: string;
  intensityRule: string;
  progressionRule: string;
  deloadRule: string;
  mainTargets: string[];
  weeklyDays: MonthTrainingDay[];
  trackingFocus: string[];
  safetyNotes: string[];
}

export const workoutTemplates: WorkoutTemplate[] = [
  {
    id: 'upper-pull-posture',
    name: 'Upper Pull + Posture',
    dayHint: 'Best after a moderate school day or on an outdoor-garden day. It builds the back/shoulder base for a V-shape.',
    duration: '30–38 minutes',
    goal: 'Build back, biceps, grip, shoulder-blade control, and posture. This is the most important visual “V-shape” workout, but it still stays technique-first.',
    warmup: [
      '2 minutes easy walking, marching, or light jumping without getting out of breath.',
      '10 shoulder circles forward and 10 backward.',
      '2 sets of 5 scapular pull-up shrugs from a hang or partial hang.',
      '10 arm swings across the body and 10 overhead reaches.',
      '20–30 second easy dead hang if shoulders feel comfortable.',
    ],
    exercises: [
      {
        name: 'Pull-ups or chin-ups',
        sets: '4 sets',
        reps: '2–5 clean reps per set, or 12–20 total reps using small clusters',
        rest: '90–150 sec',
        purpose: 'Main vertical pull for lats, upper back, arms, grip, and calisthenics foundation.',
        cues: 'Start controlled. Keep ribs down. Pull elbows toward your pockets. Use full control on the way down. Stop the set before swinging starts.',
        easier: 'Do 1–3 reps per mini-set, use slow negatives, or use foot assistance from a bench/bar when needed.',
        harder: 'Add one total rep per week, slow the lowering to 3 seconds, pause at the top, or later add a light backpack.',
        stopRule: 'Stop or regress if shoulders pinch, elbows hurt, the bar feels unstable, or reps become jerky.',
      },
      {
        name: 'Inverted row / low-bar row / backpack row',
        sets: '3 sets',
        reps: '8–12 reps',
        rest: '60–90 sec',
        purpose: 'Horizontal pulling for upper-back thickness, posture, and shoulder balance.',
        cues: 'Keep your body braced. Pull your chest toward the bar or pull the backpack toward the hip. Squeeze shoulder blades without shrugging.',
        easier: 'Stand more upright, bend knees, or use a lighter backpack.',
        harder: 'Use a lower body angle, pause one second at the top, or make the backpack heavier with books.',
        stopRule: 'Modify if wrists, shoulders, or lower back feel uncomfortable.',
      },
      {
        name: 'Reverse fly / Y-T-W raise',
        sets: '2–3 sets',
        reps: '10–15 slow reps',
        rest: '45–60 sec',
        purpose: 'Rear delts and upper back for posture, shoulder health, and visual shoulder width.',
        cues: 'Use small controlled movement. Do not swing. Keep neck relaxed. Think “upper back does the work.”',
        easier: 'Use no weight and focus on a clean squeeze.',
        harder: 'Use 3 kg dumbbells, add a 1-second hold, or add an extra set in later months.',
        stopRule: 'Stop if the neck takes over, shoulders pinch, or form becomes sloppy.',
      },
    ],
    core: [
      {
        name: 'Hollow hold or dead bug',
        sets: '3 sets',
        reps: '20–40 sec',
        rest: '45 sec',
        purpose: 'Core control for pull-ups, posture, and future front-lever style progressions.',
        cues: 'Lower back stays controlled, breathe slowly, and do not shake into bad form.',
        easier: 'Use dead bugs or one-leg hollow holds.',
        harder: 'Longer hollow holds, hollow rocks, or tucked hanging knee raises later.',
        stopRule: 'Regress immediately if the lower back arches hard or hurts.',
      },
    ],
    cooldown: [
      'Doorway chest stretch: 30 sec each side.',
      'Child’s pose breathing: 45 sec.',
      'Slow chin tucks: 8 reps.',
      'Write one quick note: what felt strong, what felt hard, what to adjust next time.',
    ],
  },
  {
    id: 'upper-push-core',
    name: 'Upper Push + Core',
    dayHint: 'Best on Monday or Thursday. It builds chest, shoulders, triceps, and core while protecting the shoulders.',
    duration: '30–40 minutes',
    goal: 'Build pushing strength and visible upper-body development without ignoring shoulder safety. This supports push-ups, dips, pike push-ups, and future planche prep.',
    warmup: [
      'Wrist circles and palm rocks: 60 sec total.',
      'Scapular push-ups: 2 sets of 8–10.',
      'Incline push-ups: 1 set of 8 easy reps.',
      'Arm circles: 10 each way.',
      'One easy plank: 20 sec.',
    ],
    exercises: [
      {
        name: 'Push-ups',
        sets: '4 sets',
        reps: '8–15 reps',
        rest: '60–120 sec',
        purpose: 'Main horizontal push for chest, shoulders, triceps, serratus, and core stiffness.',
        cues: 'Body straight. Elbows around 30–60 degrees from body. Chest and hips move together. Full control, no sagging.',
        easier: 'Use incline push-ups on a bench or reduce reps per set.',
        harder: 'Use slower lowering, paused push-ups, decline push-ups, or a light backpack in later phases.',
        stopRule: 'Stop or regress if wrists, shoulders, or lower back hurt.',
      },
      {
        name: 'Parallel bar dips or assisted dips',
        sets: '2–3 sets',
        reps: '5–10 reps',
        rest: '90 sec',
        purpose: 'Triceps, chest, and shoulder strength if the movement feels safe and controlled.',
        cues: 'Shoulders down, chest proud, controlled depth, no bouncing. Do not force deep range.',
        easier: 'Use support holds, partial range, or foot-assisted dips.',
        harder: 'Add reps or slow the lowering. Do not chase deep range as the progression.',
        stopRule: 'Stop immediately for shoulder pain, pinching, sternum discomfort, or unstable bars.',
      },
      {
        name: 'Pike push-up',
        sets: '3 sets',
        reps: '5–10 reps',
        rest: '60–90 sec',
        purpose: 'Shoulder strength for a wider athletic look and future handstand/planche preparation.',
        cues: 'Hips high. Head moves slightly forward and down. Push through the floor. Keep the neck relaxed.',
        easier: 'Hands elevated, smaller range, or fewer reps.',
        harder: 'Feet elevated later, slower eccentric, or pause near the bottom.',
        stopRule: 'Regress if wrists, shoulders, or neck feel strained.',
      },
    ],
    core: [
      {
        name: 'Side plank',
        sets: '2 sets each side',
        reps: '20–45 sec',
        rest: '30–45 sec',
        purpose: 'Core, obliques, shoulder control, and body-line strength.',
        cues: 'Straight line from head to feet, hips lifted, neck relaxed, steady breathing.',
        easier: 'Knees down side plank.',
        harder: 'Longer holds, top-leg raise, or slow hip dips later.',
        stopRule: 'Stop if shoulder pain appears.',
      },
    ],
    cooldown: [
      'Wrist flexor/extensor stretch: 20 sec each.',
      'Chest stretch: 30 sec.',
      'Wall slides: 8 slow reps.',
      'Slow nasal breathing: 60 sec.',
    ],
  },
  {
    id: 'legs-core-athletic',
    name: 'Legs + Core + Athletic Base',
    dayHint: 'Best on Saturday morning during school weeks. It keeps development balanced and avoids becoming only upper-body focused.',
    duration: '30–42 minutes',
    goal: 'Build legs, glutes, knees, hips, core, and general athleticism so the physique and posture improve as a whole.',
    warmup: [
      'Bodyweight squats: 10 reps.',
      'Hip hinges: 10 reps.',
      'Walking or reverse lunges: 6 each leg.',
      'Ankle rocks: 8 each side.',
      'Easy plank: 20 sec.',
    ],
    exercises: [
      {
        name: 'Bodyweight squat or backpack squat',
        sets: '4 sets',
        reps: '10–20 reps',
        rest: '60–90 sec',
        purpose: 'Main lower-body pattern for quads, glutes, knees, and general strength.',
        cues: 'Whole foot on the ground, knees follow toes, chest tall, controlled depth.',
        easier: 'Box squat to a bench or reduce depth slightly.',
        harder: 'Tempo squats, backpack squats, or paused squats.',
        stopRule: 'Modify if knees hurt or form collapses.',
      },
      {
        name: 'Reverse lunge or Bulgarian split squat',
        sets: '3 sets each leg',
        reps: '6–12 reps',
        rest: '60–90 sec',
        purpose: 'Single-leg strength, balance, hips, and knee control.',
        cues: 'Step softly, front foot stable, torso controlled, knee tracks over foot.',
        easier: 'Hold a wall, use reverse lunges, or shorten the range.',
        harder: 'Use Bulgarian split squats, backpack load, or slower tempo.',
        stopRule: 'Stop if sharp knee pain appears.',
      },
      {
        name: 'Glute bridge / single-leg bridge',
        sets: '3 sets',
        reps: '10–15 reps',
        rest: '45–60 sec',
        purpose: 'Glutes and posterior chain for posture, hips, and athletic movement.',
        cues: 'Ribs down, squeeze glutes, avoid arching the lower back.',
        easier: 'Two-leg bridge.',
        harder: 'Single-leg bridge or 2-second pause at the top.',
        stopRule: 'Stop if lower back takes over or cramps do not settle.',
      },
      {
        name: 'Wall sit',
        sets: '2–3 sets',
        reps: '20–60 sec',
        rest: '60 sec',
        purpose: 'Leg endurance and a simple benchmark for progress.',
        cues: 'Back flat, knees comfortable, breathe, do not slide too low if knees complain.',
        easier: 'Higher position or shorter hold.',
        harder: 'Longer hold or lower position if knees are fine.',
        stopRule: 'Stop for knee pain, not just normal muscle burn.',
      },
    ],
    core: [
      {
        name: 'Plank',
        sets: '3 sets',
        reps: '30–75 sec',
        rest: '45 sec',
        purpose: 'General trunk strength, posture support, and body-line control.',
        cues: 'Squeeze glutes, ribs down, breathe slowly, keep the neck neutral.',
        easier: 'Shorter holds or elevated plank.',
        harder: 'RKC-style harder plank for shorter time, or long hollow hold later.',
        stopRule: 'Stop if the lower back sags or hurts.',
      },
    ],
    cooldown: [
      'Hip flexor stretch: 30 sec each side.',
      'Hamstring stretch: 30 sec each side.',
      'Calf stretch: 20 sec each side.',
      'One minute easy breathing.',
    ],
  },
  {
    id: 'skill-recovery-conditioning',
    name: 'Skill + Recovery + Light Conditioning',
    dayHint: 'Optional. Use only when sleep, school, and recovery are okay. It should help the plan, not exhaust you.',
    duration: '15–25 minutes',
    goal: 'Practice calisthenics skill foundations and light conditioning safely without stealing recovery from strength days.',
    warmup: [
      'Easy walk 3–5 minutes.',
      'Wrist prep: 60 sec.',
      'Shoulder circles: 10 each way.',
      'Scapular push-ups: 8 reps.',
      'Easy hang: 15–20 sec if comfortable.',
    ],
    exercises: [
      {
        name: 'Skill prep circuit: active hang, scapular pulls, tuck/hollow hold, planche lean or frog-stand prep',
        sets: '2–4 rounds',
        reps: '10–25 sec per skill or 5–8 clean reps',
        rest: '45–75 sec',
        purpose: 'Build foundations for front lever, planche-like strength, handstand control, and shoulder stability without rushing elite skills.',
        cues: 'Stay fresh. No max effort attempts. Stop before shaking turns into bad position.',
        easier: 'Shorter holds, easier tucks, smaller planche lean, or skip wrist-heavy skills.',
        harder: 'Add 5 seconds, add one round, or use stricter body position after several easy weeks.',
        stopRule: 'Stop for wrist, elbow, shoulder pain, dizziness, or poor control.',
      },
      {
        name: 'Easy conditioning: brisk walk or gentle intervals',
        sets: '1 block',
        reps: '10–20 min',
        rest: 'As needed',
        purpose: 'Improve base fitness without intense running or over-fatiguing recovery.',
        cues: 'You should be able to speak in short sentences. This is controlled conditioning, not a test.',
        easier: 'Walk only.',
        harder: 'Short jog intervals only if no chest tightness and no unusual breathing symptoms.',
        stopRule: 'Stop for chest pain, strong tightness, wheezing, dizziness, or faintness. Tell a parent if symptoms repeat or feel concerning.',
      },
    ],
    core: [
      {
        name: 'Bird dog or dead bug',
        sets: '2 sets each side',
        reps: '8–12 slow reps',
        rest: '30 sec',
        purpose: 'Low-back-friendly core control and recovery-friendly movement quality.',
        cues: 'Move slowly, keep hips level, reach long, breathe.',
        easier: 'Shorter range.',
        harder: 'Pause 2 seconds each rep.',
        stopRule: 'Stop if back discomfort increases.',
      },
    ],
    cooldown: [
      'Thoracic rotations: 6 each side.',
      'Wall slides: 8 reps.',
      'Relaxed breathing: 60 sec.',
      'Quick note: did this help recovery or feel like too much?',
    ],
  },
];

export const monthPlans: MonthPlan[] = [
  {
    month: 1,
    title: 'Foundation and Technique',
    phaseGoal: 'Build the training habit, learn clean form, and avoid doing too much too soon.',
    generalExplanation: 'Month 1 is not about proving toughness. It is about making training automatic while learning safe, clean versions of the main patterns: pull, push, squat/lunge, hip hinge, core, and posture. Because the schedule is heavy, the best structure is three main workouts each week with no guilt if the optional day is skipped.',
    bestWeeklySplit: 'Best school-week split: Monday = Upper Push + Core, Thursday = Upper Pull + Posture, Saturday morning = Legs + Core + Athletic Base. Tuesday or Friday can be a short optional walk/skill day only if school work is under control.',
    expectedWeeklyTime: 'About 90–120 total training minutes per week, plus 5 minutes of posture/mobility most days.',
    intensityRule: 'Leave 2–3 good reps in reserve on most sets. Never grind. Every rep should look controlled.',
    progressionRule: 'Only add reps when form is clean. In Month 1, progress by better technique before harder variations.',
    deloadRule: 'Week 4 can be easier: reduce each exercise by 1 set or use easier variations if school stress, soreness, or sleep problems increase.',
    mainTargets: ['3 completed workouts per week', 'No joint pain from dips/push-ups/pull-ups', 'Phone-away habit starts improving', 'Dinner/protein consistency begins', 'Posture routine becomes familiar'],
    weeklyDays: [
      { day: 'Sunday', priority: 'Recovery', timing: 'Busy day: school, piano, university', exactTask: 'No main workout. Do the 5-minute posture routine and a short walk only if it feels easy.', whyThisDay: 'Sunday is too loaded to make it a reliable training anchor.' },
      { day: 'Monday', priority: 'Main', workoutId: 'upper-push-core', timing: 'After lunch/free time or early evening', exactTask: 'Upper Push + Core. Keep it 30–35 minutes. Stop with clean reps still available.', whyThisDay: 'Monday has no evening university, so it is one of the best main training days.' },
      { day: 'Tuesday', priority: 'Optional', workoutId: 'skill-recovery-conditioning', timing: 'Before university or earlier in the afternoon', exactTask: 'Optional 15–20 minute walk, mobility, or skill practice. Skip if studying is urgent.', whyThisDay: 'Tuesday starts later and has evening university, so it works better as optional light work.' },
      { day: 'Wednesday', priority: 'Recovery', timing: 'Very heavy school + university day', exactTask: 'No workout. Do only posture/mobility if possible.', whyThisDay: 'Wednesday is the worst day for training because it is long and packed.' },
      { day: 'Thursday', priority: 'Main', workoutId: 'upper-pull-posture', timing: 'After lunch/free time or evening', exactTask: 'Upper Pull + Posture. Prioritize pull-up quality and upper-back control.', whyThisDay: 'Thursday is a strong anchor before the long Friday.' },
      { day: 'Friday', priority: 'Optional', timing: 'After school only if energy is okay', exactTask: 'Walk 15–30 minutes or do a short mobility reset. Do not force a hard session after a long school day.', whyThisDay: 'Friday is long, so using it as a required workout would hurt consistency.' },
      { day: 'Saturday', priority: 'Main', workoutId: 'legs-core-athletic', timing: 'Morning before family time, or evening if morning is not possible', exactTask: 'Legs + Core + Athletic Base. This is the best day for a slightly longer session.', whyThisDay: 'Saturday morning is open before family time and is the best weekly anchor.' },
    ],
    trackingFocus: ['Workout completed', 'Clean pull-up/push-up reps', 'Phone not in bed', 'Dinner eaten', 'Sleep opportunity'],
    safetyNotes: ['No max tests in Month 1.', 'Do not push running; walking is enough.', 'Stop any exercise that causes sharp pain, shoulder pinching, dizziness, or chest symptoms.'],
  },
  {
    month: 2,
    title: 'Consistency and Volume',
    phaseGoal: 'Keep the habit alive and add more total quality work without making the plan unrealistic.',
    generalExplanation: 'Month 2 adds volume carefully. The plan still stays at three main days, but one optional day can be used more often during easier weeks. The goal is more weekly quality reps, especially pull-ups, push-ups, dips, split squats, posture work, and core.',
    bestWeeklySplit: 'Best split remains Monday, Thursday, Saturday. Optional Tuesday skill/walk becomes more useful if recovery is good. Do not add a fourth hard strength day during exam-heavy weeks.',
    expectedWeeklyTime: 'About 100–140 minutes per week if the optional day happens; 90–115 minutes if only three main sessions happen.',
    intensityRule: 'Most sets should end with 1–3 reps in reserve. Accessories can feel like a controlled burn, but form must stay clean.',
    progressionRule: 'Add one small change at a time: one extra set to a key exercise, one extra rep per set, or a slower tempo. Do not progress everything at once.',
    deloadRule: 'Every fourth week, reduce total sets by 25–35% or repeat the easiest successful week.',
    mainTargets: ['3 workouts most weeks', 'Optional day happens 1–2 times when realistic', 'More total pull-up reps per week', 'More stable dinner and protein rhythm', 'Less evening scrolling'],
    weeklyDays: [
      { day: 'Sunday', priority: 'Recovery', timing: 'Busy day', exactTask: 'Posture routine only. If stressed, use Sunday night for planning, not training.', whyThisDay: 'Protects recovery and school performance.' },
      { day: 'Monday', priority: 'Main', workoutId: 'upper-push-core', timing: 'After school/lunch block', exactTask: 'Upper Push + Core. Add 1–2 total reps compared with last week if form is clean.', whyThisDay: 'Reliable open slot and good start-of-week momentum.' },
      { day: 'Tuesday', priority: 'Optional', workoutId: 'skill-recovery-conditioning', timing: 'Afternoon before university', exactTask: '15–25 minute optional skill/recovery session. Practice active hangs, scap pulls, light hollow holds, and easy walking.', whyThisDay: 'Good for low-pressure skill practice, not a hard workout.' },
      { day: 'Wednesday', priority: 'Recovery', timing: 'Heavy day', exactTask: 'No main workout. Five-minute posture if possible.', whyThisDay: 'Heavy day should not be used for ambitious training.' },
      { day: 'Thursday', priority: 'Main', workoutId: 'upper-pull-posture', timing: 'After school/lunch block', exactTask: 'Upper Pull + Posture. Aim for more total clean pull-up volume than Month 1.', whyThisDay: 'Strong anchor after recovery from Monday.' },
      { day: 'Friday', priority: 'Optional', timing: 'After school if energy is good', exactTask: 'Walk, stretch, or skip. Do not make Friday a required hard day.', whyThisDay: 'Keeps the plan realistic after a long school day.' },
      { day: 'Saturday', priority: 'Main', workoutId: 'legs-core-athletic', timing: 'Morning preferred', exactTask: 'Legs + Core + Athletic Base. Add time to wall sit or improve lunge quality.', whyThisDay: 'Best day for legs and longer session.' },
    ],
    trackingFocus: ['Weekly completion percent', 'Total pull-up reps', 'Push-up set quality', 'Dinner consistency', 'Energy after workouts'],
    safetyNotes: ['Volume should rise slowly.', 'Do not chase soreness.', 'If elbows or shoulders feel irritated, reduce pull-up/dip volume before adding more.'],
  },
  {
    month: 3,
    title: 'Strength Progression',
    phaseGoal: 'Move toward harder variations and stronger sets while still staying safe and balanced.',
    generalExplanation: 'Month 3 is where strength progress should feel more obvious. The main changes are harder variations, more rest between harder sets, and more focused progression. This is also where the plan must stay strict: no random maxing out, no trying advanced skills before the foundations are stable.',
    bestWeeklySplit: 'School-week best split: Monday push, Thursday pull, Saturday legs. If summer has started or schedule is lighter, Wednesday can become a main day and Thursday can become optional/skill.',
    expectedWeeklyTime: 'Three main workouts of 32–42 minutes. Optional skill day stays 15–25 minutes.',
    intensityRule: 'Main exercises can be challenging with 1–2 reps in reserve. Accessories stay controlled with 2–3 reps in reserve.',
    progressionRule: 'Progress to harder versions only after hitting the top rep range with clean form for two sessions in a row.',
    deloadRule: 'If joints feel stressed, repeat Month 2 for one week or reduce all pulling/dipping volume by one set.',
    mainTargets: ['Stronger pull-up sets', 'Harder push-up/pike push-up variation', 'More stable split squats/lunges', 'Core holds become cleaner', 'Workout routine survives school pressure'],
    weeklyDays: [
      { day: 'Sunday', priority: 'Recovery', timing: 'Busy day unless summer is lighter', exactTask: 'Recovery day. Posture routine and planning only.', whyThisDay: 'Avoids starting the week exhausted.' },
      { day: 'Monday', priority: 'Main', workoutId: 'upper-push-core', timing: 'After school or evening', exactTask: 'Upper Push + Core. Use harder push-up version only if regular push-ups are clean.', whyThisDay: 'Reliable and spaced well from Saturday legs.' },
      { day: 'Tuesday', priority: 'Optional', workoutId: 'skill-recovery-conditioning', timing: 'Afternoon', exactTask: 'Skill + Recovery only. No hard sets. Focus active hang, hollow, scapular control.', whyThisDay: 'Supports calisthenics skills without stealing recovery.' },
      { day: 'Wednesday', priority: 'Recovery', timing: 'Heavy if school is active; possible main day in summer', exactTask: 'During school: recovery. During summer: can move Legs + Core here if Saturday is busy.', whyThisDay: 'Flexible because summer schedule changes.' },
      { day: 'Thursday', priority: 'Main', workoutId: 'upper-pull-posture', timing: 'After school or evening', exactTask: 'Upper Pull + Posture. Longer rest on pull-ups. Prioritize clean reps over more reps.', whyThisDay: 'Best weekly pull anchor.' },
      { day: 'Friday', priority: 'Optional', timing: 'After school if not exhausted', exactTask: 'Walk or mobility only. Avoid hard upper-body training.', whyThisDay: 'Keeps fatigue controlled before Saturday.' },
      { day: 'Saturday', priority: 'Main', workoutId: 'legs-core-athletic', timing: 'Morning preferred', exactTask: 'Legs + Core. Add backpack on squats/lunges only if bodyweight form is stable.', whyThisDay: 'Best day for focused lower-body and core work.' },
    ],
    trackingFocus: ['Best clean pull-up set', 'Best push-up variation', 'Wall sit time', 'Plank quality', 'Sleep before workouts'],
    safetyNotes: ['No failed reps on pull-ups or dips.', 'Harder variation is only progress if it is controlled.', 'Chest tightness means conditioning stays walking-only.'],
  },
  {
    month: 4,
    title: 'Hypertrophy and Skill Progression',
    phaseGoal: 'Build more visible muscle with controlled volume and add safe skill preparation.',
    generalExplanation: 'Month 4 emphasizes controlled reps, time under tension, and slightly more shoulder/back/posture work. This is where the “look stronger” goal becomes more central, but the plan still trains legs, core, and mobility. Skill prep becomes more formal but still not extreme.',
    bestWeeklySplit: 'If school is active: Monday, Thursday, Saturday remain the main plan. If summer schedule is lighter: Monday, Wednesday, Thursday can be main workouts, Saturday optional skill/outdoor work.',
    expectedWeeklyTime: 'Three main sessions of 35–45 minutes. Optional skill session 15–25 minutes when recovery is good.',
    intensityRule: 'Main sets can be hard but should not become ugly. Hypertrophy sets should stop before technique breaks.',
    progressionRule: 'Use tempo before adding lots of new exercises: 3-second lowers, 1-second pauses, controlled range.',
    deloadRule: 'Use one lower-volume week if motivation drops, sleep worsens, or elbows/shoulders feel overused.',
    mainTargets: ['More shoulder/back volume', 'Cleaner dips and pike push-ups', 'More consistent nutrition', 'Skill prep 1–2 times weekly', 'Posture visibly improves'],
    weeklyDays: [
      { day: 'Sunday', priority: 'Recovery', timing: 'Piano day / family or prep day', exactTask: 'Recovery and planning. Optional easy walk only.', whyThisDay: 'Keeps weekly structure sustainable.' },
      { day: 'Monday', priority: 'Main', workoutId: 'upper-push-core', timing: 'Best after first university block in summer or after school in school term', exactTask: 'Upper Push + Core with controlled tempo. Add pike push-up quality work.', whyThisDay: 'Good first main session of the week.' },
      { day: 'Tuesday', priority: 'Optional', workoutId: 'skill-recovery-conditioning', timing: 'Before evening university', exactTask: 'Short skill practice only: wall handstand prep, active hang, hollow, planche lean.', whyThisDay: 'Useful for skills while avoiding a full hard session before university.' },
      { day: 'Wednesday', priority: 'Main', workoutId: 'upper-pull-posture', timing: 'Summer: between university blocks if realistic; school term: recovery instead', exactTask: 'If summer/light schedule: Upper Pull + Posture. If school is intense: move this to Thursday.', whyThisDay: 'This is a flexible day depending on the season.' },
      { day: 'Thursday', priority: 'Main', workoutId: 'legs-core-athletic', timing: 'School term or summer free day', exactTask: 'Legs + Core. If Wednesday was recovery, use Thursday for Upper Pull and Saturday for Legs.', whyThisDay: 'Thursday is open in summer and a reliable school-week anchor.' },
      { day: 'Friday', priority: 'Recovery', timing: 'After long school day if school term', exactTask: 'Walk, mobility, or rest. No required workout.', whyThisDay: 'Prevents burnout.' },
      { day: 'Saturday', priority: 'Optional', workoutId: 'skill-recovery-conditioning', timing: 'Morning/evening outside family time', exactTask: 'Optional outdoor skill/recovery session or missed main workout makeup.', whyThisDay: 'Flexible backup day.' },
    ],
    trackingFocus: ['Monthly photos/measurements if wanted', 'Workout consistency', 'Skill practice quality', 'Protein opportunities', 'Posture notes'],
    safetyNotes: ['Skill prep should feel controlled, not like a max attempt.', 'Wrists must be warmed up before planche/handstand work.', 'If school gets intense, return to three main sessions only.'],
  },
  {
    month: 5,
    title: 'Higher Performance and Conditioning',
    phaseGoal: 'Improve work capacity while keeping strength, recovery, and school performance protected.',
    generalExplanation: 'Month 5 adds a little conditioning, but it does not turn into a running plan. Because there was mild chest tightness during running, the safest conditioning base is walking, short easy circuits, and only very gentle jog intervals if completely symptom-free.',
    bestWeeklySplit: 'Monday = Upper Push, Wednesday or Thursday = Upper Pull, Saturday = Legs/Core, Tuesday or Friday = optional easy conditioning/walk. If school is heavy, keep conditioning as walking only.',
    expectedWeeklyTime: 'Three strength sessions plus 1 short conditioning/walk session: about 120–160 minutes total if all happens.',
    intensityRule: 'Strength work stays high quality. Conditioning should be moderate and controlled, not exhausting.',
    progressionRule: 'Add conditioning by time first, not intensity. Add 2–5 minutes of walking or one extra easy circuit round.',
    deloadRule: 'If sleep, soreness, or school stress worsens, remove the optional conditioning day first.',
    mainTargets: ['Better work capacity', '3 strength workouts remain consistent', 'More confident outdoor training', 'Walking/conditioning improves without symptoms', 'Recovery tracking becomes automatic'],
    weeklyDays: [
      { day: 'Sunday', priority: 'Recovery', timing: 'Busy/prep day', exactTask: 'Recovery, planning, posture routine.', whyThisDay: 'Protects the week from starting too hard.' },
      { day: 'Monday', priority: 'Main', workoutId: 'upper-push-core', timing: 'After school/free block', exactTask: 'Upper Push + Core. Keep strength quality high.', whyThisDay: 'Stable anchor.' },
      { day: 'Tuesday', priority: 'Optional', workoutId: 'skill-recovery-conditioning', timing: 'Before evening university', exactTask: 'Optional conditioning: 15–20 minute brisk walk or easy skill circuit. No hard running.', whyThisDay: 'Good for light capacity work.' },
      { day: 'Wednesday', priority: 'Main', workoutId: 'upper-pull-posture', timing: 'If summer/light schedule; otherwise Thursday', exactTask: 'Upper Pull + Posture. Pull-ups remain priority.', whyThisDay: 'Flexible depending on school load.' },
      { day: 'Thursday', priority: 'Main', workoutId: 'legs-core-athletic', timing: 'Free afternoon/evening', exactTask: 'Legs + Core or the missed Upper Pull session depending on Wednesday.', whyThisDay: 'Reliable anchor and recovery gap before Saturday.' },
      { day: 'Friday', priority: 'Optional', timing: 'Only if energy is good', exactTask: 'Walk outside or rest. Skip if tired.', whyThisDay: 'Friday should not become a failure point.' },
      { day: 'Saturday', priority: 'Main', workoutId: 'legs-core-athletic', timing: 'Morning preferred', exactTask: 'Main session if not completed Thursday, or outdoor skill/recovery if all main workouts are done.', whyThisDay: 'Best backup and outdoor day.' },
    ],
    trackingFocus: ['Workouts this week', 'Walking/conditioning minutes', 'Breathing comfort', 'Sleep quality', 'Soreness'],
    safetyNotes: ['Stop conditioning for chest pain, strong tightness, wheezing, dizziness, or faintness.', 'Do not add running speed.', 'Walking is valid conditioning.'],
  },
  {
    month: 6,
    title: 'Consolidation, Testing, and Next Step',
    phaseGoal: 'Lock in what worked, test cleanly, and prepare the next six-month phase.',
    generalExplanation: 'Month 6 is not about destroying yourself to prove progress. It is about showing what improved: strength numbers, habit consistency, bodyweight/measurements if desired, posture, energy, and confidence. The final week should be easier so testing is safe and useful.',
    bestWeeklySplit: 'Weeks 1–2: normal Monday/Thursday/Saturday training. Week 3: testing on the same days. Week 4: lighter review week and next-plan setup.',
    expectedWeeklyTime: 'Normal weeks: 90–140 minutes. Testing week: similar time but fewer accessories. Review week: 60–90 minutes.',
    intensityRule: 'Testing means clean reps only. A failed ugly rep does not count and is not useful data.',
    progressionRule: 'Do not chase new hard variations in the final week. Test what was trained.',
    deloadRule: 'Final 5–7 days should reduce volume so the body feels fresh.',
    mainTargets: ['Clean benchmark tests', 'Review habit trends', 'Decide next phase goals', 'Keep sleep and food consistent', 'Avoid end-of-plan burnout'],
    weeklyDays: [
      { day: 'Sunday', priority: 'Recovery', timing: 'Prep/review day', exactTask: 'Review dashboard trends, write one short note about what is working.', whyThisDay: 'Month 6 needs reflection, not just training.' },
      { day: 'Monday', priority: 'Main', workoutId: 'upper-push-core', timing: 'After school/free block', exactTask: 'Weeks 1–2 normal push. Week 3 test push-ups/dips. Week 4 easier push technique.', whyThisDay: 'Consistent anchor for testing.' },
      { day: 'Tuesday', priority: 'Optional', workoutId: 'skill-recovery-conditioning', timing: 'Short session only', exactTask: 'Skill practice only if recovered. No max skill attempts.', whyThisDay: 'Keeps movement quality without interfering with tests.' },
      { day: 'Wednesday', priority: 'Recovery', timing: 'Depends on schedule', exactTask: 'Rest, posture, or light walking.', whyThisDay: 'Protects recovery between tests.' },
      { day: 'Thursday', priority: 'Main', workoutId: 'upper-pull-posture', timing: 'After school/free block', exactTask: 'Weeks 1–2 normal pull. Week 3 test pull-ups/hang. Week 4 easier pull technique.', whyThisDay: 'Good spacing after Monday.' },
      { day: 'Friday', priority: 'Recovery', timing: 'After long school day', exactTask: 'Walk or rest. No hard testing.', whyThisDay: 'Avoids tired testing.' },
      { day: 'Saturday', priority: 'Main', workoutId: 'legs-core-athletic', timing: 'Morning preferred', exactTask: 'Weeks 1–2 normal legs. Week 3 test wall sit/plank/squat quality. Week 4 easy full-body review.', whyThisDay: 'Best day for controlled lower-body testing.' },
    ],
    trackingFocus: ['Push-up benchmark', 'Pull-up benchmark', 'Wall sit/plank', 'Workout consistency', 'Sleep/food/habit trends', 'Confidence and energy'],
    safetyNotes: ['No daily max testing.', 'Testing should stop before pain or form collapse.', 'Use trends, not one day, to judge progress.'],
  },
];

export const progressionRules = [
  'Use clean reps. A rep only counts if form stays controlled.',
  'Most sets should end with about 1–3 reps left in reserve; Month 1 should usually stay closer to 2–3 reps in reserve.',
  'Progress only one variable at a time: reps, sets, tempo, range of motion, or harder variation.',
  'If sleep is poor or school stress is high, use the easier version and keep the habit alive.',
  'If an exercise causes sharp pain, joint pinching, dizziness, unusual chest symptoms, or breathing discomfort that does not settle quickly, stop and modify. Involve an adult/doctor if symptoms repeat or feel serious.',
  'A missed workout is not a reason to quit or double the next day. Continue with the next planned session.',
];

export const safetyPrinciples = [
  'This is a teen-safe plan: no cutting, no aggressive bulking, no dehydration tactics, no unsafe supplements, and no training through pain.',
  'Because there was occasional mild chest tightness during running, conditioning starts with walking and easy intervals only when symptoms are absent.',
  'Because the schedule is demanding, the best plan is strict about priorities but flexible about backup versions.',
  'Advanced skills like planche/front lever are long-term inspiration; they do not replace basics: pull-ups, push-ups, dips, legs, core, posture, sleep, and food consistency.',
];

export function getWorkoutTemplate(id?: string): WorkoutTemplate | undefined {
  if (!id) return undefined;
  return workoutTemplates.find((workout) => workout.id === id);
}
