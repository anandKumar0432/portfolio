import React from 'react';
import { IconFileText, IconHome, IconMail, IconBriefcase } from '@tabler/icons-react';
import ThemeToggle from './ThemeToggle';
import { NavItem } from '../types';

interface NavbarProps {
  currentPath: string;
  onNavigate: (path: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentPath, onNavigate }) => {
  const navItems: NavItem[] = [
    { label: 'Home', path: '/', icon: IconHome },
    { label: 'Projects', path: '/projects', icon: IconBriefcase },
    { label: 'Docs', path: '/docs', icon: IconFileText },
    // { label: 'Contact', path: '/contact', icon: IconMail },
  ];

  const isActive = (path: string) => {
    if (path === '/') return currentPath === '/';
    return currentPath.startsWith(path);
  };

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/70 dark:bg-neutral-900/70 border-b border-neutral-200 dark:border-neutral-800">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div 
            onClick={() => onNavigate('/')}
            className="font-bold text-xl tracking-tighter cursor-pointer select-none text-neutral-900 dark:text-white"
          >
            anand<span className="text-neutral-400 dark:text-neutral-600">.dev</span>
          </div>

          <div className="flex items-center space-x-2 sm:space-x-6">
            <div className="hidden sm:flex items-center space-x-1 bg-neutral-100 dark:bg-neutral-800 p-1 rounded-full">
              {navItems.map((item) => (
                <button
                  key={item.path}
                  onClick={() => onNavigate(item.path)}
                  className={`
                    flex items-center space-x-2 px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200
                    ${isActive(item.path)
                      ? 'bg-white dark:bg-neutral-700 text-neutral-900 dark:text-white shadow-sm'
                      : 'text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-200'
                    }
                  `}
                >
                  <item.icon className="w-4 h-4" />
                  <span>{item.label}</span>
                </button>
              ))}
            </div>
            
            {/* Mobile Navigation Icon Only */}
            <div className="flex sm:hidden items-center space-x-1 bg-neutral-100 dark:bg-neutral-800 p-1 rounded-full">
               {navItems.map((item) => (
                <button
                  key={item.path}
                  onClick={() => onNavigate(item.path)}
                  className={`
                    p-2 rounded-full transition-all duration-200
                    ${isActive(item.path)
                      ? 'bg-white dark:bg-neutral-700 text-neutral-900 dark:text-white shadow-sm'
                      : 'text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-200'
                    }
                  `}
                  aria-label={item.label}
                >
                  <item.icon className="w-4 h-4" />
                </button>
              ))}
            </div>

            <div className="w-px h-6 bg-neutral-200 dark:bg-neutral-800 mx-2"></div>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;