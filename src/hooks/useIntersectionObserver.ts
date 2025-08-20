'use client';
import { useState, useEffect, useRef } from 'react';

type IntersectionObserverOptions = {
  threshold?: number | number[];
  root?: Element | null;
  rootMargin?: string;
  triggerOnce?: boolean;
};

const useIntersectionObserver = (
  options: IntersectionObserverOptions = {}
): [React.RefObject<HTMLDivElement>, boolean] => {
  const { threshold = 0.1, root = null, rootMargin = '0px', triggerOnce = true } = options;
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          if (triggerOnce) {
            observer.disconnect();
          }
        } else {
          if (!triggerOnce) {
            setInView(false);
          }
        }
      },
      {
        threshold,
        root,
        rootMargin,
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [ref, threshold, root, rootMargin, triggerOnce]);

  return [ref, inView];
};

export default useIntersectionObserver;
