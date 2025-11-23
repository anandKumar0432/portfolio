import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Docs from './pages/Docs';
import DocPost from './pages/DocPost';
import Projects from './pages/Projects';

const App: React.FC = () => {
  // Simple Hash Router Implementation
  const [route, setRoute] = useState(window.location.hash || '#/');

  useEffect(() => {
    const handleHashChange = () => {
      setRoute(window.location.hash || '#/');
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigate = (path: string) => {
    window.location.hash = path;
  };

  const getPathFromHash = (hash: string) => {
    return hash.replace('#', '') || '/';
  };

  const currentPath = getPathFromHash(route);

  let content;
  if (currentPath === '/' || currentPath === '') {
    content = <Home onNavigate={navigate} />;
  } else if (currentPath === '/projects') {
    content = <Projects />;
  } else if (currentPath === '/docs') {
    content = <Docs onNavigate={navigate} />;
  } else if (currentPath.startsWith('/docs/')) {
    const postId = currentPath.split('/docs/')[1];
    content = <DocPost postId={postId} onNavigate={navigate} />;
  } else {
    // 404 Fallback
    content = (
      <div className="flex flex-col items-center justify-center h-[60vh]">
        <h1 className="text-4xl font-bold text-neutral-900 dark:text-white mb-4">404</h1>
        <p className="text-neutral-600 dark:text-neutral-400 mb-8">Page not found</p>
        <button 
          onClick={() => navigate('/')}
          className="px-4 py-2 bg-neutral-900 text-white rounded-md hover:bg-neutral-800 dark:bg-white dark:text-neutral-900"
        >
          Go Home
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 transition-colors duration-300">
      <Navbar currentPath={currentPath} onNavigate={navigate} />
      
      <main className="flex-grow w-full max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {content}
      </main>

      <Footer />
    </div>
  );
};

export default App;