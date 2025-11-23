import React from 'react';
import { IconBrandGithub, IconBrandLinkedin, IconBrandTwitter,} from '@tabler/icons-react';

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-neutral-200 dark:border-neutral-800 mt-auto">
      <div className="max-w-3xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-neutral-500 dark:text-neutral-400">
            © {new Date().getFullYear()} Anand. Built with React & Tailwind.
          </p>
          
          <div className="flex items-center space-x-6">
            <a 
              href="https://github.com/anandKumar0432/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <IconBrandGithub className="w-5 h-5" />
              <span className="sr-only">GitHub</span>
            </a>
            <a 
            href="https://x.com/kumaranand188" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors"
            aria-label="Twitter"
            >
              <IconBrandTwitter className="w-5 h-5" />
              <span className="sr-only">Twitter</span>
            </a>
            <a 
            href="https://www.linkedin.com/in/anand-kumar-77177b21b" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors"
            aria-label="Linkedin"
            >
              <IconBrandLinkedin className="w-5 h-5" />
              <span className="sr-only">Linkedin</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;