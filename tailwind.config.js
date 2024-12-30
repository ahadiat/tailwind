/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        spin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        rotate: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(180deg)' },
        },
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite', // Slow spinning animation
        'spin-fast': 'spin 1s linear infinite', // Fast spinning animation
        'rotate-slow': 'rotate 1s linear', // Slow rotation animation
      },

      fontFamily: {
        cookie: ['"Cookie"', 'serif'],
      },
    },
    },
  
  plugins: [],
}

