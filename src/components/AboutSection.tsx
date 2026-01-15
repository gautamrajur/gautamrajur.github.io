import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="section-padding bg-dark-light/50">
      <div className="container-narrow">
        <div className="flex flex-col md:flex-row gap-8">
          {/* About Text */}
          <div className="flex-1">
            <p className="text-linkedin font-mono text-xs tracking-wider uppercase mb-2">About</p>
            <h2 className="text-2xl font-serif text-cream mb-4">Engineer & Builder</h2>
            <p className="text-sm text-muted-foreground leading-relaxed mb-3">
              Software Engineer with 3+ years building generative AI solutions at{' '}
              <span className="text-cream">Apple</span> and <span className="text-cream">Ancestry</span>. 
              Completing MS in Computer Science at Northeastern (Apr 2026).
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Delivered distributed systems handling 100M+ requests, built AI features improving 
              productivity by 45%, and developed MCP servers for cloud infrastructure.
            </p>
          </div>
          
          {/* Stats */}
          <div className="flex flex-row md:flex-col gap-4 md:w-48">
            <div className="flex-1 p-3 rounded-lg bg-dark border border-dark-lighter">
              <p className="text-linkedin font-mono text-[10px] uppercase mb-1">Education</p>
              <p className="text-cream text-sm font-medium">MS Computer Science</p>
              <p className="text-muted-foreground text-xs">Northeastern</p>
            </div>
            <div className="flex-1 p-3 rounded-lg bg-dark border border-dark-lighter">
              <p className="text-linkedin font-mono text-[10px] uppercase mb-1">Experience</p>
              <p className="text-cream text-sm font-medium">3+ Years</p>
              <p className="text-muted-foreground text-xs">Apple, Ancestry</p>
            </div>
          </div>
        </div>
        
        {/* Tech Stack */}
        <div className="mt-6">
          <p className="text-linkedin font-mono text-[10px] uppercase mb-2">Tech Stack</p>
          <div className="flex flex-wrap gap-1.5">
            {['Python', 'Go', 'TypeScript', 'React', 'AWS', 'Kubernetes', 'LLMs', 'RAG', 'Docker', 'GraphQL'].map((tech) => (
              <span 
                key={tech}
                className="px-2 py-1 text-xs rounded bg-dark-lighter text-muted-foreground"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
