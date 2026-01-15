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
    subtitle: 'Computer Vision Project',
    description: 'Intelligent avatar generation using PyTorch and Computer Vision for real-time facial expression mapping.',
    tech: ['PyTorch', 'OpenCV', 'Deep Learning'],
    github: 'https://github.com/gautamrajur',
    icon: Bot,
  },
  {
    id: 6,
    title: 'GPU Performance Profiler',
    subtitle: 'ML Benchmarking Tool',
    description: 'Neural network profiling tool with CUDA and PyTorch for memory optimization and architecture benchmarking.',
    tech: ['CUDA', 'PyTorch', 'Python'],
    github: 'https://github.com/gautamrajur',
    icon: Cpu,
  },
];

const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="section-padding">
      <div className="container-narrow">
        {/* Header */}
        <div className="mb-12">
          <p className="text-linkedin font-mono text-sm tracking-wider uppercase mb-3">Projects</p>
          <h2 className="text-3xl md:text-4xl font-serif text-cream mb-4">
            Selected Work
          </h2>
          <p className="text-muted-foreground max-w-xl">
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
              className="group p-6 rounded-2xl bg-dark-light border border-dark-lighter hover:border-linkedin/50 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 rounded-xl bg-dark-lighter/50 border border-dark-lighter group-hover:border-linkedin/50 transition-colors">
                  <project.icon className="w-5 h-5 text-linkedin" />
                </div>
                <Github size={18} className="text-muted-foreground group-hover:text-linkedin transition-colors" />
              </div>
              
              <p className="text-linkedin font-mono text-xs tracking-wider uppercase mb-1">
                {project.subtitle}
              </p>
              <h3 className="text-lg font-semibold text-cream mb-3 group-hover:text-linkedin transition-colors">
                {project.title}
              </h3>
              
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span 
                    key={tech}
                    className="px-2 py-1 text-xs rounded-md bg-dark-lighter/50 text-muted-foreground"
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
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-linkedin transition-colors"
          >
            <span>View more on GitHub</span>
            <Github size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
