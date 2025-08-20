'use client';
import useIntersectionObserver from '@/hooks/useIntersectionObserver';
import { cn } from '@/lib/utils';
import About from '@/components/About';

const AboutSection = () => {
  const [ref, inView] = useIntersectionObserver({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="about" className="py-20" ref={ref}>
      <div className={cn("container mx-auto px-4 fade-in-element", { 'is-visible': inView })}>
        <About />
      </div>
    </section>
  );
};

export default AboutSection;
