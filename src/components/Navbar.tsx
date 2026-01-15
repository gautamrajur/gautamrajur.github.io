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

  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header className={cn(
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
      scrolled 
        ? 'bg-background/90 backdrop-blur-md border-b border-border shadow-sm' 
        : 'bg-transparent'
    )}>
      <nav className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="text-foreground font-semibold text-xl hover:text-sage transition-colors">
          GR
        </a>
        
        {/* Desktop Navigation */}
        <div className="hidden sm:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.href}
              href={link.href} 
              className="text-muted-foreground hover:text-sage transition-colors text-base font-medium"
            >
              {link.label}
            </a>
          ))}
          <ThemeToggle />
          <a 
            href="mailto:raju.ga@northeastern.edu"
            className="px-5 py-2.5 rounded-full border border-sage text-sage hover:bg-sage hover:text-white text-base font-medium transition-colors"
          >
            Get in touch
          </a>
        </div>
        
        {/* Mobile Menu Button */}
        <div className="sm:hidden flex items-center gap-2">
          <ThemeToggle />
          <button 
            className="text-foreground p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>
      
      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-background border-t border-border">
          <div className="px-6 py-4 space-y-4">
            {navLinks.map((link) => (
              <a 
                key={link.href}
                href={link.href} 
                className="block text-muted-foreground hover:text-sage transition-colors text-lg"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a 
              href="mailto:raju.ga@northeastern.edu"
              className="block text-sage text-lg"
              onClick={() => setMobileMenuOpen(false)}
            >
              Get in touch →
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
