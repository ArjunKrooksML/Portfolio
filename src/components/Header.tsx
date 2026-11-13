import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion, useScroll, useSpring } from 'framer-motion';
import { FileText, Menu, Moon, Sun, X } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { profile } from '../data';
import { useActiveSection } from './ui';

const NAV_ITEMS = [
  { name: 'Projects', id: 'projects' },
  { name: 'Experience', id: 'experience' },
  { name: 'Toolkit', id: 'skills' },
  { name: 'About', id: 'about' },
  { name: 'Contact', id: 'contact' },
];
const SECTION_IDS = ['home', ...NAV_ITEMS.map((n) => n.id)];

type HeaderProps = {
  isScrolled: boolean;
};

const Header: React.FC<HeaderProps> = ({ isScrolled }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme();
  const active = useActiveSection(SECTION_IDS);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setMenuOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [menuOpen]);

  const go = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  const ThemeIcon = isDarkMode ? Sun : Moon;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'border-b border-zinc-200/80 bg-zinc-50/80 backdrop-blur-lg dark:border-zinc-800/80 dark:bg-zinc-950/80'
          : 'border-b border-transparent'
      }`}
    >
      <motion.div
        style={{ scaleX: progress, transformOrigin: 'left' }}
        className="absolute inset-x-0 top-0 h-0.5 bg-emerald-500"
        aria-hidden
      />

      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <a href="#home" onClick={go('home')} className="group flex items-center gap-3 rounded-lg" aria-label="Back to top">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-zinc-900 font-mono text-sm font-bold text-emerald-400 transition group-hover:bg-emerald-500 group-hover:text-zinc-950 dark:bg-zinc-800">
            AS
          </span>
          <span className="hidden font-semibold tracking-tight sm:block">{profile.name}</span>
        </a>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {NAV_ITEMS.map((item) => {
            const isActive = active === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={go(item.id)}
                aria-current={isActive ? 'true' : undefined}
                className={`relative rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                  isActive ? 'text-zinc-950 dark:text-white' : 'text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-200'
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-lg bg-zinc-200/70 dark:bg-zinc-800"
                    transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                  />
                )}
                <span className="relative">{item.name}</span>
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={profile.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 rounded-lg border border-zinc-300 px-3 py-2 text-sm font-medium transition hover:border-emerald-500 hover:text-emerald-600 dark:border-zinc-700 dark:hover:text-emerald-400 sm:inline-flex"
          >
            <FileText className="h-4 w-4" />
            Resume
          </a>
          <button
            onClick={toggleTheme}
            className="rounded-lg p-2 text-zinc-600 transition hover:bg-zinc-200/70 dark:text-zinc-400 dark:hover:bg-zinc-800"
            aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            <ThemeIcon className="h-5 w-5" />
          </button>
          <button
            onClick={() => setMenuOpen(true)}
            className="rounded-lg p-2 text-zinc-600 dark:text-zinc-400 md:hidden"
            aria-label="Open menu"
            aria-expanded={menuOpen}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-zinc-50 dark:bg-zinc-950 md:hidden"
            role="dialog"
            aria-modal="true"
            aria-label="Menu"
          >
            <div className="flex justify-end p-4">
              <button onClick={() => setMenuOpen(false)} className="rounded-lg p-2" aria-label="Close menu">
                <X className="h-6 w-6" />
              </button>
            </div>
            <nav className="mt-8 flex flex-col items-center gap-6" aria-label="Mobile">
              {NAV_ITEMS.map((item, i) => (
                <motion.a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={go(item.id)}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 * i }}
                  className="text-2xl font-semibold"
                >
                  {item.name}
                </motion.a>
              ))}
              <a
                href={profile.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex items-center gap-2 rounded-xl bg-emerald-500 px-6 py-3 font-semibold text-zinc-950"
              >
                <FileText className="h-5 w-5" />
                Resume
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
