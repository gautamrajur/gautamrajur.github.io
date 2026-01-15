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
      className="p-2 rounded-lg hover:bg-secondary transition-colors"
      aria-label={`Current theme: ${theme}. Click to change.`}
      title={`Theme: ${theme}`}
    >
      {theme === 'dark' && <Moon size={18} className="text-sage" />}
      {theme === 'light' && <Sun size={18} className="text-sage" />}
      {theme === 'system' && <Monitor size={18} className="text-muted-foreground" />}
    </button>
  );
};

export default ThemeToggle;
