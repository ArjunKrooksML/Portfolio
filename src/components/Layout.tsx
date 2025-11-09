import React, { useState, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';
import Analytics from './Analytics';
import { ThemeProvider } from '../contexts/ThemeContext';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        <Analytics />
        <Header scrollY={scrollY} />
        <main className="pt-16">{children}</main>
        <Footer />
        <ScrollToTop />
      </div>
    </ThemeProvider>
  );
};

export default Layout;