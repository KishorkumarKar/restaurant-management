/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        neutral: {
          secondary: {
            soft: "#F5F5F5",   // 👈 bg-neutral-secondary-soft
            DEFAULT: "#E5E5E5" // 👈 bg-neutral-secondary
          },
        },
      },
    },
  },
  plugins: [],
};
