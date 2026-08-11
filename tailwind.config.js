/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // App-ytor (djup marinblå-svart med en aning kyla)
        bg: '#080b12',
        surface: '#111725',
        'surface-2': '#18202f',
        'surface-3': '#212b3d',
        border: '#28324a',
        'border-soft': '#1e2740',
        accent: {
          DEFAULT: '#6366f1',
          soft: '#818cf8',
          strong: '#4f46e5',
        },
        // Semantiska
        success: '#34d399',
        warn: '#fbbf24',
        danger: '#fb7185',
        // Per-modul-färger (identitet)
        m1: '#22d3ee', // cyan  – Grundvetenskap
        m2: '#a78bfa', // violet – Farmakologi
        m3: '#fb7185', // rose  – Sjukdomslära
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'Segoe UI', 'Roboto', 'sans-serif'],
        display: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        card: '0 1px 2px rgba(0,0,0,0.35), 0 12px 32px -16px rgba(0,0,0,0.65)',
        'card-hover': '0 1px 2px rgba(0,0,0,0.35), 0 18px 44px -18px rgba(0,0,0,0.7)',
        glow: '0 0 0 1px rgba(99,102,241,0.25), 0 10px 40px -12px rgba(99,102,241,0.45)',
      },
      backgroundImage: {
        'hero-glow':
          'radial-gradient(60% 120% at 15% 0%, rgba(99,102,241,0.18) 0%, rgba(99,102,241,0) 60%), radial-gradient(50% 100% at 100% 0%, rgba(34,211,238,0.12) 0%, rgba(34,211,238,0) 55%)',
        'grid-fade':
          'linear-gradient(rgba(40,50,74,0.35) 1px, transparent 1px), linear-gradient(90deg, rgba(40,50,74,0.35) 1px, transparent 1px)',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in-scale': {
          '0%': { opacity: '0', transform: 'scale(0.96)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        shimmer: { '100%': { transform: 'translateX(100%)' } },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        'draw-in': {
          '0%': { 'stroke-dashoffset': '1' },
          '100%': { 'stroke-dashoffset': '0' },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.4s ease-out both',
        'fade-in-scale': 'fade-in-scale 0.35s ease-out both',
        shimmer: 'shimmer 1.4s infinite',
        float: 'float 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
