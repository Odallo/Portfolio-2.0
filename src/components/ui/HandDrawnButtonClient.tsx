"use client";

import React from 'react';
import Link from 'next/link';

interface HandDrawnButtonClientProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'accent';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
  href?: string;
}

export default function HandDrawnButtonClient({ 
  children, 
  variant = 'primary', 
  size = 'md',
  className = '',
  onClick,
  href
}: HandDrawnButtonClientProps) {
  const baseClasses = `
    relative border-[3px] border-solid font-bold transition-all duration-100
    ${variant === 'primary' 
      ? 'bg-white text-[#2d2d2d] hover:bg-[#ff4d4d] hover:text-white' 
      : variant === 'secondary'
      ? 'bg-[#e5e0d8] text-[#2d2d2d] hover:bg-[#2d5da1] hover:text-white'
      : 'bg-[#ff4d4d] text-white hover:bg-[#2d2d2d]'
    }
  `;

  const sizeClasses = {
    sm: 'px-4 py-2 text-lg',
    md: 'px-6 py-3 text-xl',
    lg: 'px-8 py-4 text-2xl',
  };

  const radius = {
    sm: '255px 15px 225px 15px / 15px 225px 15px 255px',
    md: '255px 25px 225px 25px / 25px 225px 25px 255px',
    lg: '255px 35px 225px 35px / 35px 225px 35px 255px',
  };

  const [shadow, setShadow] = React.useState('4px 4px 0px 0px #2d2d2d');
  const [transform, setTransform] = React.useState('translateX(0) translateY(0)');

  const handleMouseEnter = () => {
    setShadow('2px 2px 0px 0px #2d2d2d');
    setTransform('translateX(2px) translateY(2px)');
  };

  const handleMouseLeave = () => {
    setShadow('4px 4px 0px 0px #2d2d2d');
    setTransform('translateX(0) translateY(0)');
  };

  const handleMouseDown = () => {
    setShadow('none');
    setTransform('translateX(4px) translateY(4px)');
  };

  const handleMouseUp = () => {
    setShadow('4px 4px 0px 0px #2d2d2d');
    setTransform('translateX(0) translateY(0)');
  };

  const ButtonContent = () => (
    <div 
      className={`${baseClasses} ${sizeClasses[size]} ${className}`}
      style={{
        borderRadius: radius[size],
        boxShadow: shadow,
        transform,
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onClick={onClick}
    >
      {children}
    </div>
  );

  if (href) {
    // Check if it's an external link (PDF download) or internal route
    if (href.includes('.pdf')) {
      return <a href={href} download><ButtonContent /></a>;
    }
    return <Link href={href}><ButtonContent /></Link>;
  }

  return <ButtonContent />;
}
