/** @type {import('tailwindcss').Config} */
module.exports = {
  blocklist: ["overline"],
  darkMode: ["class"],
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        ink: "#0B111E",
        navy: "#111A2E",
        line: "#1E293B",
        royal: "#1D4ED8",
        glow: "#3B82F6",
        crimson: "#DC2626",
        crimsonlight: "#EF4444",
        gold: "#F59E0B",
        mist: "#94A3B8",
        snow: "#F8FAFC",
      },
      fontFamily: {
        display: ["'Bebas Neue'", "sans-serif"],
        cond: ["'Barlow Condensed'", "sans-serif"],
        sans: ["'DM Sans'", "sans-serif"],
        mono: ["'Space Mono'", "monospace"],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
