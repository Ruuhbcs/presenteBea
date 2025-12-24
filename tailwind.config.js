/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'rose-950': 'var(--color-rose-950)',
        'rose-900': 'var(--color-rose-900)',
        'rose-800': 'var(--color-rose-800)',
        'gold': 'var(--color-gold)',
        'parchment': 'var(--bg-parchment)',
      },
    },
  },
  plugins: [],
};
