import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink } from 'lucide-react';

const articles = [
  {
    title: 'Product Discovery & User Behavior',
    tags: ['#ProductDiscovery', '#ProductManagement', '#UserBehavior'],
    href: 'https://www.linkedin.com/posts/smrithibr_productdiscovery-productmanagement-userbehavior-ugcPost-7446611415412568064-OnlH?utm_source=share&utm_medium=member_desktop',
  },
  {
    title: 'Product Thinking × GenAI in Ecommerce',
    tags: ['#ProductThinking', '#GenAI', '#Ecommerce'],
    href: 'https://www.linkedin.com/posts/smrithibr_productthinking-genai-ecommerce-ugcPost-7436846592046870528-1WYq?utm_source=share&utm_medium=member_desktop',
  },
  {
    title: 'How Would You Improve This?',
    tags: ['#ProductThinking', '#ProductManagement'],
    href: 'https://www.linkedin.com/posts/smrithibr_a-simple-question-how-would-you-improve-ugcPost-7435410200389410816-P88y?utm_source=share&utm_medium=member_desktop',
  },
];

export const ArticlesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="articles" className="section-padding relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[150px]" />

      <div className="container mx-auto relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            Articles <span className="gradient-text">Posted</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Thoughts on product management, UX, and building with AI — shared on LinkedIn.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {articles.map((article, index) => (
            <motion.a
              key={article.href}
              href={article.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              className="glass-card p-6 group hover:-translate-y-1 transition-transform duration-300 flex flex-col gap-4"
            >
              <h3 className="font-display font-semibold text-base leading-snug group-hover:text-primary transition-colors">
                {article.title}
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {article.tags.map((tag) => (
                  <span key={tag} className="skill-pill text-xs">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-1.5 mt-auto text-xs text-primary font-medium">
                <ExternalLink className="w-3.5 h-3.5" />
                Read on LinkedIn
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};
