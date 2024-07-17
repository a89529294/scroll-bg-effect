import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        "text-blur": "text-blur 1s linear 2s",
        "bg-scroll": "bg-scroll 1s linear ",
      },
      keyframes: {
        "text-blur": {
          "0%": {
            filter: "blur(8px)",
          },
          "100%": {
            filter: "blur(0px)",
          },
        },
        "bg-scroll": {
          "0%": {
            transform: "translateY(-40%)",
          },
          "100%": {
            transform: "translateY(40px)",
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;
