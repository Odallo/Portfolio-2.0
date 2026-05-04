"use client";

import React from 'react';

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
    transition-all duration-300 ease-out
    focus:outline-none focus-visible:ring-2 focus-visible:ring-[#6C63FF] focus-visible:ring-offset-2 focus-visible:ring-offset-[#E0E5EC]
    disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none
  `;

  const variantClasses = {
    primary: `
      bg-[#6C63FF] text-white
      shadow-[5px_5px_10px_rgb(163,177,198,0.4),-5px_-5px_10px_rgba(255,255,255,0.3),inset_0_1px_0_rgba(255,255,255,0.2)]
      hover:bg-[#8B84FF]
      hover:shadow-[8px_8px_16px_rgb(163,177,198,0.5),-8px_-8px_16px_rgba(255,255,255,0.4),inset_0_1px_0_rgba(255,255,255,0.3)]
      hover:-translate-y-1
      active:translate-y-0
      active:shadow-[inset_3px_3px_6px_rgba(0,0,0,0.2),inset_-1px_-1px_0_rgba(255,255,255,0.1)]
    `,
    secondary: `
      bg-[#E0E5EC] text-[#3D4852]
      shadow-[5px_5px_10px_rgb(163,177,198,0.6),-5px_-5px_10px_rgba(255,255,255,0.5)]
      hover:shadow-[8px_8px_16px_rgb(163,177,198,0.7),-8px_-8px_16px_rgba(255,255,255,0.6)]
      hover:-translate-y-1
      active:translate-y-0
      active:shadow-[inset_3px_3px_6px_rgb(163,177,198,0.6),inset_-3px_-3px_6px_rgba(255,255,255,0.5)]
    `,
    ghost: `
      bg-transparent text-[#6B7280]
      hover:text-[#3D4852] hover:bg-[#E0E5EC]
      hover:shadow-[inset_3px_3px_6px_rgb(163,177,198,0.4),inset_-3px_-3px_6px_rgba(255,255,255,0.3)]
      active:shadow-[inset_2px_2px_4px_rgb(163,177,198,0.4),inset_-2px_-2px_4px_rgba(255,255,255,0.3)]
    `
  };

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm rounded-xl',
    md: 'px-6 py-3 text-base rounded-2xl',
    lg: 'px-8 py-4 text-lg rounded-2xl'
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