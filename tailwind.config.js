/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    important: true,
  content: {
    relative: true,
    files: [
      "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
      "./src/components/**/*.{astro,js,jsx,ts,tsx}",
      "./src/pages/**/*.{astro,js,jsx,ts,tsx}",
      "./src/layouts/**/*.{astro,js,jsx,ts,tsx}",
    ],
  },
  safelist: [
    "my-background",
    "my-lighter-blue",
    "my-white",
    "my-gray",
    "my-off-white",
    "my-orange",
    "my-yellow",
    "my-accent",
    "88",
  ],
  theme: {
  	screens: {
  		sm: '640px',
  		md: '768px',
  		lg: '1024px'
  	},
  	container: {
  		center: 'true',
  		padding: {
  			DEFAULT: '1rem',
  			sm: '2rem',
  			lg: '4rem'
  		}
  	},
  	extend: {
  		colors: {
  			'my-background': '#1e1f1f',
  			'my-lighter-blue': '#39507f',
  			'my-white': '#a99a91',
  			'my-gray': '#BFC9CA',
  			'my-off-white': '#F5F5DC',
  			'my-orange': '#ff6b6b',
  			'my-yellow': '#ffd700',
  			'my-accent': '#966747',
  			'my-experiment': '#202c3a',
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		typography: '(theme) => ({\n        DEFAULT: {\n          css: {\n            strong: {\n              color: theme("colors.my-orange"), // Set to your desired color\n              fontWeight: "600", // Optional: set the desired font weight\n            },\n          },\n        },\n      })',
  		spacing: {
  			'88': '22rem'
  		},
  		fontFamily: {
  			mono: ["IBM Plex Mono", "monospace"]
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("@tailwindcss/typography"), require("tailwindcss-animate")],
};

// green color: #325f11
// #5f3a25
