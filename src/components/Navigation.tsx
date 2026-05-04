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

  const navLinks = [
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/projects", label: "Projects" },
    { href: "/skills", label: "Skills" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#E0E5EC]/95 backdrop-blur-xl shadow-[0_4px_20px_rgb(163,177,198,0.3)]'
          : 'bg-transparent'
      }`}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">
{/* Logo - Neumorphic Icon */}
      <Link
        href="/"
        className="flex items-center gap-3 group"
      >
        <div 
          className="w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:-translate-y-1"
          style={{
            background: '#E0E5EC',
            boxShadow: '5px 5px 10px rgb(163,177,198,0.6), -5px -5px 10px rgba(255,255,255,0.5)',
          }}
        >
          <div className="relative">
            <span className="text-2xl font-display font-bold text-[#6C63FF]">O</span>
            <div 
              className="absolute -top-1 -right-1.5 w-2 h-2 rounded-full"
              style={{ background: '#38B2AC' }}
            />
          </div>
        </div>
        <span className="hidden sm:block text-lg font-display font-bold text-[#3D4852] group-hover:text-[#6C63FF] transition-colors duration-200">
          Dev
        </span>
      </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-6">
              {navLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="relative text-base text-[#6B7280] hover:text-[#3D4852] transition-all duration-200 font-body font-medium group py-2"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#6C63FF] transition-all duration-200 group-hover:w-full" />
                </Link>
              ))}
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-3 text-[#6B7280] hover:text-[#3D4852] transition-colors duration-200 rounded-2xl hover:bg-[#E0E5EC] shadow-[3px_3px_6px_rgb(163,177,198,0.5),-3px_-3px_6px_rgba(255,255,255,0.4)] active:shadow-[inset_2px_2px_4px_rgb(163,177,198,0.4),inset_-2px_-2px_4px_rgba(255,255,255,0.3)]"
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
            className="absolute inset-0 bg-[#E0E5EC]/95 backdrop-blur-xl"
            onClick={() => setIsOpen(false)}
          />

          {/* Navigation Panel */}
          <div className="absolute top-0 right-0 h-full w-80 bg-[#E0E5EC] shadow-[-10px_0_30px_rgb(163,177,198,0.4)] transform transition-transform duration-300 ease-out">
            <div className="p-6">
              {/* Close Button */}
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-6 right-6 p-3 text-[#6B7280] hover:text-[#3D4852] transition-colors duration-200 rounded-2xl hover:bg-[#E0E5EC] shadow-[3px_3px_6px_rgb(163,177,198,0.5),-3px_-3px_6px_rgba(255,255,255,0.4)] active:shadow-[inset_2px_2px_4px_rgb(163,177,198,0.4),inset_-2px_-2px_4px_rgba(255,255,255,0.3)]"
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
              <div className="mt-20 space-y-3">
                {navLinks.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block px-6 py-4 text-lg text-[#6B7280] hover:text-[#3D4852] hover:bg-[#E0E5EC] rounded-2xl transition-all duration-200 font-body font-medium shadow-[5px_5px_10px_rgb(163,177,198,0.5),-5px_-5px_10px_rgba(255,255,255,0.4)] hover:shadow-[inset_3px_3px_6px_rgb(163,177,198,0.4),inset_-3px_-3px_6px_rgba(255,255,255,0.3)]"
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
                  className="block w-full px-6 py-4 bg-[#6C63FF] text-white text-center rounded-2xl font-body font-medium hover:bg-[#8B84FF] transition-all duration-200 shadow-[5px_5px_10px_rgb(163,177,198,0.4),-5px_-5px_10px_rgba(255,255,255,0.3),inset_0_1px_0_rgba(255,255,255,0.2)] hover:shadow-[8px_8px_16px_rgb(163,177,198,0.5),-8px_-8px_16px_rgba(255,255,255,0.4),inset_0_1px_0_rgba(255,255,255,0.3)]"
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