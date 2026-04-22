import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, User, Target, Frown, Sparkles, Smartphone, Clock, Brain, CheckCircle, XCircle, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { UserFlow } from './UserFlow';
import { userPersonas } from '../data/userPersonas';


const featureComparison = [
  { feature: 'Screen Time Tracking', focusMate: true, competitor1: true, competitor2: true },
  { feature: 'Personalized Insights', focusMate: true, competitor1: false, competitor2: true },
  { feature: 'Gentle Nudges (Non-judgmental)', focusMate: true, competitor1: false, competitor2: false },
  { feature: 'Focus Mode with Rewards', focusMate: true, competitor1: true, competitor2: false },
  { feature: 'Family Sharing', focusMate: true, competitor1: false, competitor2: true },
  { feature: 'Habit Formation Science', focusMate: true, competitor1: false, competitor2: false },
  { feature: 'Offline Activity Suggestions', focusMate: true, competitor1: false, competitor2: false },
];

type Persona = typeof userPersonas[number];

const slides = [
  { key: 'bio',             label: 'Bio',             icon: User },
  { key: 'characteristics', label: 'Characteristics', icon: Sparkles },
  { key: 'goals',           label: 'Goals',           icon: Target },
  { key: 'frustrations',    label: 'Frustrations',    icon: Frown },
] as const;

