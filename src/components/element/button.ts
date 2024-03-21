import { tv } from "tailwind-variants";

export const button = tv({
	base: [
		"inline-flex",
		"items-center",
		"justify-center",
		"gap-2",
		"font-medium",
		"border",
		"rounded-md",
		"transition-colors",
		"ease-in-out",
		"disabled:opacity-50",
		"disabled:cursor-not-allowed",
		"cursor-pointer",
	],
	variants: {
		variant: {
			primary:
				"bg-brand-500 dark:bg-brand-800 text-white border-brand-500 dark:border-brand-800",
		},
	},
});
