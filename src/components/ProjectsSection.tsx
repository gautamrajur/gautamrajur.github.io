import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { Github, Cloud, Mail, GraduationCap, Smartphone, Bot, Cpu, ChevronLeft, ChevronRight, ExternalLink, ArrowUpRight } from 'lucide-react';

const projects = [
  {
    id: 1,
    number: 'i',
    title: 'Infra-Archaeology-MCP',
    subtitle: 'Cloud Forensics',
    description: 'MCP server to identify AWS resource creators with Claude-powered natural language queries.',
    tech: ['Python', 'MCP', 'AWS', 'Claude'],
    github: 'https://github.com/gautamrajur/Infra-Archaeology-MCP',
    icon: Cloud,
    metrics: ['5s Query', '100% Accurate'],
    gradient: 'from-blue-500 to-cyan-400',
  },
  {
    id: 2,
    number: 'ii',
    title: 'EmailSender.AI',
    subtitle: 'AI Automation',
    description: 'Automated email responder using Groq LLaMA with GitHub Actions for 24/7 intelligent responses.',
    tech: ['Python', 'Groq', 'LLaMA'],
    github: 'https://github.com/gautamrajur/EmailSender.AI',
    icon: Mail,
    metrics: ['90% Automation', '24/7 Active'],
    gradient: 'from-emerald-500 to-green-400',
  },
  {
    id: 3,
    number: 'iii',
    title: 'AdapteEd-AI',
    subtitle: 'EdTech Platform',
    description: 'Platform detecting learning disorders like dyslexia and providing personalized remediation.',
    tech: ['React', 'Expo', 'AI/ML'],
    github: 'https://github.com/gautamrajur/AdapteEd-AI',
    icon: GraduationCap,
    metrics: ['85% Detection', '3x Faster'],
    gradient: 'from-purple-500 to-pink-400',
  },
  {
    id: 4,
    number: 'iv',
    title: 'NeatMeet',
    subtitle: 'iOS Application',
    description: 'Event creation and RSVP app with real-time sync using Swift, SwiftUI, and Firebase.',
    tech: ['Swift', 'SwiftUI', 'Firebase'],
    github: 'https://github.com/gautamrajur/NeatMeet',
    icon: Smartphone,
    metrics: ['Real-time', '1K+ Events'],
    gradient: 'from-orange-500 to-red-400',
  },
  {
    id: 5,
    number: 'v',
    title: 'AI Avatar System',
    subtitle: 'LLM Platform',
    description: 'Modular chat system with 6 personas, session management, and sub-100ms response times.',
    tech: ['FastAPI', 'Groq', 'Docker'],
    github: 'https://github.com/gautamrajur/ai-avatar-system',
    icon: Bot,
    metrics: ['6 Personas', '<100ms'],
    gradient: 'from-indigo-500 to-violet-400',
  },
  {
    id: 6,
    number: 'vi',
    title: 'GPU Profiler',
    subtitle: 'ML Optimization',
    description: 'Deep learning profiler with dynamic batch tuning achieving 252x throughput improvement.',
    tech: ['PyTorch', 'CUDA', 'Python'],
    github: 'https://github.com/gautamrajur/gpu_profiler',
    icon: Cpu,
    metrics: ['252x Speedup', '25% Saved'],
    gradient: 'from-teal-500 to-cyan-400',
  },
];

const ProjectsSection: React.FC = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true, 
    align: 'start',
    skipSnaps: false,
    containScroll: 'trimSnaps',
  });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
  }, [emblaApi, onSelect]);

  return (
    <section id="projects" className="section-padding relative overflow-hidden bg-background">
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header - Burt style */}
        <div className="flex items-center gap-4 mb-6">
          <span className="flex items-center justify-center w-10 h-10 rounded-full border border-border text-sm font-mono">
            03
          </span>
          <span className="h-px w-8 bg-border" />
          <span className="text-muted-foreground font-medium">Projects</span>
        </div>
        
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-foreground max-w-3xl leading-tight">
            Building tools that solve <span className="italic text-primary">real problems</span> with AI and cloud.
          </h2>
        </div>

        {/* Carousel */}
        <div className="relative">
          {/* Navigation */}
          <div className="flex items-center gap-3 mb-8">
            <button
              onClick={scrollPrev}
              className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all"
              aria-label="Previous"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={scrollNext}
              className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all"
              aria-label="Next"
            >
              <ChevronRight size={20} />
            </button>
            <span className="ml-4 text-muted-foreground font-mono text-sm">
              {String(selectedIndex + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}
            </span>
          </div>

          {/* Carousel Container */}
          <div className="embla" ref={emblaRef}>
            <div className="flex gap-6">
              {projects.map((project) => (
                <a
                  key={project.id}
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-none w-[340px] md:w-[380px] group"
                >
                  {/* Elongated Card - Burt inspired */}
                  <div className="h-[520px] rounded-3xl bg-card border border-border overflow-hidden flex flex-col transition-all duration-300 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10">
                    {/* Top section - text content */}
                    <div className="p-6 flex-none">
                      {/* Number + Title */}
                      <div className="flex items-baseline gap-2 mb-3">
                        <span className="text-muted-foreground font-mono text-sm">{project.number}.</span>
                        <h3 className="text-2xl font-semibold text-foreground group-hover:text-primary transition-colors">
                          {project.title}
                        </h3>
                      </div>
                      
                      {/* Description */}
                      <p className="text-muted-foreground leading-relaxed mb-4">
                        {project.description}
                      </p>

                      {/* Metrics */}
                      <div className="flex flex-wrap gap-2">
                        {project.metrics.map((metric, idx) => (
                          <span 
                            key={idx}
                            className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20"
                          >
                            {metric}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    {/* Bottom section - visual area */}
                    <div className="flex-1 mx-4 mb-4 rounded-2xl bg-secondary/50 relative overflow-hidden flex items-center justify-center">
                      {/* Gradient overlay */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-10 group-hover:opacity-20 transition-opacity`} />
                      
                      {/* Large icon */}
                      <div className="relative z-10 flex flex-col items-center gap-4">
                        <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${project.gradient} flex items-center justify-center shadow-lg`}>
                          <project.icon className="w-10 h-10 text-white" />
                        </div>
                        
                        {/* Tech tags */}
                        <div className="flex flex-wrap justify-center gap-2 px-4">
                          {project.tech.map((tech) => (
                            <span 
                              key={tech}
                              className="px-2 py-1 text-xs rounded-md bg-background/80 text-muted-foreground backdrop-blur-sm"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Arrow indicator */}
                      <div className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <ArrowUpRight size={18} className="text-primary" />
                      </div>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
        
        {/* View More */}
        <div className="mt-12 flex items-center gap-4">
          <a 
            href="https://github.com/gautamrajur"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-all"
          >
            <Github size={18} />
            View all on GitHub
          </a>
          <span className="text-muted-foreground text-sm">
            20+ more projects
          </span>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
