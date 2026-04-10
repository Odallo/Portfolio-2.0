// Hand-Drawn Design System Tokens
export const colors = {
  background: '#fdfbf7', // Warm Paper
  foreground: '#2d2d2d', // Soft Pencil Black
  muted: '#e5e0d8', // Old Paper / Erased Pencil
  accent: '#ff4d4d', // Red Correction Marker
  border: '#2d2d2d', // Pencil Lead
  secondaryAccent: '#2d5da1', // Blue Ballpoint Pen
  postIt: '#fff9c4', // Post-it Yellow
  white: '#ffffff',
} as const;

export const wobblyBorders = {
  sm: '255px 15px 225px 15px / 15px 225px 15px 255px',
  md: '255px 25px 225px 25px / 25px 225px 25px 255px',
  lg: '255px 35px 225px 35px / 35px 225px 35px 255px',
  xl: '255px 45px 225px 45px / 45px 225px 45px 255px',
} as const;

export const shadows = {
  hard: '4px 4px 0px 0px #2d2d2d',
  hardLarge: '8px 8px 0px 0px #2d2d2d',
  hardSmall: '2px 2px 0px 0px #2d2d2d',
  subtle: '3px 3px 0px 0px rgba(45, 45, 45, 0.1)',
  none: 'none',
} as const;

export const animations = {
  bounce: 'bounce 3s infinite',
  jiggle: 'jiggle 0.3s ease-in-out',
} as const;
