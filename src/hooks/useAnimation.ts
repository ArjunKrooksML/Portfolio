import { useEffect, useCallback, useRef } from 'react';

export const useAnimation = () => {
  const observer = useRef<IntersectionObserver | null>(null);

  const handleIntersection = (entries: IntersectionObserverEntry[]) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Find all animate elements within the container
        const animatedElements = entry.target.querySelectorAll(
          '.animate-fade-in, .animate-slide-in-left, .animate-slide-in-right, .animate-slide-up, .animate-fade-in-delayed'
        );
        
        // Add 'animate' class to trigger animations
        animatedElements.forEach(el => {
          el.classList.add('animate');
        });
        
        // Stop observing after animation is triggered
        if (observer.current) {
          observer.current.unobserve(entry.target);
        }
      }
    });
  };

  const animate = useCallback((element: HTMLElement) => {
    if (observer.current) {
      observer.current.observe(element);
    }
  }, []);

  useEffect(() => {
    // Create the intersection observer
    observer.current = new IntersectionObserver(handleIntersection, {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    });

    return () => {
      // Clean up
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, []);

  return { animate };
};