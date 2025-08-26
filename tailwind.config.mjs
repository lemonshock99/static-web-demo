import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'background': '#FFFAF0', // Floral White (ivory)
				'text': '#111827',      // Gray 900 (near-black)
				'accent': '#D4AF37',     // Gold
				'accent-light': '#F0E68C', // Light Gold/Khaki
				'gray-light': '#E5E7EB',  // Gray 200
			},
			fontFamily: {
				sans: ['Inter', ...defaultTheme.fontFamily.sans],
			},
		},
	},
	plugins: [],
}
