import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#0B5B4C", // dark green from logo
          foreground: "hsl(var(--primary-foreground))",
          50: "#e6f0ee",
          100: "#b3d6d0",
          200: "#80bbb2",
          300: "#4da094",
          400: "#1a8576",
          500: "#0B5B4C", // dark green from logo
          600: "#0a5244",
          700: "#084037",
          800: "#062f29",
          900: "#041d1c",
        },
        secondary: {
          DEFAULT: "#D4A017", // gold from logo
          foreground: "hsl(var(--secondary-foreground))",
          50: "#faf3e0",
          100: "#f2dea3",
          200: "#eac966",
          300: "#e1b429",
          400: "#D4A017", // gold from logo
          500: "#bf8f14",
          600: "#ab7f12",
          700: "#86630e",
          800: "#60470a",
          900: "#3b2b06",
        },
        accent: {
          DEFAULT: "#20B2AA", // teal/light green from logo
          foreground: "hsl(var(--accent-foreground))",
          50: "#e5f7f6",
          100: "#b3e8e5",
          200: "#80d9d4",
          300: "#4dcac3",
          400: "#20B2AA", // teal/light green from logo
          500: "#1d9f99",
          600: "#198c87",
          700: "#146d69",
          800: "#0f4e4b",
          900: "#092f2d",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config
