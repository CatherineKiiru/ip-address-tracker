/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "375px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    
    fontFamily: {
      sans: ["Rubik", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        "desktop-image": "url(img/pattern-bg-desktop.png)",
        "mobile-image": "url(img/pattern-bg-mobile.png)",
      },
      colors: {
        veryDarkGray: "#2b2b2b",
        darkGray: "#969696",
        white: "#ffffff",
      },
    },

    plugins: [],
  },
};
