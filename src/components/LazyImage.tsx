import React, { useState, useRef, useEffect } from 'react';
import { Image as ImageIcon } from 'lucide-react';

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  placeholder?: React.ReactNode;
  onLoad?: () => void;
  onError?: () => void;
}

const LazyImage: React.FC<LazyImageProps> = ({
  src,
  alt,
  className = '',
  placeholder,
  onLoad,
  onError,
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleLoad = () => {
    setIsLoaded(true);
    onLoad?.();
  };

  const handleError = () => {
    setHasError(true);
    onError?.();
  };

  const defaultPlaceholder = (
    <div className="flex items-center justify-center bg-gray-200 dark:bg-gray-700">
      <ImageIcon className="h-8 w-8 text-gray-400 dark:text-gray-500" />
    </div>
  );

  return (
    <div ref={imgRef} className={`relative ${className}`}>
      {!isLoaded && !hasError && (placeholder || defaultPlaceholder)}
      {hasError ? (
        <div className="flex items-center justify-center bg-gray-200 dark:bg-gray-700">
          <ImageIcon className="h-8 w-8 text-gray-400 dark:text-gray-500" />
        </div>
      ) : (
        isInView && (
          <img
            src={src}
            alt={alt}
            className={`transition-opacity duration-300 ${
              isLoaded ? 'opacity-100' : 'opacity-0'
            } ${className}`}
            onLoad={handleLoad}
            onError={handleError}
            loading="lazy"
            decoding="async"
          />
        )
      )}
    </div>
  );
};

export default LazyImage;
