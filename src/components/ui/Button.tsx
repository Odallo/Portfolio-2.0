"use client";

import React from 'react';
import { colors, typography } from '../../lib/design-tokens';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
  className?: string;
  onClick?: () => void;
  href?: string;
}

export default function Button({ children, variant = 'primary', className = '', onClick, href }: ButtonProps) {
  const base = `inline-flex items-center justify-center px-6 py-3 text-sm font-medium tracking-wide transition-all duration-200 cursor-pointer`;

  const variants: Record<string, string> = {
    primary: `bg-[${colors.accent}] text-[${colors.bg}] hover:bg-[${colors['accent-hover']}]`,
    secondary: `bg-transparent text-[${colors.text}] border border-[${colors.border}] hover:border-[${colors.accent}] hover:text-[${colors.accent}]`,
    ghost: `bg-transparent text-[${colors.muted}] hover:text-[${colors.text}]`,
  };

  const allStyles = `${base} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={allStyles} style={{ fontFamily: typography.display.fontFamily }}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={allStyles} style={{ fontFamily: typography.display.fontFamily }}>
      {children}
    </button>
  );
}
