import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact' },
];

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setMobileOpen(false); };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-[#313335]/95 backdrop-blur-md border-b border-white/10'
          : 'bg-[#313335]'
      )}
    >
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Left: name + tagline */}
        <a href="#" className="group">
          <span className="font-serif text-white text-lg leading-tight block group-hover:text-[#E8A250] transition-colors">
            Gautam Raju
          </span>
          <span className="text-white/60 text-[10px] font-mono tracking-[0.2em] uppercase">
            Software Engineering · AI · Systems
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-white/75 hover:text-white text-sm font-medium transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="/Gautam_Raju_AI.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 border border-[#E8A250]/70 text-[#E8A250] text-sm font-medium rounded-full hover:bg-[#E8A250] hover:text-[#1C1C1E] transition-all"
          >
            Resume
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={cn(
          'md:hidden bg-[#313335] border-t border-white/10 overflow-hidden transition-all duration-300',
          mobileOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
        )}
      >
        <div className="px-6 py-4 space-y-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block text-white/85 hover:text-white text-base font-medium py-3 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="/Gautam_Raju_AI.pdf"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileOpen(false)}
            className="block text-[#E8A250] text-base font-medium py-3"
          >
            Resume ↗
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
