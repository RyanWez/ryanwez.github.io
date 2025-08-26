'use client';
import Link from 'next/link';
import useIntersectionObserver from '@/hooks/useIntersectionObserver';
import { cn } from '@/lib/utils';
import dynamic from 'next/dynamic';
import Typewriter from '@/components/Typewriter';

const ParticlesBackground = dynamic(() => import('@/components/ParticlesBackground'), {
  ssr: false,
});

const Hero = () => {
  const [ref, inView] = useIntersectionObserver({ threshold: 0.1, triggerOnce: true });

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();

    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const offsetTop = targetElement.offsetTop - 120; // Account for fixed navbar

      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative p-4" ref={ref}>
      <ParticlesBackground />
      <div className={cn("text-center z-10 fade-in-element max-w-5xl mx-auto", { 'is-visible': inView })}>
        {/* Main heading with better spacing */}
        <div className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold mb-8 md:mb-12">
          Hi, I&apos;m <span className="gradient-text whitespace-nowrap">Ryan Wez</span>
        </div>

        {/* Typewriter section with more space */}
        <div className="text-xl md:text-2xl lg:text-3xl text-foreground/80 mb-8 md:mb-12 min-h-[2.5rem] md:min-h-[3rem] lg:min-h-[3.5rem]">
          <Typewriter
            words={['AI Enthusiast', 'Project Creator', 'Web Developer']}
            loop={true}
            cursor
            cursorStyle='|'
            typeSpeed={100}
            deleteSpeed={70}
            delaySpeed={2000}
          />
        </div>

        {/* Description with better spacing and readability */}
        <div className="mb-12 md:mb-16">
          <p className="text-lg md:text-xl text-foreground/70 max-w-3xl mx-auto leading-relaxed px-4">
            I&apos;m a passionate innovator at the intersection of Artificial Intelligence and modern web technologies, dedicated to building solutions that solve real-world problems.
          </p>
        </div>

        {/* Buttons with improved spacing */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Link href="#projects" onClick={(e) => handleSmoothScroll(e, 'projects')} className="px-8 py-3 rounded-lg font-semibold text-white bg-gradient-to-r from-primary to-secondary hover:translate-y-[-2px] transition-transform duration-300 hover:shadow-lg hover:shadow-primary/30">
            View Projects
          </Link>
          <Link href="#contact" onClick={(e) => handleSmoothScroll(e, 'contact')} className="px-8 py-3 rounded-lg font-semibold text-foreground bg-secondary/20 glass hover:translate-y-[-2px] transition-transform duration-300 hover:shadow-lg hover:shadow-primary/20">
            Get in Touch
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
