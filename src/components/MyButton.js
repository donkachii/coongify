'use client'; // Declare this to mark the file as a client component

import { extendVariants, Button } from '@nextui-org/react';

export const MyButton = extendVariants(Button, {
	variants: {
		// <- modify/add variants
		color: {
			orange: 'text-[#fff] bg-[#F7813F]',
		},
	},
	defaultVariants: {
		// <- modify/add default variants
		color: 'orange',
		size: 'xl',
	},
});
