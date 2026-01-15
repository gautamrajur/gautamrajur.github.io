import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    id: 1,
    number: 'i',
    title: 'Infra-Archaeology-MCP',
    subtitle: 'Cloud Forensics',
    description: 'MCP server to identify AWS resource creators with Claude-powered natural language queries.',
    tech: ['Python', 'MCP', 'AWS', 'Claude'],
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
    tech: ['Python', 'Groq', 'LLaMA', 'Gmail'],
    github: 'https://github.com/gautamrajur/EmailSender.AI',
    metrics: [
      { value: '90%', label: 'Automation' },
      { value: '24/7', label: 'Active' },
    ],
  },
  {
    id: 3,
    number: 'iii',
    title: 'AdapteEd-AI',
    subtitle: 'EdTech Platform',
    description: 'Platform detecting learning disorders like dyslexia and providing personalized remediation.',
    tech: ['React', 'Expo', 'AI/ML', 'TS'],
    github: 'https://github.com/gautamrajur/AdapteEd-AI',
    metrics: [
      { value: '85%', label: 'Detection' },
      { value: '3x', label: 'Faster' },
    ],
  },
  {
    id: 4,
    number: 'iv',
    title: 'NeatMeet',
    subtitle: 'iOS Application',
    description: 'Event creation and RSVP app with real-time sync using Swift, SwiftUI, and Firebase.',
    tech: ['Swift', 'SwiftUI', 'Firebase'],
    github: 'https://github.com/gautamrajur/NeatMeet',
    metrics: [
      { value: 'Real-time', label: 'Sync' },
      { value: '1K+', label: 'Events' },
    ],
  },
  {
    id: 5,
    number: 'v',
    title: 'AI Avatar System',
    subtitle: 'LLM Platform',
    description: 'Modular chat system with 6 personas, session management, and sub-100ms response times.',
    tech: ['FastAPI', 'Groq', 'Docker', 'K8s'],
    github: 'https://github.com/gautamrajur/ai-avatar-system',
    metrics: [
      { value: '6', label: 'Personas' },
      { value: '<100ms', label: 'Latency' },
    ],
  },
  {
    id: 6,
    number: 'vi',
    title: 'GPU Profiler',
    subtitle: 'ML Optimization',
    description: 'Deep learning profiler with dynamic batch tuning achieving 252x throughput improvement.',
    tech: ['PyTorch', 'CUDA', 'Python'],
    github: 'https://github.com/gautamrajur/gpu_profiler',
    metrics: [
      { value: '252x', label: 'Speedup' },
      { value: '25%', label: 'Saved' },
    ],
  },
];

const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="py-16 md:py-24 relative overflow-hidden bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div className="mb-8 md:mb-12">
          <p className="text-primary font-mono text-xs sm:text-sm tracking-wider uppercase mb-2">Projects</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif text-foreground max-w-2xl leading-tight">
            Building tools that <span className="italic text-primary">solve real problems</span>
          </h2>
        </div>

        {/* Horizontal Scroll Container */}
        <div className="relative -mx-4 sm:-mx-6">
          <div 
            className="flex gap-4 overflow-x-auto px-4 sm:px-6 pb-4 snap-x snap-mandatory"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', WebkitOverflowScrolling: 'touch' }}
          >
            {projects.map((project) => (
              <a
                key={project.id}
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-none w-[85vw] max-w-[320px] sm:w-[300px] md:w-[340px] snap-center group"
              >
                {/* Card */}
                <div className="h-[400px] sm:h-[420px] md:h-[460px] p-4 sm:p-5 md:p-6 rounded-xl md:rounded-2xl bg-card border border-border flex flex-col transition-all duration-300 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5">
                  
                  {/* Number + Subtitle */}
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-muted-foreground font-mono text-xs">{project.number}.</span>
                    <span className="text-primary text-xs font-medium">{project.subtitle}</span>
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-1">
                    {project.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Impact Metrics */}
                  <div className="flex gap-2 mb-4">
                    {project.metrics.map((metric, idx) => (
                      <div 
                        key={idx}
                        className="flex-1 p-2.5 sm:p-3 rounded-lg bg-primary/5 border border-primary/20"
                      >
                        <p className="text-primary font-bold text-base sm:text-lg">{metric.value}</p>
                        <p className="text-muted-foreground text-[10px] sm:text-xs">{metric.label}</p>
                      </div>
                    ))}
                  </div>
                  
                  {/* Tech Stack */}
                  <div className="flex-1 flex flex-col justify-end">
                    <p className="text-[10px] text-muted-foreground uppercase tracking-wider mb-2">Stack</p>
                    <div className="flex flex-wrap gap-1.5">
                      {project.tech.map((tech) => (
                        <span 
                          key={tech}
                          className="px-2 py-1 text-xs rounded-md bg-secondary text-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* View Link */}
                  <div className="flex items-center gap-2 mt-3 pt-3 border-t border-border text-muted-foreground group-hover:text-primary transition-colors">
                    <Github size={14} />
                    <span className="text-xs font-medium">View on GitHub</span>
                    <ExternalLink size={12} className="ml-auto" />
                  </div>
                </div>
              </a>
            ))}
          </div>
          
          {/* Scroll hint */}
          <div className="absolute right-0 top-0 bottom-4 w-8 sm:w-16 bg-gradient-to-l from-background to-transparent pointer-events-none" />
        </div>
        
        {/* View More */}
        <div className="mt-6 md:mt-8">
          <a 
            href="https://github.com/gautamrajur"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary hover:underline font-medium text-sm"
          >
            <Github size={16} />
            View all projects on GitHub →
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
