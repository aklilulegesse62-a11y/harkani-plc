/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./lib/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "#050505",
        surface: "#0f0f10",
        warm: {
          50: "#f5ede4",
          200: "#d7b896",
          300: "#bf9a6b",
          400: "#a97f4c",
          500: "#8b653d"
        }
      },
      boxShadow: {
        glow: "0 20px 80px rgba(191, 154, 107, 0.16)",
        panel: "0 20px 65px rgba(0, 0, 0, 0.35)"
      },
      backgroundImage: {
        "radial-luxury": "radial-gradient(circle at top, rgba(191,154,107,0.14), transparent 42%)"
      },
      letterSpacing: {
        luxe: "0.24em"
      }
    }
  },
  plugins: []
};

