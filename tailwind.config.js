/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'Geist', 'sans-serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', "Liberation Mono", "Courier New", 'monospace'],
        display: ['"Arial Black"', 'Impact', 'sans-serif'],
      },
      colors: {
        'void-dark': '#0a0118',
        'void-blue': '#020105',
        'cyber-red': '#ff2a2a',
        'cyber-cyan': '#00f0ff',
        'cyber-dark': '#08080c',
        'cyber-grid': '#1a1a24',
      },
      letterSpacing: {
        widest: '.2em',
        exe: '.4em',
      }
    },
  },
  plugins: [],
}
