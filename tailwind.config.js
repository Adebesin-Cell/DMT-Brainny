/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{tsx,html}"],
	darkMode: "class",
	theme: {
		extend: {
			colors: {
				brand: {
					50: "#ffe5f1",
					100: "#ffcce4",
					150: "#F7FAFC",
					200: "#ffb3d7",
					300: "#ff99ca",
					400: "#ff80bd",
					500: "#FF5CAA",
					600: "#ff4da3",
					700: "#ff3396",
					800: "#ff1a88",
					900: "#5d1738",
				},
				dark: "#070708",
				"dark-2": "#121214",
			},
			fontFamily: {
				montserrat: ["var(--font-family-montserrat)"],
				sora: ["var(--font-family-sora)"],
				inter: ["var(--font-family-inter)"],
			},
			keyframes: {
				"accordion-down": {
					from: { height: "0" },
					to: { height: "var(--radix-accordion-content-height)" },
				},
				"accordion-up": {
					from: { height: "var(--radix-accordion-content-height)" },
					to: { height: "0" },
				},
			},
			animation: {
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
			},
		},
	},
	plugins: [require("tailwindcss-animate")],
};
