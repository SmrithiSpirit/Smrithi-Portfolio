import { Navigation } from '@/components/Navigation';
import { HeroSection } from '@/components/HeroSection';
import { AboutSection } from '@/components/AboutSection';
import { ExperienceSection } from '@/components/ExperienceSection';
import { ProjectsSection } from '@/components/ProjectsSection';
import { CaseStudiesSection } from '@/components/CaseStudiesSection';
import { ArticlesSection } from '@/components/ArticlesSection';
import { SkillsSection } from '@/components/SkillsSection';
import { ServicesSection } from '@/components/ServicesSection';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <CaseStudiesSection />
        <ArticlesSection />
        <ExperienceSection />        
        {/* <SkillsSection /> */}
        {/* <ServicesSection /> */}
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
