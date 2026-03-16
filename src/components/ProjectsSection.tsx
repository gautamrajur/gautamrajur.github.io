import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight, ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const DEVICON = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons';

const projects = [
  {
    id: 1,
    number: '01',
    subtitle: 'Cloud Forensics',
    title: 'Infra-Archaeology-MCP',
    description: 'MCP server to identify AWS resource creators with Claude-powered natural language queries.',
    tech: ['Python', 'MCP', 'AWS', 'Claude'],
    github: 'https://github.com/gautamrajur/Infra-Archaeology-MCP',
    gradient: 'linear-gradient(135deg, #8B7EC8 0%, #D4956A 100%)',
    headerIcons: [
      `${DEVICON}/python/python-original.svg`,
      `${DEVICON}/amazonwebservices/amazonwebservices-plain-wordmark.svg`,
    ],
    metrics: [
      { value: '5s', label: 'Query Time' },
      { value: '100%', label: 'Accuracy' },
    ],
  },
  {
    id: 2,
    number: '02',
    subtitle: 'AI Automation',
    title: 'EmailSender.AI',
    description: 'Automated email responder using Groq LLaMA with GitHub Actions for intelligent responses.',
    tech: ['Python', 'Groq', 'LLaMA', 'Gmail'],
    github: 'https://github.com/gautamrajur/EmailSender.AI',
    gradient: 'linear-gradient(135deg, #4A9E8C 0%, #6ABDB0 100%)',
    headerIcons: [
      `${DEVICON}/python/python-original.svg`,
      `${DEVICON}/github/github-original.svg`,
    ],
    metrics: [
      { value: '90%', label: 'Automation' },
      { value: '24/7', label: 'Active' },
    ],
  },
  {
    id: 3,
    number: '03',
    subtitle: 'EdTech Platform',
    title: 'AdapteEd-AI',
    description: 'Platform detecting learning disorders like dyslexia and providing personalized AI-powered remediation.',
    tech: ['React', 'Expo', 'AI/ML', 'TypeScript'],
    github: 'https://github.com/gautamrajur/AdapteEd-AI',
    gradient: 'linear-gradient(135deg, #E8836A 0%, #EBC46A 100%)',
    headerIcons: [
      `${DEVICON}/react/react-original.svg`,
      `${DEVICON}/typescript/typescript-original.svg`,
    ],
    metrics: [
      { value: '85%', label: 'Detection' },
      { value: '3x', label: 'Faster' },
    ],
  },
  {
    id: 4,
    number: '04',
    subtitle: 'iOS Application',
    title: 'NeatMeet',
    description: 'Event creation and RSVP app with real-time sync using Swift, SwiftUI, and Firebase.',
    tech: ['Swift', 'SwiftUI', 'Firebase'],
    github: 'https://github.com/gautamrajur/NeatMeet',
    gradient: 'linear-gradient(135deg, #6A8CE8 0%, #9E7EC8 100%)',
    headerIcons: [
      `${DEVICON}/swift/swift-original.svg`,
      `${DEVICON}/firebase/firebase-plain.svg`,
    ],
    metrics: [
      { value: 'Real-time', label: 'Sync' },
      { value: '1K+', label: 'Events' },
    ],
  },
  {
    id: 5,
    number: '05',
    subtitle: 'LLM Platform',
    title: 'AI Avatar System',
    description: 'Modular chat system with 6 AI personas, session management, and sub-100ms response times.',
    tech: ['FastAPI', 'Groq', 'Docker', 'K8s'],
    github: 'https://github.com/gautamrajur/ai-avatar-system',
    gradient: 'linear-gradient(135deg, #5AC8A0 0%, #3A9EC8 100%)',
    headerIcons: [
      `${DEVICON}/docker/docker-original.svg`,
      `${DEVICON}/kubernetes/kubernetes-plain.svg`,
    ],
    metrics: [
      { value: '6', label: 'Personas' },
      { value: '<100ms', label: 'Latency' },
    ],
  },
  {
    id: 6,
    number: '06',
    subtitle: 'ML Optimization',
    title: 'GPU Profiler',
    description: 'Deep learning profiler with dynamic batch tuning achieving 252x throughput improvement.',
    tech: ['PyTorch', 'CUDA', 'Python'],
    github: 'https://github.com/gautamrajur/gpu_profiler',
    gradient: 'linear-gradient(135deg, #C87E6A 0%, #C8B46A 100%)',
    headerIcons: [
      `${DEVICON}/pytorch/pytorch-original.svg`,
      `${DEVICON}/python/python-original.svg`,
    ],
    metrics: [
      { value: '252x', label: 'Speedup' },
      { value: '25%', label: 'Cost Saved' },
    ],
  },
];

