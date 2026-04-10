import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Target, Brain, TrendingUp, Code2, Users2 } from 'lucide-react';

const skillCategories = [
  {
    title: 'Product Leadership',
    icon: Target,
    skills: ['Roadmapping', 'PLG Strategy', 'OKRs', 'GTM', 'PDLC', 'CRM', 'EMR'],
    color: 'primary',
  },
  {
    title: 'AI & SaaS Expertise',
    icon: Brain,
    skills: ['GenAI Integration', 'Conversational AI', 'Voice Assistants', 'LLMs', 'SLMs', 'RAG', 'API-first Platforms'],
    color: 'secondary',
  },
  {
    title: 'Analytics & Growth',
    icon: TrendingUp,
    skills: ['Monetization', 'A/B Testing', 'Amplitude', 'Data-driven Prioritization'],
    color: 'accent',
  },
  {
    title: 'Technical',
    icon: Code2,
    skills: ['PHP', 'React', 'SQL (Postgres/MySQL)', 'REST APIs', 'Figma'],
    color: 'primary',
  },
  {
    title: 'Collaboration',
    icon: Users2,
    skills: ['JIRA', 'Confluence', 'Google Workspace', 'Excel', 'PowerPoint'],
    color: 'secondary',
  },
];

const colorClasses = {
  primary: 'bg-primary text-primary-foreground',
  secondary: 'bg-secondary text-secondary-foreground',
  accent: 'bg-accent text-accent-foreground',
};

const iconColorClasses = {
  primary: 'text-primary',
  secondary: 'text-secondary',
  accent: 'text-accent',
};

export const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="skills" className="section-padding relative overflow-hidden bg-muted/20">
      {/* Background accent */}
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-[150px]" />

      <div className="container mx-auto relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            Skills & <span className="gradient-text">Expertise</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for building exceptional products
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className={`glass-card p-6 hover-glow transition-all duration-300 hover:-translate-y-1 ${
                index === 4 ? 'lg:col-span-1 sm:col-span-2 lg:col-start-2' : ''
              }`}
            >
              {/* Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className={`p-3 rounded-lg ${colorClasses[category.color as keyof typeof colorClasses]}`}>
                  <category.icon className="w-6 h-6" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground">
                  {category.title}
                </h3>
              </div>

              {/* Skills */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: 0.4 + index * 0.1 + skillIndex * 0.05 }}
                    className="skill-pill"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
