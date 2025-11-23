import React, { useEffect, useState } from 'react';
import { IconMoon, IconSun } from '@tabler/icons-react';
import { Theme } from '../types';

const ThemeToggle: React.FC = () => {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme');
      if (saved === 'dark' || saved === 'light') return saved;
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    return 'light';
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-neutral-200 dark:focus:ring-neutral-700"
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? (
        <IconMoon className="w-5 h-5 text-neutral-100" />
      ) : (
        <IconSun className="w-5 h-5 text-neutral-800" />
      )}
    </button>
  );
};

export default ThemeToggle;