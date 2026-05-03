// Linear Design System Tokens
export const colors = {
  // Background System
  'background-deep': '#020203',
  'background-base': '#050506', 
  'background-elevated': '#0a0a0c',
  'surface': 'rgba(255,255,255,0.05)',
  'surface-hover': 'rgba(255,255,255,0.08)',
  
  // Typography
  'foreground': '#EDEDEF',
  'foreground-muted': '#8A8F98',
  'foreground-subtle': 'rgba(255,255,255,0.60)',
  
  // Accent Colors
  'accent': '#5E6AD2',
  'accent-bright': '#6872D9',
  'accent-glow': 'rgba(94,106,210,0.3)',
  
  // Borders
  'border-default': 'rgba(255,255,255,0.06)',
  'border-hover': 'rgba(255,255,255,0.10)',
  'border-accent': 'rgba(94,106,210,0.30)',
} as const;

// Typography Scale
export const typography = {
  display: {
    size: 'text-7xl md:text-8xl',
    weight: 'font-semibold',
    tracking: 'tracking-[-0.03em]',
    leading: 'leading-tight'
  },
  h1: {
    size: 'text-5xl md:text-6xl',
    weight: 'font-semibold', 
    tracking: 'tracking-tight',
    leading: 'leading-tight'
  },
  h2: {
    size: 'text-3xl md:text-4xl',
    weight: 'font-semibold',
    tracking: 'tracking-tight', 
    leading: 'leading-tight'
  },
  h3: {
    size: 'text-xl md:text-2xl',
    weight: 'font-semibold',
    tracking: 'tracking-tight',
    leading: 'leading-tight'
  },
  bodyLarge: {
    size: 'text-lg md:text-xl',
    weight: 'font-normal',
    tracking: '',
    leading: 'leading-relaxed'
  },
  body: {
    size: 'text-sm md:text-base',
    weight: 'font-normal',
    tracking: '',
    leading: 'leading-relaxed'
  },
  label: {
    size: 'text-xs',
    weight: 'font-mono',
    tracking: 'tracking-widest',
    leading: ''
  }
} as const;

// Border Radius System
export const radius = {
  '2xl': 'rounded-2xl', // 16px - cards, containers
  'xl': 'rounded-xl',   // 12px - icon containers
  'lg': 'rounded-lg',   // 8px - buttons, inputs
  'full': 'rounded-full' // badges, pills
} as const;

// Shadow System
export const shadows = {
  card: 'shadow-[0_0_0_1px_rgba(255,255,255,0.06),0_2px_20px_rgba(0,0,0,0.4),0_0_40px_rgba(0,0,0,0.2)]',
  cardHover: 'shadow-[0_0_0_1px_rgba(255,255,255,0.1),0_8px_40px_rgba(0,0,0,0.5),0_0_80px_rgba(94,106,210,0.1)]',
  accentGlow: 'shadow-[0_0_0_1px_rgba(94,106,210,0.5),0_4px_12px_rgba(94,106,210,0.3),inset_0_1px_0_0_rgba(255,255,255,0.2)]',
  innerHighlight: 'shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)]',
  button: 'shadow-[0_0_0_1px_rgba(255,255,255,0.06),0_2px_8px_rgba(0,0,0,0.3)]',
  buttonHover: 'shadow-[0_0_0_1px_rgba(255,255,255,0.1),0_4px_16px_rgba(0,0,0,0.4)]'
} as const;

// Animation Timing
export const animations = {
  duration: {
    fast: '200ms',
    normal: '300ms',
    slow: '600ms',
    ambient: '8000-10000ms'
  },
  easing: {
    expoOut: '[0.16, 1, 0.3, 1]',
    easeOut: 'ease-out'
  }
} as const;

// Spacing Scale (based on 4px units)
export const spacing = {
  section: 'py-24 md:py-32',
  container: 'container px-6',
  card: 'p-6 md:p-8',
  gap: 'gap-4 md:gap-8'
} as const;

// Grid System
export const grid = {
  base: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6',
  asymmetric: {
    hero: 'lg:col-span-4 lg:row-span-2',
    feature: 'lg:col-span-2',
    wide: 'lg:col-span-3'
  }
} as const;
