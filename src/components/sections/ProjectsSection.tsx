'use client';
import useIntersectionObserver from '@/hooks/useIntersectionObserver';
import { cn } from '@/lib/utils';
import Projects from '@/components/Projects';

const ProjectsSection = () => {
  const [ref, inView] = useIntersectionObserver({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="projects" className="py-20" ref={ref}>
      <div className={cn("w-[90%] max-w-6xl mx-auto px-4 fade-in-element", { 'is-visible': inView })}>
        <Projects />
      </div>
    </section>
  );
};

export default ProjectsSection;
