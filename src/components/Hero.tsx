"use client";

import { useEffect, useRef, useState } from 'react';
import Button from './ui/Button';
import { typography, colors, shadows, radius } from '../lib/design-tokens';

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
      {/* Enhanced Ambient Background */}
      <div className="absolute inset-0 -z-10">
        {/* Floating Glass Circles */}
        <div 
          className="absolute top-32 right-20 w-40 h-40 ${radius.full} ${shadows.card}"
          style={{
            background: colors.background-elevated,
            opacity: 0.4,
            animation: 'float 6s ease-in-out infinite',
            transform: `translateY(${translateY * 0.5}px)`,
          }}
        />

        <div 
          className="absolute top-48 left-32 w-28 h-28 ${radius.full} ${shadows.card}"
          style={{
            background: colors.background-elevated,
            opacity: 0.3,
            animation: 'float 8s ease-in-out infinite reverse',
            transform: `translateY(${translateY * 0.3}px)`,
          }}
        />

        <div 
          className="absolute bottom-40 right-1/3 w-32 h-32 ${radius.full} ${shadows.card}"
          style={{
            background: colors.background-elevated,
            opacity: 0.25,
            animation: 'float 7s ease-in-out infinite',
            transform: `translateY(${translateY * 0.4}px)`,
          }}
        />

        {/* Enhanced Accent Glow */}
        <div 
          className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 ${radius.full}"
          style={{
            background: `radial-gradient(circle, ${colors.accent-glow} 0%, transparent 70%)`,
            filter: 'blur(150px)',
            opacity: 0.2,
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
          <h1 className={`${typography.display.size} ${typography.display.weight} text-[${colors.foreground-secondary}] mb-6 ${typography.display.tracking}`,
            style={{textShadow: '0 4px 20px rgba(0, 0, 0, 0.3)'}}
          >
            Software Developer
          </h1>

          {/* Subtitle with Accent */}
          <h2 className={`${typography.h2.size} ${typography.h2.weight} text-[${colors.accent}] mb-8 ${typography.h2.tracking}`,
            style={{textShadow: '0 2px 10px rgba(99, 102, 241, 0.2)'}}
          >
            Building Digital Experiences
          </h2>

          {/* Description - Enhanced Card Style */}
          <div 
            className="inline-block px-8 py-6 mb-12 max-w-3xl mx-auto ${radius['2xl']} backdrop-blur-sm"
            style={{
              background: colors.surface,
              boxShadow: shadows.accentGlow,
              border: `1px solid ${colors.border-default}`,
            }}
          >
            <p className={`${typography.body.size} text-[${colors.foreground-muted}] ${typography.body.leading} leading-relaxed font-body`,
              style={{lineHeight: '1.8'}}
            >
              I craft reliable, scalable, and human-centered digital solutions using 
              modern web technologies. Specialized in creating exceptional user experiences 
              with clean, maintainable code.
            </p>
          </div>

          {/* CTA Buttons - Modern Style */}
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

        {/* Enhanced Scroll Indicator */}
        <div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center"
          style={{
            opacity: Math.max(0, 1 - scrollY / 200),
            transform: `translateX(-50%) translateY(${scrollY * 0.2}px)`,
          }}
        >
          <div className="flex flex-col items-center gap-3">
            <span className={`${typography.caption.size} ${typography.caption.weight} ${typography.caption.tracking} text-[${colors.foreground-muted}] uppercase tracking-wider`,
              style={{letterSpacing: '0.2em'}}
            >
              Scroll to explore
            </span>
            <div 
              className="w-px h-10 ${radius.full}"
              style={{
                background: `linear-gradient(to bottom, ${colors.accent}, transparent)`,
                opacity: 0.8,
              }}
            />
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(-20px) translateX(10px); }
        }

        .ambient-background {
          backdrop-filter: blur(20px);
        }

        .noise-texture {
          opacity: 0.05;
          background-image: url('/noise.png');
        }

        .grid-overlay {
          background-size: 40px 40px;
          background-image: 
            linear-gradient(${colors.border-default} 1px, transparent 1px),
            linear-gradient(90deg, ${colors.border-default} 1px, transparent 1px);
        }
      `}</style>
    </section>
  );
}