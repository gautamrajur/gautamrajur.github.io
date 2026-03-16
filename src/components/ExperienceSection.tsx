import React from 'react';
import { ExternalLink } from 'lucide-react';

const experiences = [
  {
    id: 1,
    number: '01',
    company: 'Ancestry',
    position: 'Platform Engineering Co-op',
    period: '2025',
    gradient: 'linear-gradient(to right, #F5F3EE 0%, #D9B87A 100%)',
    darkCard: false,
    logo: '/logos/companies/ancestry.png',
    achievements: [
      'Owned end-to-end design and execution of a Blue-Green Deployment system to help developers release code more safely to production',
      'Set up architecture reviews with principal engineers, iterated on feedback, and drove the project forward independently',
      'Discovered and applied tooling capabilities unknown to experienced architects, bringing new solutions to the team',
      'Led team discussions on AI/ML trends, fostering a culture of continuous learning',
    ],
    technologies: ['Blue-Green Deployment', 'CI/CD', 'AWS', 'DevOps'],
  },
  {
    id: 2,
    number: '02',
    company: 'Apple Inc.',
    position: 'Software Development Engineer',
    period: 'Sep 2021 – Jul 2024',
    gradient: 'linear-gradient(to right, #161616 0%, #7E8EC8 100%)',
    darkCard: true,
    logo: '/logos/companies/apple.png',
    achievements: [
      'Built cloud-native apps on AWS (EC2, S3, Lambda, API Gateway), ensuring 100M+ daily requests with zero downtime',
      'Refactored and optimized SQL queries and data pipelines, reducing query execution time by 40%',
      'Automated testing with TDD, achieving 85% coverage and saving 60+ hours/month in manual testing',
      'Developed OAuth 2.0 & JWT authentication for 100M+ users, strengthening security and Agile-driven best practices',
    ],
    technologies: ['React', 'Node.js', 'PostgreSQL', 'AWS', 'OAuth 2.0', 'JWT'],
  },
  {
    id: 3,
    number: '03',
    company: 'Vidcentum R&D',
    position: 'Technology Intern',
    period: 'Jul 2019 – Aug 2019',
    gradient: 'linear-gradient(to right, #F5F3EE 0%, #C8A07E 100%)',
    darkCard: false,
    logo: '/logos/companies/vidcentum.png',
    achievements: [
      'Engineered a Java Spring Boot backend for Welfinity, improving data processing speed by 20%',
      'Conducted security audits for AWS IAM policies and access control, reducing vulnerabilities by 25%',
      'Designed a Docker & Kubernetes PoC predicting a 38% scalability boost, reducing deployment time by 1.5 hours',
      'Led peer programming and debugging sessions, enhancing team collaboration and workflow efficiency',
    ],
    technologies: ['Java', 'Spring Boot', 'AWS', 'Docker', 'Kubernetes'],
  },
];

