/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "640px",
    },
    extend: {
      colors: {
        "my-blue": "#0f234b",
        "my-white": "#fafafc",
        "my-orange": "#ff6b6b",
        "my-yellow": "#ffd700",
      },
    },
  },
  plugins: [],
};
