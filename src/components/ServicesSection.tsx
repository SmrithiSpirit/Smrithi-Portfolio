import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Plug, Brain, Database, MessageSquare, Palette } from 'lucide-react';

const services = [
  {
    title: 'API Integrations',
    description: 'Seamless integration of third-party APIs and services into your product ecosystem',
    icon: Plug,
    gradient: 'from-primary to-primary/50',
  },
  {
    title: 'LLM & SLM Model Integrations',
    description: 'Strategic implementation of large and small language models for intelligent features',
    icon: Brain,
    gradient: 'from-secondary to-secondary/50',
  },
  {
    title: 'RAG-based AI Solutions',
    description: 'Retrieval-Augmented Generation systems for context-aware AI applications',
    icon: Database,
    gradient: 'from-accent to-accent/50',
  },
  {
    title: 'Conversational AI & Chatbot Design',
    description: 'End-to-end design and implementation of intelligent conversational experiences',
    icon: MessageSquare,
    gradient: 'from-primary to-secondary',
  },
  {
    title: 'UI/UX Support & Experience Mapping',
    description: 'User-centric design thinking to create intuitive product experiences',
    icon: Palette,
    gradient: 'from-secondary to-accent',
  },
];

export const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="services" className="section-padding relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[150px]" />

      <div className="container mx-auto relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Services</span> Offered
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Expertise you can leverage for your product and technology needs
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className={`group service-card ${
                index === 3 ? 'lg:col-span-1' : ''
              } ${index === 4 ? 'lg:col-span-1 sm:col-span-2 lg:col-start-2' : ''}`}
            >
              {/* Icon */}
              <div
                className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${service.gradient} mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                <service.icon className="w-8 h-8 text-white" />
              </div>

              {/* Title */}
              <h3 className="font-display text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
