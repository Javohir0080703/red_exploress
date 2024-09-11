/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "#FFA500": "#FFA500",
        "#0336FF": "#0336FF",
        "#000000": "#000000",
        "#FFFEFE":"#FFFEFE",
        "#0A0909":"#0A0909",
        "#4056AC":"#4056AC",
        "#60B7FE":"#60B7FE",
        "#FE2C3C":"#FE2C3C",
        "#E14D93":"#E14D93",
        "#C4C4C4":"#C4C4C4"
      },
      lineHeight: {
        "14px": "14px",
      },
      boxShadow: {
        "custom-1": "0px 2.77px 6.23px 0px #00000005",
        "custom-2": "0px 6.65px 14.96px 0px #00000007",
        "custom-3": "0px 12.52px 28.17px 0px #00000009",
        "custom-4": "0px 22.34px 50.26px 0px #0000000B",
        "custom-5": "0px 41.78px 94px 0px #0000000D",
        "custom-6": "0px 500px 10px 0px #00000012",
      },
    },
  },
  plugins: [],
};
