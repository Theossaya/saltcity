/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Helvetica Neue"', "Helvetica", "Arial", "sans-serif"],
      },
      fontSize: {
        hero: ["72px", { lineHeight: "72px" }],
        feature: ["24px", { lineHeight: "31.2px" }],
      },
      fontWeight: {
        black: "900",
      },
      spacing: {
        relaxed: "24px",
      },
      borderRadius: {
        pill: "200px",
        card: "24px",
      },
      boxShadow: {
        card: "0 10px 25px rgba(0,0,0,0.08)",
      },
    },
  },
  plugins: [],
};



