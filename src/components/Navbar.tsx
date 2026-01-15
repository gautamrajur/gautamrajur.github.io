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
        ? 'bg-dark/95 backdrop-blur-sm border-b border-dark-lighter' 
        : 'bg-transparent'
    )}>
      <nav className="max-w-5xl mx-auto px-4 md:px-6 py-3 flex items-center justify-between">
        <a href="#" className="text-cream font-semibold hover:text-linkedin transition-colors">
          GR
        </a>
        
        <div className="hidden sm:flex items-center gap-6">
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
            className="px-3 py-1.5 rounded-full bg-linkedin text-white text-sm hover:bg-linkedin-dark transition-colors"
          >
            Get in touch
          </a>
        </div>
        
        <button 
          className="sm:hidden text-cream p-1"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>
      
      {mobileMenuOpen && (
        <div className="sm:hidden bg-dark border-t border-dark-lighter">
          <div className="px-4 py-3 space-y-3">
            {navLinks.map((link) => (
              <a 
                key={link.href}
                href={link.href} 
                className="block text-muted-foreground hover:text-linkedin transition-colors text-sm"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a 
              href="mailto:raju.ga@northeastern.edu"
              className="block text-linkedin text-sm"
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
