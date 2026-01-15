import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 px-6 border-t border-border">
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-base text-muted-foreground">
        <p>© {currentYear} Gautam Raju</p>
        <p className="font-mono text-sm">
          Built with React + Tailwind
        </p>
      </div>
    </footer>
  );
};

export default Footer;
