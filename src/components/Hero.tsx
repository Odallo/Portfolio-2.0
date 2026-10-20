import Link from 'next/link';
import Button from './ui/Button';
import { colors, typography } from '../lib/design-tokens';

export default function Hero() {
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

      <div className="max-w-6xl mx-auto w-full relative z-10 pt-24 pb-16">
        {/* Eyebrow */}
        <div className="rise mb-6" style={{ animationDelay: '0.1s' }}>
          <span
            className="inline-flex items-center gap-2 text-xs uppercase tracking-widest"
            style={{ fontFamily: typography.mono.fontFamily, color: colors.muted }}
          >
            <span className="w-8 h-px" style={{ background: colors.accent }} />
            Websites &amp; web apps · Nairobi
          </span>
        </div>

        {/* Name */}
        <h1
          className="rise text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold leading-[0.9] mb-6"
          style={{ fontFamily: typography.display.fontFamily, animationDelay: '0.2s' }}
        >
          Odallo
          <br />
          <span style={{ color: colors.accent }}>Eugine</span>
        </h1>

        {/* Tagline */}
        <p
          className="rise text-lg md:text-xl max-w-xl mb-10"
          style={{ fontFamily: typography.body.fontFamily, color: colors.muted, animationDelay: '0.3s' }}
        >
          I design and build fast, accessible websites for Nairobi businesses and
          organisations — with M-Pesa payments, online registration, and admin tools
          your team can actually use. You own the code, the domain and the content.
        </p>

        {/* CTA */}
        <div
          className="rise flex flex-wrap items-center gap-4"
          style={{ animationDelay: '0.4s' }}
        >
          <Button href="/projects" variant="primary">See my work</Button>
          <Button href="/contact" variant="secondary">Get a quote</Button>
          <Link
            href="/services"
            className="text-sm underline-offset-4 hover:underline transition-colors"
            style={{ fontFamily: typography.mono.fontFamily, color: colors.muted }}
          >
            Services &amp; pricing →
          </Link>
        </div>

        {/* Secondary note */}
        <p
          className="rise mt-8 text-sm max-w-lg"
          style={{ fontFamily: typography.body.fontFamily, color: colors.muted, animationDelay: '0.5s' }}
        >
          Also open to full-time engineering roles —{' '}
          <Link href="/about" className="underline underline-offset-4" style={{ color: colors.accent }}>
            read more about me
          </Link>
          .
        </p>

        {/* Terminal hint */}
        <div className="rise mt-16" style={{ animationDelay: '0.6s' }}>
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
