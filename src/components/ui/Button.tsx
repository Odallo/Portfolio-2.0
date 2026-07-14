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
  const baseStyle: React.CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '12px 24px',
    fontSize: '14px',
    fontWeight: 500,
    letterSpacing: '0.05em',
    transition: 'all 0.2s',
    cursor: 'pointer',
    fontFamily: typography.display.fontFamily,
  };

  const variantStyles: Record<string, React.CSSProperties> = {
    primary: {
      backgroundColor: colors.accent,
      color: colors.bg,
      border: 'none',
    },
    secondary: {
      backgroundColor: 'transparent',
      color: colors.text,
      border: `1px solid ${colors.border}`,
    },
    ghost: {
      backgroundColor: 'transparent',
      color: colors.muted,
      border: 'none',
    },
  };

  const style = { ...baseStyle, ...variantStyles[variant] };

  if (href) {
    return (
      <a href={href} className={className} style={style}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={className} style={style}>
      {children}
    </button>
  );
}
