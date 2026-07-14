"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { colors, shadows, radius } from "../lib/design-tokens";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/projects", label: "Projects" },
    { href: "/skills", label: "Skills" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: scrolled
            ? `${colors['background-base']}CC`
            : 'transparent',
          backdropFilter: scrolled ? 'blur(16px)' : 'none',
          borderBottom: scrolled ? `1px solid ${colors['border-default']}` : 'none',
        }}
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-3 group"
            >
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:-translate-y-0.5 group-hover:scale-105"
                style={{
                  background: colors['background-elevated'],
                  boxShadow: shadows.card,
                  border: `1px solid ${colors['border-default']}`,
                }}
              >
                <span className="text-2xl font-display font-bold" style={{ color: colors.accent }}>
                  O
                </span>
              </div>
              <span
                className="hidden sm:block text-lg font-display font-bold transition-colors duration-200"
                style={{ color: colors['foreground-secondary'] }}
              >
                Dev
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-6">
              {navLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="relative text-base font-body font-medium group py-2 transition-all duration-200"
                  style={{ color: colors['foreground-muted'] }}
                  onMouseEnter={(e) => e.currentTarget.style.color = colors['foreground-secondary']}
                  onMouseLeave={(e) => e.currentTarget.style.color = colors['foreground-muted']}
                >
                  {item.label}
                  <span
                    className="absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-200 group-hover:w-full"
                    style={{ background: colors.accent }}
                  />
                </Link>
              ))}
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-3 transition-all duration-200 rounded-2xl"
              style={{
                color: colors['foreground-muted'],
                background: colors['background-elevated'],
                boxShadow: shadows.card,
                border: `1px solid ${colors['border-default']}`,
              }}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          {/* Backdrop */}
          <div
            className="absolute inset-0"
            style={{ background: colors['overlay-dark'] }}
            onClick={() => setIsOpen(false)}
          />

          {/* Navigation Panel */}
          <div
            className="absolute top-0 right-0 h-full w-80 transform transition-transform duration-300 ease-out p-6"
            style={{
              background: colors['background-elevated'],
              borderLeft: `1px solid ${colors['border-default']}`,
              boxShadow: '-10px 0 40px rgba(0,0,0,0.4)',
            }}
          >
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-6 right-6 p-3 transition-all duration-200 rounded-2xl"
              style={{
                color: colors['foreground-muted'],
                background: colors['surface'],
                border: `1px solid ${colors['border-default']}`,
              }}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Mobile Links */}
            <div className="mt-20 space-y-2">
              {navLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block px-4 py-3 text-lg font-body font-medium rounded-xl transition-all duration-200"
                  style={{
                    color: colors['foreground-muted'],
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = colors['surface-hover'];
                    e.currentTarget.style.color = colors['foreground-secondary'];
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'transparent';
                    e.currentTarget.style.color = colors['foreground-muted'];
                  }}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* CTA Button */}
            <div className="mt-8">
              <Link
                href="/contact"
                className="block w-full px-6 py-4 text-white text-center rounded-xl font-body font-medium transition-all duration-200 hover:-translate-y-0.5"
                style={{
                  background: colors.accent,
                  boxShadow: shadows.accentGlow,
                }}
                onClick={() => setIsOpen(false)}
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}