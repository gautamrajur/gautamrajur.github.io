import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="section-padding bg-dark-light/30">
      <div className="container-narrow">
        <div className="space-y-8">
          {/* Section Header */}
          <div>
            <p className="text-linkedin font-mono text-sm tracking-wider uppercase mb-3">About</p>
            <h2 className="text-3xl md:text-4xl font-serif text-cream">
              Engineer & Builder
            </h2>
          </div>
          
          {/* About Content */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I'm a Software Engineer with 3+ years of experience building generative AI solutions 
                and enterprise systems at <span className="text-cream font-medium">Apple</span> and{' '}
                <span className="text-cream font-medium">Ancestry</span>. Currently completing my MS in Computer Science 
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
                <div className="p-4 rounded-xl bg-dark/50 border border-dark-lighter">
                  <p className="text-linkedin font-mono text-xs tracking-wider uppercase mb-2">Education</p>
                  <p className="text-cream font-medium">MS Computer Science</p>
                  <p className="text-muted-foreground text-sm">Northeastern University</p>
                </div>
                <div className="p-4 rounded-xl bg-dark/50 border border-dark-lighter">
                  <p className="text-linkedin font-mono text-xs tracking-wider uppercase mb-2">Experience</p>
                  <p className="text-cream font-medium">3+ Years</p>
                  <p className="text-muted-foreground text-sm">Apple, Ancestry</p>
                </div>
              </div>
              
              {/* Tech Stack Pills */}
              <div>
                <p className="text-linkedin font-mono text-xs tracking-wider uppercase mb-3">Core Stack</p>
                <div className="flex flex-wrap gap-2">
                  {['Python', 'Go', 'TypeScript', 'React', 'AWS', 'Kubernetes', 'LLMs', 'RAG'].map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1.5 text-sm rounded-full bg-dark-lighter/30 text-muted-foreground border border-dark-lighter hover:border-linkedin/50 hover:text-linkedin transition-colors cursor-default"
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
