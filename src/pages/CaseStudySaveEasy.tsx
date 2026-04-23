import { motion } from 'framer-motion';
import { ArrowLeft, Target, Clock, PiggyBank, CheckCircle, XCircle, TrendingUp, BookOpen, Heart, Users, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

// ─── Data ─────────────────────────────────────────────────────────────────────

const userProfiles = [
  {
    id: 1,
    name: 'Asha',
    age: '23–27',
    role: 'AML Analyst',
    avatar: '👩‍💼',
    painPoints: [
      'Struggles with budgeting and saving consistently',
      'Has never used a finance app — lack of exposure',
      'Finds finance somewhat confusing, needs help',
      'Unexpected expenses are the biggest stressor',
    ],
  },
  {
    id: 2,
    name: 'Nikhil',
    age: '28–32',
    role: 'Product Analyst',
    avatar: '👨‍💻',
    painPoints: [
      'Doesn\'t track expenses at all',
      'Struggles with budgeting and saving consistently',
      'Finds apps too complicated and feature-heavy',
      'Stress from not saving enough',
    ],
  },
  {
    id: 3,
    name: 'Hruthik K Y',
    age: '23–27',
    role: 'Junior Software Engineer',
    avatar: '👨‍🔬',
    painPoints: [
      'Doesn\'t track expenses',
      'Stopped using apps because updating required too much effort',
      'Feels overwhelmed and avoids finance tasks',
      'Stress from unexpected expenses',
    ],
  },
  {
    id: 4,
    name: 'Rohit',
    age: '28–32',
    role: 'Sales Strategy Manager',
    avatar: '👔',
    painPoints: [
      'Uses banking app only — limited tracking',
      'Stress from loans, credit scores, and debt',
      'Finds finance apps too complicated',
      'Needs help despite feeling somewhat confident',
    ],
  },
  {
    id: 5,
    name: 'Ramya Ravikumar',
    age: '33+',
    role: 'Software Integration Specialist',
    avatar: '👩‍🔧',
    painPoints: [
      'Tried finance apps but stopped due to complexity and manual effort',
      'Struggles with budgeting, saving, and staying motivated',
      'Anxious about loans, credit scores, and debt',
      'Unexpected expenses still cause stress despite feeling confident',
    ],
  },
];

const jtbd = [
  {
    type: 'Functional',
    icon: TrendingUp,
    color: 'from-teal-500/20 to-blue-500/20',
    accent: 'text-teal-400',
    jobs: [
      '"When I manage my money, I want to automatically track my expenses and savings, so I don\'t have to manually update apps or spreadsheets."',
      '"When I review my financial health, I want personalized insights and alerts, so I can make smarter decisions without digging through complex dashboards."',
    ],
  },
  {
    type: 'Emotional',
    icon: Heart,
    color: 'from-purple-500/20 to-pink-500/20',
    accent: 'text-purple-400',
    jobs: [
      '"When I think about my finances, I want to feel calm and in control, so I don\'t get anxious about unexpected expenses."',
      '"When I build financial habits, I want to feel confident that I\'m making progress, so I stay motivated instead of giving up."',
    ],
  },
  {
    type: 'Social',
    icon: Users,
    color: 'from-orange-500/20 to-yellow-500/20',
    accent: 'text-orange-400',
    jobs: [
      '"When I talk to my peers or family, I want to appear financially responsible, so I can build credibility and avoid judgment."',
      '"When I manage my money, I want tools that reflect my lifestyle as a young professional, so I feel modern, smart, and in touch with my goals."',
    ],
  },
];

const researchMethods = [
  {
    icon: Users,
    title: 'Who to Talk To',
    items: [
      'Young professionals (23–32 years) — analysts, engineers, sales, finance roles',
      'Gig workers & freelancers with irregular income',
      'Users who tried finance apps but abandoned them',
      'First-time earners beginning to manage their own money',
      'Financially confident vs. financially anxious users',
    ],
  },
  {
    icon: BookOpen,
    title: 'Methods Used',
    items: [
      'In-depth interviews (30–45 mins) — motivations, behaviors, frustrations',
      'Surveys & polls — validate common pain points at scale',
      'Diary studies (1–2 weeks) — observe daily tracking behavior',
      'Secondary research — competitor apps, app store reviews, financial literacy reports',
    ],
  },
  {
    icon: Target,
    title: 'What We Wanted to Learn',
    items: [
      'Why do users stop using finance apps? (too complex, too manual?)',
      'How do they currently track money (bank apps, Excel, nothing)?',
      'What features make a finance app "stick"? (simplicity, automation)',
      'How do emotions (stress, avoidance) influence app usage?',
      'What makes users hesitant to try new finance apps?',
    ],
  },
];

const userFlowSteps = [
  { num: 1, title: 'Sign Up & Onboarding', desc: 'User creates account, selects financial goals (saving, budgeting, debt), and sets income type (salary/gig).', color: '#7ec8c8' },
  { num: 2, title: 'Link or Add Accounts', desc: 'Connect bank account or manually add transactions. App auto-categorizes spending.', color: '#85b8d6' },
  { num: 3, title: 'Set Savings Goals', desc: 'User defines goals — emergency fund, vacation, rent — with target amounts and timelines.', color: '#9fb0d8' },
  { num: 4, title: 'Track Expenses', desc: 'Automatic categorization (food, transport, bills). Alerts when nearing budget limits.', color: '#b0a0d4' },
  { num: 5, title: 'Receive Insights', desc: 'Personalized tips and spending pattern analysis delivered weekly without complexity.', color: '#c49ecf' },
  { num: 6, title: 'Review Progress', desc: 'Monthly savings summary, goal milestones, and motivational nudges to stay on track.', color: '#d49aba' },
];

// ─── Sub-components ────────────────────────────────────────────────────────────

function UserProfileCard({ profile, index }: { profile: typeof userProfiles[number]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="glass-card overflow-hidden"
    >
      <div className="bg-gradient-to-r from-teal-500/20 to-purple-500/20 p-4 flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-background/50 flex items-center justify-center text-xl">{profile.avatar}</div>
        <div>
          <p className="font-semibold text-sm">{profile.name}</p>
          <p className="text-xs text-primary">{profile.role}</p>
          <p className="text-xs text-muted-foreground">Age {profile.age}</p>
        </div>
      </div>
      <ul className="p-4 space-y-2">
        {profile.painPoints.map((p) => (
          <li key={p} className="flex items-start gap-2 text-xs text-foreground/80">
            <XCircle className="w-3.5 h-3.5 text-red-400 shrink-0 mt-0.5" />{p}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

function UserProfileCarousel() {
  const pairs: (typeof userProfiles)[] = [];
  for (let i = 0; i < userProfiles.length; i += 2) {
    pairs.push(userProfiles.slice(i, i + 2));
  }
  const [slide, setSlide] = useState(0);
  const go = (next: number) => setSlide(next);

  return (
    <div className="glass-card p-6 w-full">
      <div className="grid sm:grid-cols-2 gap-4 mb-6">
        {pairs[slide].map((profile, i) => (
          <UserProfileCard key={profile.id} profile={profile} index={i} />
        ))}
      </div>
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

// ─── Page ──────────────────────────────────────────────────────────────────────

export default function CaseStudySaveEasy() {
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
        <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 via-green-500/5 to-transparent" />
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
              SaveEase:{' '}
              <span className="gradient-text">Simple Savings for First-Time Earners</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              A mobile-first budgeting app designed for students and young professionals to track expenses, set financial goals, and build healthy saving habits.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="glass-card px-6 py-3 flex items-center gap-2">
                <Clock className="w-5 h-5 text-primary" />
                <span className="text-sm">UX Research Project</span>
              </div>
              <div className="glass-card px-6 py-3 flex items-center gap-2">
                <Users className="w-5 h-5 text-primary" />
                <span className="text-sm">5 User Interviews</span>
              </div>
              <div className="glass-card px-6 py-3 flex items-center gap-2">
                <PiggyBank className="w-5 h-5 text-primary" />
                <span className="text-sm">Finance & Savings</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Vision & Mission */}
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
              Product Vision &amp; <span className="gradient-text">Mission</span>
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="glass-card p-6"
            >
              <div className="w-10 h-10 rounded-xl bg-teal-500/20 flex items-center justify-center mb-4">
                <TrendingUp className="w-5 h-5 text-teal-400" />
              </div>
              <h3 className="font-semibold text-lg mb-3 gradient-text">Vision</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                To make money management simple, stress-free, and empowering for young professionals and gig workers, guiding them toward long-term financial confidence and control.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="glass-card p-6"
            >
              <div className="w-10 h-10 rounded-xl bg-purple-500/20 flex items-center justify-center mb-4">
                <Target className="w-5 h-5 text-purple-400" />
              </div>
              <h3 className="font-semibold text-lg mb-3 gradient-text">Mission</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                Eliminate the complexity of traditional finance apps by automating expense tracking, providing clear and personalized insights, and reducing manual effort — turning financial anxiety into confidence.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-10 px-4 md:px-8">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-8 text-center">
              Problem <span className="gradient-text">Statement</span>
            </h2>
            <div className="glass-card p-8">
              <blockquote className="text-lg text-foreground/90 leading-relaxed italic border-l-4 border-primary/50 pl-6">
                "When I try to manage my daily expenses, I want to stay consistent with budgeting and saving, but I struggle because finance apps feel too complicated and require too much effort, leading to stress, inconsistency, and lack of control over my money."
              </blockquote>
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <div className="text-center">
                  <div className="text-4xl font-bold gradient-text mb-2">Too Complex</div>
                  <div className="text-sm text-muted-foreground">Apps feel feature-heavy and overwhelming</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold gradient-text mb-2">Too Manual</div>
                  <div className="text-sm text-muted-foreground">Constant updates kill consistency</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold gradient-text mb-2">No Control</div>
                  <div className="text-sm text-muted-foreground">Unexpected expenses cause anxiety</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Jobs To Be Done */}
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
              Jobs To Be <span className="gradient-text">Done (JTBD)</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              What users are really hiring SaveEase to do — across functional, emotional, and social dimensions.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6">
            {jtbd.map(({ type, icon: Icon, accent, jobs }, i) => (
              <motion.div
                key={type}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass-card overflow-hidden"
              >
                <div className="bg-gradient-to-r from-teal-500/20 to-purple-500/20 p-5">
                  <div className="flex items-center gap-3">
                    <Icon className={`w-5 h-5 ${accent}`} />
                    <h3 className="font-semibold">{type} Jobs</h3>
                  </div>
                </div>
                <div className="p-5 space-y-4">
                  {jobs.map((job) => (
                    <p key={job} className="text-sm text-muted-foreground leading-relaxed italic border-l-2 border-white/10 pl-3">{job}</p>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* User Research Plan */}
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
              User Research <span className="gradient-text">Plan</span>
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6">
            {researchMethods.map(({ icon: Icon, title, items }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass-card p-6"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Icon className="w-4 h-4 text-primary" />
                  </div>
                  <h3 className="font-semibold text-sm">{title}</h3>
                </div>
                <ul className="space-y-2">
                  {items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-xs text-muted-foreground">
                      <CheckCircle className="w-3.5 h-3.5 text-teal-400 shrink-0 mt-0.5" />{item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="mt-4 text-center"
          >
            <a
              href="https://docs.google.com/spreadsheets/d/1PbhJ-nYRdB_Px2dFmRdmTPt8f56Cwu1iKNH0giMM1UQ/edit"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-primary hover:underline"
            >
              View full user research data in Google Sheets →
            </a>
          </motion.div>
        </div>
      </section>

      {/* Key Pain Points per User */}
      <section className="py-10 px-4 md:px-8 bg-card/30">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Key Pain Points <span className="gradient-text">per User</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Observed pain points across five research participants, spanning different roles and financial behaviors.
            </p>
          </motion.div>
          <UserProfileCarousel />
        </div>
      </section>

      {/* User Flow */}
      <section className="py-10 px-4 md:px-8">
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
              The core journey from first sign-up to building consistent savings habits.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center gap-0"
          >
            {/* Row 1 — steps 1, 2, 3 */}
            <div className="flex items-center justify-center">
              {userFlowSteps.slice(0, 3).map((step, i) => (
                <div key={step.num} className="flex items-center">
                  <div className="bg-white rounded-2xl p-5 shadow-md w-44 shrink-0" style={{ borderTop: `3px solid ${step.color}` }}>
                    <div className="w-7 h-7 rounded-full flex items-center justify-center text-white text-xs font-bold mb-3" style={{ background: step.color }}>
                      {step.num}
                    </div>
                    <p className="text-sm font-bold text-gray-900 leading-snug mb-1">{step.title}</p>
                    <p className="text-xs text-gray-400 leading-relaxed">{step.desc}</p>
                  </div>
                  {i < 2 && (
                    <div className="flex items-center justify-center w-9 shrink-0">
                      <svg width="28" height="16" viewBox="0 0 28 16">
                        <path d="M0 8 H22" stroke={userFlowSteps[i + 1].color} strokeWidth="2" strokeLinecap="round" />
                        <path d="M18 3 L26 8 L18 13" stroke={userFlowSteps[i + 1].color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                      </svg>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Down arrow from step 3 */}
            <div className="flex justify-end w-full max-w-[660px] pr-24">
              <svg width="16" height="28" viewBox="0 0 16 28">
                <path d="M8 0 V22" stroke={userFlowSteps[3].color} strokeWidth="2" strokeLinecap="round" />
                <path d="M3 18 L8 26 L13 18" stroke={userFlowSteps[3].color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
              </svg>
            </div>

            {/* Row 2 — steps 6, 5, 4 (right to left visually) */}
            <div className="flex items-center justify-center">
              {[...userFlowSteps.slice(3, 6)].reverse().map((step, i, arr) => (
                <div key={step.num} className="flex items-center">
                  <div className="bg-white rounded-2xl p-5 shadow-md w-44 shrink-0" style={{ borderTop: `3px solid ${step.color}` }}>
                    <div className="w-7 h-7 rounded-full flex items-center justify-center text-white text-xs font-bold mb-3" style={{ background: step.color }}>
                      {step.num}
                    </div>
                    <p className="text-sm font-bold text-gray-900 leading-snug mb-1">{step.title}</p>
                    <p className="text-xs text-gray-400 leading-relaxed">{step.desc}</p>
                  </div>
                  {i < arr.length - 1 && (
                    <div className="flex items-center justify-center w-9 shrink-0">
                      <svg width="28" height="16" viewBox="0 0 28 16">
                        <path d="M0 8 H22" stroke={arr[i + 1].color} strokeWidth="2" strokeLinecap="round" />
                        <path d="M18 3 L26 8 L18 13" stroke={arr[i + 1].color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                      </svg>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Down + End badge */}
            <div className="flex justify-start w-full max-w-[660px] pl-24">
              <svg width="16" height="28" viewBox="0 0 16 28">
                <path d="M8 0 V22" stroke="#e8a0a0" strokeWidth="2" strokeLinecap="round" />
                <path d="M3 18 L8 26 L13 18" stroke="#e8a0a0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
              </svg>
            </div>
            <div className="flex justify-start w-full max-w-[660px] pl-12">
              <div className="bg-gradient-to-r from-[#d49aba] to-[#c49ecf] text-white text-sm font-bold px-6 py-2.5 rounded-full shadow-md">
                💰 Savings Habit Formed
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Low-Fidelity Wireframes */}
      <section className="py-10 px-4 md:px-8 bg-card/30">
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
              Key screens from the SaveEase finance app — designed for simplicity and low cognitive load.
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
                {/* Status bar */}
                <div className="flex justify-between mb-4">
                  <div className="w-8 h-1.5 bg-white/20 rounded" />
                  <div className="w-12 h-1.5 bg-white/20 rounded" />
                </div>
                {/* App logo / welcome */}
                <div className="flex flex-col items-center mb-4">
                  <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-teal-500/60 to-purple-500/40 mb-2" />
                  <div className="h-3 w-20 bg-white/30 rounded mb-1" />
                  <div className="h-1.5 w-28 bg-white/15 rounded" />
                </div>
                {/* Goal selection label */}
                <div className="h-2 w-24 bg-white/20 rounded mb-2" />
                {/* Goal chips */}
                <div className="grid grid-cols-2 gap-1.5 mb-3">
                  {['💰 Saving','📊 Budgeting','💳 Debt','🏦 Investing'].map((g, i) => (
                    <div key={g} className={`h-8 rounded-lg flex items-center justify-center text-[9px] font-medium ${i === 0 ? 'bg-teal-500/40 border border-teal-400/40' : 'bg-white/10'}`}>
                      {g}
                    </div>
                  ))}
                </div>
                {/* Income type label */}
                <div className="h-2 w-20 bg-white/20 rounded mb-2" />
                {/* Toggle */}
                <div className="flex gap-1.5 mb-4">
                  <div className="flex-1 h-7 rounded-lg bg-teal-500/40 border border-teal-400/40 flex items-center justify-center">
                    <div className="h-1.5 w-12 bg-white/40 rounded" />
                  </div>
                  <div className="flex-1 h-7 rounded-lg bg-white/10 flex items-center justify-center">
                    <div className="h-1.5 w-12 bg-white/20 rounded" />
                  </div>
                </div>
                {/* Progress dots */}
                <div className="flex justify-center gap-1.5 mb-3">
                  {[0,1,2].map(i => (
                    <div key={i} className={`rounded-full ${i === 0 ? 'w-4 h-1.5 bg-teal-400/70' : 'w-1.5 h-1.5 bg-white/20'}`} />
                  ))}
                </div>
                {/* CTA */}
                <div className="h-8 rounded-full bg-teal-500/50 flex items-center justify-center">
                  <div className="h-2 w-16 bg-white/40 rounded" />
                </div>
              </div>
              <p className="text-sm font-semibold mb-1">Onboarding</p>
              <p className="text-xs text-muted-foreground">Goal selection and income type setup — personalises the experience from the start.</p>
            </motion.div>

            {/* Screen 2: Add Expense */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="glass-card p-5"
            >
              <div className="bg-muted/30 rounded-xl p-4 mb-4 border border-white/10">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-5 h-5 bg-white/20 rounded" />
                  <div className="h-3 w-20 bg-white/30 rounded" />
                </div>
                {/* Amount input */}
                <div className="text-center mb-4">
                  <div className="h-8 w-28 bg-white/20 rounded-lg mx-auto mb-1" />
                  <div className="h-1.5 w-16 bg-white/15 rounded mx-auto" />
                </div>
                {/* Category grid */}
                <div className="mb-3">
                  <div className="h-2 w-16 bg-white/20 rounded mb-2" />
                  <div className="grid grid-cols-4 gap-1.5">
                    {['🍔','🚗','🛍️','💡','🏥','✈️','📚','🎮'].map(e => (
                      <div key={e} className="h-9 rounded-lg bg-white/10 flex items-center justify-center text-sm">{e}</div>
                    ))}
                  </div>
                </div>
                {/* Note field */}
                <div className="h-8 rounded-lg bg-white/10 mb-3 flex items-center px-2">
                  <div className="h-1.5 w-20 bg-white/20 rounded" />
                </div>
                {/* Save button */}
                <div className="h-9 rounded-full bg-teal-500/50 flex items-center justify-center">
                  <div className="h-2 w-16 bg-white/40 rounded" />
                </div>
              </div>
              <p className="text-sm font-semibold mb-1">Add Expense</p>
              <p className="text-xs text-muted-foreground">Quick expense logging with emoji categories — minimal effort required.</p>
            </motion.div>

            {/* Screen 3: Dashboard / Insights */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="glass-card p-5"
            >
              <div className="bg-muted/30 rounded-xl p-4 mb-4 border border-white/10">
                {/* Header */}
                <div className="flex justify-between items-center mb-3">
                  <div className="h-3 w-20 bg-white/30 rounded" />
                  <div className="w-6 h-6 rounded-full bg-white/20" />
                </div>
                {/* Balance card */}
                <div className="rounded-xl bg-gradient-to-br from-teal-500/30 to-purple-500/20 p-3 mb-3">
                  <div className="h-2 w-16 bg-white/30 rounded mb-2" />
                  <div className="h-5 w-24 bg-white/40 rounded mb-1" />
                  <div className="h-1.5 w-12 bg-white/20 rounded" />
                </div>
                {/* Bar chart */}
                <div className="h-14 flex items-end gap-1 mb-1">
                  {[60,80,45,70,55,40,30].map((h, i) => (
                    <div key={i} className="flex-1 rounded-t" style={{ height: `${h}%`, background: i === 5 ? 'rgba(168,85,247,0.4)' : 'rgba(126,200,200,0.4)' }} />
                  ))}
                </div>
                <div className="flex justify-between mb-3">
                  {['M','T','W','T','F','S','S'].map(d => (
                    <span key={d} className="text-[7px] text-muted-foreground flex-1 text-center">{d}</span>
                  ))}
                </div>
                {/* Goal progress */}
                {[{ pct: 65 }, { pct: 30 }].map((g, i) => (
                  <div key={i} className="mb-2">
                    <div className="flex justify-between mb-1">
                      <div className="h-1.5 w-20 bg-white/25 rounded" />
                      <div className="h-1.5 w-8 bg-white/15 rounded" />
                    </div>
                    <div className="h-1.5 w-full bg-white/10 rounded-full">
                      <div className="h-1.5 bg-teal-400/60 rounded-full" style={{ width: `${g.pct}%` }} />
                    </div>
                  </div>
                ))}
                {/* Nav */}
                <div className="flex justify-around mt-3 pt-2 border-t border-white/10">
                  {['Home','Goals','Add','Stats','Settings'].map(n => (
                    <div key={n} className="flex flex-col items-center gap-0.5">
                      <div className="w-4 h-4 rounded bg-white/20" />
                      <span className="text-[7px] text-muted-foreground">{n}</span>
                    </div>
                  ))}
                </div>
              </div>
              <p className="text-sm font-semibold mb-1">Dashboard / Insights</p>
              <p className="text-xs text-muted-foreground">Balance overview, weekly spending chart, and savings goal progress at a glance.</p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="mt-6 text-center"
          >
            <a
              href="https://www.figma.com/make/CpzToOUr9DIp59ffkG5hO7/User-Workflow-for-Finance-App?node-id=0-4"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-primary hover:underline"
            >
              View full wireframes in Figma →
            </a>
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
