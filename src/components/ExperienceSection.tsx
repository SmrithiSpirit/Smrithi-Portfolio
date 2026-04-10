import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, Calendar, ChevronRight } from 'lucide-react';

const experiences = [
  {
    company: 'Idea Infinity',
    role: 'Product Manager',
    period: 'July 2023 – Present',
    highlights: [
      'Led end-to-end conception, design & launch of a no-code PaaS Logs & Observability Platform',
      'Drove org-wide adoption improving monitoring, debuggability, and predictability',
      'Led Business Process Reengineering for Meghalaya Power Distribution',
      'Contributed to IEMS with 300+ analytical reports, predictive modeling, revenue forecasting',
      'Led LLM-powered chatbot (RAG) integration for government users',
      'Reduced development cycle time by 20% through Agile practices',
    ],
    color: 'primary',
  },
  {
    company: 'Traya Health',
    role: 'Product Manager',
    period: 'Dec 2022 – Jun 2023',
    highlights: [
      'Built engagement modules with personalization, gamification & smart notifications',
      'Collaborated with medical teams to create treatment recommendation engine',
      'Launched new independent B2C website; optimized acquisition and conversion',
      'Improved retention and increased female user base by 10%',
    ],
    color: 'secondary',
  },
  {
    company: 'Limechat',
    role: 'Associate Product Manager',
    period: 'Nov 2021 – Mar 2022',
    highlights: [
      'Built CX automation platform enabling quick chatbot deployment',
      'Reduced bot deployment time by 70%',
      'Boosted CSAT by 15%',
    ],
    color: 'accent',
  },
  {
    company: 'Yellow.ai',
    role: 'Business Analyst / Senior Software Engineer',
    period: 'May 2020 – Nov 2021',
    highlights: [
      'Designed AI/NLP chatbots automating 40% of L1 queries',
      'Improved CSAT by 20%',
      'Launched multilingual intents and fallback optimization',
    ],
    color: 'primary',
  },
  {
    company: 'Fynamics Techno Solution',
    role: 'Senior Web Developer',
    period: 'May 2018 – Oct 2019',
    highlights: [],
    color: 'secondary',
  },
  {
    company: 'Innovation Enabler Inc.',
    role: 'Software Product Engineer',
    period: 'Oct 2015 – Mar 2018',
    highlights: [],
    color: 'accent',
  },
];

const colorClasses = {
  primary: 'bg-primary text-primary-foreground',
  secondary: 'bg-secondary text-secondary-foreground',
  accent: 'bg-accent text-accent-foreground',
};

const borderColorClasses = {
  primary: 'border-primary/50',
  secondary: 'border-secondary/50',
  accent: 'border-accent/50',
};

export const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="experience" className="section-padding relative overflow-hidden bg-muted/20">
      {/* Background accent */}
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[150px]" />

      <div className="container mx-auto relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A journey through impactful roles in product management and technology
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className={`relative mb-8 md:mb-12 pl-8 md:pl-0 ${
                index % 2 === 0 ? 'md:pr-[50%] md:text-right' : 'md:pl-[50%]'
              }`}
            >
              {/* Timeline dot */}
              <div
                className={`absolute left-0 md:left-1/2 top-0 w-4 h-4 rounded-full ${
                  colorClasses[exp.color as keyof typeof colorClasses]
                } md:-translate-x-1/2 ring-4 ring-background`}
              />

              {/* Card */}
              <div
                className={`glass-card p-6 hover-glow transition-all duration-300 hover:-translate-y-1 ${
                  index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
                } ${borderColorClasses[exp.color as keyof typeof borderColorClasses]} border-l-2 md:border-l-0 ${
                  index % 2 === 0 ? 'md:border-r-2' : 'md:border-l-2'
                }`}
              >
                <div className={`flex items-start gap-3 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                  <div className={`p-2 rounded-lg ${colorClasses[exp.color as keyof typeof colorClasses]} ${index % 2 === 0 ? 'md:order-2' : ''}`}>
                    <Briefcase className="w-5 h-5" />
                  </div>
                  <div className={index % 2 === 0 ? 'md:text-right' : ''}>
                    <h3 className="font-display text-xl font-semibold text-foreground">
                      {exp.role}
                    </h3>
                    <p className="text-primary font-medium">{exp.company}</p>
                  </div>
                </div>

                <div className={`flex items-center gap-2 mt-3 text-sm text-muted-foreground ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                  <Calendar className="w-4 h-4" />
                  <span>{exp.period}</span>
                </div>

                {exp.highlights.length > 0 && (
                  <ul className={`mt-4 space-y-2 ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                    {exp.highlights.map((highlight, hIndex) => (
                      <li
                        key={hIndex}
                        className={`flex items-start gap-2 text-sm text-muted-foreground ${
                          index % 2 === 0 ? 'md:flex-row-reverse' : ''
                        }`}
                      >
                        <ChevronRight className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
