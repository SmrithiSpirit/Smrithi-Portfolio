import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const experiences = [
  {
    company: 'Idea Infinity',
    role: 'Product Manager',
    period: 'Jul 2023 — Present',
    highlights: [
      'Led end-to-end conception, design & launch of a no-code PaaS Logs & Observability Platform.',
      'Drove org-wide adoption improving monitoring, debuggability, and predictability.',
      'Led Business Process Reengineering for Meghalaya Power Distribution Corporation.',
      'Contributed to IEMS with 300+ analytical reports, predictive modeling, and revenue forecasting.',
      'Led LLM-powered chatbot (RAG) integration for government users.',
      'Reduced development cycle time by 20% through Agile practices.',
    ],
  },
  {
    company: 'Traya Health',
    role: 'Product Manager',
    period: 'Dec 2022 — Jun 2023',
    highlights: [
      'Built engagement modules with personalisation, gamification & smart notifications.',
      'Collaborated with medical teams to create a treatment recommendation engine.',
      'Launched new independent B2C website; optimised acquisition and conversion funnels.',
      'Improved retention and increased female user base by 10%.',
    ],
  },
  {
    company: 'Limechat',
    role: 'Associate Product Manager',
    period: 'Nov 2021 — Mar 2022',
    highlights: [
      'Built a CX automation platform enabling quick chatbot deployment for D2C brands.',
      'Reduced bot deployment time by 70%.',
      'Boosted CSAT scores by 15% through improved conversation design.',
    ],
  },
  {
    company: 'Yellow.ai',
    role: 'Business Analyst / Senior Software Engineer',
    period: 'May 2020 — Nov 2021',
    highlights: [
      'Designed AI/NLP chatbots automating 40% of L1 support queries.',
      'Improved CSAT by 20% across enterprise clients.',
      'Launched multilingual intents and fallback optimisation strategies.',
    ],
  },
  {
    company: 'Fynamics Techno Solution',
    role: 'Senior Web Developer',
    period: 'May 2018 — Oct 2019',
    highlights: [],
  },
  {
    company: 'Innovation Enabler Inc.',
    role: 'Software Product Engineer',
    period: 'Oct 2015 — Mar 2018',
    highlights: [],
  },
];

export const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="experience" className="section-padding relative overflow-hidden bg-muted/20">
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[150px]" />

      <div className="container mx-auto relative z-10 max-w-4xl" ref={ref}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-primary mb-3">
            Experience
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground leading-tight">
            Building products <span className="gradient-text">that matter</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-border" />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
              className="relative pl-10 mb-12 last:mb-0"
            >
              {/* Dot */}
              <div className="absolute left-0 top-1 w-[15px] h-[15px] rounded-full border-2 border-primary bg-background" />

              {/* Period */}
              <p className="text-xs font-semibold tracking-[0.15em] uppercase text-primary mb-2">
                {exp.period}
              </p>

              {/* Role */}
              <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-1">
                {exp.role}
              </h3>

              {/* Company */}
              <p className="text-base font-medium gradient-text mb-4">{exp.company}</p>

              {/* Highlights */}
              {exp.highlights.length > 0 && (
                <ul className="space-y-2">
                  {exp.highlights.map((point, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <span className="mt-[3px] shrink-0 text-muted-foreground/50 font-light">—</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
