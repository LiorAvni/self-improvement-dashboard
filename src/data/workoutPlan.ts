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
    phaseGoal: 'Build the training habit, learn clean form, and make the program survive the last school weeks before summer starts on June 20.',
    generalExplanation: 'Month 1 is June. June 1–19 is still school time with the old university semester in the evenings on Sunday, Tuesday, and Wednesday; Sunday also has piano, Wednesday is long and crowded, Friday is a long school day, and Saturday has family time. The safest evidence-based plan for this school block is therefore 3 main sessions per week on Monday, Thursday, and Saturday morning. From June 20–30 the schedule becomes early summer with no university yet: Sunday still has piano, but Monday through Saturday are much more open. The plan switches on June 20 so it uses the extra recovery and training flexibility without suddenly increasing to an unrealistic volume.',
    bestWeeklySplit: 'June 1–19 school split: Monday = Upper Push + Core, Thursday = Upper Pull + Posture, Saturday morning = Legs + Core + Athletic Base. June 20–30 early-summer split: Monday = Upper Push + Core, Thursday = Upper Pull + Posture, Saturday = Legs + Core + Athletic Base, with Tuesday or Friday as optional skill/recovery only if energy is good.',
    expectedWeeklyTime: 'Required work: three main sessions of about 30–38 minutes each, plus 5 minutes of posture/mobility most days. Total required training time: roughly 90–115 minutes per week. Optional summer skill work stays 15–25 minutes and only happens if sleep and study pressure are okay.',
    intensityRule: 'Leave 2–3 good reps in reserve on most sets. Month 1 is not for max testing. Every exercise should feel controlled enough that the same quality could be repeated next week.',
    progressionRule: 'Progress first by cleaner technique, steadier rhythm, and slightly more total reps. Add only one small change per week: one extra rep on a few sets, one extra clean pull-up cluster, or slightly better range of motion.',
    deloadRule: 'If school load, soreness, or sleep problems rise, reduce each main exercise by one set or use easier variations. If the June 20 schedule switch disrupts consistency, repeat the previous successful week instead of progressing.',
    mainTargets: ['3 main workouts most weeks', 'No joint pain from push-ups/dips/pull-ups', 'Learn the warm-ups and stop rules', 'Start the phone-away-before-bed habit', 'Make dinner/protein consistency visible on the tracker', 'Switch smoothly from school schedule to summer schedule on June 20'],
    weeklyDays: [
      { day: 'Sunday', priority: 'Recovery', timing: 'June 1–19: school, piano, and university day', exactTask: 'No main workout. Do the 5-minute posture routine and a short walk only if it feels easy.', whyThisDay: 'Sunday is too loaded during the school part of June to be a reliable workout day.' },
      { day: 'Monday', priority: 'Main', workoutId: 'upper-push-core', timing: 'June 1–19: after school/lunch or early evening', exactTask: 'Upper Push + Core. Keep it 30–35 minutes. Use controlled push-ups, safe dips only if shoulders feel good, pike push-ups, and side plank work.', whyThisDay: 'Monday has no evening university in the school schedule, so it is the best start-of-week anchor.' },
      { day: 'Tuesday', priority: 'Optional', workoutId: 'skill-recovery-conditioning', timing: 'June 1–19: before university or earlier afternoon', exactTask: 'Optional 15–20 minute recovery/skill session: easy walk, active hang, scapular control, hollow/dead bug. Skip if studying is urgent.', whyThisDay: 'Tuesday starts later but has evening university, so light work fits better than a hard workout.' },
      { day: 'Wednesday', priority: 'Recovery', timing: 'June 1–19: very heavy school + university day', exactTask: 'No workout. Do only posture/mobility if possible.', whyThisDay: 'Wednesday is the worst day for training because it is long and packed.' },
      { day: 'Thursday', priority: 'Main', workoutId: 'upper-pull-posture', timing: 'June 1–19: after school/lunch or evening', exactTask: 'Upper Pull + Posture. Prioritize pull-up quality, rowing/backpack rows, reverse fly/Y-T-W work, and hollow/dead bug control.', whyThisDay: 'Thursday is the best pull anchor before the long Friday.' },
      { day: 'Friday', priority: 'Optional', timing: 'June 1–19: after school only if energy is okay', exactTask: 'Walk 15–30 minutes or do a short mobility reset. Do not force a hard session after a long school day.', whyThisDay: 'Friday is long, so using it as a required workout would hurt consistency.' },
      { day: 'Saturday', priority: 'Main', workoutId: 'legs-core-athletic', timing: 'June 1–19: morning before family time, or evening if morning is not possible', exactTask: 'Legs + Core + Athletic Base. Squats, lunges/split squats, glute bridge, wall sit, plank, and cooldown.', whyThisDay: 'Saturday morning is open before family time and is the best weekly lower-body anchor.' },
    ],
    weeklyAlternates: [
      {
        label: 'June 20–30 open-summer division',
        subtitle: 'Use this after school ends on June 20. This open-summer block continues through July 11, but inside Month 1 it covers June 20–30. There is no school and no university in this block, only Sunday piano, so Monday and Thursday can be calm main anchors instead of being avoided.',
        weeklyDays: [
          { day: 'Sunday', priority: 'Recovery', timing: 'Piano 16:00–17:20', exactTask: 'Recovery, light walk, posture routine, and weekly planning. No hard workout.', whyThisDay: 'Piano day is better used for setup and recovery.' },
          { day: 'Monday', priority: 'Main', workoutId: 'upper-push-core', timing: 'Open early-summer day; afternoon or evening works well', exactTask: 'Upper Push + Core. Keep it controlled: push-ups, safe dips only if shoulders feel good, pike push-ups, and side plank work.', whyThisDay: 'With no university yet, Monday becomes the best early-summer start-of-week anchor.' },
          { day: 'Tuesday', priority: 'Optional', workoutId: 'skill-recovery-conditioning', timing: 'Any comfortable time', exactTask: 'Optional 15–20 minute recovery/skill session or easy walk. Skip it if Monday’s workout created soreness or if studying is more important.', whyThisDay: 'Tuesday is open in this block, but it should support recovery rather than become a fourth hard day.' },
          { day: 'Wednesday', priority: 'Recovery', timing: 'Open day', exactTask: 'Recovery, walking, and five-minute posture routine. No main workout unless Monday was missed.', whyThisDay: 'A midweek recovery day keeps Thursday’s pulling session high-quality.' },
          { day: 'Thursday', priority: 'Main', workoutId: 'upper-pull-posture', timing: 'Free day; late morning, afternoon, or evening', exactTask: 'Upper Pull + Posture. Pull-ups, rows, rear delts, and hollow/dead bug work.', whyThisDay: 'Thursday is the best open summer training day.' },
          { day: 'Friday', priority: 'Optional', workoutId: 'skill-recovery-conditioning', timing: 'Any comfortable time', exactTask: 'Optional skill/recovery session or outdoor walk. Keep it light and technical.', whyThisDay: 'Open day; good for extra skill practice without crowding main workouts.' },
          { day: 'Saturday', priority: 'Main', workoutId: 'legs-core-athletic', timing: 'Morning preferred', exactTask: 'Legs + Core + Athletic Base. Use this as the third required session.', whyThisDay: 'Open day and good spacing after Thursday.' },
        ],
      },
    ],
    trackingFocus: ['Workout habit', 'Clean form', 'Phone away before bed', 'Dinner/protein consistency', 'Sleep opportunity', 'Smooth switch to summer schedule'],
    safetyNotes: ['No max tests in Month 1.', 'Walking is enough conditioning for now.', 'Stop any exercise that causes sharp pain, shoulder pinching, dizziness, or unusual chest symptoms.'],
  },
  {
    month: 2,
    calendarMonth: 'July 2026',
    title: 'Consistency and Volume',
    phaseGoal: 'Use the full summer schedule to make training consistent while slowly increasing quality volume.',
    generalExplanation: 'Month 2 is July and it has two different summer blocks. July 1–11 is open summer: no school and no university yet, with only Sunday piano as a fixed commitment. July 12–31 is summer plus university: Monday has two university blocks, Tuesday has evening university, Wednesday has two university blocks, and Thursday/Friday/Saturday are open. The app therefore uses an open-summer split before July 12 and switches to the university-summer split from July 12 onward. This keeps the plan realistic instead of treating all July weeks as equally busy.',
    bestWeeklySplit: 'July 1–11 open-summer split: Monday = Upper Push + Core, Thursday = Upper Pull + Posture, Saturday = Legs + Core + Athletic Base, with Tuesday or Friday optional. July 12–31 university-summer split: Tuesday = Upper Push + Core before evening university, Thursday = Upper Pull + Posture, Saturday = Legs + Core + Athletic Base, with Friday optional skill/recovery.',
    expectedWeeklyTime: 'Three required sessions: about 95–125 minutes per week. Optional skill/recovery adds 15–25 minutes. Daily posture/mobility remains 5 minutes and should feel easy. July 1–11 can feel slightly easier because there is no university; July 12–31 should protect recovery around the heavy Monday/Wednesday university blocks.',
    intensityRule: 'Most sets should end with 1–3 reps in reserve. July can add a little volume, but only while reps stay clean and sleep does not get worse.',
    progressionRule: 'Add a small amount of total weekly work: one extra set on one exercise, 1–2 extra reps on selected sets, a slower eccentric, or a cleaner range of motion. Do not increase everything at once.',
    deloadRule: 'Every fourth week, or any week with poor sleep or high academic pressure, reduce total sets by about one-third. A deload is a planned reset, not a failure.',
    mainTargets: ['3 workouts per week through both July schedule blocks', 'More total pull-up and push-up volume', 'Better control on dips and pike push-ups', 'Dinner becomes more reliable', 'Optional skill/recovery day appears only when useful', 'No elbow/shoulder irritation from added volume'],
    weeklyDays: [
      { day: 'Sunday', priority: 'Recovery', timing: 'Piano 16:00–17:20', exactTask: 'Recovery, light walk, posture routine, and weekly planning. No hard workout.', whyThisDay: 'Sunday should set up the week rather than create fatigue before Monday.' },
      { day: 'Monday', priority: 'Recovery', timing: 'University 8:45–12:15 and 17:45–21:15', exactTask: 'No main workout. Short walk or posture only.', whyThisDay: 'Two university blocks make Monday too crowded for consistent training.' },
      { day: 'Tuesday', priority: 'Main', workoutId: 'upper-push-core', timing: 'Late morning or afternoon before 18:00 university', exactTask: 'Upper Push + Core. Add 1–2 total reps compared with last week only if form is clean.', whyThisDay: 'Tuesday has one evening university block, so earlier in the day is the best first training window.' },
      { day: 'Wednesday', priority: 'Recovery', timing: 'University 8:45–12:15 and 17:45–21:15', exactTask: 'Recovery only. Five-minute posture routine if possible.', whyThisDay: 'A second double-university day should protect recovery between Tuesday and Thursday.' },
      { day: 'Thursday', priority: 'Main', workoutId: 'upper-pull-posture', timing: 'Free day; use late morning, afternoon, or evening', exactTask: 'Upper Pull + Posture. Aim for more total clean pull-up volume than Month 1.', whyThisDay: 'Thursday is the best open summer training day and the strongest pull anchor.' },
      { day: 'Friday', priority: 'Optional', workoutId: 'skill-recovery-conditioning', timing: 'Any comfortable time', exactTask: 'Optional 15–25 minute skill/recovery session: active hangs, scap pulls, hollow holds, planche lean prep, and an easy walk. Skip if tired.', whyThisDay: 'Open day; good for technical practice without stealing recovery from Saturday.' },
      { day: 'Saturday', priority: 'Main', workoutId: 'legs-core-athletic', timing: 'Morning preferred', exactTask: 'Legs + Core + Athletic Base. Add time to wall sit or improve lunge quality.', whyThisDay: 'Open day and good spacing after Thursday.' },
    ],
    weeklyAlternates: [
      {
        label: 'July 1–11 open-summer division',
        subtitle: 'Use this before the summer university schedule starts on July 12. There is no school and no university yet, so the plan can use Monday without crowding recovery.',
        weeklyDays: [
          { day: 'Sunday', priority: 'Recovery', timing: 'Piano 16:00–17:20', exactTask: 'Recovery, light walk, posture routine, and weekly planning. No hard workout.', whyThisDay: 'Piano day is better used for setup and recovery.' },
          { day: 'Monday', priority: 'Main', workoutId: 'upper-push-core', timing: 'Open day; afternoon or evening', exactTask: 'Upper Push + Core. Add 1–2 total reps compared with June only if form is clean.', whyThisDay: 'Before university starts, Monday is a reliable first training anchor.' },
          { day: 'Tuesday', priority: 'Optional', workoutId: 'skill-recovery-conditioning', timing: 'Any comfortable time', exactTask: 'Optional 15–20 minute skill/recovery: easy walk, active hangs, scapular control, hollow/dead bug. Keep it easy.', whyThisDay: 'Open day, but optional so volume does not jump too fast.' },
          { day: 'Wednesday', priority: 'Recovery', timing: 'Open day', exactTask: 'Recovery, walk, or posture routine. No required workout unless Monday was missed.', whyThisDay: 'Recovery here protects Thursday pull quality.' },
          { day: 'Thursday', priority: 'Main', workoutId: 'upper-pull-posture', timing: 'Open day; late morning, afternoon, or evening', exactTask: 'Upper Pull + Posture. Aim for more total clean pull-up volume than Month 1.', whyThisDay: 'Thursday is the best open pull-progress day.' },
          { day: 'Friday', priority: 'Optional', workoutId: 'skill-recovery-conditioning', timing: 'Any comfortable time', exactTask: 'Optional skill/recovery or outdoor walk. Skip if tired or sore.', whyThisDay: 'A useful technical day without crowding Saturday.' },
          { day: 'Saturday', priority: 'Main', workoutId: 'legs-core-athletic', timing: 'Morning preferred', exactTask: 'Legs + Core + Athletic Base. Add time to wall sit or improve lunge quality.', whyThisDay: 'Open day and good spacing after Thursday.' },
        ],
      },
    ],
    trackingFocus: ['Weekly completion percent', 'Total pull-up reps', 'Push-up set quality', 'Dinner consistency', 'Energy after workouts'],
    safetyNotes: ['Volume should rise slowly.', 'Do not chase soreness.', 'If elbows or shoulders feel irritated, reduce pull-up/dip volume before removing the whole workout.'],
  },
  {
    month: 3,
    calendarMonth: 'August 2026',
    title: 'Strength Progression',
    phaseGoal: 'Use the last full summer month to get stronger at the main calisthenics patterns while keeping the plan realistic around university blocks.',
    generalExplanation: 'Month 3 is August, which is fully summer plus university schedule. Sunday has piano, Monday has two university blocks, Tuesday has evening university, Wednesday has two university blocks, and Thursday/Friday/Saturday are open. This is still one of the best months for consistent progress because there is no school, but the plan avoids Monday and Wednesday because those days are crowded. The main split stays Tuesday, Thursday, and Saturday. The difference from July is that the exercises become slightly harder: more strict pull-up volume, more controlled dips/push-ups, more challenging leg variations, and small skill-prep progressions.',
    bestWeeklySplit: 'August summer split: Tuesday = Upper Push + Core, Thursday = Upper Pull + Posture, Saturday = Legs + Core + Athletic Base. Friday = optional Skill + Recovery + Light Conditioning. Monday and Wednesday are recovery because of university.',
    expectedWeeklyTime: 'Three required workouts: 100–130 minutes per week. Optional Friday: 15–25 minutes. Walks can be added on free days, but hard running is still not required.',
    intensityRule: 'Main sets can be a little harder than Month 1: usually 1–2 reps in reserve, never ugly failure. Stop skill work before shaking ruins position.',
    progressionRule: 'Progress with harder variations only after the current version reaches the top of the range with clean form. Good options: slower negatives, paused push-ups, feet-elevated push-ups, better pike push-up range, more total pull-up clusters, or a light backpack for legs.',
    deloadRule: 'If joints feel more beat up than muscles, reduce dip/pull-up volume immediately and keep legs/core/posture easier for 5–7 days.',
    mainTargets: ['Stronger pull-ups and dips', 'Cleaner pike push-ups', 'More serious leg work', 'Basic skill prep without rushing planche/front lever', 'Maintain sleep and food consistency through summer'],
    weeklyDays: [
      { day: 'Sunday', priority: 'Recovery', timing: 'Piano 16:00–17:20', exactTask: 'Recovery, posture routine, and weekly planning. Optional relaxed walk.', whyThisDay: 'Sunday should prepare the week and not compete with Monday university.' },
      { day: 'Monday', priority: 'Recovery', timing: 'University 8:45–12:15 and 17:45–21:15', exactTask: 'No main workout. Posture only or easy walk.', whyThisDay: 'Two university blocks make this a poor training anchor.' },
      { day: 'Tuesday', priority: 'Main', workoutId: 'upper-push-core', timing: 'Late morning or afternoon before 18:00 university', exactTask: 'Upper Push + Core. Slightly harder push-up variation, controlled dips, pike push-ups, side plank.', whyThisDay: 'Best first main session of the week during summer.' },
      { day: 'Wednesday', priority: 'Recovery', timing: 'University 8:45–12:15 and 17:45–21:15', exactTask: 'Recovery only. Five-minute mobility/posture.', whyThisDay: 'Protects Thursday performance.' },
      { day: 'Thursday', priority: 'Main', workoutId: 'upper-pull-posture', timing: 'Open day', exactTask: 'Upper Pull + Posture. Pull-ups/chin-ups, rows, reverse fly/Y-T-W, hollow/dead bug.', whyThisDay: 'Open day and strongest pull-progress day.' },
      { day: 'Friday', priority: 'Optional', workoutId: 'skill-recovery-conditioning', timing: 'Open day', exactTask: 'Optional technical skill day: active hang, scap pulls, tuck/hollow, wall handstand prep, planche lean. No max skill attempts.', whyThisDay: 'Open day; useful for calisthenics interest without overloading main sessions.' },
      { day: 'Saturday', priority: 'Main', workoutId: 'legs-core-athletic', timing: 'Morning preferred', exactTask: 'Legs + Core + Athletic Base. Backpack squats or split squats if bodyweight is easy, glute bridges, wall sit, plank.', whyThisDay: 'Open day and best lower-body/core anchor.' },
    ],
    trackingFocus: ['Best clean pull-up set', 'Total pull-up reps', 'Push-up variation used', 'Dips without shoulder discomfort', 'Leg progression', 'Bodyweight trend if tracking'],
    safetyNotes: ['Harder does not mean sloppier.', 'No human flag work yet; it is too demanding for the current phase.', 'Planche/front-lever work stays as short prep drills only.'],
  },
  {
    month: 4,
    calendarMonth: 'September 2026',
    title: 'Hypertrophy, School Transition, and Skill Progression',
    phaseGoal: 'Keep summer strength progress while transitioning back to school, finish the summer university block on September 10, then use the no-university school-only window through October 24.',
    generalExplanation: 'Month 4 is September, a transition month. School is expected to return in the mornings or early afternoons Sunday–Friday, and the summer university schedule still continues only until September 10. That means September 1–10 may be crowded, especially Monday and Wednesday with two university blocks and Tuesday evening university. From September 11 through October 24 there is no university at all, so the plan becomes school-only: use Monday, Thursday, and Saturday as the main anchors unless the new school timetable proves those days are unusually crowded.',
    bestWeeklySplit: 'September 1–10 transition split: Thursday = Upper Push, Friday = Upper Pull, Saturday = Legs/Core, because Monday/Tuesday/Wednesday are university-heavy. September 11–30 school-only/no-university estimate: Monday = Upper Push, Thursday = Upper Pull, Saturday = Legs/Core, with Tuesday optional skill only if school load is manageable.',
    expectedWeeklyTime: 'Early September: about 80–115 minutes because the week is crowded. Later September: about 95–135 minutes. Optional skill work stays optional.',
    intensityRule: 'The goal is not to prove summer progress immediately during school transition. Keep main sets at 1–3 reps in reserve and reduce volume during the first school weeks if sleep drops.',
    progressionRule: 'Keep the same variations from August at first. Progress only after two stable school weeks with good sleep, no joint irritation, and consistent food.',
    deloadRule: 'If school return feels heavy, use a two-day backup for one week: Thursday Upper Pull + Push combined, Saturday Legs/Core. Resume three days when stable.',
    mainTargets: ['Do not lose the habit when school returns', 'Keep shoulder/back volume for posture and V-shape', 'Do skill prep only if wrists/shoulders feel good', 'Protect sleep while school routine changes', 'Keep dinner/protein anchors consistent'],
    weeklyDays: [
      { day: 'Sunday', priority: 'Recovery', timing: 'School morning likely; use as planning/recovery', exactTask: 'Posture routine, light walk, weekly planning. No required workout.', whyThisDay: 'Sunday may include school and possibly piano; it is better used to protect the week.' },
      { day: 'Monday', priority: 'Main', workoutId: 'upper-push-core', timing: 'After school/free block after September 10', exactTask: 'Upper Push + Core. During September 1–10, skip this as a main session if university makes the day too crowded.', whyThisDay: 'After the September 10 university ending date, Monday becomes a useful school-week anchor again because there is no university until October 25.' },
      { day: 'Tuesday', priority: 'Optional', workoutId: 'skill-recovery-conditioning', timing: 'Only if school load and sleep allow', exactTask: 'Short skill practice only: wall handstand prep, active hang, hollow, planche lean. Skip during tests or fatigue.', whyThisDay: 'Useful for skills, but optional because school load is uncertain.' },
      { day: 'Wednesday', priority: 'Recovery', timing: 'University-heavy only until September 10; after that there is no university until October 25', exactTask: 'Rest, posture, or light walking.', whyThisDay: 'Wednesday was previously very heavy and should not be assumed free.' },
      { day: 'Thursday', priority: 'Main', workoutId: 'upper-pull-posture', timing: 'After school/free block or evening', exactTask: 'Upper Pull + Posture. In September 1–10, this may become the first main workout of the week.', whyThisDay: 'Good spacing and high value for posture/V-shape.' },
      { day: 'Friday', priority: 'Optional', workoutId: 'upper-push-core', timing: 'After school only if energy is good; especially useful September 1–10', exactTask: 'During September 1–10, use Friday as Upper Push + Core if Monday was skipped. From September 11 onward, use Friday as walking/mobility only because the school-only split should already have Monday/Thursday/Saturday.', whyThisDay: 'Early September needs a backup main day because Monday/Tuesday/Wednesday are crowded; after September 10, Friday should become optional again.' },
      { day: 'Saturday', priority: 'Main', workoutId: 'legs-core-athletic', timing: 'Morning preferred', exactTask: 'Legs + Core + Athletic Base. Keep development balanced.', whyThisDay: 'Best day for a calmer, complete lower-body/core session.' },
    ],
    weeklyAlternates: [
      {
        label: 'September 1–10 transition division',
        subtitle: 'Use this only for September 1–10, while school is restarting and the summer university schedule still runs. From September 11 to October 24 there is no university, so the main school-only split is used instead.',
        weeklyDays: [
          { day: 'Sunday', priority: 'Recovery', timing: 'School/piano possible', exactTask: 'Recovery, posture, light walk, weekly planning.', whyThisDay: 'Too uncertain for a reliable hard workout.' },
          { day: 'Monday', priority: 'Recovery', timing: 'School + university 8:45–12:15 and 17:45–21:15', exactTask: 'No main workout. Posture only.', whyThisDay: 'Too crowded during the transition.' },
          { day: 'Tuesday', priority: 'Recovery', timing: 'School + university 18:00–21:20', exactTask: 'Optional walk or posture only.', whyThisDay: 'Evening university makes recovery more useful than hard training.' },
          { day: 'Wednesday', priority: 'Recovery', timing: 'School + university 8:45–12:15 and 17:45–21:15', exactTask: 'No main workout.', whyThisDay: 'Most crowded day.' },
          { day: 'Thursday', priority: 'Main', workoutId: 'upper-pull-posture', timing: 'After school/free block', exactTask: 'Upper Pull + Posture. Keep volume moderate.', whyThisDay: 'First realistic main session of the week.' },
          { day: 'Friday', priority: 'Main', workoutId: 'upper-push-core', timing: 'After school if energy is okay', exactTask: 'Upper Push + Core. Keep it 30–35 minutes, no max testing.', whyThisDay: 'Provides the second main session after crowded university days.' },
          { day: 'Saturday', priority: 'Main', workoutId: 'legs-core-athletic', timing: 'Morning preferred', exactTask: 'Legs + Core + Athletic Base.', whyThisDay: 'Best lower-body/core anchor.' },
        ],
      },
    ],
    trackingFocus: ['Workout consistency during school return', 'Sleep timing', 'Protein opportunities', 'Posture notes', 'Joint comfort'],
    safetyNotes: ['Skill prep should feel controlled, not like a max attempt.', 'Wrists must be warmed up before planche/handstand work.', 'If school gets intense, use the two-day backup temporarily.'],
  },
  {
    month: 5,
    calendarMonth: 'October 2026',
    title: 'Higher Performance and Conditioning',
    phaseGoal: 'Keep strength moving while adding a small amount of work capacity, then adapt when the new university semester starts on October 25.',
    generalExplanation: 'Month 5 is October. From October 1–24, the confirmed assumption is school without university, so the Monday/Thursday/Saturday split is realistic. From October 25, the new university semester starts and will probably add three evening blocks around 18:00–21:15. Because the exact days are unknown, the app keeps the normal split but the plan includes a clear rule: if university lands on a planned workout evening, move that workout to the nearest open day and use the minimum session if needed. Conditioning remains conservative because running caused occasional mild chest tightness in the intake.',
    bestWeeklySplit: 'October 1–24 no-university school split: Monday = Upper Push, Thursday = Upper Pull, Saturday = Legs/Core. October 25–31 and onward: keep Monday/Thursday/Saturday only if the new university evenings allow it; otherwise move the affected workout to Tuesday or Friday and keep Saturday as the strongest anchor.',
    expectedWeeklyTime: 'Three strength sessions plus one short optional walk/conditioning: about 110–155 minutes total if all happens. Busy new-university weeks can use two main sessions plus one minimum session.',
    intensityRule: 'Strength work stays high quality. Conditioning should be moderate and controlled, never crushing. Finish feeling better, not destroyed.',
    progressionRule: 'Add conditioning by time first, not intensity: 2–5 more minutes of walking or one extra easy circuit round. Do not add speed and volume at the same time.',
    deloadRule: 'If sleep, soreness, school stress, or the new university semester worsens recovery, remove the optional conditioning day first before changing the strength plan.',
    mainTargets: ['Better work capacity', '3 strength workouts remain consistent most weeks', 'More confident outdoor training', 'Walking/conditioning improves without symptoms', 'Recovery tracking becomes automatic', 'Adapt smoothly when new university starts October 25'],
    weeklyDays: [
      { day: 'Sunday', priority: 'Recovery', timing: 'Prep day', exactTask: 'Recovery, planning, posture routine. If the new university week is starting, review the calendar and choose workout windows.', whyThisDay: 'Protects the week from starting too hard.' },
      { day: 'Monday', priority: 'Main', workoutId: 'upper-push-core', timing: 'After school/free block if no university conflict', exactTask: 'Upper Push + Core. If new university lands here after October 25, move this workout to Tuesday or use the minimum version.', whyThisDay: 'Stable anchor before the new semester; flexible after October 25.' },
      { day: 'Tuesday', priority: 'Optional', workoutId: 'skill-recovery-conditioning', timing: 'If there is a free block before evening work', exactTask: 'Optional conditioning: 15–20 minute brisk walk or easy skill circuit. No hard running. Can become a makeup Push day if Monday is blocked.', whyThisDay: 'Good for light capacity work or a backup slot.' },
      { day: 'Wednesday', priority: 'Recovery', timing: 'Assume possible university evening after October 25', exactTask: 'Rest, posture, or light walking.', whyThisDay: 'Protects recovery between main sessions.' },
      { day: 'Thursday', priority: 'Main', workoutId: 'upper-pull-posture', timing: 'After school/free block if no university conflict', exactTask: 'Upper Pull + Posture. Pull-ups remain priority. If university lands here, move this to Friday.', whyThisDay: 'Best weekly pull anchor when available.' },
      { day: 'Friday', priority: 'Optional', timing: 'Only if energy is good', exactTask: 'Walk outside, mobility, or makeup Upper Pull if Thursday was blocked. Skip if tired.', whyThisDay: 'Friday should be flexible, not a failure point.' },
      { day: 'Saturday', priority: 'Main', workoutId: 'legs-core-athletic', timing: 'Morning preferred', exactTask: 'Legs + Core + Athletic Base. Add a short finisher only if recovery is excellent.', whyThisDay: 'Best day for controlled lower-body work and the most reliable anchor when university returns.' },
    ],
    trackingFocus: ['Workouts this week', 'Walking/conditioning minutes', 'Breathing comfort', 'Sleep quality', 'Soreness', 'New-semester schedule conflicts'],
    safetyNotes: ['Stop conditioning for chest pain, strong tightness, wheezing, dizziness, or faintness.', 'Do not add running speed.', 'Walking is valid conditioning.', 'If the new university schedule is heavy, use the two-day backup instead of forcing four sessions.'],
  },
  {
    month: 6,
    calendarMonth: 'November 2026',
    title: 'Consolidation, Testing, and Next Step',
    phaseGoal: 'Lock in what worked, test cleanly, and prepare the next six-month phase without burning out during school + new university semester.',
    generalExplanation: 'Month 6 is November. By now the new university semester is running, probably three evenings per week, while school continues in the mornings or afternoons. This is why the final month uses familiar anchors and conservative testing. The goal is not to destroy yourself to prove progress; it is to collect useful evidence: strength numbers, consistency, bodyweight/measurements if desired, posture, energy, and confidence.',
    bestWeeklySplit: 'November default: Monday = Upper Push, Thursday = Upper Pull, Saturday = Legs/Core if those evenings are open. If new university occupies Monday/Thursday, shift that workout to Tuesday/Friday. Weeks 1–2 normal training, Week 3 clean testing, Week 4 lighter review and next-plan setup.',
    expectedWeeklyTime: 'Normal weeks: 90–140 minutes. Testing week: similar time but fewer accessories. Review week: 60–90 minutes. During exam weeks, two main sessions plus daily posture is acceptable.',
    intensityRule: 'Testing means clean reps only. A failed ugly rep does not count and is not useful data.',
    progressionRule: 'Do not chase new hard variations in the final week. Test the movements that were trained: push-ups, pull-ups/chin-ups, dips if safe, wall sit, plank/hollow, split squat or squat quality.',
    deloadRule: 'The final 5–7 days should reduce volume so the body feels fresh and the next phase starts well.',
    mainTargets: ['Clean benchmark tests', 'Review habit trends', 'Decide next phase goals', 'Keep sleep and food consistent', 'Avoid end-of-plan burnout', 'Use the dashboard data to decide what actually worked'],
    weeklyDays: [
      { day: 'Sunday', priority: 'Recovery', timing: 'Prep/review day', exactTask: 'Review dashboard trends and write one short note about what is working. Plan workout windows around school/university.', whyThisDay: 'Month 6 needs reflection, not just training.' },
      { day: 'Monday', priority: 'Main', workoutId: 'upper-push-core', timing: 'After school/free block if not blocked by university', exactTask: 'Weeks 1–2 normal push. Week 3 test push-ups/dips only with clean form. Week 4 easier push technique. Shift to Tuesday if Monday evening is blocked.', whyThisDay: 'Consistent anchor when available; easy to move if university conflicts.' },
      { day: 'Tuesday', priority: 'Optional', workoutId: 'skill-recovery-conditioning', timing: 'Short session only if recovered; backup push slot if Monday was blocked', exactTask: 'Skill practice only if recovered. No max skill attempts. Can become a makeup push workout if Monday was blocked.', whyThisDay: 'Keeps movement quality without interfering with tests.' },
      { day: 'Wednesday', priority: 'Recovery', timing: 'Assume possible university evening', exactTask: 'Rest, posture, or light walking.', whyThisDay: 'Protects recovery between tests.' },
      { day: 'Thursday', priority: 'Main', workoutId: 'upper-pull-posture', timing: 'After school/free block if not blocked by university', exactTask: 'Weeks 1–2 normal pull. Week 3 test pull-ups/hang. Week 4 easier pull technique. Shift to Friday if Thursday is blocked.', whyThisDay: 'Good spacing after Monday when available.' },
      { day: 'Friday', priority: 'Recovery', timing: 'After long school week; backup pull slot if Thursday was blocked', exactTask: 'Walk or rest. If Thursday was blocked and energy is good, do Upper Pull + Posture but keep it controlled.', whyThisDay: 'Avoids tired testing while preserving flexibility.' },
      { day: 'Saturday', priority: 'Main', workoutId: 'legs-core-athletic', timing: 'Morning preferred', exactTask: 'Weeks 1–2 normal legs. Week 3 test wall sit/plank/squat quality. Week 4 easy full-body review.', whyThisDay: 'Best day for controlled lower-body testing.' },
    ],
    trackingFocus: ['Push-up benchmark', 'Pull-up benchmark', 'Wall sit/plank', 'Workout consistency', 'Sleep/food/habit trends', 'Confidence and energy'],
    safetyNotes: ['No daily max testing.', 'Testing should stop before pain or form collapse.', 'Use trends, not one day, to judge progress.', 'School and university pressure outrank forcing a perfect final month.'],
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
