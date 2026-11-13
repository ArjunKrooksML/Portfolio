import React, { useState, useEffect } from 'react';
import { MotionConfig } from 'framer-motion';
import Header from './Header';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';
import Analytics from './Analytics';
import { ThemeProvider } from '../contexts/ThemeContext';

type LayoutProps = {
  children: React.ReactNode;
};

const SCROLL_THRESHOLD = 10;

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        setIsScrolled(window.scrollY > SCROLL_THRESHOLD);
        ticking = false;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <ThemeProvider>
      {/* reducedMotion="user" makes every framer-motion animation respect the OS setting */}
      <MotionConfig reducedMotion="user">
        <div className="min-h-screen bg-zinc-50 transition-colors duration-300 dark:bg-zinc-950">
          <Analytics />
          <Header isScrolled={isScrolled} />
          <main>{children}</main>
          <Footer />
          <ScrollToTop />
        </div>
      </MotionConfig>
    </ThemeProvider>
  );
};

export default Layout;
