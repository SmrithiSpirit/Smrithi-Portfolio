import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, User, Target, Frown, Sparkles, Clock, Brain, CheckCircle, XCircle, ChevronLeft, ChevronRight, GraduationCap, Users, Cpu, BarChart2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

// ─── Data ────────────────────────────────────────────────────────────────────

const personas = [
  {
    id: 1,
    name: 'Aditi Sharma',
    role: 'The Visual Collaborator',
    type: 'Student',
    avatar: '👩‍💻',
    age: 20,
    course: 'B.Tech – Computer Science, 2nd Year',
    personality: 'Extrovert — social, energetic, proactive',
    learningStyle: 'Visual learner — flowcharts, videos, interactive diagrams',
    quote: '"I\'d love one space where I can find like-minded coders and manage projects without the chat chaos."',
    goals: [
      'Collaborate on hackathons and find complementary teammates',
      'Manage projects in one unified platform',
      'Visualise discussions and share code snippets easily',
    ],
    frustrations: [
      'Juggles multiple group chats',
      'Important updates get lost in threads',
      'No single platform for her domain',
    ],
    needs: ['Single platform for visualising discussions', 'Code snippet sharing', 'Domain-specific study partner finder'],
  },
  {
    id: 2,
    name: 'Rohit Iyer',
    role: 'The Efficient Grasper',
    type: 'Student',
    avatar: '👨‍🎓',
    age: 21,
    course: 'B.Tech – Mechanical Engineering, 3rd Year',
    personality: 'Ambivert — focused, balanced between solo and group work',
    learningStyle: 'Fast grasper — retains quickly, prefers concise structured content',
    quote: '"Finding the right group shouldn\'t be luck — it should be smart and quick."',
    goals: [
      'Form efficient study groups for exam prep',
      'Exchange simplified, structured notes',
      'Match with peers at the same pace',
    ],
    frustrations: [
      'Group formation is random',
      'Ends up with teammates who don\'t match his pace',
      'No smart filtering for study partners',
    ],
    needs: ['AI-driven peer recommendations', 'Course and study-rhythm matching', 'Efficient group formation flow'],
  },
  {
    id: 3,
    name: 'Neha Menon',
    role: 'The Reflective Learner',
    type: 'Student',
    avatar: '👩‍🔬',
    age: 22,
    course: 'B.Tech – EEE, 4th Year',
    personality: 'Introvert — observant, calm, prefers small groups',
    learningStyle: 'Slow, reflective — writes and revises concepts repeatedly',
    quote: '"I learn best when I have time to think things through — not when the chat keeps buzzing."',
    goals: [
      'Find classmates with a similar learning rhythm',
      'Seek quiet, focused discussion spaces',
      'Get personalised, resource-based guidance',
    ],
    frustrations: [
      'Overwhelmed by noisy communication platforms',
      'Group discussions move too fast',
      'Hard to find peers with the same pace',
    ],
    needs: ['Quiet collaboration spaces', 'Peer matching by learning pace', 'Personalised lecturer guidance'],
  },
  {
    id: 4,
    name: 'Dr. Karan Mehta',
    role: 'The Structured Mentor',
    type: 'Lecturer',
    avatar: '👨‍🏫',
    age: 40,
    course: 'Mechanical Engineering Department',
    personality: 'Introvert — organised, thoughtful, prefers well-documented teaching',
    learningStyle: 'Structured explanations, visual presentations, self-paced material',
    quote: '"If I could see which students need extra help — without chasing emails — teaching would be smoother."',
    goals: [
      'Help students form balanced groups without manual effort',
      'Share reliable study resources efficiently',
      'Surface at-risk students early',
    ],
    frustrations: [
      'Communication gaps across multiple channels',
      'Hard to monitor participation and struggles',
      'Manual group creation is time-consuming',
    ],
    needs: ['Streamlined group creation tool', 'Lecture note sharing platform', 'Early-warning dashboard for at-risk students'],
  },
  {
    id: 5,
    name: 'Prof. Anjali Reddy',
    role: 'The Engaging Facilitator',
    type: 'Lecturer',
    avatar: '👩‍🏫',
    age: 35,
    course: 'Computer Science Department',
    personality: 'Extrovert — approachable, lively, enjoys interaction and innovation',
    learningStyle: 'Collaborative and applied — projects, peer mentoring, competitions',
    quote: '"Students learn best when they feel part of something — not just sitting through lectures."',
    goals: [
      'Keep students motivated and informed about opportunities',
      'Promote group learning and peer mentoring',
      'Track real-time engagement across groups',
    ],
    frustrations: [
      'Managing multiple group projects across platforms is time-consuming',
      'Hard to track engagement in real time',
      'Communication threads are scattered',
    ],
    needs: ['Smart grouping dashboard', 'Resource sharing tool', 'Real-time engagement tracking'],
  },
];

