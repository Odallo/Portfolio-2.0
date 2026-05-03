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
    rounded-2xl transition-all duration-300 ease-[0.16,1,0.3,1]
    ${hover ? 'hover:-translate-y-1' : ''}
  `;

  const variantClasses = {
    default: `
      bg-gradient-to-b from-white/8 to-white/2 
      border border-white/6
      shadow-[0_0_0_1px_rgba(255,255,255,0.06),0_2px_20px_rgba(0,0,0,0.4),0_0_40px_rgba(0,0,0,0.2)]
      ${hover ? 'hover:border-white/10 hover:shadow-[0_0_0_1px_rgba(255,255,255,0.1),0_8px_40px_rgba(0,0,0,0.5),0_0_80px_rgba(94,106,210,0.1)]' : ''}
    `,
    glass: `
      bg-white/5 backdrop-blur-xl
      border border-white/8
      shadow-[0_0_0_1px_rgba(255,255,255,0.08),0_4px_30px_rgba(0,0,0,0.3)]
      ${hover ? 'hover:bg-white/8 hover:border-white/12 hover:shadow-[0_0_0_1px_rgba(255,255,255,0.12),0_12px_50px_rgba(0,0,0,0.4),0_0_100px_rgba(94,106,210,0.08)]' : ''}
    `,
    gradient: `
      bg-gradient-to-br from-white/8 via-white/4 to-transparent
      border border-white/6
      relative overflow-hidden
      shadow-[0_0_0_1px_rgba(255,255,255,0.06),0_2px_20px_rgba(0,0,0,0.4),0_0_40px_rgba(0,0,0,0.2)]
      ${hover ? 'hover:border-white/10 hover:shadow-[0_0_0_1px_rgba(255,255,255,0.1),0_8px_40px_rgba(0,0,0,0.5),0_0_80px_rgba(94,106,210,0.1)]' : ''}
    `
  };

  const combinedClasses = `${baseClasses} ${variantClasses[variant]} ${spotlight ? 'spotlight' : ''} ${className}`;

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
      {variant === 'gradient' && (
        <div className="absolute inset-0 bg-gradient-to-t from-[#5E6AD2]/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
      )}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}
