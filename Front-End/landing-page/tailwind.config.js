/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bgShade: '#f0f0f0', // Replace with your desired color value
        primary: '#1D4ED8', // Example primary color
      },
    },
  },
  plugins: [],
  
}

