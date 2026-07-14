"use client";

import React from 'react';
import { colors, typography } from '../../lib/design-tokens';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  className?: string;
  onClick?: () => void;
  href?: string;
}

export default function Button({ children, variant = 'primary', className = '', onClick, href }: ButtonProps) {
  const baseStyles = `px-6 py-3 font-mono text-sm uppercase tracking-wider transition-colors duration-200 cursor-pointer border-0`;

  const variantStyles = variant === 'primary'
    ? `bg-[${colors.accent}] text-white hover:bg-[${colors['accent-hover']}]`
    : `bg-transparent border border-current hover:bg-[${colors.background}]`;

  const allStyles = `${baseStyles} ${variantStyles} ${className}`;

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
