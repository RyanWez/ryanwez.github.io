'use client';
import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Preloader from '@/components/Preloader';
import BackToTop from '@/components/BackToTop';
import { Loading } from '@/components/ui/loading';
import { initPerformanceOptimizations } from '@/lib/performance';

// Lazy-loaded components with loading states
const AboutSection = dynamic(() => import('@/components/AboutSection'), {
  loading: () => <Loading />
});
const ProjectsSection = dynamic(() => import('@/components/ProjectsSection'), {
  loading: () => <Loading />
});
const ContactSection = dynamic(() => import('@/components/ContactSection'), {
  loading: () => <Loading />
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
    const timer = setTimeout(() => setLoading(false), 500);
    
    
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
