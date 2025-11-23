import React, { useEffect } from 'react';
import { BLOG_POSTS } from '../data';
import { IconArrowLeft, IconCalendar, IconClock } from '@tabler/icons-react';
import { motion } from 'framer-motion';

interface DocPostProps {
  postId: string;
  onNavigate: (path: string) => void;
}

const DocPost: React.FC<DocPostProps> = ({ postId, onNavigate }) => {
  const post = BLOG_POSTS.find(p => p.id === postId);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [postId]);

  if (!post) {
    return (
      <div className="py-20 text-center">
        <h2 className="text-2xl font-bold text-neutral-900 dark:text-white">Post not found</h2>
        <button 
          onClick={() => onNavigate('/docs')}
          className="mt-4 text-blue-600 dark:text-blue-400 hover:underline"
        >
          Back to docs
        </button>
      </div>
    );
  }

  return (
    <motion.article 
      className="py-10 max-w-2xl mx-auto"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <button 
        onClick={() => onNavigate('/docs')}
        className="group mb-8 inline-flex items-center text-sm font-medium text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-200 transition-colors"
      >
        <IconArrowLeft className="mr-2 w-4 h-4 transition-transform group-hover:-translate-x-1" />
        Back to docs
      </button>

      <header className="mb-10">
        <div className="flex flex-wrap gap-3 mb-4 text-sm text-neutral-500 dark:text-neutral-400">
            <span className="flex items-center">
                <IconCalendar className="w-4 h-4 mr-1.5" />
                {post.date}
            </span>
            <span className="flex items-center">
                <IconClock className="w-4 h-4 mr-1.5" />
                {post.readTime}
            </span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-900 dark:text-white mb-6">
          {post.title}
        </h1>
        <div className="flex gap-2">
            {post.tags.map(tag => (
                <span key={tag} className="px-2.5 py-0.5 rounded-md bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 text-sm font-medium">
                    {tag}
                </span>
            ))}
        </div>
      </header>

      <div 
        className="prose prose-neutral dark:prose-invert max-w-none
        prose-headings:font-bold prose-headings:tracking-tight
        prose-a:text-blue-600 dark:prose-a:text-blue-400 prose-a:no-underline hover:prose-a:underline
        prose-img:rounded-xl"
        dangerouslySetInnerHTML={{ __html: post.content }} 
      />
      
      <hr className="my-12 border-neutral-200 dark:border-neutral-800" />

      <div className="bg-neutral-50 dark:bg-neutral-800/50 rounded-xl p-6 sm:p-8 text-center backdrop-blur-sm">
        <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-2">Enjoyed this article?</h3>
        <p className="text-neutral-600 dark:text-neutral-400 mb-6">
          Check out my other writings or connect with me on social media.
        </p>
        <div className="flex justify-center gap-4">
            <button 
                onClick={() => onNavigate('/docs')}
                className="px-4 py-2 bg-white dark:bg-neutral-700 border border-neutral-200 dark:border-neutral-600 rounded-lg text-sm font-medium text-neutral-900 dark:text-white hover:bg-neutral-50 dark:hover:bg-neutral-600 transition-colors"
            >
                More Articles
            </button>
        </div>
      </div>
    </motion.article>
  );
};

export default DocPost;