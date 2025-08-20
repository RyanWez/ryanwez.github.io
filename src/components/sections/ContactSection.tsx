'use client';
import useIntersectionObserver from '@/hooks/useIntersectionObserver';
import { cn } from '@/lib/utils';
import Contact from '@/components/Contact';

const ContactSection = () => {
  const [ref, inView] = useIntersectionObserver({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="contact" className="py-20 text-center" ref={ref}>
      <div className={cn("container mx-auto px-4 fade-in-element", { 'is-visible': inView })}>
        <Contact />
      </div>
    </section>
  );
};

export default ContactSection;
