import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { Github, Cloud, Mail, GraduationCap, Smartphone, Bot, Cpu, ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Infra-Archaeology-MCP',
    subtitle: 'Cloud Resource Lineage Tracker',
    description: 'MCP server for cloud forensics - identify AWS resource creators with Claude-powered natural language interface.',
    tech: ['Python', 'MCP', 'AWS', 'Claude API'],
    github: 'https://github.com/gautamrajur/Infra-Archaeology-MCP',
    icon: Cloud,
    impacts: [
      { value: '5s', label: 'Query Time' },
      { value: '100%', label: 'Accuracy' },
    ],
    gradient: 'from-blue-500/20 to-cyan-500/20',
  },
  {
    id: 2,
    title: 'EmailSender.AI',
    subtitle: 'AI-Powered Email Responder',
    description: 'Automated email responder using Groq LLaMA API with GitHub Actions for intelligent responses.',
    tech: ['Python', 'Groq', 'LLaMA', 'Gmail API'],
    github: 'https://github.com/gautamrajur/EmailSender.AI',
    icon: Mail,
    impacts: [
      { value: '90%', label: 'Automation' },
      { value: '24/7', label: 'Availability' },
    ],
    gradient: 'from-emerald-500/20 to-green-500/20',
  },
  {
    id: 3,
    title: 'AdapteEd-AI',
    subtitle: 'AI Education Platform',
    description: 'Platform detecting learning disorders like dyslexia and providing personalized remediation paths.',
    tech: ['React', 'Expo', 'AI/ML', 'TypeScript'],
    github: 'https://github.com/gautamrajur/AdapteEd-AI',
    icon: GraduationCap,
    impacts: [
      { value: '85%', label: 'Detection' },
      { value: '3x', label: 'Learning Speed' },
    ],
    gradient: 'from-purple-500/20 to-pink-500/20',
  },
  {
    id: 4,
    title: 'NeatMeet',
    subtitle: 'iOS Event App',
    description: 'iOS app for event creation and RSVP with real-time updates using Swift and Firebase.',
    tech: ['Swift', 'SwiftUI', 'Firebase', 'iOS'],
    github: 'https://github.com/gautamrajur/NeatMeet',
    icon: Smartphone,
    impacts: [
      { value: 'Real-time', label: 'Sync' },
      { value: '1K+', label: 'Events' },
    ],
    gradient: 'from-orange-500/20 to-red-500/20',
  },
  {
    id: 5,
    title: 'AI Avatar System',
    subtitle: 'LLM-Powered Chat System',
    description: 'Modular LLM-powered chat system with multiple personas built with FastAPI and Groq.',
    tech: ['FastAPI', 'Groq', 'Docker', 'K8s'],
    github: 'https://github.com/gautamrajur/ai-avatar-system',
    icon: Bot,
    impacts: [
      { value: '6', label: 'Personas' },
      { value: '<100ms', label: 'Latency' },
    ],
    gradient: 'from-indigo-500/20 to-violet-500/20',
  },
  {
    id: 6,
    title: 'GPU Performance Profiler',
    subtitle: 'ML Benchmarking Tool',
    description: 'GPU profiling framework for deep learning with dynamic batch tuning and kernel-level analysis.',
    tech: ['PyTorch', 'CUDA', 'Python', 'Colab'],
    github: 'https://github.com/gautamrajur/gpu_profiler',
    icon: Cpu,
    impacts: [
      { value: '252x', label: 'Speedup' },
      { value: '25%', label: 'Cost Saved' },
    ],
    gradient: 'from-teal-500/20 to-cyan-500/20',
  },
];

const ProjectsSection: React.FC = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true, 
    align: 'start',
    skipSnaps: false,
  });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((index: number) => emblaApi && emblaApi.scrollTo(index), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
  }, [emblaApi, onSelect]);

  return (
    <section id="projects" className="section-padding relative overflow-hidden">
      {/* Creative background */}
      <div className="absolute inset-0 bg-gradient-mesh" />
      <div className="floating-shape w-96 h-96 bg-primary/30 -top-48 -right-48" />
      <div className="floating-shape w-72 h-72 bg-primary/20 bottom-20 -left-36" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-primary font-mono text-base tracking-wider uppercase mb-3">Projects</p>
          <h2 className="text-4xl md:text-5xl font-serif text-foreground mb-4">
            Selected Work
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Open source projects focused on AI, cloud infrastructure, and developer productivity.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={scrollPrev}
            className="absolute -left-4 md:left-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-card/80 backdrop-blur border border-border shadow-lg flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all"
            aria-label="Previous project"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={scrollNext}
            className="absolute -right-4 md:right-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-card/80 backdrop-blur border border-border shadow-lg flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all"
            aria-label="Next project"
          >
            <ChevronRight size={24} />
          </button>

          {/* Carousel Container */}
          <div className="embla mx-8 md:mx-16" ref={emblaRef}>
            <div className="embla__container">
              {projects.map((project) => (
                <div key={project.id} className="embla__slide">
                  <div className={`relative h-full p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-1 group overflow-hidden`}>
                    {/* Gradient overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                    
                    <div className="relative z-10 flex flex-col h-full">
                      {/* Header with icon */}
                      <div className="flex items-start justify-between mb-4">
                        <div className="p-3 rounded-xl bg-secondary border border-border group-hover:border-primary/50 group-hover:bg-primary/10 transition-all">
                          <project.icon className="w-6 h-6 text-primary" />
                        </div>
                        <a 
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-lg hover:bg-secondary transition-colors"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <Github size={18} className="text-muted-foreground group-hover:text-primary transition-colors" />
                        </a>
                      </div>
                      
                      {/* Title */}
                      <p className="text-primary font-mono text-xs tracking-wider uppercase mb-1">
                        {project.subtitle}
                      </p>
                      <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      
                      {/* Description */}
                      <p className="text-base text-muted-foreground leading-relaxed mb-4 flex-grow">
                        {project.description}
                      </p>

                      {/* Impact Metrics */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.impacts.map((impact, idx) => (
                          <div 
                            key={idx}
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-primary/10 border border-primary/30"
                          >
                            <span className="text-primary font-bold text-sm">{impact.value}</span>
                            <span className="text-primary/70 text-xs">{impact.label}</span>
                          </div>
                        ))}
                      </div>
                      
                      {/* Tech Stack */}
                      <div className="flex flex-wrap gap-2 pt-3 border-t border-border">
                        {project.tech.map((tech) => (
                          <span 
                            key={tech}
                            className="px-2.5 py-1 text-xs rounded-md bg-secondary text-muted-foreground"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* View Link */}
                      <a 
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 inline-flex items-center gap-2 text-sm text-primary hover:underline font-medium"
                      >
                        View on GitHub <ExternalLink size={14} />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Pagination Dots */}
          <div className="embla__dots">
            {scrollSnaps.map((_, index) => (
              <button
                key={index}
                className={`embla__dot ${index === selectedIndex ? 'embla__dot--selected' : ''}`}
                onClick={() => scrollTo(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
        
        {/* View More Link */}
        <div className="mt-16 text-center">
          <a 
            href="https://github.com/gautamrajur"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all text-base font-medium shadow-lg shadow-primary/20"
          >
            <Github size={18} />
            <span>View all projects</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
