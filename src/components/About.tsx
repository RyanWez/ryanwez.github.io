'use client';
import { memo, useCallback } from 'react';
import { CheckCircle, Plus, ChevronRight, Database, ShieldCheck } from 'lucide-react';
import useIntersectionObserver from '@/hooks/useIntersectionObserver';
import { cn } from '@/lib/utils';

const aiSkills = [
  "ChatBot Development",
  "Natural Language Processing",
  "AI Integration",
  "OpenAI API",
  "Prompt Engineering"
];

const webTechnologies = [
  "React",
  "JavaScript/TypeScript",
  "Node.js",
  "HTML5 & CSS3",
  "Responsive Design"
];

const toolsPlatforms = [
  "Vercel",
  "Firebase",
  "MongoDB",
  "Telegram Bot API",
  "Git & GitHub"
];

const developmentPrinciples = [
    "Clean & Maintainable Code",
    "Performance Optimization",
    "Responsive & Accessible Design",
    "User-Centric Approach",
    "Test-Driven Development (TDD)"
];

interface CardData {
  title: string;
  icon: React.ReactNode;
  content: { type: 'journey'; paragraphs: string[] } | { type: 'skills'; items: string[]; color: string };
}

const cards: CardData[] = [
  {
    title: 'My Journey',
    icon: <CheckCircle size={20} className="text-white" />,
    content: {
      type: 'journey',
      paragraphs: [
        "Hey there! I'm Ryan, and my journey into tech started like many others - with curiosity and a lot of late-night coding sessions. What began as tinkering with simple websites has evolved into a genuine passion for creating AI-powered solutions that actually make people's lives easier.",
        "I've spent countless hours learning how to make AI work for real people, not just in theory. From building chatbots that actually understand what users want, to creating web apps that solve everyday problems - I love turning complex technology into simple, useful tools.",
        "When I'm not coding, you'll find me exploring the latest AI developments, contributing to open-source projects, or helping fellow developers navigate the exciting world of AI integration."
      ]
    }
  },
  {
    title: 'AI & Machine Learning',
    icon: <Plus size={20} className="text-white" />,
    content: {
      type: 'skills',
      items: aiSkills,
      color: 'blue'
    }
  },
  {
    title: 'Web Technologies',
    icon: <ChevronRight size={20} className="text-white" />,
    content: {
      type: 'skills',
      items: webTechnologies,
      color: 'purple'
    }
  },
  {
    title: 'Tools & Platforms',
    icon: <Database size={20} className="text-white" />,
    content: {
      type: 'skills',
      items: toolsPlatforms,
      color: 'orange'
    }
  },
  {
    title: 'Development Principles',
    icon: <ShieldCheck size={20} className="text-white" />,
    content: {
        type: 'skills',
        items: developmentPrinciples,
        color: 'teal'
    }
  }
];

const getIconBgColor = (title: string) => {
  if (title === 'My Journey') return 'bg-green-500';
  if (title === 'AI & Machine Learning') return 'bg-blue-500';
  if (title === 'Web Technologies') return 'bg-purple-500';
  if (title === 'Development Principles') return 'bg-teal-500';
  return 'bg-orange-500';
};

const getDotColor = (color: string) => {
  return `bg-${color}-500`;
};

const AboutCard = memo(({ card, index }: { card: CardData; index: number }) => {
  const [ref, inView] = useIntersectionObserver({ threshold: 0.1, triggerOnce: true });

  return (
    <div
      ref={ref}
      className={cn(
        "group relative slide-up-element glass p-8 rounded-2xl hover:translate-y-[-4px] hover:shadow-xl transition-all duration-200 cursor-pointer",
        { 'is-visible': inView },
        card.title === 'My Journey' ? 'lg:col-span-2' : ''
      )}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-2xl font-semibold text-foreground group-hover:text-primary transition-colors">{card.title}</h3>
        <div className={cn("w-10 h-10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300", getIconBgColor(card.title))}>
          {card.icon}
        </div>
      </div>
      {card.content.type === 'journey' ? (
        <div>
          {card.content.paragraphs.map((para, idx) => (
            <p key={idx} className={cn("leading-relaxed mb-4 group-hover:text-foreground transition-colors", idx === 0 ? "text-foreground/80" : idx === 1 ? "text-foreground/70" : "text-foreground/60 text-sm")}>
              {para}
            </p>
          ))}
        </div>
      ) : (
        <div className="space-y-3">
          {card.content.items.map((item, idx) => (
            <div key={idx} className="flex items-center gap-3 group-hover:translate-x-2 transition-transform duration-300" style={{ transitionDelay: `${idx * 50}ms` }}>
              <div className={cn("w-2 h-2 rounded-full group-hover:scale-125 transition-transform duration-300", getDotColor(card.content.type === 'skills' ? card.content.color : 'blue'))}></div>
              <span className="text-foreground/80 group-hover:text-foreground transition-colors">{item}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
});

AboutCard.displayName = 'AboutCard';

const About = () => {
  const handleViewProjects = useCallback(() => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  const handleGetInTouch = useCallback(() => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = 'mailto:contact@ryanwez.dev';
    }
  }, []);

  return (
    <>
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">About Me</h2>

      <div className="max-w-6xl mx-auto space-y-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {cards.map((card, index) => (
            <AboutCard key={card.title} card={card} index={index} />
          ))}
        </div>

        {/* Call to Action */}
        <div className="glass p-6 rounded-2xl text-center hover:translate-y-[-4px] hover:shadow-xl transition-all duration-300">
          <h3 className="text-xl font-semibold mb-3">Ready to Collaborate?</h3>
          <p className="text-foreground/80 mb-4">
            Let&apos;s discuss how we can bring your ideas to life with innovative AI-powered solutions.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={handleViewProjects}
              className="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 hover:scale-105 transition-all duration-300 hover:shadow-lg"
            >
              View Projects
            </button>
            <button
              onClick={handleGetInTouch}
              className="px-6 py-2 border border-primary text-primary rounded-lg hover:bg-primary/10 hover:scale-105 transition-all duration-300 hover:shadow-lg"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;