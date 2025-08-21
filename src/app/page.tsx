'use client';
import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Preloader from '@/components/Preloader';
import BackToTop from '@/components/BackToTop';

// Lazy-loaded components
const AboutSection = dynamic(() => import('@/components/AboutSection'));
const ProjectsSection = dynamic(() => import('@/components/ProjectsSection'));
const ContactSection = dynamic(() => import('@/components/ContactSection'));
const Footer = dynamic(() => import('@/components/Footer'));

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 200); // Reduced delay for a faster perceived load time

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
