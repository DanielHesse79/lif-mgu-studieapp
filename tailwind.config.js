/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // App surfaces (near-black slate)
        bg: '#0a0e16',
        surface: '#121826',
        'surface-2': '#1a2233',
        border: '#283044',
        accent: {
          DEFAULT: '#6366f1',
          soft: '#818cf8',
        },
        // Per-module accent colors
        m1: '#22d3ee', // cyan  – Grundvetenskap
        m2: '#a78bfa', // violet – Farmakologi
        m3: '#fb7185', // rose  – Sjukdomslära
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(6px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        shimmer: {
          '100%': { transform: 'translateX(100%)' },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.35s ease-out',
        shimmer: 'shimmer 1.4s infinite',
      },
    },
  },
  plugins: [],
}
