import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import PublicationList from './components/PublicationList';
import ProjectGrid from './components/ProjectGrid';
import { Moon, Sun } from 'lucide-react';

const App: React.FC = () => {
  // Default to true for Dark Mode
  const [darkMode, setDarkMode] = useState(true);

  // Initialize theme
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen font-sans selection:bg-primary dark:selection:bg-primary-dark selection:text-white dark:selection:text-background-dark">
      {/* Theme Toggle - Minimal */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="fixed top-8 right-8 z-50 p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 text-foreground dark:text-foreground-dark transition-all focus:outline-none"
        aria-label="Toggle Theme"
      >
        {darkMode ? <Sun size={20} /> : <Moon size={20} />}
      </button>

      <main className="max-w-5xl mx-auto px-6 md:px-12 pb-32">
        <Header />
        {/* Breathing room without lines */}
        <div className="h-16"></div>
        <PublicationList />
        <div className="h-16"></div>
        <ProjectGrid />
      </main>

      <footer className="border-t border-border dark:border-border-dark py-12 text-center mt-12">
        <p className="text-xs font-mono uppercase tracking-widest text-muted dark:text-muted-dark">
          © {new Date().getFullYear()} Vasilis Avgerinos
        </p>
      </footer>
    </div>
  );
};

export default App;