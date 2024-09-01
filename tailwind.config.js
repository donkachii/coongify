/** @type {import('tailwindcss').Config} */

import { nextui } from "@nextui-org/react";

module.exports = {
  content: [
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
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
    },
  },
  plugins: [
    nextui({
      defaultTheme: "light",
      defaultExtendTheme: "light",
      themes: {
        light: {
          colors: {
            primary: {
              DEFAULT: "#F7813F",
              foreground: "#000000",
            },
            secondary: {
              foreground: "#FFFFFF",
              DEFAULT: "#BBE4DC",
            },
            focus: "#F7813F",
          },
        },
        dark: {
          colors: {
            primary: {
              DEFAULT: "#F7813F",
              foreground: "#000000",
            },
            secondary: {
              foreground: "#FFFFFF",
              DEFAULT: "#BBE4DC",
            },
            focus: "#F7813F",
          },
        },
      },
    }),
  ],
};
