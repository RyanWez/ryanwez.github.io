'use client';
import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Preloader from '@/components/Preloader';
import BackToTop from '@/components/BackToTop';

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
    // Remove preloader immediately for better performance
    setLoading(false);
    
    // Register service worker for caching (only in production)
    if ('serviceWorker' in navigator && process.env.NODE_ENV === 'production') {
      navigator.serviceWorker.register('/sw.js')
        .then((registration) => {
          console.log('SW registered successfully:', registration.scope);
        })
        .catch((error) => {
          console.log('SW registration failed:', error);
        });
    }
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
