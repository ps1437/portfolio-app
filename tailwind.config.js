/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    keyframes: {
      wave: {
        '0%': { transform: 'rotate(0.0deg)' },
        '10%': { transform: 'rotate(14deg)' },
        '20%': { transform: 'rotate(-8deg)' },
        '30%': { transform: 'rotate(14deg)' },
        '40%': { transform: 'rotate(-4deg)' },
        '50%': { transform: 'rotate(10.0deg)' },
        '60%': { transform: 'rotate(0.0deg)' },
        '100%': { transform: 'rotate(0.0deg)' },
      },
    },
    animation: {
      'waving-hand': 'wave 2s linear infinite',
    },
    extend: {
       animation: {
                dragonGlow: "dragonGlow 1.5s infinite",

        'kamehameha': 'kamehameha 2s ease-in-out infinite',
      },
       keyframes: {
        kamehameha: {
          '0%, 100%': { transform: 'scale(1)', opacity: '0.6' },
          '50%': { transform: 'scale(1.4)', opacity: '0.2' },
        },
      },
       fontFamily: {
        anime: ['"Luckiest Guy"', 'cursive'],
        manga: ['"Permanent Marker"', 'cursive'],
      },
      colors: {
        'secondary': '#f7ab0a',
      }
    },
    
  },
  plugins: [
    require('tailwind-scrollbar'),


  ],
}
