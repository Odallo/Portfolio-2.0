"use client";

import React from 'react';
import { colors } from '../../lib/design-tokens';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({ children, className = '', hover = true }: CardProps) {
  return (
    <div
      className={`p-6 transition-all duration-300 ${hover ? 'hover:border-[#3F3F46] hover:-translate-y-1' : ''} ${className}`}
      style={{
        background: colors.card,
        border: `1px solid ${colors.border}`,
      }}
    >
      {children}
    </div>
  );
}
