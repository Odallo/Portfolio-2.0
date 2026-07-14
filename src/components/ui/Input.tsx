"use client";

import React from 'react';
import { colors, radius, animations } from '../../lib/design-tokens';

interface InputProps {
  type?: 'text' | 'email' | 'password' | 'textarea';
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  label?: string;
  required?: boolean;
  className?: string;
  rows?: number;
  name?: string;
}

export default function Input({
  type = 'text',
  placeholder,
  value,
  onChange,
  label,
  required = false,
  className = '',
  rows = 4,
  name
}: InputProps) {
  const baseClasses = `
    w-full border-none outline-none
    transition-all ${animations.duration.normal} ${animations.easing.easeOut}
  `;

  const sizeClasses = type === 'textarea'
    ? `px-4 py-3 text-base resize-none ${radius.xl}`
    : `px-4 py-3 text-base ${radius.xl}`;

  const combinedClasses = `${baseClasses} ${sizeClasses} ${className}`;

  const inputStyle = {
    background: colors.background-subtle,
    color: colors.foreground-secondary,
    boxShadow: `inset 0 1px 2px rgba(0,0,0,0.3), 0 0 0 1px ${colors.border-default}`,
  } as React.CSSProperties;

  const focusClasses = `
    focus:shadow-[inset_0_2px_4px_rgba(0,0,0,0.4),0_0_0_2px_${colors.accent}]
  `;

  const inputElement = type === 'textarea' ? (
    <textarea
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      required={required}
      rows={rows}
      className={`${combinedClasses} ${focusClasses}`}
      style={inputStyle}
    />
  ) : (
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      required={required}
      className={`${combinedClasses} ${focusClasses}`}
      style={inputStyle}
    />
  );

  if (label) {
    return (
      <div className="space-y-2">
        <label className={`text-sm font-body font-medium ml-1`} style={{ color: colors.foreground-muted }}>
          {label}
          {required && <span className="ml-1" style={{ color: colors.accent }}>*</span>}
        </label>
        {inputElement}
      </div>
    );
  }

  return inputElement;
}