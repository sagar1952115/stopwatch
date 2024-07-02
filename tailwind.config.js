/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {boxShadow: {
      custom: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
      'custom-dark': '0 4px 6px rgba(255, 255, 255, 0.1), 0 2px 4px rgba(255, 255, 255, 0.06)',

    },},
  },
  plugins: [],
}