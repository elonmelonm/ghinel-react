/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backdropBlur: {
        'xs': '2px',
        'sm': '4px',
        'md': '8px',
        'lg': '12px',
        'xl': '16px',
        '2xl': '24px',
        '3xl': '40px',
      },
      colors: {
        background: 'var(--background)',
        surface: 'var(--surface)',
        brand: 'var(--brand)',
        muted: 'var(--muted)',
        placeholder: 'var(--placeholder)',
      }
    },
  },
  plugins: [],
  safelist: [
    'backdrop-blur-sm',
    'backdrop-blur-md',
    'backdrop-blur-lg',
    'bg-background/95',
    'bg-surface/50',
    'bg-surface/90',
    'bg-brand/90',
    // Surface classes that must be preserved
    'surface-bg',
    'surface-bg-soft',
    'surface-bg-strong',
    'surface-translucent',
    'surface-translucent-soft',
    'surface-translucent-strong',
    'bg-surface',
    'bg-surface/50',
    'bg-surface/20',
    'bg-surface/95',
    'bg-surface/10',
    'bg-surface/5',
    'bg-surface/30',
    'bg-surface/40',
    'bg-surface/60',
    'bg-surface/70',
    'bg-surface/80',
    'bg-surface/90',
    'hover:bg-surface',
    'hover:bg-surface/20',
    'bg-white/10',
    'bg-white/5',
    'bg-white/20',
    'glass',
    'glass--soft',
    'glass--enhanced',
  ]
}
