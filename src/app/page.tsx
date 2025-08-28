'use client';
import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Preloader from '@/components/Preloader';
import BackToTop from '@/components/BackToTop';
import { initPerformanceOptimizations } from '@/lib/performance';

// Lazy-loaded components with loading states
const AboutSection = dynamic(() => import('@/components/AboutSection'), {
  loading: () => <div className="min-h-screen flex items-center justify-center"><div className="animate-pulse">Loading...</div></div>
});
const ProjectsSection = dynamic(() => import('@/components/ProjectsSection'), {
  loading: () => <div className="min-h-screen flex items-center justify-center"><div className="animate-pulse">Loading...</div></div>
});
const ContactSection = dynamic(() => import('@/components/ContactSection'), {
  loading: () => <div className="min-h-screen flex items-center justify-center"><div className="animate-pulse">Loading...</div></div>
});
const Footer = dynamic(() => import('@/components/Footer'), {
  loading: () => null
});

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Initialize performance optimizations immediately
    initPerformanceOptimizations();
    
    // Optimize preloader timing
    const timer = setTimeout(() => setLoading(false), 100);
    
    // Register service worker for caching (only in production)
    if ('serviceWorker' in navigator && process.env.NODE_ENV === 'production') {
      // Defer SW registration to avoid blocking main thread
      const registerSW = () => {
        navigator.serviceWorker.register('/sw.js', {
          scope: '/',
          updateViaCache: 'none'
        })
        .then((registration) => {
          console.log('SW registered successfully:', registration.scope);
        })
        .catch((error) => {
          console.log('SW registration failed:', error);
        });
      };

      if ('requestIdleCallback' in window) {
        requestIdleCallback(registerSW);
      } else {
        setTimeout(registerSW, 2000);
      }
    }
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Preloader loading={loading} />
      {!loading && (
        <>
          <Navbar />
          <main>
            <Hero />
            <AboutSection />
            <ProjectsSection />
            <ContactSection />
          </main>
          <Footer />
          <BackToTop />
        </>
      )}
    </>
  );
}
