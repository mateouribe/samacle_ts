/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        black: "#282828",
        white: "#FFFFFF",
        main: "#EF4E26",
        lightGray: "#F6F6F6",
        gray: "#808080",
        beige: "#FAF0E6",
      },
      fontFamily: {
        nHasGrotexk: ["NHaasGroteskTXPro", "sans-serif"],
        swearDisplay: ["SwearDisplay", "serif"],
      },
      padding: {
        mobile: "20px",
        tablet: "50px",
        desktop: "100px",
      },
      fontSize: {
        titleDesktop: "48px",
        titleTablet: "38px",
        titleMobile: "28px",
        subtitleDesktop: "30px",
        subtitleTablet: "24px",
        text: "16px",
        sm: "14px",
        xsm: "12px",
      },
      spacing: {
        5: "5px",
        10: "10px",
        20: "20px",
        30: "30px",
        50: "50px",
        100: "100px",
        view: "100vh",
      },
      screens: {
        lg: "1180px",
      },
      borderRadius: {
        10: "10px",
        20: "20px",
        button: "500px",
      },
    },
  },
  plugins: [],
};
