import { BlogPost, Project } from './types';

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'building-minimal-uis',
    title: 'The Art of Minimalist UIs',
    excerpt: 'Why less is often more when it comes to modern web design interface patterns.',
    date: 'October 12, 2023',
    readTime: '5 min read',
    tags: ['Design', 'UX'],
    content: `
      <p class="mb-4">Minimalism in UI design isn't just about stripping away elements; it's about prioritizing content and function. When we remove the noise, the signal becomes clearer.</p>
      
      <h3 class="text-xl font-semibold mb-2 mt-6">Whitespace is active</h3>
      <p class="mb-4">Many developers fear whitespace, thinking it looks "empty". In reality, whitespace is an active design element that guides the eye and creates structure without borders.</p>

      <h3 class="text-xl font-semibold mb-2 mt-6">Typography as UI</h3>
      <p class="mb-4">When you reduce graphical elements, typography takes center stage. A well-chosen typeface with a balanced scale can define the entire look of an application.</p>
    `
  },
  {
    id: 'react-performance',
    title: 'Optimizing React Rendering',
    excerpt: 'Deep dive into useMemo, useCallback, and understanding the render cycle.',
    date: 'November 05, 2023',
    readTime: '8 min read',
    tags: ['React', 'Engineering'],
    content: `
      <p class="mb-4">React's virtual DOM is fast, but unnecessary re-renders can still slow down your application. Understanding when and how components update is crucial for scalability.</p>
      
      <h3 class="text-xl font-semibold mb-2 mt-6">The cost of referential equality</h3>
      <p class="mb-4">One common pitfall is passing inline functions to child components. This breaks reference equality checks, causing children to re-render even if their props haven't functionally changed.</p>

      <code class="block bg-neutral-100 dark:bg-neutral-800 p-4 rounded-md my-4 font-mono text-sm">
        // Bad<br/>
        &lt;Button onClick={() => setCount(c => c + 1)} /&gt;<br/><br/>
        // Good<br/>
        const handleClick = useCallback(() => setCount(c => c + 1), []);<br/>
        &lt;Button onClick={handleClick} /&gt;
      </code>
    `
  },
  {
    id: 'typescript-generics',
    title: 'Mastering TypeScript Generics',
    excerpt: 'Writing reusable and type-safe code components without losing your mind.',
    date: 'December 15, 2023',
    readTime: '6 min read',
    tags: ['TypeScript', 'Dev'],
    content: `
      <p class="mb-4">Generics allow you to create a component or function that can work over a variety of types rather than a single one. This allows users to consume these components and use their own types.</p>
      
      <p class="mb-4">Think of generics as variables for types. Instead of passing a value, you pass a type definition that flows through your function logic.</p>
    `
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'Draw-app',
    title: 'Draw-app',
    description: 'A Excalidraw like application built with monorepo architecture and postgresql, where you can draw and share your drawings with others in real time.',
    techStack: ['Next.js', 'TypeScript', 'Tailwind', 'Prisma',"Monorepo","postgresql","express.js","websocket"],
    // demoUrl: 'https://example.com',
    repoUrl: 'https://github.com/anandKumar0432/Draw-app'
  },
  {
    id: 'blog-app',
    title: 'blog-app',
    description: 'A simple blog application built with React.js and Tailwind CSS, where you can create and share your blog posts.',
    techStack: ['React', 'Node.js', "hono","postgresql","typescript",],
    repoUrl: 'https://github.com/anandKumar0432/blog-app-medium-clone'
  },
  {
    id: 'dev-portfolio',
    title: 'Developer Portfolio',
    description: 'The current website you are viewing. Built with performance and minimalism in mind using React and Tailwind.',
    techStack: ['React', 'Vite', 'Tailwind CSS', 'Framer Motion'],
    repoUrl: 'https://github.com/anandKumar0432/portfolio'
  }
];