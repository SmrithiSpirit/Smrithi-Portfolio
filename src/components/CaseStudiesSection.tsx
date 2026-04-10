import { motion } from 'framer-motion';
import { ExternalLink, Smartphone, Brain, Target } from 'lucide-react';


const caseStudies = [
  {
    id: 'focusmate',
    title: 'FocusMate: Build Better Screen Habits',
    description: 'A comprehensive UX case study exploring how to help users develop healthier relationships with their digital devices through mindful design.',
    tags: ['UX Research', 'User Personas', 'Wireframing', 'User Flow'],
    icon: Smartphone,
    color: 'teal',
    bgImage: '/public/casestudyImages/focusMate.jpg',
  },
  {
    id: 'campusconnect',
    title: 'Campus Connect, a unified, AI-enhanced platform for student services',
    description: 'CampusConnect is a smart collaboration platform designed to make campus life more connected and effortless for both students and lecturers. It brings together everything—group discussions, event updates, resource sharing, and peer connections',
    tags: ['UX Research', 'User Personas', 'Wireframing', 'User Flow'],
    icon: Smartphone,
    color: 'teal',
    bgImage: '/public/casestudyImages/campusConnect.jpg',
  },
  {
    id: 'saveeasy',
    title: 'SaveEase – Simple savings for first-time earners',
    description: 'SaveEasy is a mobile-first budgeting app designed specifically for students. It helps them track expenses, set financial goals, and build healthy saving habits through gamification and personalized insights.',
    tags: ['UX Research', 'User Personas', 'Wireframing', 'User Flow'],
    icon: Smartphone,
    color: 'teal',
    bgImage: '/public/casestudyImages/saveEasy.jpg',
  },
];

export const CaseStudiesSection = () => {
  return (
    <section id="case-studies" className="section-padding bg-background">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-primary/70 tracking-wider uppercase mb-4 block">
            Deep Dives
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Case <span className="gradient-text">Studies</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Detailed explorations of product design challenges, research methodologies, and solution frameworks.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-4 max-w-8xl mx-auto">
          {caseStudies.map((study, index) => (
            // <motion.a
            //   key={study.id}
            //   href={`/case-studies/${study.id}`}
            //   target="_blank"
            //   rel="noopener noreferrer"
            //   initial={{ opacity: 0, y: 30 }}
            //   whileInView={{ opacity: 1, y: 0 }}
            //   viewport={{ once: true }}
            //   transition={{ duration: 0.5, delay: index * 0.1 }}
            //   className="group glass-card p-8 hover-glow block"
            // >
            <motion.a
              key={study.id}
              href={`/case-studies/${study.id}`}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`
                group glass-card p-12 hover-glow block relative overflow-hidden
                before:absolute before:inset-0 
                before:bg-[url('${study.bgImage}')] 
                before:bg-cover before:bg-center before:bg-no-repeat 
                before:opacity-30 before:pointer-events-none
              `}
            >
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-teal-500/20 to-purple-500/20 flex items-center justify-center flex-shrink-0">
                  <study.icon className="w-8 h-8 text-primary" />
                </div>
                
                <div className="flex-1">
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <h3 className="font-display text-xl md:text-2xl font-semibold group-hover:text-primary transition-colors">
                      {study.title}
                    </h3>
                    <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" />
                  </div>
                  
                  <p className="text-muted-foreground mb-6">
                    {study.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {study.tags.map((tag) => (
                      <span
                        key={tag}
                        className="skill-pill text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.a>

          ))}
        </div>
      </div>
    </section>
  );
};
