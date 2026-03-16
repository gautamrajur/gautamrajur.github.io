import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#F5EDE8] py-6 px-6 border-t border-[#1C1C1E]/10">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-[#1C1C1E]/75 text-base font-black uppercase tracking-tight">
          © {new Date().getFullYear()} Gautam Raju
        </p>
        <p className="font-black text-xs uppercase tracking-tight text-[#1C1C1E]/45">
          React · TypeScript · Tailwind
        </p>
      </div>
    </footer>
  );
};

export default Footer;
