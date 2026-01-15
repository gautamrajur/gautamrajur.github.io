import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-4 px-4 border-t border-dark-lighter">
      <div className="max-w-5xl mx-auto flex items-center justify-between text-xs text-muted-foreground">
        <p>© {currentYear} Gautam Raju</p>
        <p className="font-mono">React + Tailwind</p>
      </div>
    </footer>
  );
};

export default Footer;
