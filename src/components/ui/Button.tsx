"use client";

import React from 'react';
import { colors, shadows, radius, animations } from '../lib/design-tokens';

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
    focus:outline-none focus-visible:ring-2 focus-visible:ring-[${colors.accent}] focus-visible:ring-offset-2 focus-visible:ring-offset-[${colors.surface-hover}]
    disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none
  `;

  const variantClasses = {
    primary: `
      bg-[${colors.accent}] text-white
      ${shadows.button}
      hover:bg-[${colors.accent-bright}]
      ${shadows.buttonHover}
      hover:-translate-y-1
      active:translate-y-0
      active:shadow-[inset_3px_3px_6px_rgb(163,177,198,0.2),inset_-1px_-1px_0_rgba(255,255,255,0.1)]
    `,
    secondary: `
      bg-[${colors.surface-hover}] text-[${colors.foreground-secondary}]
      ${shadows.card}
      hover:${shadows.cardHover}
      hover:-translate-y-1
      active:translate-y-0
      active:shadow-[inset_3px_3px_6px_rgb(163,177,198,0.4),inset_-3px_-3px_6px_rgba(255,255,255,0.3)]
    `,
    ghost: `
      bg-transparent text-[${colors.foreground-muted}]
      hover:text-[${colors.foreground-secondary}] hover:bg-[${colors.surface-hover}]
      hover:shadow-[inset_3px_3px_6px_rgb(163,177,198,0.2),inset_-3px_-3px_6px_rgba(255,255,255,0.1)]
      active:shadow-[inset_2px_2px_4px_rgb(163,177,198,0.2),inset_-2px_-2px_4px_rgba(255,255,255,0.1)]
    `
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
        onClick={onClick}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      className={combinedClasses}
      onClick={onClick}
      disabled={disabled}
    >
      {content}
    </button>
  );
}