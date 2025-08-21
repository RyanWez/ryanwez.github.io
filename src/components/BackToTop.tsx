'use client';
import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';
import { cn } from '@/lib/utils';

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <button
      type="button"
      onClick={scrollToTop}
      className={cn(
        'fixed bottom-8 right-8 z-50 p-3 rounded-full bg-primary text-white shadow-lg transition-opacity duration-300 hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2',
        isVisible ? 'opacity-100' : 'opacity-0 translate-y-4 pointer-events-none'
      )}
      aria-label="Go to top"
    >
      <ArrowUp size={24} />
    </button>
  );
};

export default BackToTop;
