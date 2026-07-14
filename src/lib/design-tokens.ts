export const colors = {
  background: '#FAFAFA',
  text: '#111111',
  textMuted: '#71717A',
  subtle: '#A1A1AA',
  accent: '#2563EB',
  'accent-hover': '#1D4ED8',
  border: '#E4E4E7',
  'border-strong': '#D4D4D8',
  white: '#FFFFFF',
} as const;

export const typography = {
  display: {
    size: 'text-5xl md:text-7xl lg:text-8xl',
    weight: 'font-bold',
    tracking: 'tracking-[-0.02em]',
    leading: 'leading-[0.95]',
    fontFamily: "'JetBrains Mono', monospace",
  },
  h1: {
    size: 'text-4xl md:text-5xl lg:text-6xl',
    weight: 'font-bold',
    tracking: 'tracking-[-0.02em]',
    leading: 'leading-tight',
    fontFamily: "'JetBrains Mono', monospace",
  },
  h2: {
    size: 'text-3xl md:text-4xl',
    weight: 'font-bold',
    tracking: 'tracking-[-0.01em]',
    leading: 'leading-tight',
    fontFamily: "'JetBrains Mono', monospace",
  },
  h3: {
    size: 'text-xl md:text-2xl',
    weight: 'font-semibold',
    tracking: 'tracking-normal',
    leading: 'leading-snug',
    fontFamily: "'JetBrains Mono', monospace",
  },
  body: {
    size: 'text-base md:text-lg',
    weight: 'font-normal',
    tracking: 'tracking-normal',
    leading: 'leading-relaxed',
    fontFamily: "'Inter', sans-serif",
  },
  small: {
    size: 'text-sm',
    weight: 'font-normal',
    tracking: 'tracking-normal',
    leading: 'leading-normal',
    fontFamily: "'Inter', sans-serif",
  },
  label: {
    size: 'text-xs',
    weight: 'font-medium',
    tracking: 'tracking-widest',
    leading: 'leading-normal',
    fontFamily: "'Inter', sans-serif",
  },
} as const;
