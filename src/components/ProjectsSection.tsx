import React from 'react';
import { Github, Cloud, Mail, GraduationCap, Smartphone, Bot, Cpu } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Infra-Archaeology-MCP',
    description: 'MCP server for cloud forensics - identify AWS resource creators in 5 seconds with Claude-powered NL interface.',
    tech: ['Python', 'MCP', 'AWS', 'Claude'],
    github: 'https://github.com/gautamrajur/Infra-Archaeology-MCP',
    icon: Cloud,
  },
  {
    id: 2,
    title: 'EmailSender.AI',
    description: 'AI email responder using Groq LLaMA API with GitHub Actions for automated intelligent responses.',
    tech: ['Python', 'Groq', 'LLaMA', 'Gmail API'],
    github: 'https://github.com/gautamrajur/EmailSender.AI',
    icon: Mail,
  },
  {
    id: 3,
    title: 'AdapteEd-AI',
    description: 'AI education platform detecting learning disorders like dyslexia and providing personalized remediation.',
    tech: ['React', 'Expo', 'AI/ML', 'TypeScript'],
    github: 'https://github.com/gautamrajur/AdapteEd-AI',
    icon: GraduationCap,
  },
  {
    id: 4,
    title: 'NeatMeet',
    description: 'iOS app for event creation and RSVP with real-time updates using Swift, SwiftUI, and Firebase.',
    tech: ['Swift', 'SwiftUI', 'Firebase', 'iOS'],
    github: 'https://github.com/gautamrajur/NeatMeet',
    icon: Smartphone,
  },
  {
    id: 5,
    title: 'AI Avatar System',
    description: 'Intelligent avatar generation using PyTorch and Computer Vision for real-time facial expression mapping.',
    tech: ['PyTorch', 'OpenCV', 'Deep Learning'],
    github: 'https://github.com/gautamrajur',
    icon: Bot,
  },
  {
    id: 6,
    title: 'GPU Performance Profiler',
    description: 'Neural network profiling tool with CUDA and PyTorch for memory optimization and benchmarking.',
    tech: ['CUDA', 'PyTorch', 'Python'],
    github: 'https://github.com/gautamrajur',
    icon: Cpu,
  },
];

const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="section-padding">
      <div className="container-narrow">
        <div className="mb-6">
          <p className="text-linkedin font-mono text-xs tracking-wider uppercase mb-2">Projects</p>
          <h2 className="text-2xl font-bold text-cream">Selected Work</h2>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {projects.map((project) => (
            <a 
              key={project.id}
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-4 rounded-lg bg-dark-light border border-dark-lighter hover:border-linkedin/50 transition-all"
            >
              <div className="flex items-start gap-3 mb-3">
                <div className="p-2 rounded-lg bg-dark-lighter group-hover:bg-linkedin/20 transition-colors">
                  <project.icon className="w-4 h-4 text-linkedin" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm font-semibold text-cream truncate group-hover:text-linkedin transition-colors">
                    {project.title}
                  </h3>
                </div>
                <Github size={14} className="text-muted-foreground group-hover:text-linkedin transition-colors shrink-0" />
              </div>
              
              <p className="text-xs text-muted-foreground leading-relaxed mb-3 line-clamp-2">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-1">
                {project.tech.slice(0, 3).map((tech) => (
                  <span 
                    key={tech}
                    className="px-1.5 py-0.5 text-[10px] rounded bg-dark-lighter text-muted-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
        
        <div className="mt-4 text-center">
          <a 
            href="https://github.com/gautamrajur"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-muted-foreground hover:text-linkedin transition-colors"
          >
            View all on GitHub →
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
