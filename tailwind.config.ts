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
        toroi: {
          purple: "#2A0A4A",      // Deep, premium dark purple for backgrounds/headers
          lightPurple: "#6B21A8", // Vibrant purple for secondary elements
          pink: "#E81CFF",        // Striking magenta/pink for accents and hover states
          gold: "#FBBF24",        // Warm metallic gold for primary buttons
          lightGold: "#FDE68A",   // Softer gold for subtle text highlights
        },
      },
      // 👇 NEW: Added animations for the premium effects
      animation: {
        blob: "blob 7s infinite",
        'gradient-x': 'gradient-x 3s ease infinite',
      },
      // 👇 NEW: Added keyframes to tell the animations how to move
      keyframes: {
        blob: {
          "0%": { transform: "translate(0px, 0px) scale(1)" },
          "33%": { transform: "translate(30px, -50px) scale(1.1)" },
          "66%": { transform: "translate(-20px, 20px) scale(0.9)" },
          "100%": { transform: "translate(0px, 0px) scale(1)" },
        },
        'gradient-x': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center',
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;