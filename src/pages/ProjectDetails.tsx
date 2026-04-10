import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, BarChart3, Bot, Database, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';

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
    fullDescription: `Led the end-to-end conception, design, and launch of a comprehensive no-code Platform-as-a-Service solution focused on logs and observability. This platform centralizes application logs, API logs, mobile logs, and database logs into a unified system.

The platform features no-code workflows that enable teams to set up debugging, monitoring, and alerting without writing complex queries or scripts. This democratized access to operational insights across the organization.`,
    challenges: [
      'Integrating multiple log sources with different formats and protocols',
      'Building intuitive no-code interfaces for complex monitoring workflows',
      'Ensuring real-time alerting with minimal latency',
      'Scaling to handle high-volume log ingestion'
    ],
    outcomes: [
      'Drove org-wide adoption improving monitoring capabilities',
      'Enhanced debuggability across all teams',
      'Improved delivery predictability through better visibility',
      'Reduced mean time to resolution (MTTR) for production issues'
    ]
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
    fullDescription: `Contributed to building a comprehensive Integrated Excise Management System for government operations. The system delivers over 300 operational and analytical reports, providing deep insights into excise operations.

Implemented predictive models for revenue forecasting, sales predictions, and demand planning. A key innovation was the integration of an LLM-powered chatbot using RAG (Retrieval Augmented Generation) for support and policy queries.`,
    challenges: [
      'Handling complex government compliance requirements',
      'Building accurate predictive models with historical data',
      'Implementing RAG-based chatbot for policy documents',
      'Ensuring data security and access controls'
    ],
    outcomes: [
      'Delivered 300+ operational and analytical reports',
      'Enabled data-driven decision making for government users',
      'LLM chatbot reduced support ticket volume significantly',
      'Improved revenue forecasting accuracy'
    ]
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
    fullDescription: `Built a comprehensive customer experience automation platform that enables businesses to rapidly deploy intelligent chatbots with sophisticated conversation flows. The platform streamlined the entire bot development lifecycle.

The solution included pre-built templates, drag-and-drop flow builders, and intelligent routing capabilities that made chatbot deployment accessible to non-technical users.`,
    challenges: [
      'Simplifying complex conversation flow design',
      'Building reusable templates for common use cases',
      'Integrating with multiple messaging platforms',
      'Ensuring natural language understanding accuracy'
    ],
    outcomes: [
      'Reduced bot deployment time by 70%',
      'Boosted customer satisfaction (CSAT) by 15%',
      'Enabled rapid iteration on conversation flows',
      'Democratized chatbot creation for business teams'
    ]
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
    fullDescription: `Collaborated closely with medical teams to create an AI-powered treatment recommendation engine. The system combines medical expertise with machine learning to provide personalized treatment suggestions.

Implemented gamification elements and smart notification systems to improve user engagement and treatment adherence. The personalization engine adapts recommendations based on user progress and preferences.`,
    challenges: [
      'Balancing medical accuracy with user experience',
      'Building personalization without compromising privacy',
      'Designing engaging gamification mechanics',
      'Integrating with existing medical workflows'
    ],
    outcomes: [
      'Improved user retention significantly',
      'Increased female user base by 10%',
      'Enhanced treatment adherence through gamification',
      'Delivered personalized experiences at scale'
    ]
  },
];

const ProjectDetails = () => {
  const { projectId } = useParams();
  const project = projects.find((p) => p.id === projectId);

  if (!project) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Project not found</h1>
          <Button asChild>
            <Link to="/#projects">Back to Projects</Link>
          </Button>
        </div>
      </div>
    );
  }

  const IconComponent = project.icon;

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-border">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex items-center h-16 md:h-20">
            <Button variant="ghost" asChild className="gap-2">
              <Link to="/#projects">
                <ArrowLeft className="w-4 h-4" />
                Back to Projects
              </Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Icon and Title */}
            <div className="flex items-start gap-6 mb-8">
              <div
                className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${project.gradient} shrink-0`}
              >
                <IconComponent className="w-10 h-10 text-white" />
              </div>
              <div>
                <h1 className="font-display text-3xl md:text-4xl font-bold mb-4">
                  {project.title}
                </h1>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="skill-pill text-sm">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Impact Card */}
            <div className="glass-card p-6 mb-8 border-l-4 border-primary">
              <p className="text-lg">
                <span className="text-primary font-semibold">Impact: </span>
                <span className="text-foreground">{project.impact}</span>
              </p>
            </div>

            {/* Full Description */}
            <section className="mb-12">
              <h2 className="font-display text-2xl font-semibold mb-4">Overview</h2>
              <div className="prose prose-invert max-w-none">
                {project.fullDescription.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="text-muted-foreground mb-4 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </section>

            {/* Challenges */}
            <section className="mb-12">
              <h2 className="font-display text-2xl font-semibold mb-4">Key Challenges</h2>
              <ul className="space-y-3">
                {project.challenges.map((challenge, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * index }}
                    className="flex items-start gap-3"
                  >
                    <span className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                    <span className="text-muted-foreground">{challenge}</span>
                  </motion.li>
                ))}
              </ul>
            </section>

            {/* Outcomes */}
            <section className="mb-12">
              <h2 className="font-display text-2xl font-semibold mb-4">Outcomes</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {project.outcomes.map((outcome, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index }}
                    className="glass-card p-4"
                  >
                    <p className="text-muted-foreground">{outcome}</p>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* Back Button */}
            <div className="text-center">
              <Button asChild size="lg" className="gap-2">
                <Link to="/#projects">
                  <ArrowLeft className="w-4 h-4" />
                  View All Projects
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default ProjectDetails;
