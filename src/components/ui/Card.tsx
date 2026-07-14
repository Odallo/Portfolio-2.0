"use client";

import React from 'react';
import { colors } from '../../lib/design-tokens';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export default function Card({ children, className = '' }: CardProps) {
  return (
    <div
      className={`p-6 border transition-colors duration-200 hover:border-[${colors['border-strong']}] ${className}`}
      style={{
        borderColor: colors.border,
      }}
    >
      {children}
    </div>
  );
}
