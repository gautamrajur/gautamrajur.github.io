
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <header className={cn(
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out',
      scrolled ? 'bg-white/80 backdrop-blur-md border-b' : 'bg-transparent'
    )}>
      <nav className="flex items-center justify-between max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center">
          <a href="#" className="text-apple-black font-medium text-xl">Portfolio</a>
        </div>
        <div className="hidden sm:flex items-center space-x-8">
          <a href="#about" className="text-apple-black hover:text-apple-blue transition-colors">About</a>
          <a href="#projects" className="text-apple-black hover:text-apple-blue transition-colors">Projects</a>
          <a href="#skills" className="text-apple-black hover:text-apple-blue transition-colors">Skills</a>
          <a href="#contact" className="text-apple-black hover:text-apple-blue transition-colors">Contact</a>
        </div>
        <div className="sm:hidden">
          <button className="text-apple-black p-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
