
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
					DEFAULT: '#577595', // blau grisós corporatiu
					foreground: '#fff'
				},
				background: '#f6f9fb',
				dark: '#222c38',
				border: '#e4e8ee',
				gray: '#ececec',
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
