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
    ${hover ? 'hover:-translate-y-0.5' : ''}
    ${shadows.card}
  `;

  const variantClasses = {
    default: `${radius['2xl']}`,
    glass: `${radius['2xl']} backdrop-blur-xl`,
    gradient: `${radius['2xl']}`,
  };

  const variantStyles = {
    default: {
      background: colors['background-elevated'] || '#111111',
      border: `1px solid ${colors['border-default'] || 'rgba(255,255,255,0.08)'}`,
    },
    glass: {
      background: colors.surface || 'rgba(255,255,255,0.04)',
      border: `1px solid ${colors['border-default'] || 'rgba(255,255,255,0.08)'}`,
    },
    gradient: {
      background: 'linear-gradient(135deg, rgba(99,102,241,0.1) 0%, rgba(139,92,246,0.1) 100%)',
      border: `1px solid ${colors['border-accent'] || 'rgba(99,102,241,0.30)'}`,
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
      } as unknown as React.CSSProperties}
    >
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}