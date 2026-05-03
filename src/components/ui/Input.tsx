"use client";

import React from 'react';

interface InputProps {
  type?: 'text' | 'email' | 'password' | 'textarea';
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  label?: string;
  required?: boolean;
  className?: string;
  rows?: number;
}

export default function Input({ 
  type = 'text', 
  placeholder, 
  value, 
  onChange, 
  label,
  required = false,
  className = '',
  rows = 3
}: InputProps) {
  const baseClasses = `
    w-full bg-[#0F0F12] border border-white/10 rounded-lg text-gray-100
    placeholder-gray-500 transition-all duration-200 ease-out
    focus:outline-none focus:ring-2 focus:ring-[#5E6AD2]/50 focus:ring-offset-2 focus:ring-offset-[#050506]
    focus:border-[#5E6AD2] focus:bg-[#0F0F12]
    hover:border-white/15
  `;

  const sizeClasses = type === 'textarea' 
    ? `px-4 py-3 text-sm resize-none` 
    : `px-4 py-3 text-base`;

  const combinedClasses = `${baseClasses} ${sizeClasses} ${className}`;

  const inputElement = type === 'textarea' ? (
    <textarea
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      required={required}
      rows={rows}
      className={combinedClasses}
    />
  ) : (
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      required={required}
      className={combinedClasses}
    />
  );

  if (label) {
    return (
      <div className="space-y-2">
        <label className="text-xs font-mono tracking-widest text-[#8A8F98] uppercase">
          {label}
          {required && <span className="text-[#5E6AD2] ml-1">*</span>}
        </label>
        {inputElement}
      </div>
    );
  }

  return inputElement;
}
