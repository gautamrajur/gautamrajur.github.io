import React from 'react';
import { Github, Linkedin, Mail, ArrowDown } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center section-padding relative overflow-hidden">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark via-dark to-dark-light/50" />
      
      {/* Decorative elements */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-linkedin/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-linkedin/3 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto w-full relative z-10">
        <div className="flex flex-col-reverse md:flex-row md:items-center md:justify-between gap-12">
          {/* Text Content */}
          <div className="flex-1 space-y-6 max-w-2xl">
            <p className="text-linkedin font-mono text-sm tracking-wider uppercase">
              Software Engineer
            </p>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-cream">
              Gautam Raju
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground">
              Building <span className="text-linkedin">generative AI solutions</span> and enterprise systems
            </p>
            
            <p className="text-muted-foreground leading-relaxed">
              3+ years at Apple and Ancestry. MS in Computer Science @ Northeastern.
              Expertise in LLMs, prompt engineering, and full-stack development.
            </p>
            
            {/* Social Links */}
            <div className="flex items-center gap-4 pt-4">
              <a 
                href="https://github.com/gautamrajur" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full border border-dark-lighter hover:border-linkedin hover:text-linkedin transition-all duration-300 hover:scale-105"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://linkedin.com/in/gautam-raju" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full border border-dark-lighter hover:border-linkedin hover:text-linkedin transition-all duration-300 hover:scale-105"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="mailto:raju.ga@northeastern.edu"
                className="p-3 rounded-full border border-dark-lighter hover:border-linkedin hover:text-linkedin transition-all duration-300 hover:scale-105"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
              <span className="h-px w-8 bg-dark-lighter hidden sm:block" />
              <a 
                href="#projects"
                className="text-sm text-muted-foreground hover:text-linkedin transition-colors hidden sm:block"
              >
                View my work →
              </a>
            </div>
          </div>
          
          {/* Profile Image */}
          <div className="flex justify-center md:justify-end shrink-0">
            <div className="relative">
              {/* Decorative ring */}
              <div className="absolute -inset-3 rounded-full border border-linkedin/20" />
              <div className="absolute -inset-6 rounded-full border border-linkedin/10" />
              
              {/* Image container */}
              <div className="relative w-52 h-52 sm:w-60 sm:h-60 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-full overflow-hidden border-2 border-linkedin/30 shadow-2xl shadow-linkedin/10">
                <img 
                  src="./profile-headshot.jpg" 
                  alt="Gautam Raju" 
                  className="w-full h-full object-cover object-top scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/20 via-transparent to-transparent" />
              </div>
              
              {/* Accent dot */}
              <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-linkedin rounded-full border-4 border-dark" />
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <a 
          href="#about" 
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-linkedin transition-colors"
        >
          <span className="text-xs font-mono uppercase tracking-wider">Scroll</span>
          <ArrowDown size={16} className="animate-bounce" />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
