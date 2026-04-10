import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BarChart3, Bot, Database, Eye } from 'lucide-react';
import { Button } from './ui/button';
const projects = [
  {
    id: 'logs-observability-platform',
    title: 'No-code PaaS – Logs & Observability Platform',
    description:
      'Centralized system for application, API, mobile & DB logs with no-code workflows for debugging, monitoring, and alerting.',
    impact: 'Improved operational visibility and delivery predictability across the organization',
    icon: Database,
    tags: ['PaaS', 'Observability', 'No-Code', 'Enterprise'],
    gradient: 'from-primary to-secondary',
  },
  {
    id: 'iems',
    title: 'Integrated Excise Management System (IEMS)',
    description:
      'Comprehensive system delivering 300+ operational & analytical reports with predictive models for revenue, sales, and forecasting.',
    impact: 'LLM-powered chatbot for support and policy queries enabled government users',
    icon: BarChart3,
    tags: ['B2G', 'Analytics', 'Predictive Models', 'LLM'],
    gradient: 'from-secondary to-accent',
  },
  {
    id: 'cx-automation',
    title: 'CX Automation Platform',
    description:
      'Built customer experience automation platform enabling rapid chatbot deployment with intelligent conversation flows.',
    impact: 'Reduced bot deployment time by 70% and boosted CSAT by 15%',
    icon: Bot,
    tags: ['Conversational AI', 'Automation', 'D2C'],
    gradient: 'from-accent to-primary',
  },
  {
    id: 'treatment-recommendation',
    title: 'Treatment Recommendation Engine',
    description:
      'Collaborated with medical teams to create AI-powered treatment recommendation system with personalization and gamification.',
    impact: 'Improved retention and increased female user base by 10%',
    icon: Eye,
    tags: ['HealthTech', 'AI/ML', 'Personalization'],
    gradient: 'from-primary to-accent',
  },
];

export const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="projects" className="section-padding relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[150px]" />

      <div className="container mx-auto relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Impactful products that transformed user experiences and drove business growth
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="group relative"
            >
              <div className="glass-card p-8 h-full hover-glow transition-all duration-500 hover:-translate-y-2">
                {/* Icon with gradient */}
                <div
                  className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${project.gradient} mb-6`}
                >
                  <project.icon className="w-8 h-8 text-white" />
                </div>

                {/* Title */}
                <h3 className="font-display text-xl lg:text-2xl font-semibold text-foreground mb-4 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground mb-4">{project.description}</p>

                {/* Impact */}
                <div className="p-4 rounded-lg bg-muted/30 border border-border mb-6">
                  <p className="text-sm">
                    <span className="text-primary font-medium">Impact: </span>
                    <span className="text-muted-foreground">{project.impact}</span>
                  </p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span key={tag} className="skill-pill text-xs">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <Button
                  variant="ghost"
                  className="group/btn text-muted-foreground hover:text-primary p-0"
                  asChild
                >
                  <Link to={`/projects/${project.id}`}>
                    <span>View Details</span>
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover/btn:translate-x-1" />
                  </Link>
                </Button>
              </div>

              {/* Glow effect on hover */}
              <div
                className={`absolute -inset-0.5 bg-gradient-to-r ${project.gradient} rounded-xl blur-lg opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10`}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
