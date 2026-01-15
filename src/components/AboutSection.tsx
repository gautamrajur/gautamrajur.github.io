import React from 'react';
import { Briefcase, GraduationCap, Code2, Zap } from 'lucide-react';

const AboutSection: React.FC = () => {
  const stats = [
    { icon: Briefcase, value: '3+', label: 'Years Exp' },
    { icon: Code2, value: '100M+', label: 'Requests' },
    { icon: Zap, value: '45%', label: 'Boost' },
  ];

  return (
    <section id="about" className="py-16 md:py-24 relative overflow-hidden">
      {/* Creative background */}
      <div className="absolute inset-0 bg-dots-pattern opacity-30" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="space-y-8 md:space-y-10">
          {/* Section Header */}
          <div className="text-center">
            <p className="text-primary font-mono text-xs sm:text-sm tracking-wider uppercase mb-2">About</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif text-foreground">
              Engineer & Builder
            </h2>
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-3 gap-2 sm:gap-4">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center p-3 sm:p-4 md:p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all group">
                <div className="inline-flex p-2 rounded-lg bg-primary/10 text-primary mb-2 group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                  <stat.icon size={16} className="sm:w-5 sm:h-5" />
                </div>
                <p className="text-lg sm:text-xl md:text-2xl font-bold text-foreground">{stat.value}</p>
                <p className="text-[10px] sm:text-xs text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
          
          {/* About Content */}
          <div className="space-y-6">
            <div className="space-y-4 text-muted-foreground text-sm sm:text-base leading-relaxed">
              <p>
                I'm a Software Engineer with 3+ years of experience building generative AI solutions 
                and enterprise systems at <span className="text-foreground font-medium">Apple</span> and{' '}
                <span className="text-foreground font-medium">Ancestry</span>. Currently completing my MS in Computer Science 
                at Northeastern University (graduating April 2026).
              </p>
              <p>
                My focus is on LLMs, prompt engineering, and AI platform engineering. I've delivered 
                distributed backend systems handling 100M+ monthly requests and built AI-powered features.
              </p>
            </div>
            
            {/* Education Card */}
            <div className="p-4 sm:p-5 rounded-xl bg-card border border-border relative overflow-hidden">
              <div className="flex items-center gap-2 mb-2">
                <div className="p-1.5 rounded-lg bg-primary/10 text-primary">
                  <GraduationCap size={16} />
                </div>
                <p className="text-primary font-mono text-xs tracking-wider uppercase">Education</p>
              </div>
              <p className="text-foreground font-semibold text-base sm:text-lg">MS Computer Science</p>
              <p className="text-muted-foreground text-sm">Northeastern University • 2024-2026</p>
            </div>
            
            {/* Tech Stack */}
            <div>
              <p className="text-primary font-mono text-xs tracking-wider uppercase mb-3">Core Stack</p>
              <div className="flex flex-wrap gap-2">
                {['Python', 'Go', 'TypeScript', 'React', 'AWS', 'K8s', 'LLMs', 'RAG'].map((tech) => (
                  <span 
                    key={tech}
                    className="px-3 py-1.5 text-sm rounded-full bg-card text-foreground border border-border"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