function PersonaCard({ persona }: { persona: Persona }) {
  const [active, setActive] = useState(0);
  const [dir, setDir] = useState(1);

  const go = (next: number) => {
    setDir(next > active ? 1 : -1);
    setActive(next);
  };

  const { key, icon: Icon } = slides[active];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="glass-card overflow-hidden flex flex-col"
    >
      {/* Fixed demographics header */}
      <div className="bg-gradient-to-r from-teal-500/20 to-purple-500/20 p-6">
        <div className="flex items-center gap-4">
          <div className="w-20 h-20 rounded-full bg-background/50 flex items-center justify-center text-4xl">
            {persona.avatar}
          </div>
          <div>
            <h3 className="font-display text-2xl font-semibold">{persona.name}</h3>
            <div className="text-muted-foreground text-sm mt-1">
              {persona.age} years • {persona.gender} • {persona.occupation}
            </div>
          </div>
        </div>
      </div>

      {/* Slide tabs */}
      <div className="flex border-b border-white/10">
        {slides.map((s, i) => (
          <button
            key={s.key}
            onClick={() => go(i)}
            className={`flex-1 py-2 text-xs font-medium transition-colors ${
              active === i
                ? 'text-primary border-b-2 border-primary'
                : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            {s.label}
          </button>
        ))}
      </div>

      {/* Slide content */}
      <div className="relative h-[220px] overflow-y-auto p-6 scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent">
        <AnimatePresence mode="wait" initial={false} custom={dir}>
          <motion.div
            key={key}
            custom={dir}
            initial={{ opacity: 0, x: dir * 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: dir * -40 }}
            transition={{ duration: 0.25 }}
          >
            <h4 className="font-semibold text-sm uppercase tracking-wider text-muted-foreground mb-3 flex items-center gap-2">
              <Icon className="w-4 h-4" /> {slides[active].label}
            </h4>

            {key === 'bio' && (
              <p className="text-foreground/80 leading-relaxed text-sm">{persona.bio}</p>
            )}

            {key === 'characteristics' && (
              <div className="flex flex-wrap gap-2">
                {persona.characteristics.map((c) => (
                  <span key={c} className="skill-pill text-xs">{c}</span>
                ))}
              </div>
            )}

            {key === 'goals' && (
              <ul className="space-y-2">
                {persona.goals.map((g) => (
                  <li key={g} className="flex items-start gap-2 text-sm text-foreground/80">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                    {g}
                  </li>
                ))}
              </ul>
            )}

            {key === 'frustrations' && (
              <ul className="space-y-2">
                {persona.frustrations.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-foreground/80">
                    <XCircle className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
                    {f}
                  </li>
                ))}
              </ul>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Prev / Next */}
      <div className="flex items-center justify-between px-6 pb-4">
        <button
          onClick={() => go((active - 1 + slides.length) % slides.length)}
          className="p-1 rounded-full hover:bg-white/10 transition-colors text-muted-foreground hover:text-foreground"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <div className="flex gap-1.5">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => go(i)}
              className={`w-1.5 h-1.5 rounded-full transition-colors ${
                active === i ? 'bg-primary' : 'bg-white/20'
              }`}
            />
          ))}
        </div>
        <button
          onClick={() => go((active + 1) % slides.length)}
          className="p-1 rounded-full hover:bg-white/10 transition-colors text-muted-foreground hover:text-foreground"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </motion.div>
  );
}

const usabilitySlides = [
  {
    label: 'Tasks to Test',
    content: (
      <div className="space-y-3">
        {[
          { num: 1, title: 'Onboarding & Setup', desc: 'Can users successfully choose a work style and block distracting apps during the onboarding flow?' },
          { num: 2, title: 'Starting a Focus Session', desc: "Can users easily initiate a 30-minute focus session and understand what's happening?" },
          { num: 3, title: 'Tracking Progress & Rewards', desc: 'Can users view their completed sessions, total focus time, and understand the reward/break system?' },
        ].map((task) => (
          <div key={task.num} className="flex gap-4 p-4 rounded-xl bg-white/5">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-teal-500 to-purple-500 flex items-center justify-center text-white font-bold text-sm shrink-0">
              {task.num}
            </div>
            <div>
              <p className="font-semibold text-sm mb-0.5">{task.title}</p>
              <p className="text-sm text-muted-foreground">{task.desc}</p>
            </div>
          </div>
        ))}
      </div>
    ),
  },
  {
    label: 'Usability Metrics',
    content: (
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-white/10 text-left text-muted-foreground text-xs uppercase tracking-wider">
              <th className="pb-2 pr-4">Metric</th>
              <th className="pb-2 pr-4">Definition</th>
              <th className="pb-2">How to Measure</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {[
              { metric: 'Task Success Rate', def: '% of users who complete a task without errors or help', how: 'Count successful completions ÷ total attempts × 100%' },
              { metric: 'Time Taken', def: 'Average time required to complete each task', how: 'Use stopwatch or screen-recording to track time' },
              { metric: 'Error Rate', def: 'Frequency of mistakes, retries, or confusion during task completion', how: 'Number of errors per task (e.g., wrong button, restart onboarding)' },
              { metric: 'User Satisfaction', def: 'How satisfied users feel with clarity, ease, and overall experience', how: 'Post-task survey (1–5 Likert scale or smiley/frown feedback)' },
              { metric: 'Engagement Metrics', def: 'How much users interact with app features during/after testing', how: 'Count sessions started, time spent, and features explored' },
            ].map((row) => (
              <tr key={row.metric}>
                <td className="py-3 pr-4 font-semibold text-foreground whitespace-nowrap">{row.metric}</td>
                <td className="py-3 pr-4 text-muted-foreground">{row.def}</td>
                <td className="py-3 text-foreground/70">{row.how}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    ),
  },
  {
    label: 'Feature Metrics',
    content: (
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-white/10 text-left text-muted-foreground text-xs uppercase tracking-wider">
              <th className="pb-2 pr-3">Area</th>
              <th className="pb-2 pr-3">Success Metric</th>
              <th className="pb-2">Measurement</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {[
              { area: 'App blocking', metric: 'Reduction in distraction time', how: '% decrease in time on blocked apps during focus hours' },
              { area: 'Auto app block', metric: 'Limit adherence rate', how: '% of users staying within preset screen-time limits' },
              { area: 'Focus music', metric: 'Music usage rate', how: '% of focus sessions with music enabled' },
              { area: 'Rewards', metric: 'Engagement with rewards', how: '% checking dashboard or earning rewards weekly' },
            ].map((row) => (
              <tr key={row.area}>
                <td className="py-2 pr-3 text-foreground/80">{row.area}</td>
                <td className="py-2 pr-3 text-primary text-xs">{row.metric}</td>
                <td className="py-2 text-muted-foreground text-xs">{row.how}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    ),
  },
  {
    label: 'Overall Product Success',
    content: (
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-white/10 text-left text-muted-foreground text-xs uppercase tracking-wider">
              <th className="pb-2 pr-3">Goal</th>
              <th className="pb-2 pr-3">Metric</th>
              <th className="pb-2">Target</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {[
              { goal: 'Improve focus', metric: 'Avg. focus session length', target: '≥ 25 mins/session' },
              { goal: 'User retention', metric: 'Weekly Active Users', target: '≥ 30% of installs' },
              { goal: 'User satisfaction', metric: 'NPS', target: '≥ +30' },
              { goal: 'Reduce distractions', metric: 'Self-reported productivity increase', target: '≥ 70% feel less distracted after 2 weeks' },
            ].map((row) => (
              <tr key={row.goal}>
                <td className="py-2 pr-3 text-foreground/80">{row.goal}</td>
                <td className="py-2 pr-3 text-primary text-xs">{row.metric}</td>
                <td className="py-2 text-muted-foreground text-xs">{row.target}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    ),
  },
];

function UsabilityCarousel() {
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
      {/* Tab bar */}
      <div className="flex border-b border-white/10 overflow-x-auto">
        {usabilitySlides.map((s, i) => (
          <button
            key={s.label}
            onClick={() => go(i)}
            className={`flex-1 min-w-max px-4 py-3 text-sm font-medium transition-colors whitespace-nowrap ${
              active === i
                ? 'text-primary border-b-2 border-primary'
                : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            {s.label}
          </button>
        ))}
      </div>

      {/* Slide content */}
      <div className="relative min-h-[280px] p-6 md:p-8 overflow-hidden">
        <AnimatePresence mode="wait" initial={false} custom={dir}>
          <motion.div
            key={active}
            custom={dir}
            initial={{ opacity: 0, x: dir * 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: dir * -50 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="font-display text-xl font-semibold mb-5">
              {usabilitySlides[active].label}
            </h3>
            {usabilitySlides[active].content}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Prev / Next */}
      <div className="flex items-center justify-between px-6 pb-5 pt-2 border-t border-white/10">
        <button
          onClick={() => go((active - 1 + usabilitySlides.length) % usabilitySlides.length)}
          className="p-1 rounded-full hover:bg-white/10 transition-colors text-muted-foreground hover:text-foreground"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <div className="flex gap-2">
          {usabilitySlides.map((_, i) => (
            <button
              key={i}
              onClick={() => go(i)}
              className={`h-1.5 rounded-full transition-all ${
                active === i ? 'w-6 bg-primary' : 'w-1.5 bg-white/20'
              }`}
            />
          ))}
        </div>
        <button
          onClick={() => go((active + 1) % usabilitySlides.length)}
          className="p-1 rounded-full hover:bg-white/10 transition-colors text-muted-foreground hover:text-foreground"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </motion.div>
  );
}

const improvementSlides = [
  {
    label: 'Design Improvements',
    content: (
      <div className="grid sm:grid-cols-2 gap-4">
        {[
          { title: 'Simplify onboarding with tooltips', desc: "Step-by-step hints during first use so users aren't overwhelmed, reducing sign-up drop-off." },
          { title: 'Guided quick tour for first-time users', desc: 'Short walkthrough covering "Start Focus Session" and "Block Apps" for a smooth entry experience.' },
          { title: 'Open-ended feedback on reward system', desc: 'Short prompts to collect thoughts on rewards, helping refine motivation mechanics for diverse users.' },
          { title: 'Intuitive calendar design', desc: 'Calendar view to pre-schedule focus sessions by time/day, encouraging planning and habit building.' },
        ].map((item) => (
          <div key={item.title} className="rounded-xl bg-white/5 p-4">
            <p className="font-semibold text-sm mb-1">{item.title}</p>
            <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    ),
  },
  {
    label: 'Feature Improvements',
    content: (
      <div className="grid sm:grid-cols-3 gap-4">
        {[
          { title: 'Auto App Block After Preset Limit', desc: "Apps block automatically once daily/weekly screen time exceeds the user's set limit, building discipline." },
          { title: 'Collaborative Focus Sessions', desc: 'Invite peers, set shared goals and accountability "focus sprints" to add social motivation.' },
          { title: 'Focus Music Integration', desc: 'Library of background sounds (white noise, lo-fi, nature, classical) to improve concentration.' },
        ].map((item) => (
          <div key={item.title} className="rounded-xl bg-white/5 p-4">
            <p className="font-semibold text-sm mb-1">{item.title}</p>
            <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    ),
  },
  {
    label: 'MoSCoW Prioritization',
    content: (
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { level: 'Must Have', color: 'border-green-500/40 bg-green-500/5', badge: 'bg-green-500/20 text-green-400', items: ['Simplified onboarding', 'Guided quick tour', 'Automatic app block after preset limit'] },
          { level: 'Should Have', color: 'border-blue-500/40 bg-blue-500/5', badge: 'bg-blue-500/20 text-blue-400', items: ['Intuitive calendar scheduling', 'Focus music integration'] },
          { level: 'Could Have', color: 'border-yellow-500/40 bg-yellow-500/5', badge: 'bg-yellow-500/20 text-yellow-400', items: ['Collaborative focus sessions', 'Open-ended feedback for reward system'] },
          { level: "Won't Have (for now)", color: 'border-red-500/40 bg-red-500/5', badge: 'bg-red-500/20 text-red-400', items: ['Complex gamification beyond rewards (later releases)'] },
        ].map((col) => (
          <div key={col.level} className={`rounded-xl border p-4 ${col.color}`}>
            <span className={`inline-block text-xs font-semibold px-2 py-0.5 rounded-full mb-3 ${col.badge}`}>{col.level}</span>
            <ul className="space-y-1.5">
              {col.items.map((item) => (
                <li key={item} className="text-xs text-foreground/80 flex items-start gap-1.5">
                  <span className="mt-0.5 shrink-0">–</span>{item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    ),
  },
];

function ImprovementsCarousel() {
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
      {/* Tab bar */}
      <div className="flex border-b border-white/10 overflow-x-auto">
        {improvementSlides.map((s, i) => (
          <button
            key={s.label}
            onClick={() => go(i)}
            className={`flex-1 min-w-max px-4 py-3 text-sm font-medium transition-colors whitespace-nowrap ${
              active === i
                ? 'text-primary border-b-2 border-primary'
                : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            {s.label}
          </button>
        ))}
      </div>

      {/* Slide content */}
      <div className="relative min-h-[260px] p-6 md:p-8 overflow-hidden">
        <AnimatePresence mode="wait" initial={false} custom={dir}>
          <motion.div
            key={active}
            custom={dir}
            initial={{ opacity: 0, x: dir * 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: dir * -50 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="font-display text-xl font-semibold mb-5">
              {improvementSlides[active].label}
            </h3>
            {improvementSlides[active].content}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Prev / Next */}
      <div className="flex items-center justify-between px-6 pb-5 pt-2 border-t border-white/10">
        <button
          onClick={() => go((active - 1 + improvementSlides.length) % improvementSlides.length)}
          className="p-1 rounded-full hover:bg-white/10 transition-colors text-muted-foreground hover:text-foreground"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <div className="flex gap-2">
          {improvementSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => go(i)}
              className={`h-1.5 rounded-full transition-all ${
                active === i ? 'w-6 bg-primary' : 'w-1.5 bg-white/20'
              }`}
            />
          ))}
        </div>
        <button
          onClick={() => go((active + 1) % improvementSlides.length)}
          className="p-1 rounded-full hover:bg-white/10 transition-colors text-muted-foreground hover:text-foreground"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </motion.div>
  );
}

export default function CaseStudyFocusMate() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-white/5">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex items-center h-16 md:h-20">
            <Link
              to="/#case-studies"
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Portfolio</span>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero / Cover Section */}
      <section className="pt-32 pb-20 px-4 md:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 via-purple-500/5 to-transparent" />
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
              FocusMate: Build Better{' '}
              <span className="gradient-text">Screen Habits</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Designing a compassionate digital wellness app that helps users develop healthier relationships with their devices through mindful, science-backed approaches.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="glass-card px-6 py-3 flex items-center gap-2">
                <Clock className="w-5 h-5 text-primary" />
                <span className="text-sm">8 Week Project</span>
              </div>
              <div className="glass-card px-6 py-3 flex items-center gap-2">
                <User className="w-5 h-5 text-primary" />
                <span className="text-sm">12 User Interviews</span>
              </div>
              <div className="glass-card px-6 py-3 flex items-center gap-2">
                <Brain className="w-5 h-5 text-primary" />
                <span className="text-sm">Behavioral Design</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-10 px-4 md:px-8 bg-card/30">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-8 text-center">
              The <span className="gradient-text">Problem</span>
            </h2>
            <div className="glass-card p-8 md:p-12">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                In an increasingly connected world, many people struggle with excessive screen time and digital distractions. Existing solutions often take a restrictive, punitive approach that makes users feel guilty rather than empowered.
              </p>
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <div className="text-center">
                  <div className="text-4xl font-bold gradient-text mb-2">7+ hrs</div>
                  <div className="text-sm text-muted-foreground">Average daily screen time</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold gradient-text mb-2">85%</div>
                  <div className="text-sm text-muted-foreground">Feel guilty about usage</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold gradient-text mb-2">62%</div>
                  <div className="text-sm text-muted-foreground">Want to reduce but can't</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* User Personas */}
      <section className="py-10 px-4 md:px-8">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              User <span className="gradient-text">Personas</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Based on interviews with 12 participants, we identified two primary user archetypes.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
            {userPersonas.map((persona) => (
              <PersonaCard key={persona.id} persona={persona} />
            ))}
          </div>
        </div>
      </section>

      {/* User Flow */}
      <UserFlow />

      {/* Low Fidelity Wireframes */}
      <section className="py-10 px-4 md:px-8">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Low Fidelity <span className="gradient-text">Wireframes</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Initial sketches exploring the core app screens and user interactions.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">

            {/* Wireframe 1: Home Screen */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="glass-card p-6"
            >
              <h3 className="font-semibold mb-4 text-center">Home</h3>
              <div className="aspect-[9/16] bg-muted/30 rounded-2xl border-2 border-dashed border-muted-foreground/30 p-3 flex flex-col gap-2 overflow-hidden">
                {/* Top nav: 4 icon+label tabs */}
                <div className="flex justify-around pt-1 pb-2 border-b border-muted-foreground/20">
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className="flex flex-col items-center gap-1">
                      <div className={`w-5 h-5 rounded ${i === 0 ? 'bg-muted-foreground/50' : 'bg-muted-foreground/20'}`} />
                      <div className="w-8 h-1.5 bg-muted-foreground/20 rounded" />
                    </div>
                  ))}
                </div>
                {/* Profile row */}
                <div className="flex items-center gap-2 py-1">
                  <div className="w-8 h-8 rounded-full bg-muted-foreground/30 shrink-0" />
                  <div>
                    <div className="w-16 h-2 bg-muted-foreground/40 rounded mb-1" />
                    <div className="w-12 h-1.5 bg-muted-foreground/20 rounded" />
                  </div>
                </div>
                {/* Your Progress */}
                <div>
                  <div className="w-20 h-2 bg-muted-foreground/40 rounded mb-1" />
                  <div className="w-14 h-1.5 bg-muted-foreground/20 rounded mb-2" />
                  <div className="flex gap-1.5">
                    {[...Array(3)].map((_, i) => (
                      <div key={i} className="flex-1 bg-muted-foreground/15 rounded-lg p-2">
                        <div className="w-full h-1.5 bg-muted-foreground/20 rounded mb-1" />
                        <div className="w-8 h-3 bg-muted-foreground/30 rounded mb-1" />
                        <div className="w-6 h-1.5 bg-muted-foreground/20 rounded" />
                      </div>
                    ))}
                  </div>
                </div>
                {/* Recommended Tools */}
                <div>
                  <div className="flex justify-between items-center mb-1.5">
                    <div className="w-24 h-2 bg-muted-foreground/40 rounded" />
                    <div className="w-12 h-4 bg-muted-foreground/20 rounded-full" />
                  </div>
                  <div className="flex gap-2 overflow-hidden">
                    {[...Array(3)].map((_, i) => (
                      <div key={i} className="shrink-0 w-20 bg-muted-foreground/10 rounded-lg p-2">
                        <div className="w-8 h-1.5 bg-muted-foreground/30 rounded mb-2" />
                        <div className="w-full h-10 bg-muted-foreground/20 rounded mb-2" />
                        <div className="w-full h-1.5 bg-muted-foreground/20 rounded mb-1" />
                        <div className="w-3/4 h-2 bg-muted-foreground/30 rounded" />
                      </div>
                    ))}
                  </div>
                </div>
                {/* User Testimonials */}
                <div>
                  <div className="w-24 h-2 bg-muted-foreground/40 rounded mb-1.5" />
                  <div className="flex gap-2 overflow-hidden">
                    {[...Array(2)].map((_, i) => (
                      <div key={i} className="shrink-0 w-28 bg-muted-foreground/10 rounded-lg p-2">
                        <div className="flex items-center gap-1 mb-1">
                          <div className="w-4 h-4 rounded-full bg-muted-foreground/30" />
                          <div className="w-10 h-1.5 bg-muted-foreground/30 rounded" />
                        </div>
                        <div className="flex gap-0.5 mb-1">
                          {[...Array(5)].map((_, j) => (
                            <div key={j} className="w-2 h-2 bg-yellow-400/50 rounded-sm" />
                          ))}
                        </div>
                        <div className="w-full h-1.5 bg-muted-foreground/20 rounded mb-1" />
                        <div className="w-3/4 h-1.5 bg-muted-foreground/20 rounded" />
                      </div>
                    ))}
                  </div>
                </div>
                {/* Bottom nav */}
                <div className="flex justify-around pt-2 mt-auto border-t border-muted-foreground/20">
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className="flex flex-col items-center gap-1">
                      <div className={`w-4 h-4 rounded ${i === 0 ? 'bg-muted-foreground/50' : 'bg-muted-foreground/20'}`} />
                      <div className="w-6 h-1.5 bg-muted-foreground/20 rounded" />
                    </div>
                  ))}
                </div>
              </div>
              <p className="text-xs text-muted-foreground text-center mt-4">
                Home screen with profile, progress stats &amp; recommended tools
              </p>
            </motion.div>

            {/* Wireframe 2: Latest Updates Feed */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="glass-card p-6"
            >
              <h3 className="font-semibold mb-4 text-center">Latest Updates</h3>
              <div className="aspect-[9/16] bg-muted/30 rounded-2xl border-2 border-dashed border-muted-foreground/30 p-3 flex flex-col gap-2 overflow-hidden">
                {/* Section header */}
                <div className="w-24 h-2.5 bg-muted-foreground/40 rounded mt-1 mb-1" />
                {/* Post card 1 */}
                <div className="bg-muted-foreground/10 rounded-xl p-2 flex flex-col gap-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <div className="w-5 h-5 rounded-full bg-muted-foreground/30" />
                      <div>
                        <div className="w-12 h-1.5 bg-muted-foreground/40 rounded mb-1" />
                        <div className="w-16 h-1 bg-muted-foreground/20 rounded" />
                      </div>
                    </div>
                    <div className="flex gap-0.5">
                      {[...Array(3)].map((_, i) => <div key={i} className="w-1 h-1 rounded-full bg-muted-foreground/30" />)}
                    </div>
                  </div>
                  {/* Large image placeholder */}
                  <div className="w-full h-20 bg-muted-foreground/20 rounded-lg flex items-center justify-center">
                    <div className="w-20 h-3 bg-muted-foreground/30 rounded" />
                  </div>
                  {/* Dot indicators */}
                  <div className="flex justify-center gap-1">
                    {[...Array(3)].map((_, i) => <div key={i} className={`w-1.5 h-1.5 rounded-full ${i === 0 ? 'bg-muted-foreground/50' : 'bg-muted-foreground/20'}`} />)}
                  </div>
                  <div className="w-full h-1.5 bg-muted-foreground/20 rounded" />
                </div>
                {/* Post card 2 */}
                <div className="bg-muted-foreground/10 rounded-xl p-2 flex flex-col gap-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <div className="w-5 h-5 rounded-full bg-muted-foreground/30" />
                      <div>
                        <div className="w-14 h-1.5 bg-muted-foreground/40 rounded mb-1" />
                        <div className="w-16 h-1 bg-muted-foreground/20 rounded" />
                      </div>
                    </div>
                    <div className="flex gap-0.5">
                      {[...Array(3)].map((_, i) => <div key={i} className="w-1 h-1 rounded-full bg-muted-foreground/30" />)}
                    </div>
                  </div>
                  <div className="w-full h-20 bg-muted-foreground/20 rounded-lg flex items-center justify-center">
                    <div className="w-20 h-3 bg-muted-foreground/30 rounded" />
                  </div>
                  <div className="flex justify-center gap-1">
                    {[...Array(3)].map((_, i) => <div key={i} className={`w-1.5 h-1.5 rounded-full ${i === 0 ? 'bg-muted-foreground/50' : 'bg-muted-foreground/20'}`} />)}
                  </div>
                  <div className="w-full h-1.5 bg-muted-foreground/20 rounded" />
                </div>
                {/* Bottom action buttons */}
                <div className="mt-auto space-y-1.5">
                  <div className="h-7 rounded-full border border-dashed border-muted-foreground/40 flex items-center justify-center">
                    <div className="w-20 h-2 bg-muted-foreground/25 rounded" />
                  </div>
                  <div className="h-7 rounded-full border border-dashed border-muted-foreground/40 flex items-center justify-center">
                    <div className="w-14 h-2 bg-muted-foreground/25 rounded" />
                  </div>
                  <div className="h-7 rounded-full bg-muted-foreground/30 flex items-center justify-center">
                    <div className="w-20 h-2 bg-muted-foreground/50 rounded" />
                  </div>
                </div>
              </div>
              <p className="text-xs text-muted-foreground text-center mt-4">
                Feed with post cards, image previews &amp; quick actions
              </p>
            </motion.div>

            {/* Wireframe 3: Stats / Progress */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="glass-card p-6"
            >
              <h3 className="font-semibold mb-4 text-center">Stats</h3>
              <div className="aspect-[9/16] bg-muted/30 rounded-2xl border-2 border-dashed border-muted-foreground/30 p-3 flex flex-col gap-2 overflow-hidden">
                {/* Header */}
                <div className="flex items-center justify-between pt-1 pb-2 border-b border-muted-foreground/20">
                  <div className="w-16 h-2.5 bg-muted-foreground/40 rounded" />
                  <div className="w-16 h-5 bg-muted-foreground/20 rounded-full" />
                </div>
                {/* Summary stat cards */}
                <div className="flex gap-1.5">
                  {[...Array(3)].map((_, i) => (
                    <div key={i} className="flex-1 bg-muted-foreground/15 rounded-lg p-2">
                      <div className="w-full h-1.5 bg-muted-foreground/20 rounded mb-1" />
                      <div className="w-8 h-3 bg-muted-foreground/35 rounded mb-1" />
                      <div className="w-5 h-1.5 bg-muted-foreground/20 rounded" />
                    </div>
                  ))}
                </div>
                {/* Bar chart */}
                <div className="bg-muted-foreground/10 rounded-xl p-2">
                  <div className="w-20 h-2 bg-muted-foreground/30 rounded mb-2" />
                  <div className="flex items-end gap-1 h-16 px-1">
                    {[65, 80, 45, 70, 55, 40, 30].map((h, i) => (
                      <div key={i} className="flex-1 bg-teal-500/30 rounded-t" style={{ height: `${h}%` }} />
                    ))}
                  </div>
                  <div className="flex justify-between mt-1">
                    {['M','T','W','T','F','S','S'].map((d, i) => (
                      <div key={i} className="flex-1 flex justify-center">
                        <div className="w-2 h-1.5 bg-muted-foreground/20 rounded" />
                      </div>
                    ))}
                  </div>
                </div>
                {/* Insight rows */}
                <div className="space-y-1.5 flex-1">
                  {[
                    'bg-green-500/20',
                    'bg-yellow-500/20',
                    'bg-purple-500/20',
                  ].map((color, i) => (
                    <div key={i} className="flex items-center gap-2 bg-muted-foreground/10 rounded-lg p-2">
                      <div className={`w-6 h-6 rounded-md ${color} shrink-0`} />
                      <div className="flex-1">
                        <div className="w-full h-1.5 bg-muted-foreground/30 rounded mb-1" />
                        <div className="w-3/4 h-1.5 bg-muted-foreground/20 rounded" />
                      </div>
                    </div>
                  ))}
                </div>
                {/* Bottom nav */}
                <div className="flex justify-around pt-2 border-t border-muted-foreground/20">
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className="flex flex-col items-center gap-1">
                      <div className={`w-4 h-4 rounded ${i === 2 ? 'bg-muted-foreground/50' : 'bg-muted-foreground/20'}`} />
                      <div className="w-6 h-1.5 bg-muted-foreground/20 rounded" />
                    </div>
                  ))}
                </div>
              </div>
              <p className="text-xs text-muted-foreground text-center mt-4">
                Stats screen with bar chart, progress cards &amp; insights
              </p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Opportunity Sizing & Feature Prioritization */}
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
              Opportunity Sizing &amp; <span className="gradient-text">Feature Prioritization</span>
            </h2>
          </motion.div>

          <div className="space-y-6">
            {/* Pain Point Frequency — full width */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="glass-card p-6"
            >
              <h3 className="font-display text-xl font-semibold mb-4">Pain Point Frequency</h3>
              <div className="space-y-3">
                {[
                  { label: 'No tool currently being used', pct: 80 },
                  { label: 'Easily distracted by social media / video apps', pct: 75 },
                  { label: 'Need simplicity in design', pct: 70 },
                  { label: 'Difficulty managing time & focus', pct: 65 },
                  { label: 'Want reminders / guidance', pct: 60 },
                  { label: 'Want rewards / motivation', pct: 50 },
                  { label: 'Like collaborative / social accountability', pct: 40 },
                ].map((row) => (
                  <div key={row.label}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-foreground/80">{row.label}</span>
                      <span className="text-primary font-medium shrink-0 ml-2">~{row.pct}%</span>
                    </div>
                    <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-teal-500 to-purple-500 rounded-full" style={{ width: `${row.pct}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Opportunity Sizing + RICE side by side */}
            <div className="grid md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="glass-card p-6 overflow-x-auto"
            >
              <h3 className="font-display text-xl font-semibold mb-4">Opportunity Sizing</h3>
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-white/10 text-left text-muted-foreground text-xs uppercase tracking-wider">
                    <th className="pb-2 pr-3">Feature</th>
                    <th className="pb-2 pr-3 whitespace-nowrap">% Interested</th>
                    <th className="pb-2">Level</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {[
                    { feature: 'App/Website Blocking', pct: '75–80%', stars: 4 },
                    { feature: 'Focus Timer', pct: '70%', stars: 4 },
                    { feature: 'Gentle Reminders / Nudges', pct: '60–65%', stars: 4 },
                    { feature: 'Hard Block After Usage Limit', pct: '70–75%', stars: 4 },
                    { feature: 'Rewards & Progress Tracking', pct: '50–55%', stars: 3 },
                  ].map((row) => (
                    <tr key={row.feature}>
                      <td className="py-2 pr-3 text-foreground/80">{row.feature}</td>
                      <td className="py-2 pr-3 text-primary font-medium">{row.pct}</td>
                      <td className="py-2">
                        <span className="text-yellow-400">{'⭐'.repeat(row.stars)}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </motion.div>

            {/* RICE Prioritization */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="glass-card p-6 overflow-x-auto"
            >
              <h3 className="font-display text-xl font-semibold mb-4">RICE Prioritization</h3>
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-white/10 text-left text-muted-foreground text-xs uppercase tracking-wider">
                    <th className="pb-2 pr-2">Feature</th>
                    <th className="pb-2 pr-2">R</th>
                    <th className="pb-2 pr-2">I</th>
                    <th className="pb-2 pr-2">C</th>
                    <th className="pb-2 pr-2">E</th>
                    <th className="pb-2">Score</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {[
                    { feature: 'App Blocking', r: 5, i: 5, c: 4, e: 3, score: 33 },
                    { feature: 'Focus Timer', r: 4, i: 4, c: 4, e: 2, score: 32 },
                    { feature: 'Hard Block', r: 4, i: 4, c: 4, e: 3, score: 29 },
                    { feature: 'Gentle Reminders', r: 4, i: 3, c: 4, e: 2, score: 28 },
                    { feature: 'Rewards / Progress', r: 3, i: 3, c: 3, e: 2, score: 20 },
                  ].map((row) => (
                    <tr key={row.feature}>
                      <td className="py-2 pr-2 text-foreground/80">{row.feature}</td>
                      <td className="py-2 pr-2 text-muted-foreground">{row.r}</td>
                      <td className="py-2 pr-2 text-muted-foreground">{row.i}</td>
                      <td className="py-2 pr-2 text-muted-foreground">{row.c}</td>
                      <td className="py-2 pr-2 text-muted-foreground">{row.e}</td>
                      <td className="py-2 font-bold text-primary">{row.score}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Usability Plan */}
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
              Usability <span className="gradient-text">Plan</span>
            </h2>
          </motion.div>

          <UsabilityCarousel />
        </div>
      </section>

      {/* Improvements After Testing */}
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
              Improvements <span className="gradient-text">After Testing</span>
            </h2>
          </motion.div>

          <ImprovementsCarousel />
        </div>
      </section>

      {/* Feature Comparison Table */}
      {/* <section className="py-10 px-4 md:px-8 bg-card/30">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Competitive <span className="gradient-text">Analysis</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              How FocusMate differentiates from existing solutions in the market.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card overflow-hidden"
          >
            <Table>
              <TableHeader>
                <TableRow className="border-white/10">
                  <TableHead className="text-foreground font-semibold">Feature</TableHead>
                  <TableHead className="text-center text-foreground font-semibold">FocusMate</TableHead>
                  <TableHead className="text-center text-muted-foreground">Competitor A</TableHead>
                  <TableHead className="text-center text-muted-foreground">Competitor B</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {featureComparison.map((row) => (
                  <TableRow key={row.feature} className="border-white/5">
                    <TableCell className="font-medium">{row.feature}</TableCell>
                    <TableCell className="text-center">
                      {row.focusMate ? (
                        <CheckCircle className="w-5 h-5 text-green-500 mx-auto" />
                      ) : (
                        <XCircle className="w-5 h-5 text-red-400 mx-auto" />
                      )}
                    </TableCell>
                    <TableCell className="text-center">
                      {row.competitor1 ? (
                        <CheckCircle className="w-5 h-5 text-green-500/50 mx-auto" />
                      ) : (
                        <XCircle className="w-5 h-5 text-red-400/50 mx-auto" />
                      )}
                    </TableCell>
                    <TableCell className="text-center">
                      {row.competitor2 ? (
                        <CheckCircle className="w-5 h-5 text-green-500/50 mx-auto" />
                      ) : (
                        <XCircle className="w-5 h-5 text-red-400/50 mx-auto" />
                      )}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </motion.div>
        </div>
      </section> */}

      {/* Key Takeaways */}
      <section className="py-10 px-4 md:px-8">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Key <span className="gradient-text">Takeaways</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: 'Compassion Over Restriction',
                description: 'Users respond better to gentle nudges and positive reinforcement than strict blocking and guilt-inducing metrics.',
              },
              {
                title: 'Personalization is Key',
                description: 'One-size-fits-all approaches fail. Understanding individual triggers and patterns enables meaningful behavior change.',
              },
              {
                title: 'Focus on Outcomes',
                description: 'Users don\'t just want less screen time—they want more time for what matters. Frame benefits around life goals.',
              },
              {
                title: 'Build Habits, Not Dependencies',
                description: 'The ultimate goal is helping users develop intrinsic motivation, not creating another app they\'re glued to.',
              },
            ].map((takeaway, index) => (
              <motion.div
                key={takeaway.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card p-6"
              >
                <h3 className="font-semibold text-lg mb-2">{takeaway.title}</h3>
                <p className="text-muted-foreground text-sm">{takeaway.description}</p>
              </motion.div>
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
          <Link
            to="/#contact"
            className="inline-block mt-4 text-primary hover:underline"
          >
            Get in touch to discuss this project →
          </Link>
        </div>
      </footer>
    </div>
  );
}
