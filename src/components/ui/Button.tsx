"use client";

import React from 'react';
import { colors, shadows, radius, animations } from '../../lib/design-tokens';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  className = '',
  disabled = false
}: ButtonProps) {
  const baseClasses = `
    inline-flex items-center justify-center font-body font-medium
    transition-all ${animations.duration.normal} ${animations.easing.easeOut}
    focus:outline-none focus-visible:ring-2 focus-visible:ring-[${colors.accent}] focus-visible:ring-offset-2
    disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none
  `;

  const variantClasses = {
    primary: `
      text-white
      ${shadows.button}
      hover:-translate-y-0.5
      active:translate-y-0
    `,
    secondary: `
      ${shadows.card}
      hover:-translate-y-0.5
      active:translate-y-0
    `,
    ghost: `
      bg-transparent
      hover:-translate-y-0.5
      active:translate-y-0
    `
  };

  const variantStyles = {
    primary: {
      background: colors.accent,
    },
    secondary: {
      background: colors['surface-hover'] || 'rgba(255,255,255,0.08)',
      color: colors['foreground-secondary'] || '#E5E7EB',
    },
    ghost: {
      background: 'transparent',
      color: colors['foreground-muted'] || '#9CA3AF',
    }
  };

  const sizeClasses = {
    sm: `px-3 py-1.5 text-sm ${radius.lg}`,
    md: `px-4 py-2 text-base ${radius.xl}`,
    lg: `px-6 py-3 text-lg ${radius.xl}`
  };

  const combinedClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  const content = (
    <span className="relative z-10">
      {children}
    </span>
  );

  if (href) {
    if (href.includes('.pdf')) {
      return (
        <a
          href={href}
          download
          className={combinedClasses}
          style={variantStyles[variant]}
          onClick={onClick}
        >
          {content}
        </a>
      );
    }
    return (
      <a
        href={href}
        className={combinedClasses}
        style={variantStyles[variant]}
        onClick={onClick}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      className={combinedClasses}
      style={variantStyles[variant]}
      onClick={onClick}
      disabled={disabled}
    >
      {content}
    </button>
  );
}