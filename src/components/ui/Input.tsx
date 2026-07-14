"use client";

import React from 'react';
import { colors, typography } from '../../lib/design-tokens';

interface InputProps {
  type?: string;
  placeholder?: string;
  name?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  required?: boolean;
  className?: string;
  as?: 'input' | 'textarea';
  rows?: number;
}

export default function Input({ type = 'text', placeholder, name, value, onChange, required = false, className = '', as = 'input', rows }: InputProps) {
  const style: React.CSSProperties = {
    width: '100%',
    padding: '12px 16px',
    background: colors.surface,
    color: colors.text,
    border: `1px solid ${colors.border}`,
    outline: 'none',
    fontSize: '16px',
    fontFamily: typography.body.fontFamily,
    transition: 'border-color 0.2s',
  };

  if (as === 'textarea') {
    return (
      <textarea
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        rows={rows}
        className={className}
        style={style}
      />
    );
  }

  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required={required}
      className={className}
      style={style}
    />
  );
}
