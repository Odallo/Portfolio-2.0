"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { colors, typography } from "../lib/design-tokens";

export default function About() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    const el = document.getElementById('about');
    if (el) observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section label */}
        <div className="flex items-center gap-4 mb-12">
          <span
            className="text-xs uppercase tracking-widest"
            style={{ fontFamily: typography.mono.fontFamily, color: colors.accent }}
          >
            01
          </span>
          <span className="w-12 h-px" style={{ background: colors.border }} />
          <span
            className="text-xs uppercase tracking-widest"
            style={{ fontFamily: typography.mono.fontFamily, color: colors.muted }}
          >
            About
          </span>
        </div>

        <div className="grid md:grid-cols-5 gap-12 items-start">
          {/* Image + Quick Info */}
          <div className={`md:col-span-2 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="relative mb-6">
              <Image
                src="/WhatsApp Image 2026-01-27 at 23.26.06.jpeg"
                alt="Odallo Eugine"
                width={320}
                height={320}
                loading="eager"
                priority
                className="w-full aspect-square object-cover"
                style={{ filter: 'grayscale(30%)' }}
              />
              <div
                className="absolute inset-0"
                style={{ background: `linear-gradient(135deg, transparent 60%, ${colors.accent}20)` }}
              />
            </div>

            <div className="flex flex-wrap gap-2">
              {['React', 'Next.js', 'TypeScript', 'Python'].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-xs"
                  style={{
                    fontFamily: typography.mono.fontFamily,
                    color: colors.accent,
                    background: `${colors.accent}10`,
                    border: `1px solid ${colors.accent}30`,
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Content */}
          <div className={`md:col-span-3 space-y-6 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '0.15s' }}>
            <h1
              className="text-3xl md:text-4xl font-bold mb-4"
              style={{ fontFamily: typography.display.fontFamily }}
            >
              About Me
            </h1>

            <p
              className="text-base leading-relaxed"
              style={{ fontFamily: typography.body.fontFamily, color: colors.muted }}
            >
              I&apos;m a software developer who enjoys building things that work well and are
              built to last. My interest in web development started with figuring out how
              websites actually function — that curiosity turned into a career focused on
              creating clean, maintainable code.
            </p>

            <p
              className="text-base leading-relaxed"
              style={{ fontFamily: typography.body.fontFamily, color: colors.muted }}
            >
              I specialize in React, Next.js, and TypeScript on the frontend, with
              experience in Node.js, Python, and Laravel on the backend. I care about
              writing code that other developers can read and maintain.
            </p>

            <div className="pt-4">
              <h3
                className="text-sm font-semibold uppercase tracking-wider mb-4"
                style={{ fontFamily: typography.display.fontFamily, color: colors.text }}
              >
                What I care about
              </h3>
              <div className="space-y-3">
                {[
                  { label: 'Writing code that scales', desc: 'Clean architecture, clear patterns' },
                  { label: 'User experience', desc: 'Interfaces that feel intuitive' },
                  { label: 'Performance', desc: 'Fast load times, smooth interactions' },
                  { label: 'Learning continuously', desc: 'Always picking up new tools and ideas' },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-3">
                    <span
                      className="mt-1.5 w-1.5 h-1.5 flex-shrink-0"
                      style={{ background: colors.accent }}
                    />
                    <div>
                      <span
                        className="text-sm font-medium"
                        style={{ fontFamily: typography.body.fontFamily, color: colors.text }}
                      >
                        {item.label}
                      </span>
                      <span
                        className="text-sm ml-2"
                        style={{ fontFamily: typography.body.fontFamily, color: colors.muted }}
                      >
                        — {item.desc}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
