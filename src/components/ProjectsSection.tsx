import React from 'react';
import { Github, ExternalLink, Cloud, Mail, GraduationCap } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Infra-Archaeology-MCP',
    subtitle: 'Cloud Resource Lineage Tracker',
    description: 'An MCP server that runs forensics on cloud costs, helping teams identify who created any AWS resource in 5 seconds. Integrates CloudTrail, Cost Explorer, Terraform state, and Git history with Claude-powered natural language interface.',
    tech: ['Python', 'MCP', 'AWS', 'Claude API', 'Terraform'],
    github: 'https://github.com/gautamrajur/Infra-Archaeology-MCP',
    gradient: 'from-emerald-500/20 via-teal-500/10 to-cyan-500/20',
    icon: Cloud,
    stats: ['$384K saved/year', '2hrs → 5sec', '500+ resources'],
  },
  {
    id: 2,
    title: 'EmailSender.AI',
    subtitle: 'AI-Powered Email Responder',
    description: 'Automated email responder using Groq\'s LLaMA API to intelligently reply to Gmail messages. Runs via GitHub Actions for periodic execution, featuring smart context-aware responses.',
    tech: ['Python', 'Groq API', 'LLaMA', 'Gmail API', 'GitHub Actions'],
    github: 'https://github.com/gautamrajur/EmailSender.AI',
    gradient: 'from-violet-500/20 via-purple-500/10 to-fuchsia-500/20',
    icon: Mail,
    stats: ['Auto-responses', 'LLaMA powered', 'Zero-touch'],
  },
  {
    id: 3,
    title: 'AdapteEd-AI',
    subtitle: 'AI Education Platform',
    description: 'An intelligent education platform leveraging AI to create personalized learning experiences. Built with modern web technologies and AI/ML pipelines for adaptive content delivery.',
    tech: ['TypeScript', 'React', 'AI/ML', 'GraphQL', 'RAG'],
    github: 'https://github.com/gautamrajur/AdapteEd-AI',
    gradient: 'from-amber-500/20 via-orange-500/10 to-rose-500/20',
    icon: GraduationCap,
    stats: ['Personalized', 'Adaptive learning', 'AI-driven'],
  },
];

const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="section-padding">
      <div className="container-narrow">
        {/* Header */}
        <div className="mb-16">
          <p className="text-sage font-mono text-sm tracking-wider uppercase mb-3">Projects</p>
          <h2 className="text-3xl md:text-4xl font-bold text-cream mb-4">
            Selected Work
          </h2>
          <p className="text-muted-foreground max-w-xl">
            Open source projects focused on AI, cloud infrastructure, and developer productivity.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="space-y-8">
          {projects.map((project, index) => (
            <article 
              key={project.id}
              className="group relative rounded-2xl border border-slate-lighter overflow-hidden hover:border-sage/50 transition-all duration-300"
            >
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="relative p-8 md:p-10">
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  {/* Icon */}
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 rounded-xl bg-slate-lighter/50 border border-slate-lighter flex items-center justify-center group-hover:border-sage/50 transition-colors">
                      <project.icon className="w-6 h-6 text-sage" />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 space-y-4">
                    <div>
                      <p className="text-sage font-mono text-xs tracking-wider uppercase mb-1">
                        {project.subtitle}
                      </p>
                      <h3 className="text-xl md:text-2xl font-semibold text-cream">
                        {project.title}
                      </h3>
                    </div>
                    
                    <p className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                    
                    {/* Stats */}
                    <div className="flex flex-wrap gap-4 text-sm">
                      {project.stats.map((stat, i) => (
                        <span key={i} className="text-sage/80 font-mono">
                          {stat}
                        </span>
                      ))}
                    </div>
                    
                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.tech.map((tech) => (
                        <span 
                          key={tech}
                          className="px-2.5 py-1 text-xs rounded-md bg-slate-lighter/50 text-muted-foreground border border-slate-lighter"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Links */}
                  <div className="flex md:flex-col gap-3">
                    <a 
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-lg border border-slate-lighter hover:border-sage hover:text-sage transition-colors"
                      aria-label={`View ${project.title} on GitHub`}
                    >
                      <Github size={18} />
                    </a>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
        
        {/* View More Link */}
        <div className="mt-12 text-center">
          <a 
            href="https://github.com/gautamrajur"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-sage transition-colors"
          >
            <span>View more on GitHub</span>
            <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
