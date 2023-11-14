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
        codeBlockBackground: "#0D1117",
      },
      keyframes: {
        animatedgradient: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
      },
      backgroundSize: {
        "300%": "300%",
      },
      animation: {
        gradient: "animatedgradient 4s ease infinite alternate",
      },
      typography: ({ theme }) => ({
        regular: {
          css: {
            "--tw-prose-body": theme("colors.lowContrast"),
            "--tw-prose-headings": theme("colors.highContrast"),
            "--tw-prose-lead": theme("colors.lowContrast"),
            "--tw-prose-links": theme("colors.yellow[400]"),
            "--tw-prose-bold": theme("colors.highContrast"),
            "--tw-prose-counters": theme("colors.highContrast"),
            "--tw-prose-bullets": theme("colors.highContrast"),
            "--tw-prose-hr": theme("colors.lowContrast"),
            "--tw-prose-quotes": theme("colors.highContrast"),
            "--tw-prose-quote-borders": theme("colors.lowContrast"),
            "--tw-prose-captions": theme("colors.lowContrast"),
            "--tw-prose-th-borders": theme("colors.bdr"),
            "--tw-prose-td-borders": theme("colors.bdr"),
          },
        },
      }),
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    // ...
  ],
};
