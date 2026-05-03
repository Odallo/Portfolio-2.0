"use client";

import { useEffect, useRef, useState } from 'react';
import Button from './ui/Button';

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Parallax effect calculations
  const opacity = Math.max(0, 1 - scrollY / 800);
  const scale = Math.max(0.95, 1 - scrollY / 2000);
  const translateY = Math.min(100, scrollY * 0.1);

  return (
    <section ref={heroRef} className="min-h-screen flex items-center px-6 pt-24 relative overflow-hidden">
      {/* Ambient Background Elements */}
      <div className="absolute inset-0 -z-10">
        {/* Floating gradient orbs */}
        <div 
          className="absolute top-20 right-20 w-32 h-32 opacity-20"
          style={{
            background: 'radial-gradient(circle, rgba(94,106,210,0.4) 0%, transparent 70%)',
            filter: 'blur(40px)',
            animation: 'float 8s ease-in-out infinite',
            transform: `translateY(${translateY * 0.5}px)`,
          }}
        />
        
        <div 
          className="absolute top-40 left-32 w-24 h-24 opacity-15"
          style={{
            background: 'radial-gradient(circle, rgba(139,146,232,0.3) 0%, transparent 70%)',
            filter: 'blur(30px)',
            animation: 'float 10s ease-in-out infinite reverse',
            transform: `translateY(${translateY * 0.3}px)`,
          }}
        />
        
        <div 
          className="absolute bottom-32 right-1/3 w-28 h-28 opacity-10"
          style={{
            background: 'radial-gradient(circle, rgba(59,130,246,0.3) 0%, transparent 70%)',
            filter: 'blur(35px)',
            animation: 'pulse-glow 4s ease-in-out infinite',
            transform: `translateY(${translateY * 0.4}px)`,
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div 
          className="text-center"
          style={{
            opacity,
            transform: `scale(${scale}) translateY(${translateY}px)`,
            transition: 'all 0.3s ease-out',
          }}
        >
          {/* Gradient Headline */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold mb-6 gradient-text">
            Software Developer
          </h1>

          {/* Accent Subtitle */}
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-8 gradient-text-accent">
            Building Digital Experiences
          </h2>

          {/* Description */}
          <p className="text-lg md:text-xl text-[#8A8F98] mb-12 max-w-3xl mx-auto leading-relaxed">
            I craft reliable, scalable, and human-centered digital solutions using 
            modern web technologies. Specialized in creating exceptional user experiences 
            with clean, maintainable code.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button href="/projects" size="lg" variant="primary">
              View Projects
            </Button>

            <Button href="/services" size="lg" variant="secondary">
              Get a Free Quote
            </Button>

            <Button href="/resume_eugine_odallo_wakho (1).pdf" size="md" variant="ghost">
              Download CV
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div 
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center"
          style={{
            opacity: Math.max(0, 1 - scrollY / 200),
            transform: `translateX(-50%) translateY(${scrollY * 0.2}px)`,
          }}
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-xs font-mono tracking-widest text-[#8A8F98] uppercase">
              Scroll to explore
            </span>
            <div className="w-px h-8 bg-gradient-to-b from-[#5E6AD2] to-transparent" />
          </div>
        </div>
      </div>

      {/* Grid overlay for technical aesthetic */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="grid-overlay h-full" />
      </div>
    </section>
  );
}
