import React from 'react';
import { wobblyBorderRadius, hardShadows } from './WobblyBorder';

interface HandDrawnButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
  href?: string;
}

export default function HandDrawnButton({ 
  children, 
  variant = 'primary', 
  size = 'md',
  className = '',
  onClick,
  href
}: HandDrawnButtonProps) {
  const baseClasses = `
    relative border-[3px] border-solid font-bold transition-all duration-100
    hover:translate-x-[2px] hover:translate-y-[2px] active:translate-x-[4px] active:translate-y-[4px]
    ${variant === 'primary' 
      ? 'bg-white text-[#2d2d2d] hover:bg-[#ff4d4d] hover:text-white' 
      : 'bg-[#e5e0d8] text-[#2d2d2d] hover:bg-[#2d5da1] hover:text-white'
    }
  `;

  const sizeClasses = {
    sm: 'px-4 py-2 text-lg',
    md: 'px-6 py-3 text-xl',
    lg: 'px-8 py-4 text-2xl',
  };

  const radius = {
    sm: wobblyBorderRadius.sm,
    md: wobblyBorderRadius.md,
    lg: wobblyBorderRadius.lg,
  };

  const shadow = {
    normal: hardShadows.hard,
    hover: hardShadows.hardSmall,
    active: hardShadows.none,
  };

  const ButtonContent = () => (
    <div 
      className={`${baseClasses} ${sizeClasses[size]} ${className}`}
      style={{
        borderRadius: radius[size],
        boxShadow: shadow.normal,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = shadow.hover;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = shadow.normal;
      }}
      onMouseDown={(e) => {
        e.currentTarget.style.boxShadow = shadow.active;
      }}
      onMouseUp={(e) => {
        e.currentTarget.style.boxShadow = shadow.normal;
      }}
      onClick={onClick}
    >
      {children}
    </div>
  );

  if (href) {
    return <a href={href}><ButtonContent /></a>;
  }

  return <ButtonContent />;
}
