import React from 'react';
import { Github, Cloud, Mail, GraduationCap, Smartphone, Bot, Cpu } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Infra-Archaeology-MCP',
    subtitle: 'Cloud Resource Lineage Tracker',
    description: 'MCP server for cloud forensics - identify AWS resource creators in 5 seconds with Claude-powered natural language interface.',
    tech: ['Python', 'MCP', 'AWS', 'Claude API'],
    github: 'https://github.com/gautamrajur/Infra-Archaeology-MCP',
    icon: Cloud,
  },
  {
    id: 2,
    title: 'EmailSender.AI',
    subtitle: 'AI-Powered Email Responder',
    description: 'Automated email responder using Groq LLaMA API with GitHub Actions for intelligent, context-aware responses.',
    tech: ['Python', 'Groq', 'LLaMA', 'Gmail API'],
    github: 'https://github.com/gautamrajur/EmailSender.AI',
    icon: Mail,
  },
  {
    id: 3,
    title: 'AdapteEd-AI',
    subtitle: 'AI Education Platform',
    description: 'Platform detecting learning disorders like dyslexia in children and providing personalized remediation paths.',
    tech: ['React', 'Expo', 'AI/ML', 'TypeScript'],
    github: 'https://github.com/gautamrajur/AdapteEd-AI',
    icon: GraduationCap,
  },
  {
    id: 4,
    title: 'NeatMeet',
    subtitle: 'iOS Event App',
    description: 'iOS app for event creation and RSVP with real-time updates using Swift, SwiftUI, and Firebase.',
    tech: ['Swift', 'SwiftUI', 'Firebase', 'iOS'],
    github: 'https://github.com/gautamrajur/NeatMeet',
    icon: Smartphone,
  },
  {
    id: 5,
    title: 'AI Avatar System',
    subtitle: 'LLM-Powered Chat System',
    description: 'Modular LLM-powered chat system with multiple personas built with FastAPI and Groq. Supports session management and real-time conversations.',
    tech: ['FastAPI', 'Groq', 'Docker', 'K8s'],
    github: 'https://github.com/gautamrajur/ai-avatar-system',
    icon: Bot,
  },
  {
    id: 6,
    title: 'GPU Performance Profiler',
    subtitle: 'ML Benchmarking Tool',
    description: 'GPU profiling framework for deep learning training optimization with dynamic batch tuning and kernel-level analysis. Achieved 252x throughput improvement.',
    tech: ['PyTorch', 'CUDA', 'Python', 'Colab'],
    github: 'https://github.com/gautamrajur/gpu_profiler',
    icon: Cpu,
  },
];

const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="section-padding">
      <div className="container-narrow">
        {/* Header */}
        <div className="mb-12">
          <p className="text-sage font-mono text-base tracking-wider uppercase mb-3">Projects</p>
          <h2 className="text-4xl md:text-5xl font-serif text-foreground mb-4">
            Selected Work
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl">
            Open source projects focused on AI, cloud infrastructure, and developer productivity.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <a 
              key={project.id}
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-6 rounded-2xl bg-card border border-border hover:border-sage/50 transition-all duration-300 hover:shadow-lg hover:shadow-sage/5"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 rounded-xl bg-secondary border border-border group-hover:border-sage/50 transition-colors">
                  <project.icon className="w-6 h-6 text-sage" />
                </div>
                <Github size={20} className="text-muted-foreground group-hover:text-sage transition-colors" />
              </div>
              
              <p className="text-sage font-mono text-sm tracking-wider uppercase mb-1">
                {project.subtitle}
              </p>
              <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-sage transition-colors">
                {project.title}
              </h3>
              
              <p className="text-base text-muted-foreground leading-relaxed mb-4">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span 
                    key={tech}
                    className="px-3 py-1 text-sm rounded-md bg-secondary text-muted-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
        
        {/* View More Link */}
        <div className="mt-12 text-center">
          <a 
            href="https://github.com/gautamrajur"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-sage transition-colors text-lg font-medium"
          >
            <span>View more on GitHub</span>
            <Github size={18} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
