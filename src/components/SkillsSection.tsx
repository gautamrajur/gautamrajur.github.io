import React from 'react';

const DEVICON = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons';

const row1 = [
  { name: 'React',       src: `${DEVICON}/react/react-original.svg` },
  { name: 'TypeScript',  src: `${DEVICON}/typescript/typescript-original.svg` },
  { name: 'Python',      src: `${DEVICON}/python/python-original.svg` },
  { name: 'Go',          src: `${DEVICON}/go/go-original-wordmark.svg` },
  { name: 'Node.js',     src: `${DEVICON}/nodejs/nodejs-original.svg` },
  { name: 'Next.js',     src: `${DEVICON}/nextjs/nextjs-original.svg` },
  { name: 'Java',        src: `${DEVICON}/java/java-original.svg` },
  { name: 'PostgreSQL',  src: `${DEVICON}/postgresql/postgresql-original.svg` },
  { name: 'MongoDB',     src: `${DEVICON}/mongodb/mongodb-original.svg` },
  { name: 'Redis',       src: `${DEVICON}/redis/redis-original.svg` },
];

const row2 = [
  { name: 'AWS',         src: `${DEVICON}/amazonwebservices/amazonwebservices-plain-wordmark.svg` },
  { name: 'Docker',      src: `${DEVICON}/docker/docker-original.svg` },
  { name: 'Kubernetes',  src: `${DEVICON}/kubernetes/kubernetes-plain.svg` },
  { name: 'Terraform',   src: `${DEVICON}/terraform/terraform-original.svg` },
  { name: 'PyTorch',     src: `${DEVICON}/pytorch/pytorch-original.svg` },
  { name: 'Spring',      src: `${DEVICON}/spring/spring-original.svg` },
  { name: 'Swift',       src: `${DEVICON}/swift/swift-original.svg` },
  { name: 'Firebase',    src: `${DEVICON}/firebase/firebase-plain.svg` },
  { name: 'GitHub',      src: `${DEVICON}/github/github-original.svg` },
  { name: 'Tailwind',    src: `${DEVICON}/tailwindcss/tailwindcss-original.svg` },
];

interface LogoItemProps {
  name: string;
  src: string;
}

const LogoItem: React.FC<LogoItemProps> = ({ name, src }) => (
  <div className="flex flex-col items-center gap-3 px-6 shrink-0 select-none group cursor-default">
    <div className="w-28 h-28 flex items-center justify-center rounded-2xl bg-white/12 group-hover:bg-white/22 transition-all duration-300 p-5 shadow-lg">
      <img
        src={src}
        alt={name}
        className="w-full h-full object-contain"
        loading="lazy"
        style={name === 'GitHub' || name === 'Next.js' ? { filter: 'invert(1)' } : undefined}
      />
    </div>
    <span className="text-white/75 text-sm font-mono tracking-wide">{name}</span>
  </div>
);

const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="bg-[#313335] py-24 overflow-hidden">

      <div className="max-w-7xl mx-auto px-6 mb-16">
        <div className="text-center">
          <h2 className="font-serif text-5xl text-white">Skills &amp; Tools</h2>
          <div className="w-12 h-px bg-[#E8A250]/60 mx-auto mt-4" />
          <p className="text-white/65 text-base mt-4">The stack I build with every day</p>
        </div>
      </div>

      {/* Row 1 — scrolls left */}
      <div className="relative mb-10">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#313335] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#313335] to-transparent z-10 pointer-events-none" />
        <div className="overflow-hidden py-2">
          <div className="flex marquee-left" style={{ width: 'max-content' }}>
            {[...row1, ...row1].map((item, i) => (
              <LogoItem key={i} name={item.name} src={item.src} />
            ))}
          </div>
        </div>
      </div>

      {/* Row 2 — scrolls right */}
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#313335] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#313335] to-transparent z-10 pointer-events-none" />
        <div className="overflow-hidden py-2">
          <div className="flex marquee-right" style={{ width: 'max-content' }}>
            {[...row2, ...row2].map((item, i) => (
              <LogoItem key={i} name={item.name} src={item.src} />
            ))}
          </div>
        </div>
      </div>

      {/* Certifications */}
      <div className="max-w-5xl mx-auto px-6 mt-16">
        <div className="rounded-2xl overflow-hidden" style={{ background: '#232F3E' }}>
          {/* AWS orange top bar */}
          <div className="h-1.5" style={{ background: '#FF9900' }} />
          <div className="p-8">
            {/* Header with AWS logo */}
            <div className="flex items-center gap-3 mb-6">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg"
                alt="AWS"
                className="h-8 w-auto"
                style={{ filter: 'brightness(0) invert(1)' }}
              />
              <span className="font-mono text-[11px] uppercase tracking-[0.25em]" style={{ color: '#FF9900' }}>
                Certifications
              </span>
            </div>
            <ul className="space-y-3">
              {[
                'Technical Essentials of AWS – Apple Edition · Oct 2021',
                'Understanding AWS® Apple (3 modules) · Oct 2021',
                'Understanding Recommendation System Algorithms · Apr 2020',
              ].map((cert) => (
                <li key={cert} className="flex gap-3 text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.85)' }}>
                  <span className="shrink-0 mt-0.5" style={{ color: '#FF9900' }}>◆</span>
                  {cert}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

    </section>
  );
};

export default SkillsSection;
