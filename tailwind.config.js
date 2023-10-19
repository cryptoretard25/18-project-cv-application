/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    container: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    colors: {},
    fontFamily: {
      serif: ["Prosto one"],
      sans: ["San Francisco"],
    },
    opacity: {
      0: "0",
      20: "0.2",
      40: "0.4",
      60: "0.6",
      80: "0.8",
      100: "1",
    },
    extend: {
      colors,
      backgroundColor: {
        "slate-50": "#f8fafc",
        "slate-100": "#f1f5f9",
        "slate-200": "#e2e8f0",
        "slate-300": "#cbd5e1",
        "slate-400": "#94a3b8",
        "slate-500": "#64748b",
        "slate-600": "#475569",
        "slate-700": "#334155",
        "slate-800": "#1e293b",
        "slate-900": "#0f172a",
        "slate-950": "#020617",
      },
      textColor: {
        "slate-50": "#f8fafc",
        "slate-100": "#f1f5f9",
        "slate-200": "#e2e8f0",
        "slate-300": "#cbd5e1",
        "slate-400": "#94a3b8",
        "slate-500": "#64748b",
        "slate-600": "#475569",
        "slate-700": "#334155",
        "slate-800": "#1e293b",
        "slate-900": "#0f172a",
        "slate-950": "#020617",
      },
    },
  },
  plugins: [],
};
