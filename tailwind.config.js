/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        base: "#161616",
        highContrast: "#DCDCDC",
        lowContrast: "#9A9A9A",
        primary: "#1A1A1A",
        bdr: "#242424",
      },
    },
  },
  plugins: [],
};
