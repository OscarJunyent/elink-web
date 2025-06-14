
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		fontFamily: {
			'sans': ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
		},
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				primary: {
					DEFAULT: '#ff881a',
					foreground: '#fff'
				},
				accent: {
					DEFAULT: '#577595',
					foreground: '#fff'
				},
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				card: 'hsl(var(--card))',
				'card-foreground': 'hsl(var(--card-foreground))',
				popover: 'hsl(var(--popover))',
				'popover-foreground': 'hsl(var(--popover-foreground))',
				muted: 'hsl(var(--muted))',
				'muted-foreground': 'hsl(var(--muted-foreground))',
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				destructive: 'hsl(var(--destructive))',
				'destructive-foreground': 'hsl(var(--destructive-foreground))',
				secondary: 'hsl(var(--secondary))',
				'secondary-foreground': 'hsl(var(--secondary-foreground))',
				'accent-foreground': 'hsl(var(--accent-foreground))',
				'dark': '#222c38',
				'gray': '#ececec',
			},
			borderRadius: {
				lg: '1.5rem',
				md: '1rem',
				sm: '0.5rem'
			},
			boxShadow: {
				circular: '0 8px 32px 0 rgba(87,117,149,0.10)',
			},
			animation: {
				'fade-in': 'fade-in 0.7s cubic-bezier(0.19,1,0.22,1)',
			},
			keyframes: {
				'fade-in': {
					'0%': { opacity: 0, transform: 'translateY(24px)' },
					'100%': { opacity: 1, transform: 'translateY(0)' },
				},
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;

