"use client";

import { useEffect, useRef, useState } from 'react';
import Button from './ui/Button';
import { colors, typography } from '../lib/design-tokens';

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
  const translateY = Math.min(100, scrollY * 0.1);

  return (
    <section ref={heroRef} className="min-h-screen flex items-center px-6 pt-20 relative">
      <div className="max-w-6xl mx-auto w-full">
        <div
          style={{
            opacity,
            transform: `translateY(${translateY}px)`,
            transition: 'all 0.3s ease-out',
          }}
        >
          {/* Section Label */}
          <div className="mb-8">
            <span
              className="text-xs uppercase tracking-widest"
              style={{ fontFamily: typography.body.fontFamily, color: colors.textMuted }}
            >
              00 / Introduction
            </span>
          </div>

          {/* Main Headline */}
          <h1
            className="text-5xl md:text-7xl font-bold mb-4 leading-tight"
            style={{ fontFamily: typography.display.fontFamily, color: colors.text }}
          >
            Software
            <br />
            Developer
          </h1>

          {/* Accent Line */}
          <div
            className="w-16 h-px mb-8"
            style={{ background: colors.accent }}
          />

          {/* Subtitle */}
          <h2
            className="text-xl md:text-2xl mb-8"
            style={{ fontFamily: typography.display.fontFamily, color: colors.accent }}
          >
            Building Digital Experiences
          </h2>

          {/* Description */}
          <p
            className="max-w-2xl text-base leading-relaxed mb-12"
            style={{ fontFamily: typography.body.fontFamily, color: colors.textMuted, lineHeight: '1.8' }}
          >
            I craft reliable, scalable, and human-centered digital solutions using
            modern web technologies. Specialized in creating exceptional user experiences
            with clean, maintainable code.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button href="/projects" variant="primary">
              View Projects
            </Button>
            <Button href="/contact" variant="secondary">
              Get in Touch
            </Button>
            <Button href="/resume_eugine_odallo_wakho (1).pdf" variant="secondary">
              Download CV
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div
          className="absolute bottom-8 left-6"
          style={{
            opacity: Math.max(0, 1 - scrollY / 200),
          }}
        >
          <div className="flex flex-col items-start gap-2">
            <span
              className="text-xs uppercase tracking-widest"
              style={{ fontFamily: typography.body.fontFamily, color: colors.textMuted }}
            >
              Scroll
            </span>
            <div
              className="w-px h-12"
              style={{ background: `linear-gradient(to bottom, ${colors.accent}, transparent)` }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
