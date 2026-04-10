import React from 'react';

interface WobblyBorderProps {
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  shadow?: 'hard' | 'hardLarge' | 'hardSmall' | 'subtle' | 'none';
  decoration?: 'tape' | 'tack' | 'none';
  rotate?: number;
}

export const wobblyBorderRadius = {
  sm: '255px 15px 225px 15px / 15px 225px 15px 255px',
  md: '255px 25px 225px 25px / 25px 225px 25px 255px',
  lg: '255px 35px 225px 35px / 35px 225px 35px 255px',
  xl: '255px 45px 225px 45px / 45px 225px 45px 255px',
} as const;

export const hardShadows = {
  hard: '4px 4px 0px 0px #2d2d2d',
  hardLarge: '8px 8px 0px 0px #2d2d2d',
  hardSmall: '2px 2px 0px 0px #2d2d2d',
  subtle: '3px 3px 0px 0px rgba(45, 45, 45, 0.1)',
  none: 'none',
} as const;

export default function WobblyBorder({ 
  children, 
  size = 'md', 
  className = '', 
  shadow = 'hard',
  decoration = 'none',
  rotate = 0
}: WobblyBorderProps) {
  const radius = wobblyBorderRadius[size];
  const boxShadow = hardShadows[shadow];
  const rotation = rotate ? `rotate(${rotate}deg)` : '';

  return (
    <div 
      className={`relative ${className}`}
      style={{
        borderRadius: radius,
        boxShadow,
        transform: rotation,
      }}
    >
      {decoration === 'tape' && (
        <div 
          className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-6 bg-gray-300 opacity-60"
          style={{
            borderRadius: '255px 15px 225px 15px / 15px 225px 15px 255px',
            transform: 'translateX(-50%) translateY(-50%) rotate(-2deg)',
          }}
        />
      )}
      
      {decoration === 'tack' && (
        <div 
          className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-red-500 rounded-full border-2 border-gray-800"
          style={{
            transform: 'translateX(-50%) translateY(-50%)',
          }}
        />
      )}
      
      {children}
    </div>
  );
}