const mvpFlowSteps = [
  { num: 1, title: 'User Onboarding & Profile Setup', desc: 'Students and lecturers enter course, year, subject interests, learning preferences, and collaboration style to build an AI-ready profile.' },
  { num: 2, title: 'AI-Driven Matchmaking Engine', desc: 'Algorithm matches students on shared subjects, complementary learning styles, and availability. Outputs recommended groups with a match confidence score.' },
  { num: 3, title: 'Group Creation & Collaboration Hub', desc: 'Formed groups get a chat interface, file sharing, and a shared calendar synced with class schedules. Lecturers can post materials.' },
  { num: 4, title: 'Feedback Loop', desc: 'Post-session ratings from students and lecturers feed back into the AI to refine future recommendations continuously.' },
];

const mvpFeatures = [
  { category: 'Onboarding', feature: 'User registration + learning preference form', purpose: 'Collect input for matchmaking' },
  { category: 'AI Matchmaker', feature: 'Algorithm-based peer grouping', purpose: 'Core problem–solution validation' },
  { category: 'Collaboration', feature: 'Basic chat + file sharing', purpose: 'Enable immediate group interaction' },
  { category: 'Group Dashboard', feature: 'List of current groups + group summary', purpose: 'Simple group management' },
  { category: 'Lecturer View', feature: 'Monitor or approve study groups', purpose: 'Bridge between students and faculty' },
  { category: 'Feedback Loop', feature: 'Post-group surveys', purpose: 'Measure solution effectiveness' },
];

const validationMetrics = [
  { metric: 'Engagement', indicator: '60%+ active users within 2 weeks of launch' },
  { metric: 'Group Match Quality', indicator: '70%+ satisfaction with AI-recommended peers' },
  { metric: 'Retention', indicator: '50%+ groups remain active after 1 month' },
  { metric: 'Lecturer Adoption', indicator: '≥30% of lecturers monitor or interact with groups' },
  { metric: 'Communication Reduction', indicator: '40% fewer group formation messages outside the platform' },
];

const userStories = [
  {
    title: 'Smart Profile Setup',
    as: 'Student',
    want: 'create a profile with my subjects, interests, and learning preferences',
    so: 'the AI can recommend the most compatible peers for study groups',
    criteria: [
      'System allows entering academic details (department, year, subjects)',
      'Student can select learning style and collaboration preferences',
      'After saving, system confirms data is ready for matchmaking',
    ],
  },
  {
    title: 'AI-Driven Group Recommendation',
    as: 'Student',
    want: 'the AI to suggest suitable study groups based on my profile',
    so: 'I can join a balanced and productive group quickly',
    criteria: [
      'AI recommends at least one group within 30 seconds of profile submission',
      'Suggested groups show member names, course alignment, and compatibility score',
      'User can accept or request an alternative match',
    ],
  },
  {
    title: 'Basic Collaboration Hub',
    as: 'Student',
    want: 'a simple space to chat and share notes with my group',
    so: 'we can collaborate effectively without external platforms',
    criteria: [
      'Each group has a dedicated chat interface with basic text communication',
      'Users can upload and share files (PDF, images, docs)',
      'Shared content is visible to all group members instantly',
    ],
  },
  {
    title: 'Shared Group Calendar',
    as: 'Student',
    want: 'to view a shared calendar for group deadlines and sessions',
    so: 'I can stay organised with my teammates',
    criteria: [
      'Each group has a calendar linked to academic events and deadlines',
      'Users can add or edit shared study sessions',
      'All calendar changes sync in real time for every member',
    ],
  },
  {
    title: 'Feedback and Ratings',
    as: 'Student',
    want: 'to rate my study group experience',
    so: 'the AI can improve future group recommendations',
    criteria: [
      'After collaboration, students receive a short feedback form (1–5 stars + comments)',
      'Ratings influence the AI\'s next round of group recommendations',
      'Students can only rate after at least one active session',
    ],
  },
  {
    title: 'Lecturer Feedback Insights',
    as: 'Lecturer',
    want: 'to provide performance feedback on groups',
    so: 'I can help the system identify strong and weak collaborations',
    criteria: [
      'Lecturers can rate group collaboration quality and participation',
      'Feedback is tied to group IDs and stored for AI learning',
      'AI adjusts future group pairings using aggregated lecturer input',
    ],
  },
];

const techStack = [
  { layer: 'Frontend', tech: 'React.js / Flutter', reason: 'React.js provides a lightweight, component-based architecture ideal for web MVPs. Flutter enables a single codebase for web + mobile if campus product needs mobile adoption.' },
  { layer: 'Backend', tech: 'Node.js (Express) / Python (FastAPI)', reason: 'Node.js offers high concurrency for real-time chat. FastAPI is lightweight and asynchronous — ideal for integrating AI microservices written in Python.' },
  { layer: 'Database', tech: 'MongoDB / PostgreSQL', reason: 'MongoDB supports dynamic user profiles (fast iteration). PostgreSQL offers relational integrity for structured academic data. MVP starts with MongoDB.' },
  { layer: 'AI Layer', tech: 'Scikit-learn / TensorFlow Lite', reason: 'Python\'s rich ML ecosystem enables quick model development. TensorFlow Lite deploys lightweight recommendation models in production as a containerised microservice.' },
  { layer: 'Hosting', tech: 'AWS / Azure', reason: 'Both platforms offer scalable, secure hosting with integrated AI/ML, storage, and authentication — supporting growth from one campus pilot to multi-campus deployment.' },
];

