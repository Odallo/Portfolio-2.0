"use client";

import { useEffect, useRef, useState } from 'react';
import Button from './ui/Button';
import { colors, typography } from '../lib/design-tokens';

export default function Hero() {
  const [visible, setVisible] = useState(false);
  const mounted = useRef(false);

  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true;
      requestAnimationFrame(() => setVisible(true));
    }
  }, []);

  return (
    <section className="min-h-screen flex items-center px-6 relative overflow-hidden">
      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(${colors.border} 1px, transparent 1px), linear-gradient(90deg, ${colors.border} 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Accent glow */}
      <div
        className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full blur-[120px] opacity-10"
        style={{ background: colors.accent }}
      />

      <div className="max-w-6xl mx-auto w-full relative z-10">
        {/* Eyebrow */}
        <div
          className={`mb-6 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          style={{ transitionDelay: '0.1s' }}
        >
          <span
            className="inline-flex items-center gap-2 text-xs uppercase tracking-widest"
            style={{ fontFamily: typography.mono.fontFamily, color: colors.muted }}
          >
            <span className="w-8 h-px" style={{ background: colors.accent }} />
            Software Developer
          </span>
        </div>

        {/* Name */}
        <h1
          className={`text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold leading-[0.9] mb-6 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          style={{ fontFamily: typography.display.fontFamily, transitionDelay: '0.2s' }}
        >
          Odallo
          <br />
          <span style={{ color: colors.accent }}>Eugine</span>
        </h1>

        {/* Tagline */}
        <p
          className={`text-lg md:text-xl max-w-xl mb-10 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          style={{ fontFamily: typography.body.fontFamily, color: colors.muted, transitionDelay: '0.3s' }}
        >
          I build reliable, scalable digital solutions with clean code
          and modern technologies. Currently looking for opportunities
          to grow as an engineer.
        </p>

        {/* CTA */}
        <div
          className={`flex flex-wrap gap-4 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          style={{ transitionDelay: '0.4s' }}
        >
          <Button href="/projects" variant="primary">View My Work</Button>
          <Button href="/contact" variant="secondary">Get in Touch</Button>
        </div>

        {/* Terminal hint */}
        <div
          className={`mt-20 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          style={{ transitionDelay: '0.6s' }}
        >
          <div
            className="inline-flex items-center gap-2 text-xs"
            style={{ fontFamily: typography.mono.fontFamily, color: colors.muted }}
          >
            <span className="text-[#22C55E]">$</span>
            <span>scroll --down</span>
            <span className="animate-blink">_</span>
          </div>
        </div>
      </div>
    </section>
  );
}
