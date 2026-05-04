"use client";

import React from 'react';

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
    bg-[#E0E5EC] rounded-[32px]
    transition-all duration-300 ease-out
    ${hover ? 'hover:-translate-y-1' : ''}
  `;

  const variantClasses = {
    default: `
      shadow-[9px_9px_16px_rgb(163,177,198,0.6),-9px_-9px_16px_rgba(255,255,255,0.5)]
      ${hover ? 'hover:shadow-[12px_12px_24px_rgb(163,177,198,0.7),-12px_-12px_24px_rgba(255,255,255,0.6)]' : ''}
    `,
    glass: `
      shadow-[9px_9px_16px_rgb(163,177,198,0.6),-9px_-9px_16px_rgba(255,255,255,0.5)]
      ${hover ? 'hover:shadow-[12px_12px_24px_rgb(163,177,198,0.7),-12px_-12px_24px_rgba(255,255,255,0.6)]' : ''}
    `,
    gradient: `
      shadow-[9px_9px_16px_rgb(163,177,198,0.6),-9px_-9px_16px_rgba(255,255,255,0.5)]
      ${hover ? 'hover:shadow-[12px_12px_24px_rgb(163,177,198,0.7),-12px_-12px_24px_rgba(255,255,255,0.6)]' : ''}
    `
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