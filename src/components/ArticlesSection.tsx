import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink } from 'lucide-react';

const base = import.meta.env.BASE_URL;

const articles = [
  {
    title: 'Positioning the "Unused Feature" as a specific metric',
    bg: `${base}article1.jpg`,
    href: 'https://www.linkedin.com/posts/smrithibr_productdiscovery-productmanagement-userbehavior-ugcPost-7446611415412568064-OnlH?utm_source=share&utm_medium=member_desktop',
  },
  {
    title: 'Stuck on a blank page? Sometimes the best way forward is to deep dive into the problem, not the solution.',
    bg: `${base}article2.jpg`,
    href: 'https://www.linkedin.com/posts/smrithibr_productthinking-genai-ecommerce-ugcPost-7436846592046870528-1WYq?utm_source=share&utm_medium=member_desktop',
  },
  {
    title: 'A simple question: How would you improve seller onboarding CSAT at Amazon?',
    bg: `${base}article3.jpg`,
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
              className="glass-card overflow-hidden group hover:-translate-y-1 transition-transform duration-300 flex flex-col"
            >
              {/* Thumbnail with background image */}
              <div className="relative h-44 overflow-hidden">
                {/* Background image at low opacity */}
                <div
                  className="absolute inset-0 bg-cover bg-center scale-105 group-hover:scale-100 transition-transform duration-500"
                  style={{ backgroundImage: `url(${article.bg})` }}
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex items-center gap-2 bg-black/50 backdrop-blur-sm text-white text-xs font-medium px-3 py-1.5 rounded-full">
                    <ExternalLink className="w-3.5 h-3.5" />
                    Read on LinkedIn
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col flex-1">
                <h3 className="font-display font-semibold text-sm leading-snug group-hover:text-primary transition-colors flex-1">
                  {article.title}
                </h3>
                <div className="flex items-center gap-1.5 mt-4 text-xs text-primary font-medium">
                  <ExternalLink className="w-3.5 h-3.5" />
                  Read on LinkedIn
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};
