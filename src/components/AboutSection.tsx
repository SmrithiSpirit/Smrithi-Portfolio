import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Lightbulb, Users, Target, GraduationCap } from 'lucide-react';

const highlights = [
  {
    icon: Lightbulb,
    title: 'Problem Solver',
    description: 'Transforming complex challenges into elegant, user-centric solutions',
  },
  {
    icon: Users,
    title: 'User Empathy',
    description: 'Deep understanding of user needs drives every product decision',
  },
  {
    icon: Target,
    title: 'Strategic Vision',
    description: 'Roadmap clarity that aligns business goals with user outcomes',
  },
];

export const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="section-padding relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[150px]" />

      <div className="container mx-auto relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A Technical Product Manager passionate about building impactful products
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Bio Section */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="glass-card p-8 h-full">
              <h3 className="font-display text-2xl font-semibold mb-6 gradient-text">
                My Journey
              </h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Hi, I'm <span className="text-foreground font-medium">Smrithi</span>, a Technical Product Manager focused on solving complex problems with clear, creative solutions. My approach blends user empathy with technical depth to build products that truly resonate.
                </p>
                <p>
                  With experience spanning <span className="text-primary">HealthTech</span>, <span className="text-secondary">Utility</span>, <span className="text-accent">B2G</span>, <span className="text-primary">SaaS</span>, <span className="text-secondary">Conversational AI</span>, and <span className="text-accent">D2C</span> domains, I've led digital transformation initiatives that drive real-world impact.
                </p>
                <p>
                  My philosophy is simple: transform ideas into products that users love while achieving business objectives. I excel at problem-structuring, roadmap clarity, and translating complex technology into intuitive experiences.
                </p>
              </div>

              {/* Education */}
              <div className="mt-8 pt-8 border-t border-border">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-muted/50">
                    <GraduationCap className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">
                      Bachelor of Engineering in Computer Science
                    </h4>
                    <p className="text-muted-foreground">
                      Bangalore Institute of Technology, 2015
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                className="glass-card p-6 hover-glow transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-gradient-primary">
                    <item.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-display text-lg font-semibold text-foreground mb-2">
                      {item.title}
                    </h4>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
