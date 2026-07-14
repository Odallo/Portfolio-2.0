"use client";

import React from 'react';
import { colors, shadows, radius } from '../../lib/design-tokens';

interface CardProps {
  children: React.ReactNode;
  variant?: 'default' | 'glass' | 'gradient';
  hover?: boolean;
  spotlight?: boolean;
  className?: string;
  onMouseMove?: (e: React.MouseEvent<HTMLDivElement>) => void;
}

export default function Card({
  children,
  variant = 'default',
  hover = true,
  spotlight = false,
  className = '',
  onMouseMove
}: CardProps) {
  const baseClasses = `
    transition-all duration-300 ease-out
    ${hover ? 'hover:-translate-y-1' : ''}
  `;

  const variantClasses = {
    default: `
      rounded-2xl
      hover:shadow-[${shadows.cardHover}]
    `,
    glass: `
      backdrop-blur-xl rounded-2xl
    `,
    gradient: `
      rounded-2xl
    `
  };

  const variantStyles = {
    default: {
      background: colors.background-elevated,
      boxShadow: shadows.card,
      border: `1px solid ${colors.border-default}`,
    },
    glass: {
      background: colors.surface,
      boxShadow: shadows.card,
      border: `1px solid ${colors.border-default}`,
      backdropFilter: 'blur(16px)',
    },
    gradient: {
      background: 'linear-gradient(135deg, rgba(99,102,241,0.1) 0%, rgba(139,92,246,0.1) 100%)',
      boxShadow: shadows.card,
      border: `1px solid ${colors.border-accent}`,
    }
  };

  const combinedClasses = `${baseClasses} ${variantClasses[variant]} ${className}`;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (spotlight && onMouseMove) {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;

      e.currentTarget.style.setProperty('--mouse-x', `${x}%`);
      e.currentTarget.style.setProperty('--mouse-y', `${y}%`);
    }

    if (onMouseMove) {
      onMouseMove(e);
    }
  };

  return (
    <div
      className={combinedClasses}
      onMouseMove={handleMouseMove}
      style={{
        ...variantStyles[variant],
        '--mouse-x': '50%',
        '--mouse-y': '50%',
      } as React.CSSProperties}
    >
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}