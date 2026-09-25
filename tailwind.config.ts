import type { Config } from 'tailwindcss';

// Design tokens mirror the Axpense product UI (axpense.lovable.app):
// shadcn/ui-style HSL CSS variables defined in app/globals.css.
// Legacy token names (brand-*, ink-*, line, surface) are kept and mapped onto
// the same variables so every existing component picks up the app look.
const v = (name: string) => `hsl(var(--${name}) / <alpha-value>)`;

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // shadcn / app tokens
        border: v('border'),
        input: v('input'),
        ring: v('ring'),
        background: v('background'),
        foreground: v('foreground'),
        primary: { DEFAULT: v('primary'), foreground: v('primary-foreground') },
        secondary: { DEFAULT: v('secondary'), foreground: v('secondary-foreground') },
        muted: { DEFAULT: v('muted'), foreground: v('muted-foreground') },
        accent: { DEFAULT: v('accent'), foreground: v('accent-foreground') },
        destructive: { DEFAULT: v('destructive'), foreground: v('destructive-foreground') },
        card: { DEFAULT: v('card'), foreground: v('card-foreground') },
        sidebar: {
          DEFAULT: v('sidebar-background'),
          foreground: v('sidebar-foreground'),
          primary: v('sidebar-primary'),
          accent: v('sidebar-accent'),
          'accent-foreground': v('sidebar-accent-foreground'),
          border: v('sidebar-border'),
        },
        panel: { 1: v('axpense-panel-1'), 2: v('axpense-panel-2'), 3: v('axpense-panel-3'), 4: v('axpense-panel-4') },

        // legacy names → app tokens
        brand: {
          teal: {
            DEFAULT: v('primary'),
            50: v('axpense-panel-1'),
            100: v('axpense-panel-2'),
            400: v('axpense-teal-glow'),
            600: v('primary'),
            700: v('primary-strong'),
          },
          navy: { DEFAULT: v('foreground'), 900: v('foreground'), 800: v('foreground'), 700: v('foreground') },
          slate: { DEFAULT: v('muted-foreground'), 300: v('muted-foreground'), 500: v('muted-foreground') },
        },
        ink: { 900: v('foreground'), 700: v('ink-soft'), 500: v('muted-foreground'), 300: v('axpense-neutral') },
        line: v('border'),
        surface: { DEFAULT: v('card'), alt: v('background') },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'Inter', 'system-ui', 'sans-serif'],
        arabic: ['var(--font-ibm-plex-arabic)', 'var(--font-inter)', 'Tahoma', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
        card: 'var(--radius)',
      },
      boxShadow: {
        card: 'var(--shadow-card)',
        elevated: 'var(--shadow-elevated)',
        glow: 'var(--shadow-glow)',
      },
      backgroundImage: {
        'gradient-primary': 'var(--gradient-primary)',
        'gradient-card': 'var(--gradient-card)',
        'gradient-panel': 'var(--gradient-panel)',
        'gradient-hero': 'var(--gradient-hero)',
        'gradient-light': 'var(--gradient-light)',
      },
      maxWidth: { wrap: '1160px' },
    },
  },
  plugins: [],
};

export default config;
