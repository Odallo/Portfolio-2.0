"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { colors, typography } from "../lib/design-tokens";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: "/about", label: "About" },
    { href: "/projects", label: "Work" },
    { href: "/skills", label: "Skills" },
    { href: "/services", label: "Services" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: scrolled ? 'rgba(10,10,10,0.9)' : 'transparent',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
          borderBottom: scrolled ? `1px solid ${colors.border}` : '1px solid transparent',
        }}
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-2">
              <span
                className="text-lg font-bold"
                style={{ fontFamily: typography.display.fontFamily, color: colors.accent }}
              >
                OE
              </span>
              <span
                className="text-sm hidden sm:block"
                style={{ fontFamily: typography.mono.fontFamily, color: colors.muted }}
              >
                .dev
              </span>
            </Link>

            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm transition-colors duration-200"
                  style={{ fontFamily: typography.body.fontFamily, color: colors.muted }}
                  onMouseEnter={(e) => e.currentTarget.style.color = colors.accent}
                  onMouseLeave={(e) => e.currentTarget.style.color = colors.muted}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2"
              style={{ color: colors.text }}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                {isOpen ? <path d="M6 18L18 6M6 6l12 12" /> : <path d="M4 6h16M4 12h16M4 18h16" />}
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {isOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div className="absolute inset-0 bg-black/60" onClick={() => setIsOpen(false)} />
          <div
            className="absolute top-0 right-0 h-full w-72 p-6"
            style={{ background: colors.surface, borderLeft: `1px solid ${colors.border}` }}
          >
            <button onClick={() => setIsOpen(false)} className="absolute top-4 right-4 p-2" style={{ color: colors.text }}>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="mt-16 space-y-1">
              {navLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block py-3 px-4 text-sm transition-colors duration-200"
                  style={{ fontFamily: typography.body.fontFamily, color: colors.muted }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = colors.accent;
                    e.currentTarget.style.background = colors.card;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = colors.muted;
                    e.currentTarget.style.background = 'transparent';
                  }}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
