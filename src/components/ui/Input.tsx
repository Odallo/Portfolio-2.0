"use client";

import React from 'react';
import { colors, typography } from '../../lib/design-tokens';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  as?: 'input' | 'textarea';
  rows?: number;
}

const Input = React.forwardRef<HTMLInputElement | HTMLTextAreaElement, InputProps>(
  ({ type = 'text', placeholder, name, id, required = false, className = '', as = 'input', rows, ...rest }, ref) => {
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
          ref={ref as React.Ref<HTMLTextAreaElement>}
          name={name}
          id={id}
          placeholder={placeholder}
          required={required}
          rows={rows}
          className={className}
          style={style}
          {...rest}
        />
      );
    }

    return (
      <input
        ref={ref as React.Ref<HTMLInputElement>}
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
        required={required}
        className={className}
        style={style}
        {...rest}
      />
    );
  }
);

Input.displayName = 'Input';

export default Input;
