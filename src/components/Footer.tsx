import { motion } from 'framer-motion';
import { Heart, Linkedin, Mail } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="py-8 px-4 border-t border-border">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo & Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 text-muted-foreground"
          >
            <span className="font-display text-lg font-bold gradient-text">SBR</span>
            <span className="text-sm">
              © {new Date().getFullYear()} Smrithi B Ravikumar. All rights reserved.
            </span>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex items-center gap-4"
          >
            <a
              href="mailto:smrithiravikumar.br@gmail.com"
              className="p-2 rounded-lg bg-muted/50 hover:bg-primary/10 text-muted-foreground hover:text-primary transition-all duration-300"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/in/smrithibr"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-muted/50 hover:bg-primary/10 text-muted-foreground hover:text-primary transition-all duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </motion.div>

          {/* Made with love */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center gap-1 text-sm text-muted-foreground"
          >
            Made with <Heart className="w-4 h-4 text-accent fill-accent" /> in Bengaluru
          </motion.div>
        </div>
      </div>
    </footer>
  );
};
