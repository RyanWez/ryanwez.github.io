// Performance utilities for better mobile performance
export const performanceUtils = {
  // Lazy load images with intersection observer
  lazyLoadImages: () => {
    if ('IntersectionObserver' in window) {
      const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement;
            img.src = img.dataset.src || '';
            img.classList.remove('lazy');
            observer.unobserve(img);
          }
        });
      });

      document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
      });
    }
  },

  // Preload critical resources
  preloadCriticalResources: () => {
    const criticalResources = [
      '/images/mona.webp',
      '/_next/static/css/app/layout.css'
    ];

    criticalResources.forEach(resource => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = resource;
      link.as = resource.endsWith('.css') ? 'style' : 'image';
      if (resource.endsWith('.webp')) {
        link.type = 'image/webp';
      }
      document.head.appendChild(link);
    });
  },

  // Optimize font loading
  optimizeFontLoading: () => {
    if ('fonts' in document) {
      // Preload critical fonts
      const fontPromises = [
        new FontFace('Inter', 'url(/_next/static/media/inter-latin.woff2)', {
          display: 'swap',
          unicodeRange: 'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD'
        }).load()
      ];

      Promise.all(fontPromises).then(fonts => {
        fonts.forEach(font => {
          (document as any).fonts.add(font);
        });
      });
    }
  },

  // Reduce layout shifts
  preventLayoutShift: () => {
    // Add aspect ratio containers for images
    const images = document.querySelectorAll('img');
    images.forEach(img => {
      if (!img.style.aspectRatio && img.width && img.height) {
        img.style.aspectRatio = `${img.width} / ${img.height}`;
      }
    });
  },

  // Optimize animations for mobile
  optimizeAnimations: () => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    
    if (prefersReducedMotion.matches) {
      document.documentElement.style.setProperty('--animation-duration', '0.01ms');
      document.documentElement.style.setProperty('--transition-duration', '0.01ms');
    }
  }
};

// Initialize performance optimizations
export const initPerformanceOptimizations = () => {
  if (typeof window !== 'undefined') {
    // Run immediately
    performanceUtils.optimizeAnimations();
    
    // Run after DOM is ready
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => {
        performanceUtils.lazyLoadImages();
        performanceUtils.preventLayoutShift();
        performanceUtils.optimizeFontLoading();
      });
    } else {
      performanceUtils.lazyLoadImages();
      performanceUtils.preventLayoutShift();
      performanceUtils.optimizeFontLoading();
    }

    // Run after page load
    window.addEventListener('load', () => {
      performanceUtils.preloadCriticalResources();
    });
  }
};