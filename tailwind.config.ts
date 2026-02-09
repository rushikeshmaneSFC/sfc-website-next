import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./constants/**/*.{js,ts,jsx,tsx,mdx}",
    "./hooks/**/*.{js,ts,jsx,tsx,mdx}",
    "./helpers/**/*.{js,ts,jsx,tsx,mdx}",
    "./context/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/flowbite-react/lib/**/*.{js,ts}",
  ],
  theme: {
    screens: {
      s: "300px",
      xs: "450px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      base: "1100px",
      xl: "1280px",
      mac: "1440px",
      "2xl": "1536px",
      "3xl": "1600px",
    },
    fontFamily: {
      sans: ["Montserrat", "sans-serif"],
      body: ["Montserrat", "sans-serif"],
      mono: ["Montserrat", "monospace"],
    },
    extend: {
      colors: {
        primary: {
          50: "#eff6ff",
          100: "#dbeafe",
          200: "#bfdbfe",
          300: "#93c5fd",
          400: "#60a5fa",
          500: "#3b82f6",
          600: "#2563eb",
          700: "#1d4ed8",
          800: "#1e40af",
          900: "#1e3a8a",
        },
      },
      textColor: {
        "primary-text": "var(--tw-primary-text)",
        "secondary-text": "var(--tw-secondary-text)",
        VAPTFeatureColor: "rgba(215, 215, 215, 0.38)",
      },
      backgroundColor: {
        "primary-bg": "var(--tw-primary-bg)",
        "secondary-bg": "var(--tw-secondary-bg)",
      },
      height: {
        "fill-available": "-webkit-fill-available",
      },
      boxShadow: {
        "custom-left-dark-blue": "-2px 0px 0px 0px rgba(0, 0, 139, 0.7)",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};

export default config;

