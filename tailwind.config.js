/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{tsx,html}"],
	darkMode: "media",
	prefix: "plasmo-",
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
			},
			fontFamily: {
				montserrat: ["var(--font-family-montserrat)"],
			},
		},
	},
};
