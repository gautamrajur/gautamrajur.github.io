import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 640) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
  ];

  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className={cn(
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
      scrolled 
        ? 'bg-background/80 backdrop-blur-xl border-b border-border shadow-sm' 
        : 'bg-transparent'
    )}>
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 py-3 md:py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="text-foreground font-serif font-bold text-xl md:text-2xl hover:text-primary transition-colors">
          GR
        </a>
        
        {/* Desktop Navigation */}
        <div className="hidden sm:flex items-center gap-4 md:gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.href}
              href={link.href} 
              className="text-muted-foreground hover:text-primary transition-colors text-sm md:text-base font-medium"
            >
              {link.label}
            </a>
          ))}
          <ThemeToggle />
          <a 
            href="mailto:raju.ga@northeastern.edu"
            className="px-4 md:px-5 py-2 md:py-2.5 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 text-sm md:text-base font-medium transition-all shadow-lg shadow-primary/20"
          >
            Get in touch
          </a>
        </div>
        
        {/* Mobile Menu Button */}
        <div className="sm:hidden flex items-center gap-2">
          <ThemeToggle />
          <button 
            className="text-foreground p-2 hover:bg-secondary rounded-lg transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>
      
      {/* Mobile Navigation */}
      <div className={cn(
        'sm:hidden bg-background/95 backdrop-blur-xl border-t border-border overflow-hidden transition-all duration-300',
        mobileMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
      )}>
        <div className="px-4 py-4 space-y-1">
          {navLinks.map((link) => (
            <a 
              key={link.href}
              href={link.href} 
              className="block text-foreground hover:text-primary hover:bg-secondary/50 transition-colors text-base font-medium py-3 px-3 rounded-lg"
              onClick={handleNavClick}
            >
              {link.label}
            </a>
          ))}
          <a 
            href="mailto:raju.ga@northeastern.edu"
            className="block text-primary text-base font-medium py-3 px-3"
            onClick={handleNavClick}
          >
            Get in touch →
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
