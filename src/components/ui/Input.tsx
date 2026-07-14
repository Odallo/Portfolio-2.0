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
  const baseStyles = `w-full px-4 py-3 bg-transparent border text-base outline-none transition-colors duration-200 font-body`;

  const styles = `${baseStyles} border-[${colors.border}] focus:border-[${colors.accent}] text-[${colors.text}] placeholder:text-[${colors.textMuted}] ${className}`;

  if (as === 'textarea') {
    return (
      <textarea
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        rows={rows}
        className={styles}
        style={{ fontFamily: typography.body.fontFamily }}
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
      className={styles}
      style={{ fontFamily: typography.body.fontFamily }}
    />
  );
}
