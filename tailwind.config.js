/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#ffffff",
          200: "#d1d5db",
        },
        secondary: {
          100: "#60a5fa",
          200: "#93c5fd",
        },
        ascent: {
          100: "#374151",
          200: "#9ca3af",
        },
        orange: "#f97316",
      },
    },
  },
  plugins: [],
};
