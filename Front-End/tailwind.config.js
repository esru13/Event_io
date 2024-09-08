/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        custom: "#F5F5F5",
        primary: "#5B9DA1",
        secondary: "#B1B1B1",
        "blue-bg": "#6EC6CA",
        "text-color": "#343C6A",
        "icon-color": "#666666",
        "custom-black": "#333333",
      },
      width: {
        "600px": "600px",
        "680px": "680px",
        "350px": "350px",
        "300px": "300px",
      },
      margin: {
        "360px": "360px",
      },
    },
  },
  plugins: [],
};