const aarrr = [
  { stage: 'Acquisition', kpi: 'User Profile Completion Rate', formula: '(Users completing onboarding ÷ Total sign-ups) × 100', target: '≥ 75%', purpose: 'Measures user interest and readiness for the Matchmaker feature' },
  { stage: 'Activation', kpi: 'AI Match Acceptance Rate', formula: '(Users accepting AI-recommended group ÷ Total active users) × 100', target: '≥ 70%', purpose: 'Validates how well the AI connects users with relevant peers' },
  { stage: 'Retention', kpi: 'Active Group Continuity Rate', formula: '(Groups with ≥2 interactions/week ÷ Total groups formed) × 100', target: '≥ 60%', purpose: 'Indicates sustained engagement and collaboration quality' },
  { stage: 'Retention', kpi: 'Match Satisfaction Score', formula: 'Average rating (1–5) from post-match feedback surveys', target: '≥ 4.0 / 5', purpose: 'Measures perceived usefulness of AI-generated matches' },
];

// ─── Sub-components ───────────────────────────────────────────────────────────

const personaSlides = [
  { key: 'overview', label: 'Overview', icon: User },
  { key: 'goals', label: 'Goals', icon: Target },
  { key: 'frustrations', label: 'Frustrations', icon: Frown },
  { key: 'needs', label: 'Needs', icon: Sparkles },
] as const;

function PersonaCard({ persona }: { persona: typeof personas[number] }) {
  const [active, setActive] = useState(0);
  const [dir, setDir] = useState(1);

  const go = (next: number) => {
    setDir(next > active ? 1 : -1);
    setActive(next);
  };

  const { key, icon: Icon } = personaSlides[active];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="glass-card overflow-hidden flex flex-col"
    >
      <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 p-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-background/50 flex items-center justify-center text-xl">
            {persona.avatar}
          </div>
          <div>
            <h3 className="font-display text-base font-semibold">{persona.name}</h3>
            <p className="text-primary text-xs font-medium">{persona.role}</p>
            <p className="text-muted-foreground text-xs mt-0.5">{persona.type} · {persona.course}</p>
          </div>
        </div>
      </div>

      <div className="flex border-b border-white/10">
        {personaSlides.map((s, i) => (
          <button
            key={s.key}
            onClick={() => go(i)}
            className={`flex-1 py-2 text-xs font-medium transition-colors ${active === i ? 'text-primary border-b-2 border-primary' : 'text-muted-foreground hover:text-foreground'}`}
          >
            {s.label}
          </button>
        ))}
      </div>

      <div className="relative h-[160px] overflow-y-auto p-4 scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent">
        <AnimatePresence mode="wait" initial={false} custom={dir}>
          <motion.div
            key={key}
            custom={dir}
            initial={{ opacity: 0, x: dir * 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: dir * -40 }}
            transition={{ duration: 0.25 }}
          >
            <h4 className="font-semibold text-xs uppercase tracking-wider text-muted-foreground mb-3 flex items-center gap-2">
              <Icon className="w-3.5 h-3.5" /> {personaSlides[active].label}
            </h4>

            {key === 'overview' && (
              <div className="space-y-2 text-sm text-foreground/80">
                <p><span className="text-muted-foreground">Personality:</span> {persona.personality}</p>
                <p><span className="text-muted-foreground">Learning style:</span> {persona.learningStyle}</p>
                <p className="italic text-muted-foreground mt-3">{persona.quote}</p>
              </div>
            )}

            {key === 'goals' && (
              <ul className="space-y-2">
                {persona.goals.map((g) => (
                  <li key={g} className="flex items-start gap-2 text-sm text-foreground/80">
                    <CheckCircle className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />{g}
                  </li>
                ))}
              </ul>
            )}

            {key === 'frustrations' && (
              <ul className="space-y-2">
                {persona.frustrations.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-foreground/80">
                    <XCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />{f}
                  </li>
                ))}
              </ul>
            )}

            {key === 'needs' && (
              <ul className="space-y-2">
                {persona.needs.map((n) => (
                  <li key={n} className="flex items-start gap-2 text-sm text-foreground/80">
                    <Sparkles className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />{n}
                  </li>
                ))}
              </ul>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex items-center justify-between px-5 pb-4 mt-auto">
        <button onClick={() => go((active - 1 + personaSlides.length) % personaSlides.length)} className="p-1 rounded-full hover:bg-white/10 transition-colors text-muted-foreground hover:text-foreground">
          <ChevronLeft className="w-4 h-4" />
        </button>
        <div className="flex gap-1.5">
          {personaSlides.map((_, i) => (
            <button key={i} onClick={() => go(i)} className={`w-1.5 h-1.5 rounded-full transition-colors ${active === i ? 'bg-primary' : 'bg-white/20'}`} />
          ))}
        </div>
        <button onClick={() => go((active + 1) % personaSlides.length)} className="p-1 rounded-full hover:bg-white/10 transition-colors text-muted-foreground hover:text-foreground">
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </motion.div>
  );
}

