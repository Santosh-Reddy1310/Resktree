
import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg bg-card/50 backdrop-blur-sm border border-border/40 hover:bg-card/70 hover:border-border/60 transition-all duration-200 shadow-sm w-full flex items-center gap-2 justify-center"
      aria-label="Toggle theme"
    >
      {theme === 'light' ? (
        <>
          <Moon className="h-4 w-4 text-foreground" />
          <span className="text-sm">Dark Mode</span>
        </>
      ) : (
        <>
          <Sun className="h-4 w-4 text-foreground" />
          <span className="text-sm">Light Mode</span>
        </>
      )}
    </button>
  );
};
