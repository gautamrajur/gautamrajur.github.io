import React from 'react';
import { Github, Linkedin, Mail, ArrowDown, Sparkles, FileText } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center py-16 md:py-20 relative overflow-hidden">
      {/* Creative background */}
      <div className="absolute inset-0 bg-gradient-mesh" />
      <div className="absolute inset-0 bg-grid-pattern opacity-30" />
      
      {/* Floating decorative elements */}
      <div className="floating-shape w-48 sm:w-64 md:w-96 h-48 sm:h-64 md:h-96 bg-primary -top-20 -left-20" />
      <div className="floating-shape w-32 sm:w-48 md:w-72 h-32 sm:h-48 md:h-72 bg-primary/50 top-1/3 -right-16 sm:-right-20" />

      <div className="max-w-5xl mx-auto w-full relative z-10 px-4 sm:px-6">
        <div className="flex flex-col items-center text-center md:text-left md:flex-row md:items-center md:justify-between gap-8 md:gap-12">
          
          {/* Profile Image */}
          <div className="flex justify-center md:order-2 md:justify-end shrink-0">
            <div className="relative">
              {/* Decorative rings */}
              <div className="absolute -inset-2 sm:-inset-3 rounded-full border-2 border-primary/20" />
              <div className="absolute -inset-4 sm:-inset-6 rounded-full border border-primary/10" />
              
              {/* Image container */}
              <div className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-52 md:h-52 lg:w-60 lg:h-60 rounded-full overflow-hidden border-4 border-primary/30 shadow-2xl shadow-primary/20">
                <img 
                  src="./profile-headshot.jpg" 
                  alt="Gautam Raju" 
                  className="w-full h-full object-cover object-top scale-110"
                />
              </div>
              
              {/* Accent dot */}
              <div className="absolute -bottom-1 -right-1 w-5 h-5 sm:w-6 sm:h-6 bg-primary rounded-full border-4 border-background" />
            </div>
          </div>

          {/* Text Content */}
          <div className="flex-1 space-y-3 sm:space-y-4 max-w-xl md:order-1">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-primary/10 border border-primary/30 text-primary text-xs sm:text-sm">
              <Sparkles size={12} className="sm:w-[14px] sm:h-[14px]" />
              <span className="font-mono tracking-wider uppercase">Software Engineer</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-foreground">
              Gautam Raju
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground">
              Building <span className="text-primary font-medium">generative AI</span> solutions
            </p>
            
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              3+ years at Apple & Ancestry. MS CS @ Northeastern.
              LLMs, prompt engineering, AI platform engineering.
            </p>
            
            {/* Social Links */}
            <div className="flex items-center justify-center md:justify-start gap-3 pt-2 flex-wrap">
              <a 
                href="https://github.com/gautamrajur" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-card border border-border hover:border-primary hover:text-primary transition-all shadow-lg"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
              <a 
                href="https://linkedin.com/in/gautam-raju" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-card border border-border hover:border-primary hover:text-primary transition-all shadow-lg"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a 
                href="mailto:raju.ga@northeastern.edu"
                className="p-2.5 rounded-full bg-card border border-border hover:border-primary hover:text-primary transition-all shadow-lg"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
              <a 
                href="/Gautam_Raju_AI.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 text-xs sm:text-sm font-medium transition-all shadow-lg"
                aria-label="Resume"
              >
                <FileText size={14} className="sm:w-4 sm:h-4" />
                <span>Resume</span>
              </a>
              <a 
                href="#projects"
                className="ml-2 text-sm text-muted-foreground hover:text-primary transition-colors font-medium hidden sm:block"
              >
                View work →
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2">
        <a 
          href="#about" 
          className="flex flex-col items-center gap-1 text-muted-foreground hover:text-primary transition-colors group"
        >
          <span className="text-[10px] sm:text-xs font-mono uppercase tracking-wider">Scroll</span>
          <div className="p-1.5 rounded-full border border-border group-hover:border-primary transition-colors">
            <ArrowDown size={14} className="animate-bounce" />
          </div>
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
