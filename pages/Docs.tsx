import React from 'react';
import { BLOG_POSTS } from '../data';
import { IconArrowRight, IconCalendar, IconClock } from '@tabler/icons-react';
import { motion } from 'framer-motion';

interface DocsProps {
  onNavigate: (path: string) => void;
}

const Docs: React.FC<DocsProps> = ({ onNavigate }) => {
  return (
    <motion.div 
      className="py-10"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="mb-12">
        <h1 className="text-3xl font-bold text-neutral-900 dark:text-white mb-4">Docs & Thoughts</h1>
        <p className="text-neutral-600 dark:text-neutral-400">
          A collection of articles about development, design, and the web.
        </p>
      </div>

      <div className="space-y-8">
        {BLOG_POSTS.map((post, index) => (
          <motion.article 
            key={post.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="group relative flex flex-col items-start p-6 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 hover:bg-neutral-50 dark:hover:bg-neutral-800/50 transition-all duration-300 cursor-pointer shadow-sm hover:shadow-md"
            onClick={() => onNavigate(`/docs/${post.id}`)}
          >
            <div className="flex items-center gap-x-4 text-xs text-neutral-500 dark:text-neutral-400 mb-3">
              <time dateTime={post.date} className="flex items-center">
                <IconCalendar className="w-3 h-3 mr-1" />
                {post.date}
              </time>
              <span className="flex items-center">
                <IconClock className="w-3 h-3 mr-1" />
                {post.readTime}
              </span>
              <div className="flex gap-2">
                {post.tags.map(tag => (
                    <span key={tag} className="px-2 py-0.5 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300">
                        #{tag}
                    </span>
                ))}
              </div>
            </div>
            
            <h2 className="text-xl font-semibold text-neutral-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              {post.title}
            </h2>
            
            <p className="mt-2 text-neutral-600 dark:text-neutral-400 line-clamp-2">
              {post.excerpt}
            </p>

            <div className="mt-4 flex items-center text-sm font-medium text-blue-600 dark:text-blue-400">
              Read article
              <IconArrowRight className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </div>
          </motion.article>
        ))}
      </div>
    </motion.div>
  );
};

export default Docs;