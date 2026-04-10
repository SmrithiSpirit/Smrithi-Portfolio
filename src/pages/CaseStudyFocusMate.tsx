import { motion } from 'framer-motion';
import { ArrowLeft, User, Target, Frown, Sparkles, Smartphone, Clock, Brain, CheckCircle, XCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

const userPersonas = [
  {
    id: 1,
    name: 'Priya Sharma',
    age: 28,
    gender: 'Female',
    occupation: 'Software Developer',
    avatar: '👩‍💻',
    bio: 'Priya is a mid-level developer at a tech startup in Bengaluru. She often finds herself doom-scrolling on social media during work hours and struggles to maintain focus on complex coding tasks. She wants to be more productive but feels overwhelmed by constant notifications.',
    characteristics: ['Tech-savvy', 'Ambitious', 'Easily distracted', 'Health-conscious', 'Goal-oriented'],
    goals: [
      'Reduce screen time by 2 hours daily',
      'Improve focus during deep work sessions',
      'Build healthier evening routines',
      'Track and understand usage patterns',
    ],
    frustrations: [
      'Existing apps feel judgmental and restrictive',
      'Hard to break the habit loop',
      'Notifications constantly break focus',
      'Feels guilty about screen time but can\'t stop',
    ],
  },
  {
    id: 2,
    name: 'Rahul Mehta',
    age: 35,
    gender: 'Male',
    occupation: 'Marketing Manager',
    avatar: '👨‍💼',
    bio: 'Rahul manages a team of 8 and spends most of his day in meetings and on Slack. He\'s concerned about his teenagers\' screen habits and wants to lead by example. Work-life boundaries have blurred since remote work began.',
    characteristics: ['Leadership-focused', 'Family-oriented', 'Stressed', 'Time-poor', 'Reflective'],
    goals: [
      'Set boundaries between work and personal time',
      'Model healthy tech behavior for kids',
      'Reduce evening work screen time',
      'Find time for offline hobbies',
    ],
    frustrations: [
      'Work apps feel essential, hard to limit',
      'Fear of missing important messages',
      'Existing solutions are too complex',
      'No family-friendly features',
    ],
  },
];

const userFlowSteps = [
  { step: 1, title: 'Onboarding', description: 'User downloads app and completes quick setup questionnaire' },
  { step: 2, title: 'Goal Setting', description: 'Define personal screen time goals and focus areas' },
  { step: 3, title: 'Baseline Tracking', description: 'App monitors usage patterns for 7 days without intervention' },
  { step: 4, title: 'Insights Delivery', description: 'Personalized insights and recommendations presented' },
  { step: 5, title: 'Focus Mode Activation', description: 'User activates focus sessions with customizable settings' },
  { step: 6, title: 'Progress Review', description: 'Weekly summary with achievements and areas for improvement' },
];

const featureComparison = [
  { feature: 'Screen Time Tracking', focusMate: true, competitor1: true, competitor2: true },
  { feature: 'Personalized Insights', focusMate: true, competitor1: false, competitor2: true },
  { feature: 'Gentle Nudges (Non-judgmental)', focusMate: true, competitor1: false, competitor2: false },
  { feature: 'Focus Mode with Rewards', focusMate: true, competitor1: true, competitor2: false },
  { feature: 'Family Sharing', focusMate: true, competitor1: false, competitor2: true },
  { feature: 'Habit Formation Science', focusMate: true, competitor1: false, competitor2: false },
  { feature: 'Offline Activity Suggestions', focusMate: true, competitor1: false, competitor2: false },
];

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
      <section className="py-20 px-4 md:px-8 bg-card/30">
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
      <section className="py-20 px-4 md:px-8">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              User <span className="gradient-text">Personas</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Based on interviews with 12 participants, we identified two primary user archetypes.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {userPersonas.map((persona, index) => (
              <motion.div
                key={persona.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card overflow-hidden"
              >
                {/* Demographics Header */}
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

                <div className="p-6 space-y-6">
                  {/* Bio */}
                  <div>
                    <h4 className="font-semibold text-sm uppercase tracking-wider text-muted-foreground mb-3 flex items-center gap-2">
                      <User className="w-4 h-4" /> Bio
                    </h4>
                    <p className="text-foreground/80 leading-relaxed">{persona.bio}</p>
                  </div>

                  {/* Characteristics */}
                  <div>
                    <h4 className="font-semibold text-sm uppercase tracking-wider text-muted-foreground mb-3 flex items-center gap-2">
                      <Sparkles className="w-4 h-4" /> Characteristics
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {persona.characteristics.map((char) => (
                        <span key={char} className="skill-pill text-xs">
                          {char}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Goals */}
                  <div>
                    <h4 className="font-semibold text-sm uppercase tracking-wider text-muted-foreground mb-3 flex items-center gap-2">
                      <Target className="w-4 h-4" /> Goals
                    </h4>
                    <ul className="space-y-2">
                      {persona.goals.map((goal) => (
                        <li key={goal} className="flex items-start gap-2 text-sm text-foreground/80">
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                          {goal}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Frustrations */}
                  <div>
                    <h4 className="font-semibold text-sm uppercase tracking-wider text-muted-foreground mb-3 flex items-center gap-2">
                      <Frown className="w-4 h-4" /> Frustrations
                    </h4>
                    <ul className="space-y-2">
                      {persona.frustrations.map((frustration) => (
                        <li key={frustration} className="flex items-start gap-2 text-sm text-foreground/80">
                          <XCircle className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
                          {frustration}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* User Flow */}
      <section className="py-20 px-4 md:px-8 bg-card/30">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              User <span className="gradient-text">Flow</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The core journey from app discovery to sustained habit change.
            </p>
          </motion.div>

          <div className="relative">
            {/* Flow Steps */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {userFlowSteps.map((item, index) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="glass-card p-6 relative"
                >
                  <div className="absolute -top-3 -left-3 w-10 h-10 rounded-full bg-gradient-to-br from-teal-500 to-purple-500 flex items-center justify-center font-bold text-white">
                    {item.step}
                  </div>
                  <h3 className="font-semibold text-lg mb-2 mt-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Low Fidelity Wireframes */}
      <section className="py-20 px-4 md:px-8">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Low Fidelity <span className="gradient-text">Wireframes</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Initial sketches exploring the core app screens and user interactions.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Wireframe 1: Dashboard */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="glass-card p-6"
            >
              <h3 className="font-semibold mb-4 text-center">Dashboard</h3>
              <div className="aspect-[9/16] bg-muted/30 rounded-2xl border-2 border-dashed border-muted-foreground/30 p-4 flex flex-col">
                {/* Status bar placeholder */}
                <div className="flex justify-between mb-4">
                  <div className="w-12 h-2 bg-muted-foreground/20 rounded" />
                  <div className="w-16 h-2 bg-muted-foreground/20 rounded" />
                </div>
                {/* Header */}
                <div className="w-24 h-4 bg-muted-foreground/30 rounded mb-6" />
                {/* Main circle */}
                <div className="w-32 h-32 mx-auto rounded-full border-4 border-dashed border-muted-foreground/40 flex items-center justify-center mb-6">
                  <div className="text-center">
                    <div className="w-12 h-6 bg-muted-foreground/30 rounded mx-auto mb-1" />
                    <div className="w-8 h-2 bg-muted-foreground/20 rounded mx-auto" />
                  </div>
                </div>
                {/* Stats row */}
                <div className="flex gap-2 mb-4">
                  <div className="flex-1 h-16 bg-muted-foreground/20 rounded-lg" />
                  <div className="flex-1 h-16 bg-muted-foreground/20 rounded-lg" />
                </div>
                {/* App list */}
                <div className="space-y-2 flex-1">
                  <div className="h-10 bg-muted-foreground/15 rounded-lg" />
                  <div className="h-10 bg-muted-foreground/15 rounded-lg" />
                  <div className="h-10 bg-muted-foreground/15 rounded-lg" />
                </div>
                {/* Nav bar */}
                <div className="flex gap-4 justify-center mt-4 pt-4 border-t border-muted-foreground/20">
                  <div className="w-8 h-8 bg-muted-foreground/30 rounded-full" />
                  <div className="w-8 h-8 bg-muted-foreground/30 rounded-full" />
                  <div className="w-8 h-8 bg-muted-foreground/30 rounded-full" />
                  <div className="w-8 h-8 bg-muted-foreground/30 rounded-full" />
                </div>
              </div>
              <p className="text-xs text-muted-foreground text-center mt-4">
                Main dashboard showing daily usage and quick stats
              </p>
            </motion.div>

            {/* Wireframe 2: Focus Mode */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="glass-card p-6"
            >
              <h3 className="font-semibold mb-4 text-center">Focus Mode</h3>
              <div className="aspect-[9/16] bg-muted/30 rounded-2xl border-2 border-dashed border-muted-foreground/30 p-4 flex flex-col">
                {/* Header */}
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-6 h-6 bg-muted-foreground/20 rounded" />
                  <div className="w-20 h-4 bg-muted-foreground/30 rounded" />
                </div>
                {/* Timer circle */}
                <div className="w-40 h-40 mx-auto rounded-full border-8 border-teal-500/30 flex items-center justify-center mb-8 relative">
                  <div className="absolute inset-2 rounded-full border-4 border-dashed border-muted-foreground/30" />
                  <div className="text-center">
                    <div className="w-16 h-8 bg-muted-foreground/30 rounded mx-auto mb-1" />
                    <div className="w-12 h-2 bg-muted-foreground/20 rounded mx-auto" />
                  </div>
                </div>
                {/* Session info */}
                <div className="glass-card p-4 mb-4">
                  <div className="w-24 h-3 bg-muted-foreground/30 rounded mb-2" />
                  <div className="w-full h-2 bg-muted-foreground/20 rounded" />
                </div>
                {/* Blocked apps */}
                <div className="flex-1">
                  <div className="w-20 h-3 bg-muted-foreground/20 rounded mb-3" />
                  <div className="flex gap-2 flex-wrap">
                    <div className="w-10 h-10 bg-muted-foreground/20 rounded-lg" />
                    <div className="w-10 h-10 bg-muted-foreground/20 rounded-lg" />
                    <div className="w-10 h-10 bg-muted-foreground/20 rounded-lg" />
                  </div>
                </div>
                {/* End button */}
                <div className="h-12 bg-red-500/20 rounded-full border-2 border-dashed border-red-500/40" />
              </div>
              <p className="text-xs text-muted-foreground text-center mt-4">
                Active focus session with timer and blocked apps
              </p>
            </motion.div>

            {/* Wireframe 3: Insights */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="glass-card p-6"
            >
              <h3 className="font-semibold mb-4 text-center">Insights</h3>
              <div className="aspect-[9/16] bg-muted/30 rounded-2xl border-2 border-dashed border-muted-foreground/30 p-4 flex flex-col">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-16 h-4 bg-muted-foreground/30 rounded" />
                  <div className="w-20 h-6 bg-muted-foreground/20 rounded-full" />
                </div>
                {/* Weekly chart */}
                <div className="h-32 mb-6 flex items-end gap-2 px-2">
                  <div className="flex-1 bg-teal-500/30 rounded-t" style={{ height: '60%' }} />
                  <div className="flex-1 bg-teal-500/30 rounded-t" style={{ height: '80%' }} />
                  <div className="flex-1 bg-teal-500/30 rounded-t" style={{ height: '45%' }} />
                  <div className="flex-1 bg-teal-500/30 rounded-t" style={{ height: '70%' }} />
                  <div className="flex-1 bg-teal-500/30 rounded-t" style={{ height: '55%' }} />
                  <div className="flex-1 bg-purple-500/30 rounded-t" style={{ height: '40%' }} />
                  <div className="flex-1 bg-muted-foreground/20 rounded-t" style={{ height: '30%' }} />
                </div>
                {/* Insight cards */}
                <div className="space-y-3 flex-1">
                  <div className="glass-card p-3 flex gap-3">
                    <div className="w-8 h-8 bg-green-500/20 rounded-lg flex-shrink-0" />
                    <div className="flex-1">
                      <div className="w-full h-2 bg-muted-foreground/30 rounded mb-1" />
                      <div className="w-3/4 h-2 bg-muted-foreground/20 rounded" />
                    </div>
                  </div>
                  <div className="glass-card p-3 flex gap-3">
                    <div className="w-8 h-8 bg-yellow-500/20 rounded-lg flex-shrink-0" />
                    <div className="flex-1">
                      <div className="w-full h-2 bg-muted-foreground/30 rounded mb-1" />
                      <div className="w-2/3 h-2 bg-muted-foreground/20 rounded" />
                    </div>
                  </div>
                  <div className="glass-card p-3 flex gap-3">
                    <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex-shrink-0" />
                    <div className="flex-1">
                      <div className="w-full h-2 bg-muted-foreground/30 rounded mb-1" />
                      <div className="w-4/5 h-2 bg-muted-foreground/20 rounded" />
                    </div>
                  </div>
                </div>
                {/* Nav bar */}
                <div className="flex gap-4 justify-center mt-4 pt-4 border-t border-muted-foreground/20">
                  <div className="w-8 h-8 bg-muted-foreground/20 rounded-full" />
                  <div className="w-8 h-8 bg-muted-foreground/20 rounded-full" />
                  <div className="w-8 h-8 bg-muted-foreground/30 rounded-full" />
                  <div className="w-8 h-8 bg-muted-foreground/20 rounded-full" />
                </div>
              </div>
              <p className="text-xs text-muted-foreground text-center mt-4">
                Weekly insights with personalized recommendations
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Feature Comparison Table */}
      <section className="py-20 px-4 md:px-8 bg-card/30">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
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
      </section>

      {/* Key Takeaways */}
      <section className="py-20 px-4 md:px-8">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
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
