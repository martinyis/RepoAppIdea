/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      xs: "240px",
      sm: "460px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1440px",
    },
    fontWeight: {
      thin: 100,
      // Other font weights...
    },
    extend: {
      maxWidth: {
        xs: "220px",
        sm: "440px",
        md: "640px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1440px",
      },
      colors: {
        "custom-gray": "#F5F5F5",
      },
    },
  },
  plugins: [],
};