const ProjectsSection: React.FC = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: 'start', dragFree: false });
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const update = () => {
      setCanScrollPrev(emblaApi.canScrollPrev());
      setCanScrollNext(emblaApi.canScrollNext());
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };
    emblaApi.on('select', update);
    emblaApi.on('reInit', update);
    update();
  }, [emblaApi]);

  return (
    <section id="projects" className="bg-[#F5EDE8] py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header row */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <h2 className="font-black text-[#1C1C1E] text-5xl xl:text-6xl uppercase leading-none tracking-tight">
              MY LATEST<br />PROJECTS
            </h2>
            <p className="text-[#1C1C1E]/55 text-sm mt-4 max-w-sm leading-relaxed">
              Generative AI, cloud infrastructure, and mobile — built to solve real problems.
            </p>
          </div>

          {/* Controls */}
          <div className="flex items-center gap-3">
            <button
              onClick={scrollPrev}
              disabled={!canScrollPrev}
              className={cn(
                'w-11 h-11 rounded-full border-2 flex items-center justify-center transition-all',
                canScrollPrev
                  ? 'border-[#1C1C1E] text-[#1C1C1E] hover:bg-[#1C1C1E] hover:text-[#F5EDE8]'
                  : 'border-[#1C1C1E]/15 text-[#1C1C1E]/15 cursor-default'
              )}
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={scrollNext}
              disabled={!canScrollNext}
              className={cn(
                'w-11 h-11 rounded-full border-2 flex items-center justify-center transition-all',
                canScrollNext
                  ? 'border-[#1C1C1E] text-[#1C1C1E] hover:bg-[#1C1C1E] hover:text-[#F5EDE8]'
                  : 'border-[#1C1C1E]/15 text-[#1C1C1E]/15 cursor-default'
              )}
            >
              <ChevronRight size={18} />
            </button>
            <span className="text-[#1C1C1E]/35 text-xs font-mono tabular-nums ml-1">
              {String(selectedIndex + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}
            </span>
          </div>
        </div>

        {/* Carousel */}
        <div className="overflow-hidden -mx-6" ref={emblaRef}>
          <div className="flex gap-5 px-6">
            {projects.map((project) => (
              <a
                key={project.id}
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-none w-[78vw] sm:w-[320px] md:w-[360px] group"
              >
                {/* Fixed-height card — every card is exactly 500px */}
                <div className="h-[500px] rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-white flex flex-col">

                  {/* ── Gradient header — fixed 200px ── */}
                  <div
                    className="relative h-[200px] shrink-0 px-7 pt-6 pb-5 flex flex-col justify-between overflow-hidden"
                    style={{ background: project.gradient }}
                  >
                    {/* Giant decorative number */}
                    <span
                      className="absolute -right-2 -bottom-5 font-black leading-none select-none pointer-events-none"
                      style={{ fontSize: '130px', color: 'rgba(0,0,0,0.10)' }}
                    >
                      {project.number}
                    </span>

                    {/* Tech icons — top right */}
                    <div className="absolute top-6 right-6 flex gap-3">
                      {project.headerIcons.map((src, i) => (
                        <div key={i} className="w-11 h-11 rounded-xl bg-white/70 backdrop-blur-sm p-2 flex items-center justify-center shadow-md">
                          <img
                            src={src}
                            alt=""
                            className="w-full h-full object-contain"
                            style={src.includes('github') || src.includes('nextjs') ? { filter: 'brightness(0)' } : undefined}
                          />
                        </div>
                      ))}
                    </div>

                    {/* Subtitle tag — top left */}
                    <div className="relative z-10">
                      <span className="px-2.5 py-1 bg-black/15 text-[#1C1C1E] text-[10px] font-mono font-semibold rounded-full uppercase tracking-widest">
                        {project.subtitle}
                      </span>
                    </div>

                    {/* Title at bottom of header */}
                    <h3 className="font-bold text-xl text-[#1C1C1E] leading-tight relative z-10 pr-4">
                      {project.title}
                    </h3>
                  </div>

                  {/* ── Card body — fills remaining 300px ── */}
                  <div className="flex-1 flex flex-col px-7 py-5 min-h-0">

                    {/* Description — exactly 2 lines */}
                    <p className="text-[#1C1C1E]/60 text-sm leading-relaxed line-clamp-2 mb-5">
                      {project.description}
                    </p>

                    {/* Metrics */}
                    <div className="flex gap-3 mb-5">
                      {project.metrics.map((m, i) => (
                        <div key={i} className="flex-1 px-4 py-3 rounded-xl bg-[#F5EDE8]">
                          <p className="font-bold text-lg text-[#1C1C1E] leading-none">{m.value}</p>
                          <p className="text-[#1C1C1E]/40 text-[10px] mt-1 uppercase tracking-wider font-mono">{m.label}</p>
                        </div>
                      ))}
                    </div>

                    {/* Spacer pushes tech+link to bottom */}
                    <div className="flex-1" />

                    {/* Tech + GitHub — pinned to bottom */}
                    <div className="flex items-center justify-between pt-4 border-t border-[#1C1C1E]/8">
                      <div className="flex flex-wrap gap-1.5">
                        {project.tech.slice(0, 4).map((t) => (
                          <span key={t} className="px-2 py-0.5 bg-[#1C1C1E]/6 text-[#1C1C1E]/55 text-[11px] rounded font-mono">
                            {t}
                          </span>
                        ))}
                      </div>
                      <div className="flex items-center gap-1 text-[#1C1C1E]/30 text-xs font-medium shrink-0 ml-3 group-hover:text-[#1C1C1E]/70 transition-colors">
                        <span>GitHub</span>
                        <ArrowUpRight size={12} />
                      </div>
                    </div>
                  </div>

                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Progress dots */}
        <div className="flex gap-2 mt-8">
          {projects.map((_, i) => (
            <button
              key={i}
              onClick={() => emblaApi?.scrollTo(i)}
              className={cn(
                'h-1.5 rounded-full transition-all duration-300',
                i === selectedIndex ? 'w-6 bg-[#1C1C1E]' : 'w-1.5 bg-[#1C1C1E]/20 hover:bg-[#1C1C1E]/40'
              )}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default ProjectsSection;