const storySlides = userStories.map((s) => ({
  label: s.title,
  content: (
    <div>
      <p className="text-sm text-muted-foreground mb-4">
        <span className="text-foreground font-medium">As a {s.as}</span>, I want to {s.want} so that {s.so}.
      </p>
      <p className="text-xs uppercase tracking-wider text-muted-foreground mb-2 font-semibold">Acceptance Criteria</p>
      <ul className="space-y-2">
        {s.criteria.map((c) => (
          <li key={c} className="flex items-start gap-2 text-sm text-foreground/80">
            <CheckCircle className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />{c}
          </li>
        ))}
      </ul>
    </div>
  ),
}));

function SlideCarousel({ slides }: { slides: { label: string; content: React.ReactNode }[] }) {
  const [active, setActive] = useState(0);
  const [dir, setDir] = useState(1);

  const go = (next: number) => {
    setDir(next > active ? 1 : -1);
    setActive(next);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="glass-card overflow-hidden"
    >
      <div className="flex border-b border-white/10 overflow-x-auto">
        {slides.map((s, i) => (
          <button
            key={s.label}
            onClick={() => go(i)}
            className={`flex-1 min-w-max px-4 py-3 text-sm font-medium transition-colors whitespace-nowrap ${active === i ? 'text-primary border-b-2 border-primary' : 'text-muted-foreground hover:text-foreground'}`}
          >
            {s.label}
          </button>
        ))}
      </div>

      <div className="relative min-h-[220px] p-6 md:p-8 overflow-hidden">
        <AnimatePresence mode="wait" initial={false} custom={dir}>
          <motion.div
            key={active}
            custom={dir}
            initial={{ opacity: 0, x: dir * 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: dir * -50 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="font-display text-xl font-semibold mb-4">{slides[active].label}</h3>
            {slides[active].content}
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex items-center justify-between px-6 pb-5 pt-2 border-t border-white/10">
        <button onClick={() => go((active - 1 + slides.length) % slides.length)} className="p-1 rounded-full hover:bg-white/10 transition-colors text-muted-foreground hover:text-foreground">
          <ChevronLeft className="w-5 h-5" />
        </button>
        <div className="flex gap-2">
          {slides.map((_, i) => (
            <button key={i} onClick={() => go(i)} className={`h-1.5 rounded-full transition-all ${active === i ? 'w-6 bg-primary' : 'w-1.5 bg-white/20'}`} />
          ))}
        </div>
        <button onClick={() => go((active + 1) % slides.length)} className="p-1 rounded-full hover:bg-white/10 transition-colors text-muted-foreground hover:text-foreground">
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </motion.div>
  );
}

const techSlides = techStack.map((t) => ({
  label: t.layer,
  content: (
    <div>
      <p className="text-primary font-semibold mb-3">{t.tech}</p>
      <p className="text-sm text-muted-foreground leading-relaxed">{t.reason}</p>
    </div>
  ),
}));

function PersonaPairCarousel() {
  const pairs: (typeof personas)[] = [];
  for (let i = 0; i < personas.length; i += 2) {
    pairs.push(personas.slice(i, i + 2));
  }

  const [slide, setSlide] = useState(0);

  const go = (next: number) => setSlide(next);

  return (
    <div className="glass-card p-6 w-full">
      <div className="grid sm:grid-cols-2 gap-4 mb-6">
        {pairs[slide].map((p) => (
          <PersonaCard key={p.id} persona={p} />
        ))}
      </div>

      {/* Controls */}
      <div className="flex items-center justify-center gap-6">
        <button
          onClick={() => go((slide - 1 + pairs.length) % pairs.length)}
          className="p-2 rounded-full hover:bg-white/10 transition-colors text-muted-foreground hover:text-foreground border border-white/10"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <div className="flex gap-2">
          {pairs.map((_, i) => (
            <button
              key={i}
              onClick={() => go(i)}
              className={`h-2 rounded-full transition-all duration-300 ${slide === i ? 'w-6 bg-primary' : 'w-2 bg-white/20'}`}
            />
          ))}
        </div>

        <button
          onClick={() => go((slide + 1) % pairs.length)}
          className="p-2 rounded-full hover:bg-white/10 transition-colors text-muted-foreground hover:text-foreground border border-white/10"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      <p className="text-center text-xs text-muted-foreground mt-3">
        {slide + 1} / {pairs.length}
      </p>
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function CaseStudyCampusConnect() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-white/5">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex items-center h-16 md:h-20">
            <Link to="/#case-studies" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Portfolio</span>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-16 px-4 md:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/5 to-transparent" />
        <div className="container mx-auto relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              UX Case Study
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              CampusConnect:{' '}
              <span className="gradient-text">Unified AI-Enhanced Campus Platform</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              A smart collaboration platform that brings group discussions, event updates, resource sharing, and peer connections into one simple, intelligent space.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="glass-card px-6 py-3 flex items-center gap-2">
                <Clock className="w-5 h-5 text-primary" />
                <span className="text-sm">12–14 Week MVP</span>
              </div>
              <div className="glass-card px-6 py-3 flex items-center gap-2">
                <Users className="w-5 h-5 text-primary" />
                <span className="text-sm">5 User Personas</span>
              </div>
              <div className="glass-card px-6 py-3 flex items-center gap-2">
                <Cpu className="w-5 h-5 text-primary" />
                <span className="text-sm">AI-Driven Matchmaking</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Executive Summary */}
      <section className="py-10 px-4 md:px-8 bg-card/30">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-8 text-center">
              Executive <span className="gradient-text">Summary</span>
            </h2>
            <div className="glass-card p-8 md:p-12">
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                CampusConnect is a smart collaboration platform designed to make campus life more connected and effortless for both students and lecturers. Instead of juggling multiple noisy apps, users can find the right people to study with, discover campus opportunities, and share notes in real time. Its intelligent recommendation engine matches students and lecturers based on shared interests, goals, and subjects — making learning more personalised and engaging.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-4xl font-bold gradient-text mb-2">70%+</div>
                  <div className="text-sm text-muted-foreground">Target group match satisfaction</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold gradient-text mb-2">40%</div>
                  <div className="text-sm text-muted-foreground">Reduction in external coordination messages</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold gradient-text mb-2">60%+</div>
                  <div className="text-sm text-muted-foreground">Active users within 2 weeks</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* User Personas */}
      <section className="py-10 px-4 md:px-8">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Target Users &amp; <span className="gradient-text">Personas</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Five personas across students and lecturers, each with distinct learning styles and collaboration needs.
            </p>
          </motion.div>
          <PersonaPairCarousel />
        </div>
      </section>

      {/* User Flow */}
      <section className="py-10 px-4 md:px-8 bg-card/30">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              User <span className="gradient-text">Flow</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From role selection to an established group — the end-to-end journey for students and lecturers.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center gap-0"
          >
            {/* Start */}
            <div className="bg-[#1e1b4b] text-white text-sm font-bold px-8 py-2.5 rounded shadow-lg">Start</div>
            <div className="w-0.5 h-6 bg-purple-400" />

            {/* Role Selection */}
            <div className="relative flex items-center justify-center w-28 h-28">
              <div className="absolute w-20 h-20 bg-yellow-400 rotate-45 rounded-sm" />
              <span className="relative text-[10px] font-bold text-gray-900 text-center leading-tight px-1">Role<br/>Selection</span>
            </div>

            {/* Branch labels + two paths */}
            <div className="w-full max-w-2xl relative mt-1">
              {/* Horizontal line */}
              <div className="absolute top-0 left-1/4 right-1/4 h-0.5 bg-purple-400" />
              <div className="grid grid-cols-2 gap-6">
                {/* Student path */}
                <div className="flex flex-col items-center gap-0">
                  <span className="text-xs text-purple-400 font-medium mb-2">Student</span>
                  <div className="w-0.5 h-4 bg-purple-400" />
                  <div className="glass-card px-4 py-2.5 text-sm font-medium text-center w-48">Profile Setup</div>
                  <div className="w-0.5 h-4 bg-purple-400" />
                  <div className="glass-card px-4 py-2.5 text-xs text-muted-foreground text-center w-48">Input Course, Year,<br/>Learning Style, Interests</div>
                  <div className="w-0.5 h-6 bg-purple-400" />
                </div>
                {/* Lecturer path */}
                <div className="flex flex-col items-center gap-0">
                  <span className="text-xs text-purple-400 font-medium mb-2">Lecturer</span>
                  <div className="w-0.5 h-4 bg-purple-400" />
                  <div className="glass-card px-4 py-2.5 text-sm font-medium text-center w-48">Profile Setup</div>
                  <div className="w-0.5 h-4 bg-purple-400" />
                  <div className="glass-card px-4 py-2.5 text-xs text-muted-foreground text-center w-48">Input Teaching Subjects,<br/>Monitoring or Approval</div>
                  <div className="w-0.5 h-6 bg-purple-400" />
                </div>
              </div>
            </div>

            {/* Merge arrow */}
            <div className="w-0.5 h-4 bg-purple-400" />

            {/* AI Matchmaker */}
            <div className="glass-card px-6 py-3 text-sm font-semibold text-primary text-center border border-primary/30">AI Matchmaker</div>
            <div className="w-0.5 h-3 bg-purple-400" />
            <div className="glass-card px-5 py-2.5 text-xs text-muted-foreground text-center max-w-xs">Analyze Subject Overlap, Learning Compatibility,<br/>Collaboration Preferences</div>
            <div className="w-0.5 h-5 bg-purple-400" />

            {/* Group Recommendations */}
            <div className="glass-card px-6 py-3 text-sm font-medium text-center">Group Recommendations</div>
            <div className="w-0.5 h-5 bg-purple-400" />

            {/* Accept Group diamond */}
            <div className="relative flex items-center justify-center w-28 h-28">
              <div className="absolute w-20 h-20 bg-yellow-400 rotate-45 rounded-sm" />
              <span className="relative text-[10px] font-bold text-gray-900 text-center leading-tight px-1">Accept<br/>Group?</span>
            </div>

            {/* Yes / No branch */}
            <div className="w-full max-w-sm relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col items-center">
                  <span className="text-xs text-red-400 font-medium mb-1">No</span>
                  <div className="text-xs text-muted-foreground text-center glass-card px-3 py-2">← Back to AI Matchmaker</div>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-xs text-green-400 font-medium mb-1">Yes</span>
                  <div className="w-0.5 h-4 bg-purple-400" />
                  <div className="glass-card px-4 py-2.5 text-sm font-medium text-center">Group Confirmation</div>
                </div>
              </div>
            </div>

            <div className="w-0.5 h-5 bg-purple-400" />

            {/* Collaboration Hub */}
            <div className="glass-card px-6 py-3 text-sm font-semibold text-primary text-center border border-primary/30">Collaboration Hub</div>
            <div className="w-0.5 h-3 bg-purple-400" />
            <div className="glass-card px-5 py-2.5 text-xs text-muted-foreground text-center">Basic Chat · File Sharing · Shared Calendar</div>
            <div className="w-0.5 h-5 bg-purple-400" />

            {/* Collect Feedback */}
            <div className="glass-card px-6 py-3 text-sm font-medium text-center">Collect Feedback</div>
            <div className="w-0.5 h-5 bg-purple-400" />

            {/* Rate diamond */}
            <div className="relative flex items-center justify-center w-32 h-32">
              <div className="absolute w-24 h-24 bg-yellow-400 rotate-45 rounded-sm" />
              <span className="relative text-[10px] font-bold text-gray-900 text-center leading-tight px-2">Rate Relevance<br/>&amp; Engagement</span>
            </div>
            <div className="w-0.5 h-5 bg-purple-400" />

            {/* Feedback source diamond */}
            <div className="relative flex items-center justify-center w-36 h-36">
              <div className="absolute w-28 h-28 bg-yellow-400 rotate-45 rounded-sm" />
              <span className="relative text-[10px] font-bold text-gray-900 text-center leading-tight px-2">Feedback from<br/>Students or<br/>Lecturers?</span>
            </div>

            {/* Two feed paths */}
            <div className="w-full max-w-sm">
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col items-center gap-1">
                  <span className="text-xs text-purple-400 font-medium">Students</span>
                  <div className="w-0.5 h-3 bg-purple-400" />
                  <div className="glass-card px-3 py-2 text-xs text-center">Feed Data to<br/>AI Learning Loop</div>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <span className="text-xs text-purple-400 font-medium">Lecturers</span>
                  <div className="w-0.5 h-3 bg-purple-400" />
                  <div className="glass-card px-3 py-2 text-xs text-center">Feed Data to<br/>AI Learning Loop</div>
                </div>
              </div>
            </div>

            <div className="w-0.5 h-5 bg-purple-400" />
            <div className="glass-card px-6 py-3 text-sm font-medium text-center">AI Learning Loop: Refine Recommendations</div>
            <div className="w-0.5 h-5 bg-purple-400" />

            {/* End */}
            <div className="bg-gradient-to-r from-[#6366f1] to-[#a855f7] text-white text-sm font-bold px-8 py-2.5 rounded-full shadow-lg">
              End: Group Established
            </div>
          </motion.div>
        </div>
      </section>

      {/* Wireframes */}
      <section className="py-10 px-4 md:px-8">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Low-Fidelity <span className="gradient-text">Wireframes</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Key screens from onboarding to group collaboration, mapped to the user flow.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Screen 1: Onboarding */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="glass-card p-5"
            >
              <div className="bg-muted/30 rounded-xl p-4 mb-4 border border-white/10">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-6 h-6 rounded-full bg-white/20" />
                  <div>
                    <div className="h-2 w-28 bg-white/30 rounded mb-1" />
                    <div className="h-1.5 w-20 bg-white/15 rounded" />
                  </div>
                </div>
                <div className="text-xs text-muted-foreground mb-2 font-medium">Select Your Role</div>
                <div className="grid grid-cols-2 gap-2 mb-3">
                  <div className="h-8 rounded bg-white/10 flex items-center justify-center text-[10px] text-muted-foreground">Student</div>
                  <div className="h-8 rounded bg-white/10 flex items-center justify-center text-[10px] text-muted-foreground">Lecturer</div>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div className="h-7 rounded border border-white/20 flex items-center justify-center text-[10px] text-muted-foreground">Cancel</div>
                  <div className="h-7 rounded bg-primary/60 flex items-center justify-center text-[10px] text-white font-medium">Next</div>
                </div>
              </div>
              <p className="text-sm font-semibold mb-1">Onboarding</p>
              <p className="text-xs text-muted-foreground">Role selection screen to route students and lecturers into separate profile flows.</p>
            </motion.div>

            {/* Screen 2: Courses & Group Recommendations */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="glass-card p-5"
            >
              <div className="bg-muted/30 rounded-xl p-4 mb-4 border border-white/10">
                <div className="text-xs text-muted-foreground font-medium mb-2">Available Courses</div>
                <div className="grid grid-cols-2 gap-2 mb-3">
                  {['Beginner', 'Intermediate'].map((l) => (
                    <div key={l} className="rounded bg-white/10 p-2">
                      <div className="h-8 bg-white/10 rounded mb-1.5" />
                      <div className="h-1.5 w-16 bg-white/20 rounded mb-1" />
                      <div className="h-1.5 w-20 bg-white/15 rounded" />
                    </div>
                  ))}
                </div>
                <div className="text-xs text-muted-foreground font-medium mb-2">Filter by Interest</div>
                <div className="grid grid-cols-2 gap-2 mb-3">
                  {['Technology', 'Literature'].map((t) => (
                    <div key={t} className="h-7 rounded bg-white/10 flex items-center justify-center text-[10px] text-muted-foreground">{t}</div>
                  ))}
                </div>
                <div className="h-10 rounded bg-white/5 border border-white/10 flex items-center justify-center text-[10px] text-muted-foreground text-center px-2">Group recommendations based on your inputs.</div>
              </div>
              <p className="text-sm font-semibold mb-1">Courses & Group Match</p>
              <p className="text-xs text-muted-foreground">AI-powered course browsing with interest filters and smart group recommendations.</p>
            </motion.div>

            {/* Screen 3: Collaboration + Campus Life */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="glass-card p-5"
            >
              <div className="bg-muted/30 rounded-xl p-4 mb-4 border border-white/10">
                <div className="text-xs text-muted-foreground font-medium mb-2">Notifications</div>
                {['Group Assignment Assigned', 'Session Reminder'].map((n) => (
                  <div key={n} className="flex items-center gap-2 mb-2 p-2 rounded bg-white/10">
                    <div className="w-5 h-5 rounded bg-yellow-400/40 shrink-0" />
                    <div>
                      <div className="h-1.5 w-24 bg-white/30 rounded mb-1" />
                      <div className="h-1.5 w-16 bg-white/15 rounded" />
                    </div>
                  </div>
                ))}
                <div className="text-xs text-muted-foreground font-medium mt-3 mb-2">Campus Life Updates</div>
                <div className="grid grid-cols-2 gap-2">
                  {['Students collaborating', 'Lecture on AI'].map((c) => (
                    <div key={c} className="rounded bg-white/10 p-2">
                      <div className="h-10 bg-white/10 rounded mb-1.5" />
                      <div className="h-1.5 w-full bg-white/20 rounded mb-1" />
                      <div className="flex gap-1">
                        <div className="h-1.5 w-8 bg-white/15 rounded" />
                        <div className="h-1.5 w-8 bg-white/15 rounded" />
                      </div>
                    </div>
                  ))}
                </div>
                {/* Bottom nav */}
                <div className="flex justify-around mt-3 pt-2 border-t border-white/10">
                  {['Home', 'Events', 'Messages', 'Settings'].map((n) => (
                    <div key={n} className="flex flex-col items-center gap-0.5">
                      <div className="w-4 h-4 rounded bg-white/20" />
                      <span className="text-[8px] text-muted-foreground">{n}</span>
                    </div>
                  ))}
                </div>
              </div>
              <p className="text-sm font-semibold mb-1">Notifications & Campus Life</p>
              <p className="text-xs text-muted-foreground">Real-time alerts and a campus social feed to keep students and lecturers engaged.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* MVP Definition */}
      <section className="py-10 px-4 md:px-8 bg-card/30">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              MVP <span className="gradient-text">Definition</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {[
              { icon: Target, title: 'MVP Goal', desc: 'Validate whether an AI-powered study group recommendation system can reduce the friction students and lecturers face in finding relevant peers and sharing resources.' },
              { icon: XCircle, title: 'Core Problem', desc: 'Students and lecturers struggle with fragmented communication, manual coordination, and random group formation — leading to unbalanced groups and missed learning opportunities.' },
              { icon: CheckCircle, title: 'Core MVP Solution', desc: 'An AI-driven study group matchmaker that automatically forms balanced, interest-aligned study groups based on learning styles, subject preferences, academic goals, and participation levels.' },
            ].map(({ icon: Icon, title, desc }) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="glass-card p-6"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">{title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>

          {/* How MVP Works */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="font-display text-2xl font-bold mb-6 text-center">How the MVP Works</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {mvpFlowSteps.map((step) => (
                <div key={step.num} className="glass-card p-5 flex gap-4">
                  <div className="w-9 h-9 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold text-sm shrink-0">
                    {step.num}
                  </div>
                  <div>
                    <p className="font-semibold text-sm mb-1">{step.title}</p>
                    <p className="text-xs text-muted-foreground leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key MVP Features + Validation Metrics */}
      <section className="py-10 px-4 md:px-8">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="glass-card p-6 overflow-x-auto"
            >
              <h3 className="font-display text-xl font-semibold mb-4">Key MVP Features</h3>
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-white/10 text-left text-muted-foreground text-xs uppercase tracking-wider">
                    <th className="pb-2 pr-3">Category</th>
                    <th className="pb-2 pr-3">Feature</th>
                    <th className="pb-2">Purpose</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {mvpFeatures.map((f) => (
                    <tr key={f.feature}>
                      <td className="py-2 pr-3 font-medium text-primary text-xs whitespace-nowrap">{f.category}</td>
                      <td className="py-2 pr-3 text-foreground/80">{f.feature}</td>
                      <td className="py-2 text-muted-foreground text-xs">{f.purpose}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="glass-card p-6"
            >
              <h3 className="font-display text-xl font-semibold mb-4">Validation Metrics</h3>
              <div className="space-y-3">
                {validationMetrics.map((v) => (
                  <div key={v.metric} className="flex items-start gap-3 p-3 rounded-xl bg-white/5">
                    <CheckCircle className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-sm">{v.metric}</p>
                      <p className="text-xs text-muted-foreground">{v.indicator}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* User Stories */}
      <section className="py-10 px-4 md:px-8 bg-card/30">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              User Stories &amp; <span className="gradient-text">Acceptance Criteria</span>
            </h2>
          </motion.div>
          <SlideCarousel slides={storySlides} />
        </div>
      </section>

      {/* Technical Requirements */}
      <section className="py-10 px-4 md:px-8">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Technical <span className="gradient-text">Requirements</span>
            </h2>
          </motion.div>
          <SlideCarousel slides={techSlides} />
        </div>
      </section>

      {/* AARRR KPI Table */}
      <section className="py-10 px-4 md:px-8 bg-card/30">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Business Validation <span className="gradient-text">Metrics (AARRR)</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass-card p-6 overflow-x-auto"
          >
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/10 text-left text-muted-foreground text-xs uppercase tracking-wider">
                  <th className="pb-2 pr-4">Stage</th>
                  <th className="pb-2 pr-4">KPI</th>
                  <th className="pb-2 pr-4">Formula</th>
                  <th className="pb-2 pr-4">Target</th>
                  <th className="pb-2">Purpose</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {aarrr.map((row) => (
                  <tr key={row.kpi}>
                    <td className="py-3 pr-4 font-semibold text-primary whitespace-nowrap">{row.stage}</td>
                    <td className="py-3 pr-4 font-medium text-foreground">{row.kpi}</td>
                    <td className="py-3 pr-4 text-muted-foreground text-xs">{row.formula}</td>
                    <td className="py-3 pr-4 font-bold text-green-400 whitespace-nowrap">{row.target}</td>
                    <td className="py-3 text-muted-foreground text-xs">{row.purpose}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="glass-card p-6 mt-6"
          >
            <h3 className="font-semibold mb-3">Excluded from MVP (Future Phase)</h3>
            <div className="flex flex-wrap gap-2">
              {['Event recommendations', 'Gamified rewards', 'Full campus-wide discussion boards', 'Advanced analytics dashboards', 'External LMS / Calendar API integrations'].map((item) => (
                <span key={item} className="text-xs px-3 py-1 rounded-full bg-red-500/10 text-red-400 border border-red-500/20">{item}</span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 md:px-8 border-t border-white/5">
        <div className="container mx-auto text-center">
          <p className="text-muted-foreground">
            Case Study by <span className="text-foreground font-medium">Smrithi B Ravikumar</span>
          </p>
          <Link to="/#contact" className="inline-block mt-4 text-primary hover:underline">
            Get in touch to discuss this project →
          </Link>
        </div>
      </footer>
    </div>
  );
}
