'use client';
import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { AnimatedThemeToggler } from "@/components/magicui/animated-theme-toggler";

// Throttle function for performance optimization
const throttle = (func: Function, delay: number) => {
  let timeoutId: NodeJS.Timeout;
  let lastExecTime = 0;
  return function (this: any, ...args: any[]) {
    const currentTime = Date.now();
    
    if (currentTime - lastExecTime > delay) {
      func.apply(this, args);
      lastExecTime = currentTime;
    } else {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        func.apply(this, args);
        lastExecTime = Date.now();
      }, delay - (currentTime - lastExecTime));
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
    const throttledHandleScroll = throttle(handleScroll, 16); // ~60fps

    window.addEventListener('scroll', throttledHandleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', throttledHandleScroll);
  }, [handleScroll]);

  const toggleMenu = () => setIsActive(!isActive);
  const closeMenu = () => setIsActive(false);

  const navLinks = [
    { id: 'home', title: 'Home' },
    { id: 'about', title: 'About' },
    { id: 'projects', title: 'Projects' },
    { id: 'contact', title: 'Contact' },
  ];

  return (
    <>
      <header className={`fixed top-5 left-1/2 -translate-x-1/2 w-[90%] md:w-3/4 max-w-6xl z-50 transition-all duration-300`}>
        <nav className={`p-4 rounded-2xl border transition-all duration-300 ${scrolled ? 'bg-background/30 backdrop-blur-lg border-border' : 'bg-transparent border-transparent'}`}>
            <div className="flex justify-between items-center">
            <Link href="#home" className="flex items-center" onClick={closeMenu}>
                <Image 
                  src="/mona.webp" 
                  alt="RyanWez" 
                  width={38} 
                  height={38}
                  priority
                />
            </Link>
            <div className="hidden md:flex items-center gap-8">
                {navLinks.map((link) => (
                <Link key={link.id} href={`#${link.id}`} onClick={closeMenu} className={`relative text-foreground/80 hover:text-foreground transition-colors after:content-[''] after:absolute after:bottom-[-5px] after:left-0 after:h-[2px] after:bg-gradient-to-r after:from-primary after:to-secondary after:transition-all after:duration-300 ${activeSection === link.id ? 'text-foreground after:w-full' : 'after:w-0'}`}>
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
            <div className="mt-2 p-4 bg-background/50 backdrop-blur-lg rounded-2xl">
                <div className="flex flex-col items-center gap-4">
                    {navLinks.map((link) => (
                    <Link key={link.id} href={`#${link.id}`} onClick={closeMenu} className={`relative w-full text-center py-2 text-lg font-semibold text-foreground/80 hover:text-foreground transition-colors after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:h-[2px] after:bg-gradient-to-r after:from-primary after:to-secondary after:transition-all after:duration-300 ${activeSection === link.id ? 'text-foreground after:w-1/4' : 'after:w-0'}`}>
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
