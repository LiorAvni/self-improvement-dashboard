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

export interface MonthWeeklyDivision {
  label: string;
  subtitle: string;
  weeklyDays: MonthTrainingDay[];
}

export interface MonthPlan {
  month: number;
  calendarMonth: string;
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
  weeklyAlternates?: MonthWeeklyDivision[];
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
    calendarMonth: 'June 2026',
    title: 'Foundation and Technique',
    phaseGoal: 'Build the training habit, learn clean form, and make the program survive a heavy school/university schedule.',
    generalExplanation: 'Month 1 is June, so it is still a full school month. The correct plan is not a summer plan yet. It uses the strongest available anchors from the intake: Monday after school/lunch, Thursday after school/lunch, and Saturday morning before family time. Sunday and Wednesday are deliberately not hard training days because Sunday has school, piano, and university, and Wednesday is the most packed school + university day. The goal is to start safely, learn the movements, and avoid the usual mistake of doing too much for 1–2 weeks and then stopping.',
    bestWeeklySplit: 'June school-week split: Monday = Upper Push + Core, Thursday = Upper Pull + Posture, Saturday morning = Legs + Core + Athletic Base. Tuesday or Friday can be a short optional walk/skill day only if study pressure and sleep are okay.',
    expectedWeeklyTime: 'Three main sessions of about 30–38 minutes each, plus 5 minutes of posture/mobility most days. Total required training time: roughly 90–115 minutes per week.',
    intensityRule: 'Leave 2–3 good reps in reserve on most sets. No max tests, no ugly reps, no advanced skill attempts. Every exercise should feel controlled enough that you could repeat the same quality next week.',
    progressionRule: 'Progress first by cleaner technique and slightly more total reps. Add only one small change per week: one extra rep on a few sets, one extra clean pull-up cluster, or slightly better range of motion.',
    deloadRule: 'If school load, soreness, or sleep problems rise, Week 4 becomes easier: remove 1 set from each main exercise or use easier variations. The goal is to keep the habit alive, not prove toughness.',
    mainTargets: ['3 main workouts most weeks', 'No joint pain from push-ups/dips/pull-ups', 'Learn the warm-ups and stop rules', 'Start the phone-away-before-bed habit', 'Make dinner/protein consistency visible on the tracker'],
    weeklyDays: [
      { day: 'Sunday', priority: 'Recovery', timing: 'Busy day: school, piano, university', exactTask: 'No main workout. Do the 5-minute posture routine and a short walk only if it feels easy.', whyThisDay: 'Sunday is too loaded to be a reliable workout day.' },
      { day: 'Monday', priority: 'Main', workoutId: 'upper-push-core', timing: 'After school/lunch or early evening', exactTask: 'Upper Push + Core. Keep it 30–35 minutes. Use controlled push-ups, safe dips only if shoulders feel good, pike push-ups, and side plank work.', whyThisDay: 'Monday has no evening university, so it is the best start-of-week anchor.' },
      { day: 'Tuesday', priority: 'Optional', workoutId: 'skill-recovery-conditioning', timing: 'Before university or earlier afternoon', exactTask: 'Optional 15–20 minute recovery/skill session: easy walk, active hang, scapular control, hollow/dead bug. Skip if studying is urgent.', whyThisDay: 'Tuesday starts later but has evening university, so light work fits better than a hard workout.' },
      { day: 'Wednesday', priority: 'Recovery', timing: 'Very heavy school + university day', exactTask: 'No workout. Do only posture/mobility if possible.', whyThisDay: 'Wednesday is the worst day for training because it is long and packed.' },
      { day: 'Thursday', priority: 'Main', workoutId: 'upper-pull-posture', timing: 'After school/lunch or evening', exactTask: 'Upper Pull + Posture. Prioritize pull-up quality, rowing/backpack rows, reverse fly/Y-T-W work, and hollow/dead bug control.', whyThisDay: 'Thursday is the best pull anchor before the long Friday.' },
      { day: 'Friday', priority: 'Optional', timing: 'After school only if energy is okay', exactTask: 'Walk 15–30 minutes or do a short mobility reset. Do not force a hard session after a long school day.', whyThisDay: 'Friday is long, so using it as a required workout would hurt consistency.' },
      { day: 'Saturday', priority: 'Main', workoutId: 'legs-core-athletic', timing: 'Morning before family time, or evening if morning is not possible', exactTask: 'Legs + Core + Athletic Base. Squats, lunges/split squats, glute bridge, wall sit, plank, and cooldown.', whyThisDay: 'Saturday morning is open before family time and is the best weekly lower-body anchor.' },
    ],
    trackingFocus: ['Workout habit', 'Clean form', 'Phone away before bed', 'Dinner/protein consistency', 'Sleep opportunity'],
    safetyNotes: ['No max tests in Month 1.', 'Walking is enough conditioning for now.', 'Stop any exercise that causes sharp pain, shoulder pinching, dizziness, or unusual chest symptoms.'],
  },
  {
    month: 2,
    calendarMonth: 'July 2026',
    title: 'Consistency and Volume',
    phaseGoal: 'Increase total quality work while respecting that July changes from school schedule to summer schedule on July 20.',
    generalExplanation: 'Month 2 is a hybrid month. July 1–19 is still school time, so the Month 1 school anchors remain best. From July 20–31 the schedule becomes summer: Sunday has piano, Monday has two university blocks, Tuesday has evening university, Wednesday has two university blocks, and Thursday/Friday/Saturday are open. The plan therefore changes after July 20 instead of pretending the whole month has one schedule.',
    bestWeeklySplit: 'July 1–19: Monday/Thursday/Saturday. July 20–31: Tuesday/Thursday/Saturday, with Friday as the best optional skill/recovery day. This avoids the heavy Monday and Wednesday university blocks in summer.',
    expectedWeeklyTime: 'School part: about 90–120 minutes required. Summer part: about 100–135 minutes required, with one optional 15–25 minute session if recovery is good.',
    intensityRule: 'Most sets should end with 1–3 reps in reserve. Add volume only while reps stay clean and sleep does not get worse.',
    progressionRule: 'Add a small amount of total weekly work: one extra set on one exercise, 1–2 extra reps on selected sets, or slower tempo. Do not increase everything at once.',
    deloadRule: 'Use the week of July 20 as a transition week if needed. If schedule changes disrupt consistency, repeat the previous successful week instead of progressing.',
    mainTargets: ['Keep 3 workouts through the schedule change', 'More total pull-up and push-up volume', 'Dinner becomes more reliable', 'Optional skill/recovery day appears only when useful', 'No elbow/shoulder irritation from added volume'],
    weeklyDays: [
      { day: 'Sunday', priority: 'Recovery', timing: 'School/piano/university day before July 20', exactTask: 'Posture routine only. If stressed, use Sunday night for planning, not training.', whyThisDay: 'Protects recovery and school performance.' },
      { day: 'Monday', priority: 'Main', workoutId: 'upper-push-core', timing: 'After school/lunch block before July 20', exactTask: 'Upper Push + Core. Add 1–2 total reps compared with last week only if form is clean.', whyThisDay: 'Reliable school-period anchor.' },
      { day: 'Tuesday', priority: 'Optional', workoutId: 'skill-recovery-conditioning', timing: 'Afternoon before university', exactTask: '15–25 minute optional skill/recovery session. Practice active hangs, scap pulls, light hollow holds, and easy walking.', whyThisDay: 'Good for low-pressure skill practice, not a hard workout.' },
      { day: 'Wednesday', priority: 'Recovery', timing: 'Heavy school/university day', exactTask: 'No main workout. Five-minute posture if possible.', whyThisDay: 'Heavy day should not be used for ambitious training.' },
      { day: 'Thursday', priority: 'Main', workoutId: 'upper-pull-posture', timing: 'After school/lunch block', exactTask: 'Upper Pull + Posture. Aim for more total clean pull-up volume than Month 1.', whyThisDay: 'Strong anchor after recovery from Monday.' },
      { day: 'Friday', priority: 'Optional', timing: 'After school if energy is good', exactTask: 'Walk, stretch, or skip. Do not make Friday a required hard day.', whyThisDay: 'Keeps the plan realistic after a long school day.' },
      { day: 'Saturday', priority: 'Main', workoutId: 'legs-core-athletic', timing: 'Morning preferred', exactTask: 'Legs + Core + Athletic Base. Add time to wall sit or improve lunge quality.', whyThisDay: 'Best day for legs and longer session.' },
    ],
    weeklyAlternates: [
      {
        label: 'July 20–31 summer division',
        subtitle: 'Use this after school ends. Monday and Wednesday are university-heavy, so the main sessions move to Tuesday, Thursday, and Saturday.',
        weeklyDays: [
          { day: 'Sunday', priority: 'Recovery', timing: 'Piano 16:00–17:20', exactTask: 'Recovery, light walk, posture routine, and weekly planning.', whyThisDay: 'Piano day is not ideal for a hard workout, and it sets up the week.' },
          { day: 'Monday', priority: 'Recovery', timing: 'University 8:45–12:15 and 17:45–21:15', exactTask: 'No main workout. Short walk or posture only.', whyThisDay: 'Two university blocks make Monday too crowded for a reliable hard session.' },
          { day: 'Tuesday', priority: 'Main', workoutId: 'upper-push-core', timing: 'Late morning or afternoon before 18:00 university', exactTask: 'Upper Push + Core. This is the first main summer workout of the week.', whyThisDay: 'Tuesday has one evening university block, so the earlier day is usable.' },
          { day: 'Wednesday', priority: 'Recovery', timing: 'University 8:45–12:15 and 17:45–21:15', exactTask: 'Recovery only. Five-minute posture routine if possible.', whyThisDay: 'Two university blocks again; recovery protects consistency.' },
          { day: 'Thursday', priority: 'Main', workoutId: 'upper-pull-posture', timing: 'Free day; use late morning, afternoon, or evening', exactTask: 'Upper Pull + Posture. Pull-ups, rows, rear delts, core control.', whyThisDay: 'Thursday is the best free summer training day.' },
          { day: 'Friday', priority: 'Optional', workoutId: 'skill-recovery-conditioning', timing: 'Any comfortable time', exactTask: 'Optional skill/recovery session or outdoor walk. Keep it light and technical.', whyThisDay: 'Open day; good for extra skill practice without crowding main workouts.' },
          { day: 'Saturday', priority: 'Main', workoutId: 'legs-core-athletic', timing: 'Morning preferred', exactTask: 'Legs + Core + Athletic Base. Use this as the third required session.', whyThisDay: 'Open day and good spacing after Thursday.' },
        ],
      },
    ],
    trackingFocus: ['Weekly completion percent', 'Total pull-up reps', 'Push-up set quality', 'Dinner consistency', 'Energy after workouts'],
    safetyNotes: ['Volume should rise slowly.', 'Do not chase soreness.', 'If elbows or shoulders feel irritated, reduce pull-up/dip volume before adding more.'],
  },
  {
    month: 3,
    calendarMonth: 'August 2026',
    title: 'Strength Progression',
    phaseGoal: 'Use the full summer month to get stronger with harder variations, better rest between hard sets, and more reliable technique.',
    generalExplanation: 'Month 3 is August, which is not school time in this project. The summer schedule is known: Monday and Wednesday have two university blocks, Tuesday has evening university, Sunday has piano, and Thursday/Friday/Saturday are open. Therefore the plan should not use a school-week split. The best realistic August structure is Tuesday, Thursday, and Saturday as main workouts, with Friday as optional skill/recovery. This gives enough recovery and avoids the most crowded university days.',
    bestWeeklySplit: 'August summer split: Tuesday = Upper Push + Core, Thursday = Upper Pull + Posture, Saturday = Legs + Core + Athletic Base, Friday = optional Skill + Recovery + Light Conditioning. Monday and Wednesday are recovery because of double university blocks.',
    expectedWeeklyTime: 'Three main workouts of about 34–42 minutes each. Optional Friday skill/recovery stays 15–25 minutes. Total: about 105–150 minutes per week.',
    intensityRule: 'Main exercises can be challenging with 1–2 reps in reserve. Harder does not mean uglier: the set ends before swinging, joint pinching, or form collapse.',
    progressionRule: 'Progress to a harder variation only after hitting the top of the rep range with clean form for two sessions in a row. Examples: decline push-up instead of standard push-up, slower pull-up negatives, backpack squats, cleaner pike push-ups.',
    deloadRule: 'If joints feel stressed or university work piles up, repeat the previous week or reduce all pulling/dipping volume by one set.',
    mainTargets: ['Stronger pull-up sets', 'Harder push-up/pike push-up variation', 'More stable split squats/lunges', 'Cleaner hollow/body-line control', 'Workout routine takes advantage of summer without overdoing it'],
    weeklyDays: [
      { day: 'Sunday', priority: 'Recovery', timing: 'Piano 16:00–17:20', exactTask: 'Recovery, planning, posture routine, and possibly an easy walk.', whyThisDay: 'A calm Sunday sets the week up without turning piano day into another demand.' },
      { day: 'Monday', priority: 'Recovery', timing: 'University 8:45–12:15 and 17:45–21:15', exactTask: 'No main workout. Posture routine only or easy walk between blocks if it helps focus.', whyThisDay: 'Two university blocks make Monday a poor strength anchor.' },
      { day: 'Tuesday', priority: 'Main', workoutId: 'upper-push-core', timing: 'Late morning or afternoon before 18:00 university', exactTask: 'Upper Push + Core. Use harder push-up or pike push-up versions only if regular versions are clean.', whyThisDay: 'Tuesday has the best early-day training window before evening university.' },
      { day: 'Wednesday', priority: 'Recovery', timing: 'University 8:45–12:15 and 17:45–21:15', exactTask: 'Recovery day. Five-minute posture/mobility if possible.', whyThisDay: 'The second double-university day should protect recovery.' },
      { day: 'Thursday', priority: 'Main', workoutId: 'upper-pull-posture', timing: 'Free day; late morning, afternoon, or evening', exactTask: 'Upper Pull + Posture. Longer rest on pull-ups. Prioritize clean reps over more reps.', whyThisDay: 'Thursday is the strongest free day for the most important V-shape/back session.' },
      { day: 'Friday', priority: 'Optional', workoutId: 'skill-recovery-conditioning', timing: 'Any comfortable time', exactTask: 'Skill + Recovery only. Focus active hang, hollow, scapular control, light planche lean, and walking. No hard sets.', whyThisDay: 'Friday is open and works well as a controlled optional skill day.' },
      { day: 'Saturday', priority: 'Main', workoutId: 'legs-core-athletic', timing: 'Morning preferred', exactTask: 'Legs + Core. Add backpack on squats/lunges only if bodyweight form is stable.', whyThisDay: 'Saturday is open and gives good spacing after Thursday.' },
    ],
    trackingFocus: ['Best clean pull-up set', 'Best push-up variation', 'Wall sit time', 'Plank/hollow quality', 'Sleep before workouts'],
    safetyNotes: ['No failed reps on pull-ups or dips.', 'Harder variation is only progress if it is controlled.', 'Chest tightness means conditioning stays walking-only.'],
  },
  {
    month: 4,
    calendarMonth: 'September 2026',
    title: 'Hypertrophy and Skill Progression',
    phaseGoal: 'Build more visible muscle while returning to a conservative school/university rhythm.',
    generalExplanation: 'Month 4 is September, when school returns and three university courses are expected again, but exact hours are unknown. Because uncertainty itself is a constraint, the plan returns to the conservative school-term anchors: Monday, Thursday, and Saturday. The goal is more controlled volume for shoulders/back/chest/legs while keeping skill practice small and safe.',
    bestWeeklySplit: 'September conservative school split: Monday = Upper Push + Core, Thursday = Upper Pull + Posture, Saturday = Legs + Core. Tuesday can be optional skill/recovery only if the new school/university schedule allows it.',
    expectedWeeklyTime: 'Three main sessions of 35–45 minutes. Optional skill session 15–25 minutes only when recovery is good.',
    intensityRule: 'Main sets can be hard, but no sloppy failure. Hypertrophy comes from repeated clean challenging work, not pain or random max attempts.',
    progressionRule: 'Use tempo before adding many new exercises: 3-second lowers, 1-second pauses, stricter range of motion, and controlled backpack loading.',
    deloadRule: 'If the new school schedule is overwhelming, reduce to two main workouts for one week plus movement/posture, then return to three.',
    mainTargets: ['More shoulder/back volume', 'Cleaner dips and pike push-ups', 'Nutrition consistency continues', 'Skill prep 1 time weekly if possible', 'Posture visibly improves'],
    weeklyDays: [
      { day: 'Sunday', priority: 'Recovery', timing: 'Prep day / likely busy', exactTask: 'Recovery and planning. Optional easy walk only.', whyThisDay: 'Keeps weekly structure sustainable as school returns.' },
      { day: 'Monday', priority: 'Main', workoutId: 'upper-push-core', timing: 'After school/free block or early evening', exactTask: 'Upper Push + Core with controlled tempo. Add pike push-up quality work.', whyThisDay: 'Best first main session of the school week.' },
      { day: 'Tuesday', priority: 'Optional', workoutId: 'skill-recovery-conditioning', timing: 'Only if schedule allows', exactTask: 'Short skill practice only: wall handstand prep, active hang, hollow, planche lean. Skip during exams.', whyThisDay: 'Useful for skills, but optional because school load is unknown.' },
      { day: 'Wednesday', priority: 'Recovery', timing: 'Assume heavy until proven otherwise', exactTask: 'Rest, posture, or light walking.', whyThisDay: 'Wednesday was previously very heavy and should not be assumed free.' },
      { day: 'Thursday', priority: 'Main', workoutId: 'upper-pull-posture', timing: 'After school/free block or evening', exactTask: 'Upper Pull + Posture. Pull-ups, rows, rear delts, hollow/dead bug.', whyThisDay: 'Good spacing after Monday and high value for the V-shape goal.' },
      { day: 'Friday', priority: 'Recovery', timing: 'After long school week', exactTask: 'Walk, mobility, or rest. No required workout.', whyThisDay: 'Prevents burnout.' },
      { day: 'Saturday', priority: 'Main', workoutId: 'legs-core-athletic', timing: 'Morning preferred', exactTask: 'Legs + Core + Athletic Base. Keep development balanced.', whyThisDay: 'Best day for a calmer, complete lower-body/core session.' },
    ],
    trackingFocus: ['Monthly photos/measurements if wanted', 'Workout consistency', 'Skill practice quality', 'Protein opportunities', 'Posture notes'],
    safetyNotes: ['Skill prep should feel controlled, not like a max attempt.', 'Wrists must be warmed up before planche/handstand work.', 'If school gets intense, return to the two-day backup temporarily.'],
  },
  {
    month: 5,
    calendarMonth: 'October 2026',
    title: 'Higher Performance and Conditioning',
    phaseGoal: 'Keep strength moving while adding a small amount of work capacity without aggravating chest/breathing symptoms.',
    generalExplanation: 'Month 5 is likely school + university time. The plan keeps the same reliable anchors and adds conditioning carefully. Because the intake mentioned occasional mild chest tightness during running, conditioning is not a hard running plan. It is walking, easy intervals only if symptom-free, and short controlled circuits that do not wreck recovery.',
    bestWeeklySplit: 'October school split: Monday = Upper Push, Thursday = Upper Pull, Saturday = Legs/Core. Tuesday or Friday = optional easy walk/conditioning only. If school is heavy, conditioning stays as walking.',
    expectedWeeklyTime: 'Three strength sessions plus one short optional conditioning/walk: about 110–155 minutes total if all happens.',
    intensityRule: 'Strength work stays high quality. Conditioning should be moderate and controlled, never crushing. You should finish feeling better, not destroyed.',
    progressionRule: 'Add conditioning by time first, not intensity: 2–5 more minutes of walking or one extra easy circuit round. Do not add speed and volume at the same time.',
    deloadRule: 'If sleep, soreness, or school stress worsens, remove the optional conditioning day first before changing the strength plan.',
    mainTargets: ['Better work capacity', '3 strength workouts remain consistent', 'More confident outdoor training', 'Walking/conditioning improves without symptoms', 'Recovery tracking becomes automatic'],
    weeklyDays: [
      { day: 'Sunday', priority: 'Recovery', timing: 'Prep day', exactTask: 'Recovery, planning, posture routine.', whyThisDay: 'Protects the week from starting too hard.' },
      { day: 'Monday', priority: 'Main', workoutId: 'upper-push-core', timing: 'After school/free block', exactTask: 'Upper Push + Core. Keep strength quality high.', whyThisDay: 'Stable anchor.' },
      { day: 'Tuesday', priority: 'Optional', workoutId: 'skill-recovery-conditioning', timing: 'If there is a free block before evening work', exactTask: 'Optional conditioning: 15–20 minute brisk walk or easy skill circuit. No hard running.', whyThisDay: 'Good for light capacity work.' },
      { day: 'Wednesday', priority: 'Recovery', timing: 'Assume heavy until proven otherwise', exactTask: 'Rest, posture, or light walking.', whyThisDay: 'Protects recovery between main sessions.' },
      { day: 'Thursday', priority: 'Main', workoutId: 'upper-pull-posture', timing: 'After school/free block', exactTask: 'Upper Pull + Posture. Pull-ups remain priority.', whyThisDay: 'Best weekly pull anchor.' },
      { day: 'Friday', priority: 'Optional', timing: 'Only if energy is good', exactTask: 'Walk outside or rest. Skip if tired.', whyThisDay: 'Friday should not become a failure point.' },
      { day: 'Saturday', priority: 'Main', workoutId: 'legs-core-athletic', timing: 'Morning preferred', exactTask: 'Legs + Core + Athletic Base. Add a short finisher only if recovery is excellent.', whyThisDay: 'Best day for controlled lower-body work.' },
    ],
    trackingFocus: ['Workouts this week', 'Walking/conditioning minutes', 'Breathing comfort', 'Sleep quality', 'Soreness'],
    safetyNotes: ['Stop conditioning for chest pain, strong tightness, wheezing, dizziness, or faintness.', 'Do not add running speed.', 'Walking is valid conditioning.'],
  },
  {
    month: 6,
    calendarMonth: 'November 2026',
    title: 'Consolidation, Testing, and Next Step',
    phaseGoal: 'Lock in what worked, test cleanly, and prepare the next six-month phase without burning out.',
    generalExplanation: 'Month 6 is not about destroying yourself to prove progress. It is about collecting useful evidence: strength numbers, consistency, bodyweight/measurements if desired, posture, energy, and confidence. Since November is likely school + university time, tests stay on the normal workout days and the final week becomes lighter.',
    bestWeeklySplit: 'November school split: Weeks 1–2 normal Monday/Thursday/Saturday training. Week 3 clean testing on those same days. Week 4 lighter review week and next-plan setup.',
    expectedWeeklyTime: 'Normal weeks: 90–140 minutes. Testing week: similar time but fewer accessories. Review week: 60–90 minutes.',
    intensityRule: 'Testing means clean reps only. A failed ugly rep does not count and is not useful data.',
    progressionRule: 'Do not chase new hard variations in the final week. Test the movements that were trained.',
    deloadRule: 'The final 5–7 days should reduce volume so the body feels fresh and the next phase starts well.',
    mainTargets: ['Clean benchmark tests', 'Review habit trends', 'Decide next phase goals', 'Keep sleep and food consistent', 'Avoid end-of-plan burnout'],
    weeklyDays: [
      { day: 'Sunday', priority: 'Recovery', timing: 'Prep/review day', exactTask: 'Review dashboard trends and write one short note about what is working.', whyThisDay: 'Month 6 needs reflection, not just training.' },
      { day: 'Monday', priority: 'Main', workoutId: 'upper-push-core', timing: 'After school/free block', exactTask: 'Weeks 1–2 normal push. Week 3 test push-ups/dips only with clean form. Week 4 easier push technique.', whyThisDay: 'Consistent anchor for testing.' },
      { day: 'Tuesday', priority: 'Optional', workoutId: 'skill-recovery-conditioning', timing: 'Short session only if recovered', exactTask: 'Skill practice only if recovered. No max skill attempts.', whyThisDay: 'Keeps movement quality without interfering with tests.' },
      { day: 'Wednesday', priority: 'Recovery', timing: 'Assume heavy until proven otherwise', exactTask: 'Rest, posture, or light walking.', whyThisDay: 'Protects recovery between tests.' },
      { day: 'Thursday', priority: 'Main', workoutId: 'upper-pull-posture', timing: 'After school/free block', exactTask: 'Weeks 1–2 normal pull. Week 3 test pull-ups/hang. Week 4 easier pull technique.', whyThisDay: 'Good spacing after Monday.' },
      { day: 'Friday', priority: 'Recovery', timing: 'After long school week', exactTask: 'Walk or rest. No hard testing.', whyThisDay: 'Avoids tired testing.' },
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
