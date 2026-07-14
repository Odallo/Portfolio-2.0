"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { colors, typography } from "../lib/design-tokens";

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
    { href: "/about", label: "01. About" },
    { href: "/projects", label: "02. Work" },
    { href: "/skills", label: "03. Skills" },
    { href: "/contact", label: "04. Contact" },
  ];

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-200"
        style={{
          background: scrolled ? colors.background : 'transparent',
          borderBottom: scrolled ? `1px solid ${colors.border}` : '1px solid transparent',
        }}
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3">
              <span
                className="text-lg font-bold tracking-tighter"
                style={{ fontFamily: typography.display.fontFamily, color: colors.text }}
              >
                OE
              </span>
              <span
                className="text-sm uppercase tracking-widest hidden sm:block"
                style={{ fontFamily: typography.body.fontFamily, color: colors.textMuted }}
              >
                /dev
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm uppercase tracking-wider transition-colors duration-200"
                  style={{ fontFamily: typography.body.fontFamily, color: colors.textMuted }}
                  onMouseEnter={(e) => e.currentTarget.style.color = colors.accent}
                  onMouseLeave={(e) => e.currentTarget.style.color = colors.textMuted}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2"
              style={{ color: colors.text }}
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
        {scrolled && <div style={{ height: '1px', background: colors.border }} />}
      </nav>

      {/* Mobile Navigation Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div
            className="absolute inset-0"
            style={{ background: 'rgba(0,0,0,0.5)' }}
            onClick={() => setIsOpen(false)}
          />

          <div
            className="absolute top-0 right-0 h-full w-72 p-6"
            style={{
              background: colors.background,
              borderLeft: `1px solid ${colors.border}`,
            }}
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 p-2"
              style={{ color: colors.text }}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="mt-16 space-y-6">
              {navLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block text-sm uppercase tracking-wider py-2 transition-colors duration-200"
                  style={{ fontFamily: typography.body.fontFamily, color: colors.textMuted }}
                  onMouseEnter={(e) => e.currentTarget.style.color = colors.accent}
                  onMouseLeave={(e) => e.currentTarget.style.color = colors.textMuted}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            <div className="mt-8 pt-6" style={{ borderTop: `1px solid ${colors.border}` }}>
              <Link
                href="/contact"
                className="block w-full py-3 text-center text-sm uppercase tracking-wider transition-colors duration-200"
                style={{ fontFamily: typography.body.fontFamily, color: colors.accent, border: `1px solid ${colors.accent}` }}
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
