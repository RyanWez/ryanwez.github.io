'use client';
import Link from 'next/link';
import { Home, ArrowLeft, Zap } from 'lucide-react';
import { useEffect, useState } from 'react';

// Detect if device is mobile for performance optimization
const isMobile = () => {
  if (typeof window === 'undefined') return false;
  return window.innerWidth < 768 || /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
};

const NotFound = () => {
  const [typewriterText, setTypewriterText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const [isClient, setIsClient] = useState(false);
  const fullText = 'Oops! Page Not Found';

  useEffect(() => {
    setIsClient(true);

    // Skip animations on mobile for better performance
    if (isMobile()) {
      setTypewriterText(fullText);
      setShowCursor(false);
      return;
    }

    const startTypewriter = () => {
      let currentIndex = 0;
      setTypewriterText('');

      const typeInterval = setInterval(() => {
        if (currentIndex <= fullText.length) {
          setTypewriterText(fullText.slice(0, currentIndex));
          currentIndex++;
        } else {
          clearInterval(typeInterval);
          // Wait 5 seconds then restart
          setTimeout(startTypewriter, 5000);
        }
      }, 100);
    };

    // Start the typewriter effect only on desktop
    startTypewriter();

    // Cursor blinking only on desktop
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => {
      clearInterval(cursorInterval);
    };
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      {/* Subtle Background - No animations for better performance */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5"></div>

      {/* Main Content */}
      <div className="text-center z-10 max-w-2xl mx-auto px-4">
        {/* 404 Number - Static for better performance */}
        <div className="mb-8">
          <h1 className="text-8xl md:text-9xl font-bold text-primary mb-4">
            404
          </h1>
        </div>

        {/* Error Message */}
        <div className="mb-8 space-y-4">
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground min-h-[3rem] flex items-center justify-center">
            {typewriterText}
            <span className={`ml-1 ${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity duration-100`}>|</span>
          </h2>
          <p className="text-lg text-foreground/70">
            The page you&apos;re looking for seems to have vanished into the digital void.
          </p>
          <p className="text-foreground/60">
            Don&apos;t worry, even the best developers get lost sometimes! 🚀
          </p>
        </div>

        {/* Action Buttons - Conditional animations */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Link
            href="/"
            className={`group flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 ${isClient && !isMobile() ? 'hover:scale-105 hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 transform' : 'transition-colors duration-200'}`}
          >
            <Home size={20} className={isClient && !isMobile() ? "group-hover:scale-110 transition-transform duration-200" : ""} />
            Back to Home
          </Link>

          <button
            onClick={() => window.history.back()}
            className={`group flex items-center gap-3 px-6 py-3 border-2 border-primary/50 text-primary rounded-lg font-semibold hover:bg-primary/10 hover:border-primary ${isClient && !isMobile() ? 'hover:scale-105 hover:shadow-md transition-all duration-300 transform' : 'transition-colors duration-200'}`}
          >
            <ArrowLeft size={20} className={isClient && !isMobile() ? "group-hover:scale-110 transition-transform duration-200" : ""} />
            Go Back
          </button>
        </div>

        {/* Quick Navigation - Conditional animations */}
        <div className={`glass p-6 rounded-2xl ${isClient && !isMobile() ? 'hover:scale-105 hover:shadow-xl transition-all duration-300' : ''}`}>
          <div className="flex items-center justify-center gap-3 mb-4">
            <Zap size={24} className="text-primary" />
            <h3 className="text-lg font-semibold">Quick Navigation</h3>
          </div>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link
              href="/#about"
              className={`px-4 py-2 bg-primary/20 text-primary rounded-full hover:bg-primary/30 ${isClient && !isMobile() ? 'hover:scale-110 hover:shadow-md transition-all duration-200 transform' : 'transition-colors duration-200'}`}
            >
              About
            </Link>
            <Link
              href="/#projects"
              className={`px-4 py-2 bg-secondary/20 text-secondary rounded-full hover:bg-secondary/30 ${isClient && !isMobile() ? 'hover:scale-110 hover:shadow-md transition-all duration-200 transform' : 'transition-colors duration-200'}`}
            >
              Projects
            </Link>
            <Link
              href="/#contact"
              className={`px-4 py-2 bg-primary/30 text-primary border border-primary/50 rounded-full hover:bg-primary/40 hover:border-primary ${isClient && !isMobile() ? 'hover:scale-110 hover:shadow-md transition-all duration-200 transform' : 'transition-colors duration-200'}`}
            >
              Contact
            </Link>
          </div>
        </div>

        {/* Easter Egg */}
        <div className="mt-8 text-xs text-foreground/40">
          <p>Error Code: RYAN_WEZ_404 | Lost in the matrix? 🤖</p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;