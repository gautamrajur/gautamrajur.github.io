import React from 'react';
import { Github, Linkedin, Mail, ArrowDown } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center section-padding relative overflow-hidden">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate via-slate to-slate-light/50" />
      
      {/* Decorative elements */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-sage/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-sage/3 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto w-full relative z-10">
        <div className="flex flex-col-reverse md:flex-row md:items-center md:justify-between gap-12">
          {/* Text Content */}
          <div className="flex-1 space-y-6 max-w-2xl">
            {/* Greeting */}
            <p 
              className="text-sage font-mono text-sm tracking-wider uppercase opacity-0 animate-fade-in"
              style={{ animationDelay: '0.1s' }}
            >
              Hello, I'm
            </p>
            
            {/* Name */}
            <h1 
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-cream tracking-tight opacity-0 animate-fade-in"
              style={{ animationDelay: '0.2s' }}
            >
              Gautam Raju
            </h1>
            
            {/* Title */}
            <p 
              className="text-xl md:text-2xl text-muted-foreground opacity-0 animate-fade-in"
              style={{ animationDelay: '0.3s' }}
            >
              Software Engineer building{' '}
              <span className="text-sage">generative AI solutions</span>
              {' '}and enterprise systems
            </p>
            
            {/* Brief description */}
            <p 
              className="text-muted-foreground leading-relaxed opacity-0 animate-fade-in"
              style={{ animationDelay: '0.4s' }}
            >
              3+ years at Apple and Ancestry. MS in Computer Science @ Northeastern.
              Expertise in LLMs, prompt engineering, and full-stack development.
            </p>
            
            {/* Social Links */}
            <div 
              className="flex items-center gap-4 pt-4 opacity-0 animate-fade-in"
              style={{ animationDelay: '0.5s' }}
            >
              <a 
                href="https://github.com/gautamrajur" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full border border-slate-lighter hover:border-sage hover:text-sage transition-all duration-300 hover:scale-105"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://linkedin.com/in/gautam-raju" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full border border-slate-lighter hover:border-sage hover:text-sage transition-all duration-300 hover:scale-105"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="mailto:raju.ga@northeastern.edu"
                className="p-3 rounded-full border border-slate-lighter hover:border-sage hover:text-sage transition-all duration-300 hover:scale-105"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
              <span className="h-px w-8 bg-slate-lighter hidden sm:block" />
              <a 
                href="#projects"
                className="text-sm text-muted-foreground hover:text-sage transition-colors hidden sm:block"
              >
                View my work →
              </a>
            </div>
          </div>
          
          {/* Profile Image */}
          <div 
            className="flex justify-center md:justify-end opacity-0 animate-fade-in shrink-0"
            style={{ animationDelay: '0.3s' }}
          >
            <div className="relative">
              {/* Decorative ring */}
              <div className="absolute -inset-3 rounded-full border border-sage/20" />
              <div className="absolute -inset-6 rounded-full border border-sage/10" />
              
              {/* Image container */}
              <div className="relative w-52 h-52 sm:w-60 sm:h-60 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-full overflow-hidden border-2 border-sage/30 shadow-2xl shadow-sage/10">
                <img 
                  src="./profile-headshot.jpg" 
                  alt="Gautam Raju" 
                  className="w-full h-full object-cover object-top scale-110"
                />
                {/* Subtle overlay for blending */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate/20 via-transparent to-transparent" />
              </div>
              
              {/* Accent dot */}
              <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-sage rounded-full border-4 border-slate" />
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <a 
          href="#about" 
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-sage transition-colors"
        >
          <span className="text-xs font-mono uppercase tracking-wider">Scroll</span>
          <ArrowDown size={16} className="animate-bounce" />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
