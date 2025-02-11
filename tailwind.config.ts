import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./Components/**/*.{js,ts,jsx,tsx,mdx}",
    "./layout/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        '8xl': '2560px'
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        green: {
          DEFAULT: "var(--green)",
        }
      },
    },
    screens: {
      'xs': '400px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1640px',
      '3xl': '1920px',
      '4xl': '2560px',
    }
  },
  plugins: [],
} satisfies Config;
