import React from 'react';
import { Mail, Github, Linkedin, MapPin, Send } from 'lucide-react';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      {/* Creative background */}
      <div className="absolute inset-0 bg-gradient-mesh" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="floating-shape w-48 md:w-80 h-48 md:h-80 bg-primary/20 -bottom-24 md:-bottom-40 -right-24 md:-right-40" />
      <div className="floating-shape w-32 md:w-48 h-32 md:h-48 bg-primary/10 top-10 md:top-20 -left-16 md:-left-24" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8 md:mb-12">
            <p className="text-primary font-mono text-sm md:text-base tracking-wider uppercase mb-2 md:mb-3">Contact</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-foreground mb-3 md:mb-4">
              Let's Connect
            </h2>
            <p className="text-muted-foreground text-base md:text-lg">
              Open to opportunities in AI/ML engineering, full-stack development, and cloud architecture.
            </p>
          </div>
          
          {/* Contact Card */}
          <div className="p-6 sm:p-8 md:p-10 rounded-2xl md:rounded-3xl bg-card border border-border shadow-xl relative overflow-hidden">
            {/* Decorative gradient */}
            <div className="absolute top-0 right-0 w-48 md:w-64 h-48 md:h-64 bg-gradient-to-br from-primary/10 to-transparent rounded-full -translate-y-1/2 translate-x-1/2" />
            
            <div className="relative z-10 space-y-6 md:space-y-8">
              {/* Email CTA */}
              <div className="text-center">
                <a 
                  href="mailto:raju.ga@northeastern.edu"
                  className="inline-flex items-center gap-2 md:gap-3 px-5 sm:px-6 md:px-8 py-3 md:py-4 rounded-full bg-primary text-primary-foreground text-sm sm:text-base md:text-lg font-medium hover:bg-primary/90 transition-all shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 hover:-translate-y-0.5"
                >
                  <Send size={18} className="md:w-[22px] md:h-[22px]" />
                  <span className="truncate">raju.ga@northeastern.edu</span>
                </a>
              </div>
              
              {/* Divider */}
              <div className="flex items-center gap-3 md:gap-4">
                <div className="flex-1 h-px bg-border" />
                <span className="text-muted-foreground text-xs md:text-sm">or find me on</span>
                <div className="flex-1 h-px bg-border" />
              </div>
              
              {/* Social Links */}
              <div className="flex justify-center gap-3 md:gap-4">
                <a 
                  href="https://github.com/gautamrajur" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 md:gap-2 px-4 md:px-5 py-2 md:py-3 rounded-full bg-secondary border border-border hover:border-primary hover:text-primary transition-all text-sm md:text-base"
                >
                  <Github size={18} className="md:w-5 md:h-5" />
                  <span className="font-medium">GitHub</span>
                </a>
                <a 
                  href="https://linkedin.com/in/gautam-raju" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 md:gap-2 px-4 md:px-5 py-2 md:py-3 rounded-full bg-secondary border border-border hover:border-primary hover:text-primary transition-all text-sm md:text-base"
                >
                  <Linkedin size={18} className="md:w-5 md:h-5" />
                  <span className="font-medium">LinkedIn</span>
                </a>
              </div>
              
              {/* Location */}
              <div className="flex items-center justify-center gap-1.5 md:gap-2 text-muted-foreground text-sm md:text-base">
                <MapPin size={14} className="md:w-4 md:h-4" />
                <span>Boston, MA</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
