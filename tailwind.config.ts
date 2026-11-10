import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          yellow: "#FFD60A",
          red: "#E63946",
          black: "#111111",
          white: "#FFFFFF",
          gray: "#F5F5F5",
        },
      },
    },
  },
  plugins: [],
};
export default config;
