// Linear Design System Tokens
export const colors = {
  // Background System
  'background-deep': '#050505',
  'background-base': '#0A0A0A',
  'background-elevated': '#111111',
  'background-subtle': '#1A1A1A',
  'surface': 'rgba(255,255,255,0.04)',
  'surface-hover': 'rgba(255,255,255,0.08)',
  
  // Typography
  'foreground-primary': '#FFFFFF',
  'foreground-secondary': '#E5E7EB',
  'foreground-muted': '#9CA3AF',
  'foreground-subtle': 'rgba(255,255,255,0.60)',
  
  // Accent Colors - Updated to a consistent blue-purple palette
  'accent': '#6366F1',
  'accent-bright': '#818CF8',
  'accent-glow': 'rgba(99,102,241,0.2)',
  'accent-teal': '#14B8A6',
  'accent-purple': '#A855F7',
  
  // Border System
  'border-default': 'rgba(255,255,255,0.08)',
  'border-hover': 'rgba(255,255,255,0.15)',
  'border-accent': 'rgba(99,102,241,0.30)',
  
  // Semantic Colors
  'error': '#EF4444',
  'success': '#10B981',
  'warning': '#F59E0B',
  'info': '#3B82F6',
  
  // Overlay Colors
  'overlay-dark': 'rgba(0,0,0,0.6)',
  'overlay-light': 'rgba(255,255,255,0.05)',
  
  // Background Gradients
  'gradient-primary': 'linear-gradient(135deg, #6366F1 0%, #8B5CF6 100%)',
  'gradient-subtle': 'linear-gradient(135deg, rgba(99,102,241,0.1) 0%, rgba(139,92,246,0.1) 100%)',
} as const;

// Typography Scale
export const typography = {
  display: {
    size: 'text-6xl md:text-8xl',
    weight: 'font-bold',
    tracking: 'tracking-[-0.04em]',
    leading: 'leading-tight'
  },
  h1: {
    size: 'text-4xl md:text-6xl',
    weight: 'font-bold', 
    tracking: 'tracking-[-0.02em]',
    leading: 'leading-tight'
  },
  h2: {
    size: 'text-3xl md:text-5xl',
    weight: 'font-semibold',
    tracking: 'tracking-tight', 
    leading: 'leading-tight'
  },
  h3: {
    size: 'text-xl md:text-2xl',
    weight: 'font-semibold',
    tracking: 'tracking-tight',
    leading: 'leading-snug'
  },
  bodyLarge: {
    size: 'text-lg md:text-xl',
    weight: 'font-normal',
    tracking: 'tracking-normal',
    leading: 'leading-relaxed'
  },
  body: {
    size: 'text-base md:text-lg',
    weight: 'font-normal',
    tracking: 'tracking-normal',
    leading: 'leading-relaxed'
  },
  caption: {
    size: 'text-sm',
    weight: 'font-normal',
    tracking: 'tracking-wide',
    leading: 'leading-normal'
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
