export const colors = {
  bg: '#0A0A0A',
  surface: '#141414',
  card: '#1A1A1A',
  text: '#F5F5F5',
  muted: '#A1A1AA',
  accent: '#F59E0B',
  'accent-hover': '#D97706',
  border: '#27272A',
  'border-hover': '#3F3F46',
  green: '#22C55E',
} as const;

// Font families are defined as CSS variables injected by next/font in the root layout.
export const typography = {
  display: {
    fontFamily: "var(--font-display), sans-serif",
  },
  body: {
    fontFamily: "var(--font-body), sans-serif",
  },
  mono: {
    fontFamily: "var(--font-mono), monospace",
  },
} as const;
