/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui"
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'marker': ['Permanent Marker', 'cursive'],
        'audiowide': ['Audiowide', 'sans-serif']
      },
      backgroundImage: {
        'custom-radial': 'linear-gradient(105.5deg, rgba(31,212,248,1) 11%, rgba(218,15,183,1) 74.9%)',
        'citylife': "url('/citylife.svg')",
        'pattern': "url('/pattern.png')",
      },
      width: {
        'custom-width': 'clamp(533px, 80vw, 900px)'
      },
    }
  },
  plugins: [
    daisyui
  ],
}

