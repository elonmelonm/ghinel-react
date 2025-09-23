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
  ]
}
