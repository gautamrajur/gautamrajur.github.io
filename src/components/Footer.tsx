import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 px-6 border-t border-border bg-card/50">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-muted-foreground text-sm flex items-center gap-1">
          © {currentYear} Gautam Raju. Built with <Heart size={14} className="text-primary" />
        </p>
        <p className="font-mono text-xs text-muted-foreground">
          React • TypeScript • Tailwind
        </p>
      </div>
    </footer>
  );
};

export default Footer;
