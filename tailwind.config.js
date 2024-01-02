/** @type {import('tailwindcss').Config} */
export default {
  important: true,
  content: {
    relative: true,
    files: [
      "./src/components/**/*.{astro,js,jsx,ts,tsx}",
      "./src/pages/**/*.{astro,js,jsx,ts,tsx}",
      "./src/layouts/**/*.{astro,js,jsx,ts,tsx}",
    ],
  },
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
      spacing: {
        88: "22rem",
      },
      colors: {
        "my-background": "#202c3a",
        "my-lighter-blue": "#39507f",
        "my-white": "#fafafc",
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
