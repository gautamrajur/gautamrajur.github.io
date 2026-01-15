import React from 'react';
import { Sun, Moon, Monitor } from 'lucide-react';
import { useTheme } from '@/hooks/useTheme';

const ThemeToggle: React.FC = () => {
  const { theme, setTheme } = useTheme();

  const cycleTheme = () => {
    if (theme === 'system') setTheme('light');
    else if (theme === 'light') setTheme('dark');
    else setTheme('system');
  };

  return (
    <button
      onClick={cycleTheme}
      className="p-2.5 rounded-full bg-secondary border border-border hover:border-primary hover:text-primary transition-all"
      aria-label={`Current theme: ${theme}. Click to change.`}
      title={`Theme: ${theme}`}
    >
      {theme === 'dark' && <Moon size={18} />}
      {theme === 'light' && <Sun size={18} />}
      {theme === 'system' && <Monitor size={18} />}
    </button>
  );
};

export default ThemeToggle;
