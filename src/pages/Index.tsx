import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ProjectsSection from '@/components/ProjectsSection';
import ExperienceSection from '@/components/ExperienceSection';
import EducationSection from '@/components/EducationSection';
import SkillsSection from '@/components/SkillsSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    document.title = 'Gautam Raju | Software Engineer';
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      {/* dark */}
      <HeroSection />
      {/* cream */}
      <ProjectsSection />
      {/* dark */}
      <ExperienceSection />
      {/* cream */}
      <EducationSection />
      {/* dark */}
      <SkillsSection />
      {/* cream */}
      <TestimonialsSection />
      {/* dark */}
      <ContactSection />
      {/* black */}
      <Footer />
    </div>
  );
};

export default Index;
