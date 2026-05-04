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

  const opacity = Math.max(0, 1 - scrollY / 800);
  const scale = Math.max(0.95, 1 - scrollY / 2000);
  const translateY = Math.min(100, scrollY * 0.1);

  return (
    <section ref={heroRef} className="min-h-screen flex items-center px-6 pt-24 relative overflow-hidden">
      {/* Neumorphic Ambient Background */}
      <div className="absolute inset-0 -z-10">
        {/* Floating Neumorphic Circles */}
        <div 
          className="absolute top-32 right-20 w-40 h-40 rounded-full opacity-40"
          style={{
            background: '#E0E5EC',
            boxShadow: '20px 20px 40px rgb(163,177,198,0.5), -20px -20px 40px rgba(255,255,255,0.4)',
            animation: 'float 6s ease-in-out infinite',
            transform: `translateY(${translateY * 0.5}px)`,
          }}
        />

        <div 
          className="absolute top-48 left-32 w-28 h-28 rounded-full opacity-30"
          style={{
            background: '#E0E5EC',
            boxShadow: '15px 15px 30px rgb(163,177,198,0.4), -15px -15px 30px rgba(255,255,255,0.3)',
            animation: 'float 8s ease-in-out infinite reverse',
            transform: `translateY(${translateY * 0.3}px)`,
          }}
        />

        <div 
          className="absolute bottom-40 right-1/3 w-32 h-32 rounded-full opacity-25"
          style={{
            background: '#E0E5EC',
            boxShadow: '18px 18px 36px rgb(163,177,198,0.4), -18px -18px 36px rgba(255,255,255,0.3)',
            animation: 'float 7s ease-in-out infinite',
            transform: `translateY(${translateY * 0.4}px)`,
          }}
        />

        {/* Subtle Accent Glow */}
        <div 
          className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full opacity-20"
          style={{
            background: 'radial-gradient(circle, rgba(108,99,255,0.3) 0%, transparent 70%)',
            filter: 'blur(40px)',
            transform: `translateY(${translateY * 0.2}px)`,
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
          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-extrabold text-[#3D4852] mb-6 tracking-tight">
            Software Developer
          </h1>

          {/* Subtitle with Accent */}
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-display font-bold text-[#6C63FF] mb-8 tracking-tight">
            Building Digital Experiences
          </h2>

          {/* Description - Neumorphic Card Style */}
          <div 
            className="inline-block px-8 py-6 mb-12 max-w-3xl mx-auto rounded-[32px]"
            style={{
              background: '#E0E5EC',
              boxShadow: '9px 9px 20px rgb(163,177,198,0.6), -9px -9px 20px rgba(255,255,255,0.5)',
            }}
          >
            <p className="text-lg md:text-xl text-[#6B7280] leading-relaxed font-body">
              I craft reliable, scalable, and human-centered digital solutions using 
              modern web technologies. Specialized in creating exceptional user experiences 
              with clean, maintainable code.
            </p>
          </div>

          {/* CTA Buttons - Neumorphic Style */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
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

        {/* Scroll Indicator - Neumorphic Style */}
        <div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center"
          style={{
            opacity: Math.max(0, 1 - scrollY / 200),
            transform: `translateX(-50%) translateY(${scrollY * 0.2}px)`,
          }}
        >
          <div className="flex flex-col items-center gap-3">
            <span className="text-xs font-body font-medium tracking-widest text-[#6B7280] uppercase">
              Scroll to explore
            </span>
            <div 
              className="w-px h-10 rounded-full"
              style={{
                background: 'linear-gradient(to bottom, #6C63FF, transparent)',
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}