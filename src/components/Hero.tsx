'use client';
import Link from 'next/link';
import useIntersectionObserver from '@/hooks/useIntersectionObserver';
import { cn } from '@/lib/utils';
import dynamic from 'next/dynamic';
import { AnimatedText } from '@/components/magicui/animated-text';

const ParticlesBackground = dynamic(() => import('@/components/ParticlesBackground'), {
  ssr: false,
});

const Hero = () => {
  const [ref, inView] = useIntersectionObserver({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative p-4" ref={ref}>
       <ParticlesBackground />
      <div className={cn("text-center z-10 fade-in-element", { 'is-visible': inView })}>
        <div className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4">
          Hi, I&apos;m <span className="gradient-text">RyanWez</span>
        </div>
        
        <AnimatedText
          el="p"
          text={['AI Enthusiast & Project Creator']}
          className="text-xl md:text-2xl lg:text-3xl text-foreground/80 mb-8"
          once
        />

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="#projects" className="px-8 py-3 rounded-lg font-semibold text-white bg-gradient-to-r from-primary to-secondary hover:translate-y-[-2px] transition-transform duration-300 hover:shadow-lg hover:shadow-primary/30">
              View Projects
          </Link>
          <Link href="#contact" className="px-8 py-3 rounded-lg font-semibold text-foreground bg-secondary/20 glass hover:translate-y-[-2px] transition-transform duration-300 hover:shadow-lg hover:shadow-primary/20">
              Get in Touch
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
