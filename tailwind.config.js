/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
      },
    },
    extend: {
      colors: {
        "my-blue": "#0f234b",
        "my-lighter-blue": "#39507f",
        "my-white": "#fafafc",
        "my-off-white": "#dedede",
        "my-orange": "#ff6b6b",
        "my-yellow": "#ffd700",
      },
    },
  },
  plugins: [],
};
