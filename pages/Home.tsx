import React from 'react';
import { 
  IconArrowRight, 
  IconCode, 
  IconCpu, 
  IconWorld,
  IconFileText,
  IconBrandReact,
  IconBrandNextjs,
  IconBrandDocker,
  IconBrandGit,
  IconBrandTypescript,
  IconBrandJavascript,
  IconBrandCpp,
  IconBrandNodejs,
  IconBrandPrisma,
  IconDatabase
} from '@tabler/icons-react';
import { motion } from 'framer-motion';

interface HomeProps {
  onNavigate: (path: string) => void;
}

const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const techStack = [
    { name: 'React', icon: IconBrandReact, color: 'text-blue-500' },
    { name: 'Next.js', icon: IconBrandNextjs, color: 'text-black dark:text-white' },
    { name: 'TypeScript', icon: IconBrandTypescript, color: 'text-blue-600' },
    { name: 'JavaScript', icon: IconBrandJavascript, color: 'text-yellow-500' },
    { name: 'Node.js', icon: IconBrandNodejs, color: 'text-green-600' },
    { name: 'C++', icon: IconBrandCpp, color: 'text-blue-700' },
    { name: 'PostgreSQL', icon: IconDatabase, color: 'text-blue-400' },
    { name: 'Prisma', icon: IconBrandPrisma, color: 'text-teal-600' },
    { name: 'Docker', icon: IconBrandDocker, color: 'text-blue-500' },
    { name: 'Git', icon: IconBrandGit, color: 'text-orange-600' },
  ];

  return (
    <motion.div 
      className="space-y-16 py-10"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Hero Section */}
      <motion.section className="space-y-6" variants={itemVariants}>
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-neutral-900 dark:text-white">
          Hi, I'm Anand.
        </h1>
        <p className="text-lg sm:text-xl text-neutral-600 dark:text-neutral-400 max-w-2xl leading-relaxed">
        I'm a software engineer who builds scalable backends and clean, intuitive frontends—turning complex problems into seamless, high-performance products.
        </p>
        <div className="flex flex-wrap gap-4">
          <button 
            onClick={() => onNavigate('/projects')}
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg shadow-sm text-white bg-neutral-900 hover:bg-neutral-800 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-100 transition-all duration-200"
          >
            View Projects
            <IconArrowRight className="ml-2 -mr-1 w-5 h-5" />
          </button>
          <button 
            onClick={() => onNavigate('/docs')}
            className="inline-flex items-center justify-center px-6 py-3 border border-neutral-200 dark:border-neutral-700 text-base font-medium rounded-lg text-neutral-900 dark:text-white bg-transparent hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-all duration-200"
          >
            <IconFileText className="mr-2 w-5 h-5" />
            Docs
          </button>
        </div>
      </motion.section>

      {/* Feature Grid */}
      <motion.section className="grid grid-cols-1 sm:grid-cols-3 gap-8" variants={itemVariants}>
        <div className="p-6 rounded-2xl bg-neutral-50/80 dark:bg-neutral-800/50 border border-neutral-100 dark:border-neutral-800 transition-all hover:shadow-md backdrop-blur-sm">
          <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-4 text-blue-600 dark:text-blue-400">
            <IconCode className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-2">Clean Code</h3>
          <p className="text-neutral-600 dark:text-neutral-400 text-sm">
            I write maintainable, self-documenting code that scales with your product.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-neutral-50/80 dark:bg-neutral-800/50 border border-neutral-100 dark:border-neutral-800 transition-all hover:shadow-md backdrop-blur-sm">
          <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center mb-4 text-purple-600 dark:text-purple-400">
            <IconWorld className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-2">Modern Web</h3>
          <p className="text-neutral-600 dark:text-neutral-400 text-sm">
             Specializing in React, Next.js, NOde.js and the modern backend ecosystem.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-neutral-50/80 dark:bg-neutral-800/50 border border-neutral-100 dark:border-neutral-800 transition-all hover:shadow-md backdrop-blur-sm">
          <div className="w-10 h-10 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg flex items-center justify-center mb-4 text-emerald-600 dark:text-emerald-400">
            <IconCpu className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-2">Performance</h3>
          <p className="text-neutral-600 dark:text-neutral-400 text-sm">
            Optimizing for Core Web Vitals and seamless user experiences.
          </p>
        </div>
      </motion.section>

      {/* Tech Stack */}
      <motion.section variants={itemVariants}>
        <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-8">Tech Stack</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {techStack.map((tech) => (
                <div 
                  key={tech.name} 
                  className="flex flex-col items-center justify-center p-4 rounded-xl bg-neutral-50 dark:bg-neutral-800/50 border border-neutral-100 dark:border-neutral-800 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors duration-200 group"
                >
                    <tech.icon className={`w-8 h-8 mb-3 ${tech.color} opacity-80 group-hover:opacity-100 transition-opacity`} />
                    <span className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
                        {tech.name}
                    </span>
                </div>
            ))}
        </div>
      </motion.section>
    </motion.div>
  );
};

export default Home;