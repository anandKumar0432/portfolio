import React from 'react';
import { PROJECTS } from '../data';
import { IconBrandGithub, IconExternalLink, IconFolder } from '@tabler/icons-react';
import { motion } from 'framer-motion';

const Projects: React.FC = () => {
  return (
    <motion.div 
      className="py-10"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="mb-12">
        <h1 className="text-3xl font-bold text-neutral-900 dark:text-white mb-4">Projects</h1>
        <p className="text-neutral-600 dark:text-neutral-400">
          A selection of applications and experiments I've built.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {PROJECTS.map((project, index) => (
          <motion.div 
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="group flex flex-col p-6 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 hover:bg-neutral-50 dark:hover:bg-neutral-800/50 transition-all duration-300 shadow-sm hover:shadow-md"
          >
            <div className="flex items-start justify-between mb-6">
              <div className="p-2 bg-neutral-100 dark:bg-neutral-800 rounded-lg text-neutral-900 dark:text-white group-hover:bg-blue-100 dark:group-hover:bg-blue-900/30 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                <IconFolder className="w-6 h-6" />
              </div>
              <div className="flex gap-3">
                {project.repoUrl && (
                  <a 
                    href={project.repoUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition-colors"
                    title="View Code"
                  >
                    <IconBrandGithub className="w-5 h-5" />
                  </a>
                )}
                {project.demoUrl && (
                  <a 
                    href={project.demoUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition-colors"
                    title="View Demo"
                  >
                    <IconExternalLink className="w-5 h-5" />
                  </a>
                )}
              </div>
            </div>

            <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              {project.title}
            </h3>
            
            <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed mb-6 flex-grow">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mt-auto">
              {project.techStack.map(tech => (
                <span 
                  key={tech} 
                  className="px-2 py-1 text-xs font-medium rounded-md bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Projects;