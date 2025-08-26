'use client';
import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { AnimatedThemeToggler } from "@/components/magicui/animated-theme-toggler";

// Throttle function for performance optimization
const throttle = (func: Function, delay: number) => {
  let timeoutId: NodeJS.Timeout | null = null;
  let lastExecTime = 0;

  return function (this: any, ...args: any[]) {
    const currentTime = Date.now();
    const timeSinceLastExec = currentTime - lastExecTime;

    if (!timeoutId) {
      if (timeSinceLastExec >= delay) {
        func.apply(this, args);
        lastExecTime = currentTime;
      } else {
        timeoutId = setTimeout(() => {
          func.apply(this, args);
          lastExecTime = Date.now();
          timeoutId = null;
        }, delay - timeSinceLastExec);
      }
    }
  };
};

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const handleScroll = useCallback(() => {
    // Handle header background style on scroll
    setScrolled(window.pageYOffset > 50);

    // Handle active section highlighting
    const sections = document.querySelectorAll('section[id]');
    let currentSection = '';
    
    sections.forEach(section => {
      const sectionTop = (section as HTMLElement).offsetTop;
      const sectionHeight = section.clientHeight;
      if (window.scrollY >= sectionTop - 150 && window.scrollY < sectionTop + sectionHeight - 150) {
        currentSection = section.id;
      }
    });

    // Special check for the last section to be highlighted when scrolled to the bottom
    const contactSection = document.getElementById('contact');
    if (contactSection && (window.innerHeight + window.scrollY) >= document.body.offsetHeight - 50) {
      currentSection = 'contact';
    }

    if (currentSection) {
      setActiveSection(currentSection);
    } else {
       // Fallback to home if no section is matched (e.g., at the very top)
      if (window.scrollY < 200) setActiveSection('home');
    }
  }, []);

  useEffect(() => {
    const throttledHandleScroll = throttle(handleScroll, 16); // ~60fps for smoother active state update

    window.addEventListener('scroll', throttledHandleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', throttledHandleScroll);
  }, [handleScroll]);

  const toggleMenu = () => setIsActive(!isActive);
  const closeMenu = () => setIsActive(false);

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    closeMenu();
    
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const offsetTop = targetElement.offsetTop - 120; // Account for fixed navbar
      
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  const navLinks = [
    { id: 'home', title: 'Home' },
    { id: 'about', title: 'About' },
    { id: 'projects', title: 'Projects' },
    { id: 'contact', title: 'Contact' },
  ];

  return (
    <>
      <header className={`fixed top-5 left-1/2 -translate-x-1/2 w-[90%] md:w-3/4 max-w-6xl z-50`}>
        <nav className={`p-4 rounded-2xl border border-transparent transition-colors transition-opacity transition-shadow duration-300 ease-in-out ${
            scrolled 
              ? 'bg-background/60 dark:bg-background/40 backdrop-blur-xl border-black/5 dark:border-white/10 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:shadow-[0_2px_15px_-3px_rgba(0,0,0,0.2),0_10px_20px_-2px_rgba(0,0,0,0.15)]' 
              : 'bg-transparent backdrop-blur-0'
          }`}>
            <div className="flex justify-between items-center">
            <Link href="#home" className="flex items-center" onClick={(e) => handleSmoothScroll(e, 'home')}>
                <Image 
                  src="/mona.webp" 
                  alt="Ryan Wez portfolio logo" 
                  width={38} 
                  height={38}
                  priority
                />
            </Link>
            <div className="hidden md:flex items-center gap-8">
                {navLinks.map((link) => (
                <Link key={link.id} href={`#${link.id}`} onClick={(e) => handleSmoothScroll(e, link.id)} className={`relative font-semibold text-foreground/90 hover:text-foreground transition-colors after:content-[''] after:absolute after:bottom-[-5px] after:left-0 after:h-[2px] after:bg-gradient-to-r after:from-primary after:to-secondary after:transition-all after:duration-300 ${activeSection === link.id ? 'text-foreground after:w-full' : 'after:w-0'}`}>
                    {link.title}
                </Link>
                ))}
                <AnimatedThemeToggler />
            </div>
            <div className="flex items-center gap-4 md:hidden">
              <AnimatedThemeToggler />
              <button 
                className="z-50" 
                onClick={toggleMenu}
                aria-label={isActive ? 'Close navigation menu' : 'Open navigation menu'}
                aria-expanded={isActive}
                aria-controls="mobile-menu"
              >
                  <div className="space-y-1.5">
                  <span className={`block w-6 h-0.5 bg-foreground transition-transform duration-300 ${isActive ? 'rotate-45 translate-y-2' : ''}`}></span>
                  <span className={`block w-6 h-0.5 bg-foreground transition-opacity duration-300 ${isActive ? 'opacity-0' : ''}`}></span>
                  <span className={`block w-6 h-0.5 bg-foreground transition-transform duration-300 ${isActive ? '-rotate-45 -translate-y-2' : ''}`}></span>
                  </div>
              </button>
            </div>
            </div>
        </nav>
        {/* Mobile Menu Dropdown */}
        <div 
          id="mobile-menu"
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isActive ? 'max-h-screen' : 'max-h-0'}`}
          data-inert={!isActive}
        >
            <div className="mt-2 p-4 bg-background/60 dark:bg-background/40 backdrop-blur-xl rounded-2xl border border-black/5 dark:border-white/10 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:shadow-[0_2px_15px_-3px_rgba(0,0,0,0.2),0_10px_20px_-2px_rgba(0,0,0,0.15)]">
                <div className="flex flex-col items-center gap-4">
                    {navLinks.map((link) => (
                    <Link key={link.id} href={`#${link.id}`} onClick={(e) => handleSmoothScroll(e, link.id)} className={`relative w-full text-center py-2 text-lg font-semibold text-foreground/90 hover:text-foreground transition-colors after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:h-[2px] after:bg-gradient-to-r after:from-primary after:to-secondary after:transition-all after:duration-300 ${activeSection === link.id ? 'text-foreground after:w-1/4' : 'after:w-0'}`}>
                        {link.title}
                    </Link>
                    ))}
                </div>
            </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
