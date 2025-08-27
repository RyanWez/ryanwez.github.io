'use client';
import { ArrowRight } from 'lucide-react';

import useIntersectionObserver from '@/hooks/useIntersectionObserver';
import { cn } from '@/lib/utils';

interface Project {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
  large?: boolean;
}

const ProjectCard = ({ project, index }: { project: Project, index: number }) => {
  const [ref, inView] = useIntersectionObserver({ threshold: 0.1, triggerOnce: true });

  return (
    <div
      ref={ref}
      className={cn(
        `group relative slide-up-element ${project.large ? 'lg:col-span-2' : ''}`,
        { 'is-visible': inView }
      )}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="glass h-full p-8 rounded-2xl flex flex-col group-hover:translate-y-[-8px] group-hover:scale-[1.02] group-hover:shadow-2xl group-hover:shadow-primary/20 relative overflow-hidden transition-transform duration-300 ease-in-out will-change-transform">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-10 transition-opacity duration-300 -z-10"></div>
        <div className="text-primary">{project.icon}</div>
        <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
        <p className="text-foreground/80 flex-grow mb-6">{project.description}</p>
        <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-primary font-semibold inline-flex items-center gap-2 group-hover:gap-4 transition-all">
          {project.link.includes('t.me') ? 'Try Bot' : 'View Project'} <ArrowRight size={20} />
        </a>
      </div>
    </div>
  );
};


const projects = [
  {
    id: 1,
    title: 'SayarKaung',
    description: 'A comprehensive web application designed to deliver exceptional user experiences.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    ),
    link: 'https://sayarkaung.vercel.app',
    large: true
  },
  {
    id: 2,
    title: 'Employee-MM',
    description: 'A powerful web application for efficient employee management.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    link: 'https://ems-mm.vercel.app'
  },
  {
    id: 3,
    title: 'MiYanMar AI',
    description: 'An intelligent Telegram ChatBot powered by advanced AI capabilities.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
    link: 'https://t.me/miyanmarChatBot'
  },
  {
    id: 4,
    title: 'QR Code for Telegram Bot',
    description: 'Myanmar QR Code Generator and Reader Telegram Bot',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
      </svg>
    ),
    link: 'https://t.me/qrmmbot'
  },
  {
    id: 5,
    title: 'QR Code for Web',
    description: 'Create beautiful, customizable QR codes instantly',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
      </svg>
    ),
    link: 'https://ryanwez.github.io/QR-Code/'
  }
];

const Projects = () => {
  return (
    <>
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </>
  );
};

export default Projects;
