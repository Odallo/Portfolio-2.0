"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

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

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-[#050506]/95 backdrop-blur-xl border-b border-white/6' 
          : 'bg-transparent'
      }`}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link 
              href="/" 
              className="text-2xl font-semibold text-[#EDEDEF] hover:text-[#5E6AD2] transition-colors duration-200"
            >
              Odallo Eugine
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {[
                { href: "/about", label: "About" },
                { href: "/services", label: "Services" },
                { href: "/projects", label: "Projects" },
                { href: "/skills", label: "Skills" },
                { href: "/contact", label: "Contact" },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="relative text-base text-[#8A8F98] hover:text-[#EDEDEF] transition-all duration-200 group"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-px bg-[#5E6AD2] transition-all duration-200 group-hover:w-full" />
                </Link>
              ))}
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-[#8A8F98] hover:text-[#EDEDEF] transition-colors duration-200 rounded-lg hover:bg-white/5"
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
            className="absolute inset-0 bg-[#050506]/95 backdrop-blur-xl"
            onClick={() => setIsOpen(false)}
          />
          
          {/* Navigation Panel */}
          <div className="absolute top-0 right-0 h-full w-80 bg-[#0a0a0c] border-l border-white/6 transform transition-transform duration-300 ease-out">
            <div className="p-6">
              {/* Close Button */}
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-6 right-6 p-2 text-[#8A8F98] hover:text-[#EDEDEF] transition-colors duration-200 rounded-lg hover:bg-white/5"
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
              <div className="mt-16 space-y-2">
                {[
                  { href: "/about", label: "About" },
                  { href: "/services", label: "Services" },
                  { href: "/projects", label: "Projects" },
                  { href: "/skills", label: "Skills" },
                  { href: "/contact", label: "Contact" },
                ].map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block px-4 py-3 text-lg text-[#8A8F98] hover:text-[#EDEDEF] hover:bg-white/5 rounded-lg transition-all duration-200"
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
                  className="block w-full px-6 py-3 bg-[#5E6AD2] text-white text-center rounded-lg font-medium hover:bg-[#6872D9] transition-colors duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  Get in Touch
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
