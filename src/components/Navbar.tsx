import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';

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
        ? 'bg-dark/90 backdrop-blur-md border-b border-dark-lighter' 
        : 'bg-transparent'
    )}>
      <nav className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="text-cream font-semibold text-lg hover:text-linkedin transition-colors">
          GR
        </a>
        
        {/* Desktop Navigation */}
        <div className="hidden sm:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.href}
              href={link.href} 
              className="text-muted-foreground hover:text-linkedin transition-colors text-sm"
            >
              {link.label}
            </a>
          ))}
          <a 
            href="mailto:raju.ga@northeastern.edu"
            className="px-4 py-2 rounded-full border border-linkedin text-linkedin hover:bg-linkedin hover:text-white text-sm transition-colors"
          >
            Get in touch
          </a>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className="sm:hidden text-cream p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>
      
      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-dark border-t border-dark-lighter">
          <div className="px-6 py-4 space-y-4">
            {navLinks.map((link) => (
              <a 
                key={link.href}
                href={link.href} 
                className="block text-muted-foreground hover:text-linkedin transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a 
              href="mailto:raju.ga@northeastern.edu"
              className="block text-linkedin"
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
