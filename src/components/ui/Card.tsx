"use client";

import React from 'react';
import { colors } from '../../lib/design-tokens';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export default function Card({ children, className = '' }: CardProps) {
  const style: React.CSSProperties = {
    padding: '24px',
    background: colors.card,
    border: `1px solid ${colors.border}`,
    transition: 'all 0.3s',
  };

  return (
    <div className={className} style={style}>
      {children}
    </div>
  );
}
