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
    inline-flex items-center justify-center font-medium transition-all duration-200 ease-out
    focus:outline-none focus:ring-2 focus:ring-[#5E6AD2]/50 focus:ring-offset-2 focus:ring-offset-[#050506]
    disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none
  `;

  const variantClasses = {
    primary: `
      bg-[#5E6AD2] text-white rounded-lg
      shadow-[0_0_0_1px_rgba(94,106,210,0.5),0_4px_12px_rgba(94,106,210,0.3),inset_0_1px_0_0_rgba(255,255,255,0.2)]
      hover:bg-[#6872D9] hover:shadow-[0_0_0_1px_rgba(94,106,210,0.7),0_6px_20px_rgba(94,106,210,0.4),inset_0_1px_0_0_rgba(255,255,255,0.3)]
      hover:-translate-y-0.5
      active:scale-[0.98] active:translate-y-0 active:shadow-[0_0_0_1px_rgba(94,106,210,0.4),0_2px_8px_rgba(94,106,210,0.2),inset_0_1px_0_0_rgba(255,255,255,0.1)]
    `,
    secondary: `
      bg-white/5 text-[#EDEDEF] rounded-lg border border-white/10
      shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)]
      hover:bg-white/8 hover:border-white/15 hover:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.2),0_4px_12px_rgba(0,0,0,0.2)]
      hover:-translate-y-0.5
      active:scale-[0.98] active:translate-y-0
    `,
    ghost: `
      bg-transparent text-[#8A8F98] rounded-lg
      hover:bg-white/5 hover:text-[#EDEDEF] hover:-translate-y-0.5
      active:scale-[0.98] active:translate-y-0
    `
  };

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
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
