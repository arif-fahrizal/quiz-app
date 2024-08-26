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
        'marker': ['Permanent Marker', 'cursive'],
      },
      backgroundImage: {
        'custom-radial': 'linear-gradient(105.5deg, rgba(31,212,248,1) 11%, rgba(218,15,183,1) 74.9%)',
        'citylife': "url('/citylife.svg')",
        'pattern': "url('/pattern.png')",
      },
    }
  },
  plugins: [
    daisyui
  ],
}

