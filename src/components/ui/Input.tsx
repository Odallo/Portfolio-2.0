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
    w-full bg-[#E0E5EC] text-[#3D4852] placeholder-[#A0AEC0]
    border-none outline-none
    shadow-[inset_6px_6px_12px_rgb(163,177,198,0.6),inset_-6px_-6px_12px_rgba(255,255,255,0.5)]
    transition-all duration-300 ease-out
    focus:shadow-[inset_10px_10px_20px_rgb(163,177,198,0.7),inset_-10px_-10px_20px_rgba(255,255,255,0.6),0_0_0_2px_#6C63FF]
  `;

  const sizeClasses = type === 'textarea'
    ? `px-5 py-4 text-base resize-none rounded-2xl`
    : `px-5 py-4 text-base rounded-2xl`;

  const combinedClasses = `${baseClasses} ${sizeClasses} ${className}`;

  const inputElement = type === 'textarea' ? (
    <textarea
      name={name}
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
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      required={required}
      className={combinedClasses}
    />
  );

  if (label) {
    return (
      <div className="space-y-3">
        <label className="text-sm font-body font-medium text-[#3D4852] ml-1">
          {label}
          {required && <span className="text-[#6C63FF] ml-1">*</span>}
        </label>
        {inputElement}
      </div>
    );
  }

  return inputElement;
}