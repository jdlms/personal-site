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
        // "my-blue": "#6A5ACD",
        // "my-blue": "#483D8B",
        // "my-blue": "#5F6A6E",
        "my-background": "#202c3a",
        "my-lighter-blue": "#39507f",
        "my-white": "#fafafc",
        // "my-off-white": "#dedede",
        "my-gray": "#BFC9CA",
        "my-off-white": "#F5F5DC",
        "my-orange": "#ff6b6b",
        "my-yellow": "#ffd700",
        "my-accent": "#ad7753",
      },
    },
  },
  plugins: [],
};
