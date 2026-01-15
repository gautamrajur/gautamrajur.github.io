import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    id: 1,
    number: 'i',
    title: 'Infra-Archaeology-MCP',
    subtitle: 'Cloud Forensics',
    description: 'MCP server to identify AWS resource creators with Claude-powered natural language queries.',
    tech: ['Python', 'MCP', 'AWS', 'Claude API'],
    github: 'https://github.com/gautamrajur/Infra-Archaeology-MCP',
    metrics: [
      { value: '5s', label: 'Query Time' },
      { value: '100%', label: 'Accuracy' },
    ],
  },
  {
    id: 2,
    number: 'ii',
    title: 'EmailSender.AI',
    subtitle: 'AI Automation',
    description: 'Automated email responder using Groq LLaMA with GitHub Actions for intelligent responses.',
    tech: ['Python', 'Groq', 'LLaMA', 'Gmail API'],
    github: 'https://github.com/gautamrajur/EmailSender.AI',
    metrics: [
      { value: '90%', label: 'Automation' },
      { value: '24/7', label: 'Availability' },
    ],
  },
  {
    id: 3,
    number: 'iii',
    title: 'AdapteEd-AI',
    subtitle: 'EdTech Platform',
    description: 'Platform detecting learning disorders like dyslexia and providing personalized remediation.',
    tech: ['React', 'Expo', 'AI/ML', 'TypeScript'],
    github: 'https://github.com/gautamrajur/AdapteEd-AI',
    metrics: [
      { value: '85%', label: 'Detection Rate' },
      { value: '3x', label: 'Learning Speed' },
    ],
  },
  {
    id: 4,
    number: 'iv',
    title: 'NeatMeet',
    subtitle: 'iOS Application',
    description: 'Event creation and RSVP app with real-time sync using Swift, SwiftUI, and Firebase.',
    tech: ['Swift', 'SwiftUI', 'Firebase', 'iOS'],
    github: 'https://github.com/gautamrajur/NeatMeet',
    metrics: [
      { value: 'Real-time', label: 'Sync' },
      { value: '1K+', label: 'Events Created' },
    ],
  },
  {
    id: 5,
    number: 'v',
    title: 'AI Avatar System',
    subtitle: 'LLM Platform',
    description: 'Modular chat system with 6 personas, session management, and sub-100ms response times.',
    tech: ['FastAPI', 'Groq', 'Docker', 'Kubernetes'],
    github: 'https://github.com/gautamrajur/ai-avatar-system',
    metrics: [
      { value: '6', label: 'AI Personas' },
      { value: '<100ms', label: 'Latency' },
    ],
  },
  {
    id: 6,
    number: 'vi',
    title: 'GPU Profiler',
    subtitle: 'ML Optimization',
    description: 'Deep learning profiler with dynamic batch tuning achieving 252x throughput improvement.',
    tech: ['PyTorch', 'CUDA', 'Python', 'Colab'],
    github: 'https://github.com/gautamrajur/gpu_profiler',
    metrics: [
      { value: '252x', label: 'Speedup' },
      { value: '25%', label: 'Cost Saved' },
    ],
  },
];

const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="section-padding relative overflow-hidden bg-background">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="mb-12">
          <p className="text-primary font-mono text-sm tracking-wider uppercase mb-3">Projects</p>
          <h2 className="text-4xl md:text-5xl font-serif text-foreground max-w-2xl leading-tight">
            Building tools that <span className="italic text-primary">solve real problems</span>
          </h2>
        </div>

        {/* Horizontal Scroll Container */}
        <div className="relative -mx-6 px-6">
          <div 
            className="flex gap-6 overflow-x-auto pb-6 snap-x snap-mandatory scrollbar-hide"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {projects.map((project) => (
              <a
                key={project.id}
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-none w-[320px] md:w-[360px] snap-start group"
              >
                {/* Simple Elongated Card */}
                <div className="h-[480px] p-6 rounded-2xl bg-card border border-border flex flex-col transition-all duration-300 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5">
                  
                  {/* Number + Subtitle */}
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-muted-foreground font-mono text-sm">{project.number}.</span>
                    <span className="text-primary text-sm font-medium">{project.subtitle}</span>
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-2xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Impact Metrics - Highlighted */}
                  <div className="flex gap-3 mb-6">
                    {project.metrics.map((metric, idx) => (
                      <div 
                        key={idx}
                        className="flex-1 p-4 rounded-xl bg-primary/5 border border-primary/20"
                      >
                        <p className="text-primary font-bold text-xl">{metric.value}</p>
                        <p className="text-muted-foreground text-xs mt-1">{metric.label}</p>
                      </div>
                    ))}
                  </div>
                  
                  {/* Tech Stack */}
                  <div className="mt-auto">
                    <p className="text-xs text-muted-foreground uppercase tracking-wider mb-3">Tech Stack</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span 
                          key={tech}
                          className="px-3 py-1.5 text-sm rounded-lg bg-secondary text-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* View Link */}
                  <div className="flex items-center gap-2 mt-6 pt-4 border-t border-border text-muted-foreground group-hover:text-primary transition-colors">
                    <Github size={16} />
                    <span className="text-sm font-medium">View on GitHub</span>
                    <ExternalLink size={14} className="ml-auto" />
                  </div>
                </div>
              </a>
            ))}
          </div>
          
          {/* Scroll hint gradient */}
          <div className="absolute right-0 top-0 bottom-6 w-20 bg-gradient-to-l from-background to-transparent pointer-events-none" />
        </div>
        
        {/* View More */}
        <div className="mt-10 flex items-center gap-4">
          <a 
            href="https://github.com/gautamrajur"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary hover:underline font-medium"
          >
            <Github size={18} />
            View all projects on GitHub →
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
