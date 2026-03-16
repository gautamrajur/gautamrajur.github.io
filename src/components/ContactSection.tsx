import React from 'react';
import { Mail, Github, Linkedin, MapPin } from 'lucide-react';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="bg-[#313335] bg-dots-dark py-24">
      <div className="max-w-2xl mx-auto px-6 text-center">

        <p className="font-mono text-[10px] text-white/55 tracking-[0.3em] uppercase mb-4">Contact</p>
        <h2 className="font-serif text-5xl xl:text-6xl text-white mb-5">Let's Connect</h2>
        <p className="text-white/80 text-lg leading-relaxed mb-12">
          Open to AI/ML engineering and cloud architecture opportunities.
        </p>

        {/* Primary CTA */}
        <a
          href="mailto:raju.ga@northeastern.edu"
          className="inline-flex items-center gap-3 px-8 py-4 bg-[#E8A250] text-[#1C1C1E] font-semibold text-base rounded-full hover:bg-[#E8A250]/90 transition-all shadow-xl shadow-[#E8A250]/20"
        >
          <Mail size={18} />
          raju.ga@northeastern.edu
        </a>

        {/* Divider */}
        <div className="flex items-center gap-4 my-8 max-w-xs mx-auto">
          <div className="flex-1 h-px bg-white/20" />
          <span className="text-white/55 text-xs font-mono">or find me on</span>
          <div className="flex-1 h-px bg-white/20" />
        </div>

        {/* Social links */}
        <div className="flex justify-center gap-4">
          <a
            href="https://github.com/gautamrajur"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/25 text-white/80 hover:border-[#E8A250]/70 hover:text-[#E8A250] text-sm font-medium transition-all"
          >
            <Github size={16} />
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/gautam-raju"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/25 text-white/80 hover:border-[#E8A250]/70 hover:text-[#E8A250] text-sm font-medium transition-all"
          >
            <Linkedin size={16} />
            LinkedIn
          </a>
        </div>

        {/* Location */}
        <div className="flex items-center justify-center gap-1.5 text-white/50 text-sm font-mono mt-8">
          <MapPin size={13} />
          Boston, MA
        </div>

      </div>
    </section>
  );
};

export default ContactSection;
