import React from 'react';
import { Github, Linkedin, Mail, ArrowDown, Sparkles } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center section-padding relative overflow-hidden pt-20">
      {/* Creative background */}
      <div className="absolute inset-0 bg-gradient-mesh" />
      <div className="absolute inset-0 bg-grid-pattern opacity-30" />
      
      {/* Floating decorative elements */}
      <div className="floating-shape w-64 md:w-96 h-64 md:h-96 bg-primary -top-20 -left-20" />
      <div className="floating-shape w-48 md:w-72 h-48 md:h-72 bg-primary/50 top-1/3 -right-20" />

      <div className="max-w-6xl mx-auto w-full relative z-10 px-4 sm:px-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 md:gap-12">
          
          {/* Profile Image - Shows first on mobile */}
          <div className="flex justify-center md:order-2 md:justify-end shrink-0">
            <div className="relative">
              {/* Decorative rings */}
              <div className="absolute -inset-3 md:-inset-4 rounded-full border-2 border-primary/20 animate-pulse" />
              <div className="absolute -inset-6 md:-inset-8 rounded-full border border-primary/10" />
              
              {/* Gradient glow */}
              <div className="absolute -inset-4 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 blur-2xl" />
              
              {/* Image container */}
              <div className="relative w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-full overflow-hidden border-4 border-primary/30 shadow-2xl shadow-primary/20">
                <img 
                  src="./profile-headshot.jpg" 
                  alt="Gautam Raju" 
                  className="w-full h-full object-cover object-top scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/30 via-transparent to-transparent" />
              </div>
              
              {/* Accent dot */}
              <div className="absolute -bottom-1 -right-1 w-6 h-6 md:w-8 md:h-8 bg-primary rounded-full border-4 border-background shadow-lg flex items-center justify-center">
                <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-background rounded-full" />
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="flex-1 space-y-4 md:space-y-6 max-w-2xl text-center md:text-left md:order-1">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm">
              <Sparkles size={14} className="md:w-4 md:h-4" />
              <span className="font-mono text-xs md:text-sm tracking-wider uppercase">Software Engineer</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif text-foreground">
              Gautam Raju
            </h1>
            
            <p className="text-xl sm:text-2xl md:text-3xl text-muted-foreground">
              Building <span className="text-primary font-medium">generative AI solutions</span> and enterprise systems
            </p>
            
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              3+ years at Apple and Ancestry. MS in Computer Science @ Northeastern.
              Expertise in LLMs, prompt engineering, and AI platform engineering.
            </p>
            
            {/* Social Links */}
            <div className="flex items-center justify-center md:justify-start gap-3 md:gap-4 pt-2 md:pt-4">
              <a 
                href="https://github.com/gautamrajur" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2.5 md:p-3 rounded-full bg-card border border-border hover:border-primary hover:bg-primary/10 hover:text-primary transition-all duration-300 shadow-lg"
                aria-label="GitHub"
              >
                <Github size={20} className="md:w-[22px] md:h-[22px]" />
              </a>
              <a 
                href="https://linkedin.com/in/gautam-raju" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2.5 md:p-3 rounded-full bg-card border border-border hover:border-primary hover:bg-primary/10 hover:text-primary transition-all duration-300 shadow-lg"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} className="md:w-[22px] md:h-[22px]" />
              </a>
              <a 
                href="mailto:raju.ga@northeastern.edu"
                className="p-2.5 md:p-3 rounded-full bg-card border border-border hover:border-primary hover:bg-primary/10 hover:text-primary transition-all duration-300 shadow-lg"
                aria-label="Email"
              >
                <Mail size={20} className="md:w-[22px] md:h-[22px]" />
              </a>
              <span className="h-px w-6 md:w-8 bg-border hidden sm:block" />
              <a 
                href="#projects"
                className="text-sm md:text-base text-muted-foreground hover:text-primary transition-colors hidden sm:block font-medium"
              >
                View my work →
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2">
        <a 
          href="#about" 
          className="flex flex-col items-center gap-1.5 md:gap-2 text-muted-foreground hover:text-primary transition-colors group"
        >
          <span className="text-xs md:text-sm font-mono uppercase tracking-wider">Scroll</span>
          <div className="p-1.5 md:p-2 rounded-full border border-border group-hover:border-primary transition-colors">
            <ArrowDown size={16} className="md:w-[18px] md:h-[18px] animate-bounce" />
          </div>
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
