/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xs: "250px",
      sm: "380px",
      md: "768px",
      lg: "1024px",
      xl: "1200px",
      "2xl": "1500px",
    },

    extend: {
      colors: {
        mainclr: "#970747",
        mainhvr: "#7d063b",
        maingrd2: "#490222",
      },
      backgroundImage: {
        "home-bg": "url('./assets/bookbg.webp')",
      },
    },
  },
  plugins: [],
};
