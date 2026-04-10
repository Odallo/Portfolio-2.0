import React from 'react';
import { wobblyBorderRadius } from './WobblyBorder';

interface HandDrawnInputProps {
  placeholder?: string;
  type?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  label?: string;
  required?: boolean;
}

export default function HandDrawnInput({ 
  placeholder,
  type = 'text',
  value,
  onChange,
  className = '',
  label,
  required = false
}: HandDrawnInputProps) {
  return (
    <div className={className}>
      {label && (
        <label className="block text-lg font-bold mb-2 text-[#2d2d2d]">
          {label}
          {required && <span className="text-[#ff4d4d] ml-1">*</span>}
        </label>
      )}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        className="
          w-full px-4 py-3 bg-white border-2 border-solid text-[#2d2d2d] placeholder-[#2d2d2d]/40
          focus:border-[#2d5da1] focus:outline-none focus:ring-2 focus:ring-[#2d5da1]/20
          transition-all duration-100
        "
        style={{
          borderRadius: wobblyBorderRadius.md,
          boxShadow: '3px 3px 0px 0px rgba(45, 45, 45, 0.1)',
        }}
      />
    </div>
  );
}
