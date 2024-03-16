import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        symlink: "var(--font-symlink)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      white: "#ebebeb",
      black: "#101010",
      green: "#0ECC88",
      orange: "#EDAE0D",
      red: "#ED0D35",
    },
    spacing: {
      "1": "1px",
      "2": "2px",
      "3": "5px",
      "4": "10px",
      "5": "15px",
      "6": "20px",
      "7": "24px",
      "8": "30px",
      "9": "40px",
      "10": "50px",
      "11": "60px",
      "12": "70px",
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
export default config;
