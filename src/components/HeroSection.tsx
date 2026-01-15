import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section className="min-h-[85vh] flex items-center section-padding pt-20">
      <div className="container-narrow w-full">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          {/* Text Content */}
          <div className="flex-1 space-y-4 order-2 md:order-1">
            <p className="text-linkedin font-mono text-xs tracking-wider uppercase">
              Software Engineer
            </p>
            
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-cream tracking-tight">
              Gautam Raju
            </h1>
            
            <p className="text-lg text-muted-foreground">
              Building <span className="text-linkedin">generative AI solutions</span> and enterprise systems
            </p>
            
            <p className="text-sm text-muted-foreground leading-relaxed max-w-lg">
              3+ years at Apple & Ancestry. MS Computer Science @ Northeastern. 
              Focused on LLMs, prompt engineering, and full-stack development.
            </p>
            
            {/* Social Links */}
            <div className="flex items-center gap-3 pt-2">
              <a 
                href="https://github.com/gautamrajur" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-dark-light hover:bg-linkedin transition-colors"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
              <a 
                href="https://linkedin.com/in/gautam-raju" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-dark-light hover:bg-linkedin transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a 
                href="mailto:raju.ga@northeastern.edu"
                className="p-2 rounded-lg bg-dark-light hover:bg-linkedin transition-colors"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
              <a 
                href="#projects"
                className="ml-2 text-sm text-linkedin hover:underline"
              >
                View projects →
              </a>
            </div>
          </div>
          
          {/* Profile Image */}
          <div className="flex justify-center md:justify-end order-1 md:order-2 shrink-0">
            <div className="relative">
              <div className="relative w-36 h-36 sm:w-44 sm:h-44 md:w-48 md:h-48 rounded-full overflow-hidden ring-2 ring-linkedin/30 ring-offset-2 ring-offset-dark">
                <img 
                  src="./profile-headshot.jpg" 
                  alt="Gautam Raju" 
                  className="w-full h-full object-cover object-top scale-110"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
