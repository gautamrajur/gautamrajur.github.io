import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="section-padding bg-secondary/30">
      <div className="container-narrow">
        <div className="space-y-8">
          {/* Section Header */}
          <div>
            <p className="text-sage font-mono text-base tracking-wider uppercase mb-3">About</p>
            <h2 className="text-4xl md:text-5xl font-serif text-foreground">
              Engineer & Builder
            </h2>
          </div>
          
          {/* About Content */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-5 text-muted-foreground text-lg leading-relaxed">
              <p>
                I'm a Software Engineer with 3+ years of experience building generative AI solutions 
                and enterprise systems at <span className="text-foreground font-medium">Apple</span> and{' '}
                <span className="text-foreground font-medium">Ancestry</span>. Currently completing my MS in Computer Science 
                at Northeastern University (graduating April 2026).
              </p>
              <p>
                My focus is on LLMs, prompt engineering, and full-stack development. I've delivered 
                distributed backend systems handling 100M+ monthly requests, built AI-powered features 
                improving productivity by 45%, and developed MCP servers for cloud infrastructure analysis.
              </p>
            </div>
            
            {/* Stats & Tech */}
            <div className="space-y-6">
              {/* Education & Quick Stats */}
              <div className="grid grid-cols-2 gap-4">
                <div className="p-5 rounded-xl bg-card border border-border">
                  <p className="text-sage font-mono text-sm tracking-wider uppercase mb-2">Education</p>
                  <p className="text-foreground font-semibold text-lg">MS Computer Science</p>
                  <p className="text-muted-foreground">Northeastern University</p>
                </div>
                <div className="p-5 rounded-xl bg-card border border-border">
                  <p className="text-sage font-mono text-sm tracking-wider uppercase mb-2">Experience</p>
                  <p className="text-foreground font-semibold text-lg">3+ Years</p>
                  <p className="text-muted-foreground">Apple, Ancestry</p>
                </div>
              </div>
              
              {/* Tech Stack Pills */}
              <div>
                <p className="text-sage font-mono text-sm tracking-wider uppercase mb-3">Core Stack</p>
                <div className="flex flex-wrap gap-2">
                  {['Python', 'Go', 'TypeScript', 'React', 'AWS', 'Kubernetes', 'LLMs', 'RAG'].map((tech) => (
                    <span 
                      key={tech}
                      className="px-4 py-2 text-base rounded-full bg-secondary text-muted-foreground border border-border hover:border-sage/50 hover:text-sage transition-colors cursor-default"
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
