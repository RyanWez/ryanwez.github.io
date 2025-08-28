'use client';
import { useEffect } from 'react';

const PerformanceMonitor = () => {
  useEffect(() => {
    // Web Vitals monitoring
    const reportWebVitals = (metric: any) => {
      if (process.env.NODE_ENV === 'production') {
        // You can send this to analytics service
        console.log(metric);
      }
    };

    // Measure Core Web Vitals
    const measureWebVitals = async () => {
      try {
        const { getCLS, getFID, getFCP, getLCP, getTTFB } = await import('web-vitals');
        
        getCLS(reportWebVitals);
        getFID(reportWebVitals);
        getFCP(reportWebVitals);
        getLCP(reportWebVitals);
        getTTFB(reportWebVitals);
      } catch (error) {
        console.warn('Web Vitals not available:', error);
      }
    };

    // Performance observer for long tasks
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry) => {
          if (entry.entryType === 'longtask') {
            console.warn('Long task detected:', entry);
          }
        });
      });

      try {
        observer.observe({ entryTypes: ['longtask'] });
      } catch (e) {
        // Long task API not supported
      }
    }

    measureWebVitals();

    // Cleanup
    return () => {
      // Cleanup if needed
    };
  }, []);

  return null; // This component doesn't render anything
};

export default PerformanceMonitor;