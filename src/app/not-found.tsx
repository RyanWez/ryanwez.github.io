'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Home, ArrowLeft, Search, Zap } from 'lucide-react';

const NotFound = () => {
  const [mounted, setMounted] = useState(false);
  const [glitchText, setGlitchText] = useState('404');

  useEffect(() => {
    setMounted(true);
    
    // Glitch effect for 404 text
    const glitchChars = ['4', '0', '4', '?', '#', '@', '!', '4', '0', '4'];
    let glitchInterval: NodeJS.Timeout;
    
    const startGlitch = () => {
      let count = 0;
      glitchInterval = setInterval(() => {
        if (count < 10) {
          setGlitchText(glitchChars[Math.floor(Math.random() * glitchChars.length)] + 
                       glitchChars[Math.floor(Math.random() * glitchChars.length)] + 
                       glitchChars[Math.floor(Math.random() * glitchChars.length)]);
          count++;
        } else {
          setGlitchText('404');
          clearInterval(glitchInterval);
          setTimeout(startGlitch, 3000);
        }
      }, 100);
    };

    const timer = setTimeout(startGlitch, 1000);
    
    return () => {
      clearTimeout(timer);
      clearInterval(glitchInterval);
    };
  }, []);

  if (!mounted) return null;

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-background via-background/95 to-background/90">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-accent/10 rounded-full blur-2xl animate-ping"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.2}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          >
            <div className="w-2 h-2 bg-primary/20 rounded-full blur-sm"></div>
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div className="text-center z-10 max-w-2xl mx-auto px-4">
        {/* 404 Number with Glitch Effect */}
        <div className="relative mb-8">
          <h1 className="text-8xl md:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent animate-pulse">
            {glitchText}
          </h1>
          <div className="absolute inset-0 text-8xl md:text-9xl font-bold text-primary/20 animate-ping">
            404
          </div>
        </div>

        {/* Error Message */}
        <div className="mb-8 space-y-4">
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground animate-fade-in-up">
            Oops! Page Not Found
          </h2>
          <p className="text-lg text-foreground/70 animate-fade-in-up delay-200">
            The page you&apos;re looking for seems to have vanished into the digital void.
          </p>
          <p className="text-foreground/60 animate-fade-in-up delay-300">
            Don&apos;t worry, even the best developers get lost sometimes! 🚀
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up delay-500">
          <Link 
            href="/"
            className="group flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground rounded-lg font-semibold hover:from-primary/90 hover:to-primary/70 transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-primary/40 transform"
          >
            <Home size={20} className="group-hover:scale-110 transition-transform duration-300" />
            Back to Home
          </Link>
          
          <button 
            onClick={() => window.history.back()}
            className="group flex items-center gap-3 px-6 py-3 border-2 border-primary/50 text-primary rounded-lg font-semibold hover:bg-primary/10 hover:border-primary transition-all duration-500 hover:scale-105 hover:shadow-lg"
          >
            <ArrowLeft size={20} className="group-hover:scale-110 transition-transform duration-300" />
            Go Back
          </button>
        </div>

        {/* Fun Interactive Element */}
        <div className="mt-12 animate-fade-in-up delay-700">
          <div className="glass p-6 rounded-2xl hover:scale-105 transition-all duration-500 cursor-pointer group hover:shadow-xl">
            <div className="flex items-center justify-center gap-3 mb-3">
              <Zap size={24} className="text-primary" />
              <h3 className="text-lg font-semibold">Quick Navigation</h3>
            </div>
            <div className="flex flex-wrap gap-2 justify-center">
              <Link href="/#about" className="px-3 py-1 text-sm bg-primary/20 text-primary rounded-full hover:bg-primary/30 transition-all duration-300">
                About
              </Link>
              <Link href="/#projects" className="px-3 py-1 text-sm bg-secondary/20 text-secondary rounded-full hover:bg-secondary/30 transition-all duration-300">
                Projects
              </Link>
              <Link href="/#contact" className="px-3 py-1 text-sm bg-primary/30 text-primary border border-primary/50 rounded-full hover:bg-primary/40 hover:border-primary transition-all duration-300">
                Contact
              </Link>
            </div>
          </div>
        </div>

        {/* Easter Egg */}
        <div className="mt-8 text-xs text-foreground/40 animate-fade-in-up delay-1000">
          <p>Error Code: RYAN_WEZ_404 | Lost in the matrix? 🤖</p>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
          opacity: 0;
        }
        
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-500 { animation-delay: 0.5s; }
        .delay-700 { animation-delay: 0.7s; }
        .delay-1000 { animation-delay: 1s; }
      `}</style>
    </div>
  );
};

export default NotFound;