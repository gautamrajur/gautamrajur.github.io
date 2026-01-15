import React from 'react';
import { Mail, Github, Linkedin, MapPin, Send } from 'lucide-react';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-16 md:py-24 relative overflow-hidden">
      {/* Creative background */}
      <div className="absolute inset-0 bg-gradient-mesh" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      <div className="max-w-2xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-8">
          <p className="text-primary font-mono text-xs sm:text-sm tracking-wider uppercase mb-2">Contact</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-foreground mb-3">
            Let's Connect
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base">
            Open to AI/ML engineering and cloud architecture opportunities.
          </p>
        </div>
        
        {/* Contact Card */}
        <div className="p-5 sm:p-6 md:p-8 rounded-2xl bg-card border border-border shadow-xl relative overflow-hidden">
          <div className="relative z-10 space-y-5 sm:space-y-6">
            {/* Email CTA */}
            <div className="text-center">
              <a 
                href="mailto:raju.ga@northeastern.edu"
                className="inline-flex items-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 rounded-full bg-primary text-primary-foreground text-sm sm:text-base font-medium hover:bg-primary/90 transition-all shadow-lg"
              >
                <Send size={16} className="sm:w-[18px] sm:h-[18px]" />
                <span>raju.ga@northeastern.edu</span>
              </a>
            </div>
            
            {/* Divider */}
            <div className="flex items-center gap-3">
              <div className="flex-1 h-px bg-border" />
              <span className="text-muted-foreground text-xs">or find me on</span>
              <div className="flex-1 h-px bg-border" />
            </div>
            
            {/* Social Links */}
            <div className="flex justify-center gap-3">
              <a 
                href="https://github.com/gautamrajur" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-secondary border border-border hover:border-primary hover:text-primary transition-all text-sm"
              >
                <Github size={16} />
                <span className="font-medium">GitHub</span>
              </a>
              <a 
                href="https://linkedin.com/in/gautam-raju" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-secondary border border-border hover:border-primary hover:text-primary transition-all text-sm"
              >
                <Linkedin size={16} />
                <span className="font-medium">LinkedIn</span>
              </a>
            </div>
            
            {/* Location */}
            <div className="flex items-center justify-center gap-1.5 text-muted-foreground text-sm">
              <MapPin size={14} />
              <span>Boston, MA</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
