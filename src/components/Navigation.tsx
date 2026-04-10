"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#fdfbf7] border-b-4 border-[#2d2d2d]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <Link 
            href="/" 
            className="text-3xl font-bold text-[#2d2d2d] hover:rotate-1 transition-transform duration-100"
            style={{ fontFamily: 'Kalam, cursive' }}
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
                className="text-xl text-[#2d2d2d] hover:text-[#ff4d4d] transition-colors duration-100 hover:rotate-1 transform"
                style={{
                  textDecoration: 'underline',
                  textDecorationStyle: 'wavy',
                  textDecorationColor: 'transparent',
                  textDecorationThickness: '2px',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.textDecorationColor = '#ff4d4d';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.textDecorationColor = 'transparent';
                }}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-[#2d2d2d] hover:text-[#ff4d4d] transition-colors duration-100 p-2"
            style={{
              borderRadius: '255px 15px 225px 15px / 15px 225px 15px 255px',
              border: '3px solid #2d2d2d',
              boxShadow: '4px 4px 0px 0px #2d2d2d',
            }}
          >
            <svg
              className="w-8 h-8"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="3"
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

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-6 space-y-4 bg-[#fdfbf7] border-4 border-[#2d2d2d] mt-2"
            style={{
              borderRadius: '255px 25px 225px 25px / 25px 225px 25px 255px',
              boxShadow: '4px 4px 0px 0px #2d2d2d',
            }}
          >
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
                className="block py-3 text-xl text-[#2d2d2d] hover:text-[#ff4d4d] transition-colors duration-100 hover:rotate-1 transform px-4"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
