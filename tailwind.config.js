/**
 * @format
 * @type {import('tailwindcss').Config}
 */

module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        monument: ["Monument Extended"],
        neutralFace: ["Neutral Face"],
        segoe: ["Segoe UI"],
      },
    },
  },
  plugins: [],
};
