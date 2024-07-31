/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}", // Add additional paths if needed
  ],
  theme: {
    extend: {
      maxWidth: {
        large: "1400px",
      },
    },
  },
  plugins: [],
};