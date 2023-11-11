/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				heading: ['Open Sans', 'ui-monspace', 'ui-sans-serif', 'system-ui'],
				main: ['Hanken Grotesk', 'ui-monospace', 'system-ui']
			}
		},
	},
	plugins: [],
}
