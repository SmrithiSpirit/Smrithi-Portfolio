import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Mail, Phone, Linkedin, MapPin, Send } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { useToast } from '@/hooks/use-toast';

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'smrithiravikumar.br@gmail.com',
    href: 'mailto:smrithiravikumar.br@gmail.com',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+91 9620054324',
    href: 'tel:+919620054324',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/smrithibr',
    href: 'https://linkedin.com/in/smrithibr',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Bengaluru, India',
    href: null,
  },
];

export const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: 'Message sent!',
      description: "Thanks for reaching out. I'll get back to you soon.",
    });

    setFormData({ name: '', email: '', message: '' });
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="section-padding relative overflow-hidden bg-muted/20">
      {/* Background accents */}
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[150px]" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or want to discuss opportunities? Let's connect!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass-card p-4 sm:p-6 md:p-8 max-w-5xl mx-auto overflow-hidden"
        >
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 min-w-0">
            {/* Contact Info */}
            <div className="space-y-6 min-w-0">
              <h3 className="font-display text-2xl font-semibold gradient-text">
                Let's Connect
              </h3>
              <p className="text-muted-foreground">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              </p>
              <div className="space-y-4">
                {contactInfo.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                    className="w-full overflow-hidden"
                  >
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.href.startsWith('http') ? '_blank' : undefined}
                        rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="flex items-center gap-4 p-4 rounded-lg bg-muted/30 border border-border hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 group w-full overflow-hidden"
                      >
                        <div className="p-2 rounded-lg bg-gradient-primary flex-shrink-0">
                          <item.icon className="w-5 h-5 text-primary-foreground" />
                        </div>
                        <div className="min-w-0">
                          <p className="text-sm text-muted-foreground">{item.label}</p>
                          <p className="text-foreground font-medium group-hover:text-primary transition-colors truncate">
                            {item.value}
                          </p>
                        </div>
                      </a>
                    ) : (
                      <div className="flex items-center gap-4 p-4 rounded-lg bg-muted/30 border border-border w-full overflow-hidden">
                        <div className="p-2 rounded-lg bg-gradient-primary flex-shrink-0">
                          <item.icon className="w-5 h-5 text-primary-foreground" />
                        </div>
                        <div className="min-w-0">
                          <p className="text-sm text-muted-foreground">{item.label}</p>
                          <p className="text-foreground font-medium truncate">{item.value}</p>
                        </div>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="space-y-6 min-w-0 w-full overflow-hidden">
              <div className="w-full min-w-0">
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Name
                </label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="bg-muted/30 border-border focus:border-primary w-full max-w-full"
                />
              </div>

              <div className="w-full min-w-0">
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="bg-muted/30 border-border focus:border-primary w-full max-w-full"
                />
              </div>

              <div className="w-full min-w-0">
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Tell me about your project..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={5}
                  className="bg-muted/30 border-border focus:border-primary resize-none w-full max-w-full"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting}
                className="w-full bg-gradient-primary hover:opacity-90 text-primary-foreground font-semibold glow-teal"
              >
                {isSubmitting ? (
                  'Sending...'
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
