import React from 'react';
import { Briefcase, GraduationCap, Code2, Zap } from 'lucide-react';

const AboutSection: React.FC = () => {
  const stats = [
    { icon: Briefcase, value: '3+', label: 'Years Experience' },
    { icon: Code2, value: '100M+', label: 'Requests Handled' },
    { icon: Zap, value: '45%', label: 'Productivity Boost' },
  ];

  return (
    <section id="about" className="section-padding relative overflow-hidden">
      {/* Creative background */}
      <div className="absolute inset-0 bg-dots-pattern opacity-30" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="floating-shape w-48 md:w-64 h-48 md:h-64 bg-primary/20 -top-32 right-1/4" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="space-y-8 md:space-y-12">
          {/* Section Header */}
          <div className="text-center">
            <p className="text-primary font-mono text-sm md:text-base tracking-wider uppercase mb-2 md:mb-3">About</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-foreground">
              Engineer & Builder
            </h2>
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-3 gap-2 sm:gap-4 md:gap-8">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center p-3 sm:p-4 md:p-6 rounded-xl md:rounded-2xl bg-card border border-border hover:border-primary/50 transition-all group">
                <div className="inline-flex p-2 md:p-3 rounded-lg md:rounded-xl bg-primary/10 text-primary mb-2 md:mb-3 group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                  <stat.icon size={18} className="md:w-6 md:h-6" />
                </div>
                <p className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground">{stat.value}</p>
                <p className="text-xs sm:text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
          
          {/* About Content */}
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-start">
            <div className="space-y-4 md:space-y-5 text-muted-foreground text-base md:text-lg leading-relaxed">
              <p>
                I'm a Software Engineer with 3+ years of experience building generative AI solutions 
                and enterprise systems at <span className="text-foreground font-medium">Apple</span> and{' '}
                <span className="text-foreground font-medium">Ancestry</span>. Currently completing my MS in Computer Science 
                at Northeastern University (graduating April 2026).
              </p>
              <p>
                My focus is on LLMs, prompt engineering, and AI platform engineering. I've delivered 
                distributed backend systems handling 100M+ monthly requests, built AI-powered features 
                improving productivity by 45%, and developed MCP servers for cloud infrastructure analysis.
              </p>
            </div>
            
            {/* Education & Tech */}
            <div className="space-y-5 md:space-y-6">
              {/* Education Card */}
              <div className="p-5 md:p-6 rounded-xl md:rounded-2xl bg-card border border-border relative overflow-hidden group hover:border-primary/50 transition-all">
                <div className="absolute top-0 right-0 w-24 md:w-32 h-24 md:h-32 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:bg-primary/10 transition-colors" />
                <div className="relative z-10">
                  <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4">
                    <div className="p-1.5 md:p-2 rounded-lg bg-primary/10 text-primary">
                      <GraduationCap size={18} className="md:w-5 md:h-5" />
                    </div>
                    <p className="text-primary font-mono text-xs md:text-sm tracking-wider uppercase">Education</p>
                  </div>
                  <p className="text-foreground font-semibold text-lg md:text-xl">MS Computer Science</p>
                  <p className="text-muted-foreground text-sm md:text-base">Northeastern University • 2024-2026</p>
                </div>
              </div>
              
              {/* Tech Stack */}
              <div>
                <p className="text-primary font-mono text-xs md:text-sm tracking-wider uppercase mb-3 md:mb-4">Core Stack</p>
                <div className="flex flex-wrap gap-2">
                  {['Python', 'Go', 'TypeScript', 'React', 'AWS', 'K8s', 'LLMs', 'RAG'].map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1.5 md:px-4 md:py-2 text-sm md:text-base rounded-full bg-card text-foreground border border-border hover:border-primary hover:text-primary transition-all cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
