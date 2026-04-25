import { motion } from 'framer-motion';
import { ArrowLeft, Target, CheckCircle, XCircle, TrendingUp, Users, Bot, Wallet, Bell, MessageSquare, BarChart3, Zap, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

// ─── Data ─────────────────────────────────────────────────────────────────────

const personas = [
  {
    name: 'Rohan, 25',
    role: 'Goal-Driven Developer',
    salary: '₹45,000/mo',
    avatar: '👨‍💻',
    pain: 'Rent and social expenses limit savings; no system to dynamically adjust spending through the month.',
    need: 'Dynamic savings guidance based on current spending and goals.',
    goal: 'Buy Royal Enfield Classic 350 in 6 months; balance social life with ₹1,50,000 savings.',
  },
  {
    name: 'Aditi, 27',
    role: 'Lifestyle & Travel Seeker',
    salary: '₹60,000/mo',
    avatar: '✈️',
    pain: 'High discretionary spending; traditional apps feel restrictive and overwhelming.',
    need: 'Smart daily budgeting suggestions that adapt to income and expenses.',
    goal: 'Travel abroad next year; save ₹3,00,000 over 12 months.',
  },
  {
    name: 'Karthik, 23',
    role: 'New Grad Learning to Save',
    salary: '₹32,000/mo',
    avatar: '🎓',
    pain: 'Sends money home monthly; impulse online shopping; unclear on how much to save.',
    need: 'Simple saving tips that guide daily and monthly spending decisions.',
    goal: 'Learn disciplined saving while supporting family.',
  },
  {
    name: 'Neha, 29',
    role: 'Freelance Designer',
    salary: '₹40k–80k (variable)',
    avatar: '🎨',
    pain: 'Variable monthly income and delayed client payments make consistent saving hard.',
    need: 'Budgeting that adapts to irregular income cycles.',
    goal: 'Build ₹5,00,000 emergency fund to reduce money anxiety.',
  },
];

const features = [
  { icon: Zap, title: 'Quick Onboarding', desc: 'Google / Email / Phone OTP sign-up; capture income, expenses, occupation.', release: 'v1 MVP' },
  { icon: Target, title: 'Goal Setup', desc: 'User defines goal (amount, timeline, purpose); agent calculates required monthly savings.', release: 'v1 MVP' },
  { icon: Bot, title: 'AI Budget Recommendations', desc: 'Agentic reasoning to recommend category budgets personalised to income and goal.', release: 'v1 MVP' },
  { icon: BarChart3, title: 'Dashboard', desc: 'At-a-glance view: goal progress, month-to-date spend, AI insight of the day.', release: 'v1 MVP' },
  { icon: MessageSquare, title: 'Conversational Assistant', desc: 'Chat with the agent for spending decisions ("Can I afford this?"), advice, and nudges.', release: 'v1 MVP' },
  { icon: Bell, title: 'Proactive Nudges', desc: 'Weekly/daily agent-initiated alerts — overspend risk, goal pace, savings wins.', release: 'v1 MVP' },
  { icon: Wallet, title: 'Bank Sync', desc: 'Account aggregation for automatic transaction ingestion; manual entry remains supported.', release: 'v1.1' },
  { icon: TrendingUp, title: 'Multi-goal Tracking', desc: 'Track and allocate toward more than one concurrent goal.', release: 'v1.2' },
];

const userFlowStages = [
  { num: 1, stage: 'App Launch / Sign Up', objective: 'Reduce onboarding friction', screens: 'Splash, Auth, OTP' },
  { num: 2, stage: 'Collect User Details', objective: 'Capture essential financial context', screens: 'Income, Expenses, Occupation' },
  { num: 3, stage: 'Understand Spending Behavior', objective: 'Identify spending patterns', screens: 'Short survey, optional bank sync' },
  { num: 4, stage: 'Personalized Setup', objective: 'Generate initial budget', screens: 'AI recommendation review' },
  { num: 5, stage: 'Dashboard Activation', objective: 'Provide actionable insights', screens: 'Home, Insight of the Day' },
  { num: 6, stage: 'User Engagement Loop', objective: 'Maintain consistent financial habits', screens: 'Assistant chat, Notifications' },
  { num: 7, stage: 'End Goal (Outcome)', objective: 'Help users reach financial targets', screens: 'Goal progress, Celebration' },
];

const kpis = [
  { label: 'Savings Goal Adherence Rate', target: '≥ 60%', desc: 'Users meeting monthly savings goal ÷ total active users.' },
  { label: 'Weekly Budget Compliance', target: '≥ 65%', desc: 'Weekly spend compared with AI-recommended budget.' },
  { label: 'Time Saved in Budget Planning', target: '≥ 50% reduction', desc: 'Avg. weekly time before vs after using the app.' },
  { label: 'Financial Stress Reduction Score', target: 'Avg. ≥ 3.8 / 5', desc: 'Monthly in-app 1–5 survey on financial confidence.' },
];

const promptIterations = [
  { iter: 'Iteration 1', strategy: 'Basic classification prompt for expenses', problem: 'AI only categorized transactions as needs vs wants', outcome: 'Added goal-awareness and spending context → more relevant financial insights.' },
  { iter: 'Iteration 2', strategy: 'Context-aware financial reasoning', problem: 'Responses lacked personalized budgeting advice', outcome: 'Included income, goal amount, and spending patterns in prompt → dynamic recommendations.' },
  { iter: 'Iteration 3', strategy: 'Behavioral nudging prompt', problem: 'Advice felt robotic and strict', outcome: 'Added conversational nudges and friendly guidance → improved engagement and trust.' },
];

// ─── Sub-components ────────────────────────────────────────────────────────────

function PersonaCard({ persona, index }: { persona: typeof personas[number]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="glass-card overflow-hidden"
    >
      <div className="bg-gradient-to-r from-teal-500/20 to-purple-500/20 p-4 flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-background/50 flex items-center justify-center text-xl">{persona.avatar}</div>
        <div>
          <p className="font-semibold text-sm">{persona.name}</p>
          <p className="text-xs text-primary">{persona.role}</p>
          <p className="text-xs text-muted-foreground">{persona.salary}</p>
        </div>
      </div>
      <div className="p-4 space-y-3">
        <div>
          <p className="text-xs font-semibold text-red-400 mb-1">Pain</p>
          <p className="text-xs text-muted-foreground leading-relaxed">{persona.pain}</p>
        </div>
        <div>
          <p className="text-xs font-semibold text-teal-400 mb-1">Need</p>
          <p className="text-xs text-muted-foreground leading-relaxed">{persona.need}</p>
        </div>
        <div>
          <p className="text-xs font-semibold text-purple-400 mb-1">Goal</p>
          <p className="text-xs text-muted-foreground leading-relaxed">{persona.goal}</p>
        </div>
      </div>
    </motion.div>
  );
}

function PersonaCarousel() {
  const [slide, setSlide] = useState(0);
  const pairs: (typeof personas)[] = [];
  for (let i = 0; i < personas.length; i += 2) pairs.push(personas.slice(i, i + 2));

  return (
    <div className="glass-card p-6 w-full">
      <div className="grid sm:grid-cols-2 gap-4 mb-6">
        {pairs[slide].map((p, i) => <PersonaCard key={p.name} persona={p} index={i} />)}
      </div>
      <div className="flex items-center justify-center gap-6">
        <button onClick={() => setSlide((slide - 1 + pairs.length) % pairs.length)} className="p-2 rounded-full hover:bg-white/10 transition-colors text-muted-foreground hover:text-foreground border border-white/10">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
        </button>
        <div className="flex gap-2">
          {pairs.map((_, i) => (
            <button key={i} onClick={() => setSlide(i)} className={`h-2 rounded-full transition-all duration-300 ${slide === i ? 'w-6 bg-primary' : 'w-2 bg-white/20'}`} />
          ))}
        </div>
        <button onClick={() => setSlide((slide + 1) % pairs.length)} className="p-2 rounded-full hover:bg-white/10 transition-colors text-muted-foreground hover:text-foreground border border-white/10">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
        </button>
      </div>
      <p className="text-center text-xs text-muted-foreground mt-3">{slide + 1} / {pairs.length}</p>
    </div>
  );
}

// ─── Page ──────────────────────────────────────────────────────────────────────

export default function CaseStudyPocketly() {
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
        <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 via-purple-500/5 to-transparent" />
        <div className="container mx-auto relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              Product Requirements Document
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Pocketly:{' '}
              <span className="gradient-text">Adaptive Budgeting Agent</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              An AI-first budgeting product that reasons about user goals, spending patterns, and time — proactively guiding young professionals toward consistent savings.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                { label: 'PRD + Prototype', icon: Bot },
                { label: '4 Personas', icon: Users },
                { label: 'Agentic AI · n8n', icon: Zap },
              ].map(({ label, icon: Icon }) => (
                <div key={label} className="glass-card px-6 py-3 flex items-center gap-2">
                  <Icon className="w-5 h-5 text-primary" />
                  <span className="text-sm">{label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-10 px-4 md:px-8 bg-card/30">
        <div className="container mx-auto max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-8 text-center">
              Problem <span className="gradient-text">Statement</span>
            </h2>
            <div className="glass-card p-8">
              <blockquote className="text-lg text-foreground/90 leading-relaxed italic border-l-4 border-primary/50 pl-6 mb-8">
                "Young professionals struggle to consistently save toward specific financial goals. Traditional budgeting apps require manual tracking, static categories, and constant discipline — rather than actively guiding users with intelligent, context-aware financial decisions."
              </blockquote>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  'Apps show data but do not reason about it — they leave interpretation to the user.',
                  'Static categories do not adapt to variable income (freelancers) or changing goals.',
                  'Nudges are generic, not tied to the user\'s specific goal, salary cycle, or remaining month.',
                  'Manual tracking creates drop-off: users disengage within weeks of installing.',
                ].map((gap) => (
                  <div key={gap} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <XCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                    <span>{gap}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Goals & Non-Goals */}
      <section className="py-10 px-4 md:px-8">
        <div className="container mx-auto max-w-5xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-8">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Goals &amp; <span className="gradient-text">Non-Goals</span>
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-6">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="glass-card p-6">
              <h3 className="font-semibold text-base mb-4 gradient-text">Goals (v1)</h3>
              <ul className="space-y-3">
                {[
                  'Help users reach specific, user-defined financial goals (e.g., emergency fund, travel, vehicle).',
                  'Replace manual budgeting with AI-driven, context-aware recommendations.',
                  'Reduce time spent on financial management while increasing savings adherence.',
                  'Deliver proactive behavioral nudges that feel conversational, not robotic.',
                ].map((g) => (
                  <li key={g} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />{g}
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="glass-card p-6">
              <h3 className="font-semibold text-base mb-4 text-muted-foreground">Non-Goals (v1)</h3>
              <ul className="space-y-3">
                {[
                  'Full-service banking, lending, or investment execution.',
                  'Tax filing or long-term financial planning beyond 12–18 months.',
                  'Multi-currency or international account aggregation.',
                ].map((g) => (
                  <li key={g} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <XCircle className="w-4 h-4 text-red-400/60 shrink-0 mt-0.5" />{g}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Target Users & Personas */}
      <section className="py-10 px-4 md:px-8 bg-card/30">
        <div className="container mx-auto max-w-5xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-8">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Target Users &amp; <span className="gradient-text">Personas</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Young professionals aged 22–30 in India, with monthly incomes ranging from ₹30,000 to ₹80,000, spanning salaried and freelance contexts.
            </p>
          </motion.div>
          <PersonaCarousel />
        </div>
      </section>

      {/* Feature Scope */}
      <section className="py-10 px-4 md:px-8">
        <div className="container mx-auto max-w-5xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-8">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Scope &amp; <span className="gradient-text">Feature Summary</span>
            </h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {features.map(({ icon: Icon, title, desc, release }, i) => (
              <motion.div key={title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.06 }} className="glass-card p-5">
                <div className="flex items-center justify-between mb-3">
                  <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-teal-500/20 to-purple-500/20 flex items-center justify-center">
                    <Icon className="w-4 h-4 text-primary" />
                  </div>
                  <span className={`text-[10px] font-medium px-2 py-0.5 rounded-full ${release === 'v1 MVP' ? 'bg-teal-500/20 text-teal-400' : 'bg-white/10 text-muted-foreground'}`}>{release}</span>
                </div>
                <p className="font-semibold text-sm mb-1">{title}</p>
                <p className="text-xs text-muted-foreground leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* User Flow */}
      <section className="py-10 px-4 md:px-8 bg-card/30">
        <div className="container mx-auto max-w-2xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-10">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              UX <span className="gradient-text">Flow</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A guided, low-friction journey — from sign-up to an active, AI-guided savings habit within a single session.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex justify-center"
          >
            <img
              src={`${import.meta.env.BASE_URL}pocketly-flow.png`}
              alt="Pocketly UX Flow Diagram"
              className="w-full max-w-md rounded-xl"
            />
          </motion.div>
        </div>
      </section>

      {/* Prompt Iteration Log */}
      {/* <section className="py-10 px-4 md:px-8">
        <div className="container mx-auto max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-8">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Prompt <span className="gradient-text">Iteration Log</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The agent's prompt strategy evolved through three deliberate iterations, each addressing a concrete shortcoming observed in testing.
            </p>
          </motion.div>
          <div className="space-y-4">
            {promptIterations.map(({ iter, strategy, problem, outcome }, i) => (
              <motion.div key={iter} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.1 }} className="glass-card p-5 grid sm:grid-cols-[100px_1fr_1fr_1fr] gap-4 items-start">
                <span className="text-xs font-bold text-primary">{iter}</span>
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-muted-foreground mb-1">Strategy</p>
                  <p className="text-xs text-foreground/80">{strategy}</p>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-red-400/70 mb-1">Problem</p>
                  <p className="text-xs text-muted-foreground">{problem}</p>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-teal-400/70 mb-1">Outcome</p>
                  <p className="text-xs text-muted-foreground">{outcome}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* KPIs */}
      <section className="py-10 px-4 md:px-8 bg-card/30">
        <div className="container mx-auto max-w-5xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-8">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Success <span className="gradient-text">Metrics (KPIs)</span>
            </h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 gap-4">
            {kpis.map(({ label, target, desc }, i) => (
              <motion.div key={label} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.08 }} className="glass-card p-5">
                <div className="text-2xl font-bold gradient-text mb-1">{target}</div>
                <p className="font-semibold text-sm mb-1">{label}</p>
                <p className="text-xs text-muted-foreground">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Links */}
      <section className="py-10 px-4 md:px-8">
        <div className="container mx-auto max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-8">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Project <span className="gradient-text">References</span>
            </h2>
          </motion.div>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { label: 'UX Flow', sub: 'Google Stitch', href: 'https://stitch.withgoogle.com/preview/10986574984315303163?node-id=74e25b6467da402c976402c829e31504', icon: ExternalLink },
              { label: 'Live Prototype', sub: 'Lovable', href: 'https://id-preview--8dc85838-0c9f-4ab4-addc-f0ea18200627.lovable.app/', icon: Bot },
              { label: 'Backend Workflows', sub: 'n8n', href: 'https://smrithirohit.app.n8n.cloud/projects/DlSkZhensFqfjsKq/workflows', icon: Zap },
            ].map(({ label, sub, href, icon: Icon }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="glass-card p-5 flex flex-col items-center text-center gap-3 group hover:-translate-y-1 transition-transform duration-300">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-teal-500/20 to-purple-500/20 flex items-center justify-center">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-sm group-hover:text-primary transition-colors">{label}</p>
                  <p className="text-xs text-muted-foreground">{sub}</p>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-primary/60" />
              </a>
            ))}
          </div>
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
