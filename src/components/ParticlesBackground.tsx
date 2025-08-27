'use client';
import { useEffect, useMemo, useState } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { type Container, type ISourceOptions } from '@tsparticles/engine';
import { loadSlim } from '@tsparticles/slim';
import { useTheme } from 'next-themes';

const ParticlesBackground = () => {
  const [init, setInit] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    // Delay initialization to improve initial load
    const timer = setTimeout(() => {
      initParticlesEngine(async (engine) => {
        await loadSlim(engine);
      }).then(() => {
        setInit(true);
      });
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const particlesLoaded = async (container?: Container): Promise<void> => {
    // Optimize container performance
    if (container) {
      container.pause();
      setTimeout(() => container.play(), 100);
    }
  };

  const options: ISourceOptions = useMemo(
    () => ({
      background: {
        color: {
          value: 'transparent',
        },
      },
      fpsLimit: 30, // Reduced from 60 for better performance
      interactivity: {
        events: {
          onClick: {
            enable: false, // Disabled for performance
          },
          onHover: {
            enable: false, // Disabled for performance
          },
        },
      },
      particles: {
        color: {
          value: theme === 'dark' ? '#ffffff' : '#000000',
        },
        links: {
          color: theme === 'dark' ? '#ffffff' : '#000000',
          distance: 120, // Reduced from 150
          enable: true,
          opacity: 0.15, // Reduced from 0.2
          width: 0.5, // Reduced from 1
        },
        move: {
          direction: 'none',
          enable: true,
          outModes: {
            default: 'out',
          },
          random: false,
          speed: 0.5, // Reduced from 1
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: window.innerWidth < 768 ? 30 : 50, // Reduced particles on mobile
        },
        opacity: {
          value: 0.2, // Reduced from 0.3
        },
        shape: {
          type: 'circle',
        },
        size: {
          value: { min: 0.5, max: 2 }, // Reduced size
        },
      },
      detectRetina: false, // Disabled for performance
      pauseOnBlur: true,
      pauseOnOutsideViewport: true,
    }),
    [theme],
  );

  if (init) {
    return (
      <Particles
        id="tsparticles"
        particlesLoaded={particlesLoaded}
        options={options}
        className="absolute top-0 left-0 w-full h-full -z-10"
      />
    );
  }

  return <></>;
};

export default ParticlesBackground;
