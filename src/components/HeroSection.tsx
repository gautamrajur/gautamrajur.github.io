import React from 'react';
import { Github, Linkedin, Mail, FileText } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section className="min-h-screen bg-[#313335] bg-dots-dark pt-20 relative overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-1/3 -left-40 w-80 h-80 bg-[#8B7EC8]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/4 right-0 w-72 h-72 bg-[#D4956A]/12 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center min-h-[calc(100vh-80px)] py-12">

          {/* Left: text */}
          <div className="space-y-7 md:order-1">
            {/* Spaced name label */}
            <p className="text-white/55 font-mono text-xs tracking-[0.6em] uppercase select-none">
              GAUTAM &nbsp;&nbsp;&nbsp;&nbsp; RAJU
            </p>

            {/* Big serif headline */}
            <h1 className="font-serif text-white text-5xl sm:text-6xl xl:text-7xl leading-[1.05]">
              AI Engineering<br />
              <span className="text-white/80 italic">Real Impact</span>
            </h1>

            {/* Description */}
            <p className="text-white/85 text-lg leading-relaxed max-w-lg">
              Hi, I'm a Software Engineer building generative AI solutions at scale.{' '}
              3+ years at <span className="text-white font-semibold">Apple</span> &amp;{' '}
              <span className="text-white font-semibold">Ancestry</span>.{' '}
              MS CS @ Northeastern University.
            </p>

            {/* Quick stats */}
            <div className="flex gap-8 py-2">
              <div>
                <p className="text-[#E8A250] font-bold text-2xl font-serif">100M+</p>
                <p className="text-white/65 text-xs font-mono tracking-wider uppercase">Daily Requests</p>
              </div>
              <div className="w-px bg-white/20" />
              <div>
                <p className="text-[#E8A250] font-bold text-2xl font-serif">3+</p>
                <p className="text-white/65 text-xs font-mono tracking-wider uppercase">Years at Apple</p>
              </div>
              <div className="w-px bg-white/20" />
              <div>
                <p className="text-[#E8A250] font-bold text-2xl font-serif">6+</p>
                <p className="text-white/65 text-xs font-mono tracking-wider uppercase">AI Projects</p>
              </div>
            </div>

            {/* Links */}
            <div className="flex items-center gap-3 flex-wrap">
              <a
                href="https://github.com/gautamrajur"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full border border-white/25 text-white/75 hover:border-[#E8A250]/70 hover:text-[#E8A250] transition-all"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
              <a
                href="https://linkedin.com/in/gautam-raju"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full border border-white/25 text-white/75 hover:border-[#E8A250]/70 hover:text-[#E8A250] transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="mailto:raju.ga@northeastern.edu"
                className="p-2.5 rounded-full border border-white/25 text-white/75 hover:border-[#E8A250]/70 hover:text-[#E8A250] transition-all"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
              <a
                href="/Gautam_Raju_AI.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#E8A250] text-[#1C1C1E] text-sm font-semibold hover:bg-[#E8A250]/90 transition-all shadow-lg shadow-[#E8A250]/20"
              >
                <FileText size={15} />
                Resume
              </a>
              <a href="#projects" className="text-white/55 text-sm hover:text-white/80 transition-colors">
                View work →
              </a>
            </div>
          </div>

          {/* Right: photo */}
          <div className="flex justify-center md:justify-end md:order-2">
            <div className="relative w-full max-w-sm">
              <div className="relative h-[55vh] md:h-[70vh] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="./profile-headshot.jpg"
                  alt="Gautam Raju"
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-[#313335] to-transparent" />
              </div>
              <div className="absolute -top-3 -right-3 w-24 h-24 border border-[#E8A250]/25 rounded-2xl pointer-events-none" />
              <div className="absolute -bottom-3 -left-3 w-16 h-16 border border-[#8B7EC8]/25 rounded-xl pointer-events-none" />
            </div>
          </div>

        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/45 text-[10px] font-mono tracking-[0.3em] uppercase">
        scroll ↓
      </div>
    </section>
  );
};

export default HeroSection;