const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="bg-[#313335] bg-dots-dark py-24">
      <div className="max-w-5xl mx-auto px-6">

        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-5xl xl:text-6xl text-white">Work Experience</h2>
          <div className="w-16 h-px bg-[#E8A250]/60 mx-auto mt-4" />
        </div>

        {/* Sticky stacking cards */}
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <div
              key={exp.id}
              className="sticky rounded-3xl overflow-hidden shadow-2xl"
              style={{
                top: `${5 + index * 1.5}rem`,
                zIndex: 10 + index,
                background: exp.gradient,
              }}
            >
              {/* Mobile: logo centered top + content below | Desktop: side by side */}
              <div className="flex flex-col sm:flex-row">

                {/* Logo panel — mobile: centered horizontal strip | desktop: left column */}
                <div className="relative sm:w-56 sm:shrink-0 flex items-center justify-center border-b sm:border-b-0 sm:border-r border-black/10 overflow-hidden py-8 sm:py-0">
                  {/* Number badge */}
                  <div className={`absolute top-4 left-4 w-9 h-9 rounded-full border-2 flex items-center justify-center z-10 ${exp.darkCard ? 'border-white/25 bg-white/10' : 'border-black/20 bg-black/10'}`}>
                    <span className={`font-mono text-xs font-bold ${exp.darkCard ? 'text-white' : 'text-[#1C1C1E]'}`}>{exp.number}</span>
                  </div>

                  {/* Logo — centered on mobile, full-width on desktop */}
                  <img
                    src={exp.logo}
                    alt={exp.company}
                    className="h-14 sm:h-auto sm:w-full object-contain sm:mx-6 sm:my-14"
                    onError={(e) => {
                      const img = e.currentTarget;
                      img.style.display = 'none';
                      const fallback = img.nextElementSibling as HTMLElement;
                      if (fallback) fallback.style.display = 'block';
                    }}
                  />
                  <span className="hidden font-black text-2xl text-[#1C1C1E]">{exp.company}</span>

                  {/* Period — bottom-left on desktop only */}
                  <span className={`hidden sm:block absolute bottom-4 left-5 text-xs font-mono z-10 ${exp.darkCard ? 'text-white/60' : 'text-[#1C1C1E]/60'}`}>{exp.period}</span>
                </div>

                {/* Content */}
                <div className="flex-1 p-6 sm:p-8">
                  {/* Period shown inline on mobile */}
                  <p className={`sm:hidden text-[10px] font-mono mb-2 ${exp.darkCard ? 'text-white/50' : 'text-[#1C1C1E]/45'}`}>{exp.period}</p>

                  <p className={`text-[11px] font-mono font-semibold uppercase tracking-[0.2em] mb-4 ${exp.darkCard ? 'text-white/65' : 'text-[#1C1C1E]/65'}`}>
                    {exp.position}
                  </p>

                  <ul className="space-y-2.5 mb-6">
                    {exp.achievements.map((a, i) => (
                      <li key={i} className={`text-sm leading-relaxed flex gap-2 ${exp.darkCard ? 'text-white/90' : 'text-[#1C1C1E]/85'}`}>
                        <span className={`shrink-0 mt-0.5 ${exp.darkCard ? 'text-white/40' : 'text-[#1C1C1E]/40'}`}>—</span>
                        <span>{a}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((t) => (
                      <span key={t} className={`px-3 py-1 text-xs rounded-full font-mono ${exp.darkCard ? 'bg-white/15 text-white/90' : 'bg-black/15 text-[#1C1C1E]'}`}>
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Open Source highlight card */}
          <div
            className="sticky rounded-3xl overflow-hidden shadow-2xl"
            style={{
              top: `${5 + experiences.length * 1.5}rem`,
              zIndex: 10 + experiences.length,
              background: 'linear-gradient(135deg, #4A9E8C 0%, #C87EC8 100%)',
            }}
          >
            <div className="flex flex-col sm:flex-row">

              {/* Left panel */}
              <div className="relative flex items-center justify-center py-8 sm:py-0 sm:flex-col sm:items-start sm:justify-between sm:p-8 sm:pr-6 sm:w-56 sm:shrink-0 border-b sm:border-b-0 sm:border-r border-black/10">
                <div className="absolute top-4 left-4 sm:static w-9 h-9 rounded-full border-2 border-black/20 bg-black/10 flex items-center justify-center text-sm">★</div>
                <div className="w-16 h-16 sm:w-28 sm:h-28 rounded-2xl bg-white/15 flex items-center justify-center p-3 sm:p-4">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-plain.svg"
                    alt="Kubernetes"
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="hidden sm:block text-[#1C1C1E]/60 text-xs font-mono">PR #431</span>
              </div>

              {/* Right content */}
              <div className="flex-1 p-6 sm:p-8">
                <div className="inline-block px-3 py-1 bg-black/15 text-[#1C1C1E] text-[10px] font-mono rounded-full mb-4 uppercase tracking-[0.15em]">
                  Open Source Contribution
                </div>
                <h3 className="font-bold text-xl text-[#1C1C1E] mb-1">Runc Contributor</h3>
                <p className="text-[#1C1C1E]/70 text-sm font-mono mb-4">opencontainers / runc</p>
                <p className="text-[#1C1C1E]/85 text-sm leading-relaxed mb-5">
                  Implemented <strong className="text-[#1C1C1E]">pdeathSignal handling</strong> in Runc — the
                  industry-standard OCI container runtime powering Docker and Kubernetes at scale worldwide.
                </p>
                <a
                  href="https://github.com/opencontainers/runc/pull/431"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-black/15 hover:bg-black/25 text-[#1C1C1E] text-sm font-semibold rounded-full transition-colors"
                >
                  View PR on GitHub
                  <ExternalLink size={13} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom spacer */}
        <div className="h-24" />
      </div>
    </section>
  );
};

export default ExperienceSection;
