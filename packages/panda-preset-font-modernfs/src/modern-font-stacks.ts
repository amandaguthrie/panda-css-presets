import { defineTokens } from '@pandacss/dev';
import type { FontKeyModernFontStack } from './types';

/**
 * Modern Font Stacks - System font stack CSS organized by typeface classification for every modern operating system
 * @license CC0-1.0 https://creativecommons.org/publicdomain/zero/1.0/deed.en
 * @link https://github.com/system-fonts/modern-font-stacks
 */

const modernFontStackValues: Record<FontKeyModernFontStack, { value: string[] }> = {
	// Mono
	monospaceCode: {
		value: [
			'ui-monospace',
			"'Cascadia Code'",
			"'Source Code Pro'",
			'Menlo',
			'Consolas',
			"'DejaVu Sans Mono'",
			'monospace',
		],
	},
	monospaceSlabSerif: { value: ["'Nimbus Mono PS'", "'Courier New'", 'monospace'] },

	// Sans Serif
	classicalHumanist: { value: ['Optima', 'Candara', "'Noto Sans'", 'source-sans-pro', 'sans-serif'] },
	geometricHumanist: { value: ['Avenir', 'Montserrat', 'Corbel', "'URW Gothic'", 'source-sans-pro', 'sans-serif'] },
	handwritten: { value: ["'Segoe Print'", "'Bradley Hand'", 'Chilanka', 'TSCu_Comic', 'casual', 'cursive'] },
	humanist: {
		value: ['Seravek', "'Gill Sans Nova'", 'Ubuntu', 'Calibri', "'DejaVu Sans'", 'source-sans-pro', 'sans-serif'],
	},
	industrial: {
		value: [
			'Bahnschrift',
			"'DIN Alternate'",
			"'Franklin Gothic Medium'",
			"'Nimbus Sans Narrow'",
			'sans-serif-condensed',
			'sans-serif',
		],
	},
	neoGrotesque: {
		value: ['Inter', 'Roboto', "'Helvetica Nueue'", "'Arial Nova'", "'Nimbus Sans'", 'Arial', 'sans-serif'],
	},
	roundedSans: {
		value: [
			'ui-rounded',
			"'Hiragino Maru Gothic ProN'",
			'Quicksand',
			'Comfortaa',
			'Manjari',
			"'Arial Rounded MT'",
			"'Arial Rounded MT Bold'",
			'Calibri',
			'source-sans-pro',
			'sans-serif',
		],
	},
	systemUi: { value: ['system-ui', 'sans-serif'] },

	// Serifs
	antique: {
		value: [
			'Superclarendon',
			"'Bookman Old Style'",
			"'URW Bookman'",
			"'URW Bookman L'",
			"'Georgia Pro'",
			'Georgia',
			'serif',
		],
	},
	didone: { value: ['Didot', "'Bodoni MT'", "'Noto Serif Display'", "'URW Palladio L'", 'P052', 'Sylfaen', 'serif'] },
	oldStyle: { value: ["'Iowan Old Style'", "'Palatino Linotype'", "'URW Palladio L'", 'P052', 'serif'] },
	slabSerif: { value: ['Rockwell', "'Rockwell Nova'", "'Roboto Slab'", "'DejaVu Serif'", "'Sitka Small'", 'serif'] },
	transitional: { value: ['Charter', "'Bitstream Charter'", "'Sitka Text'", 'Cambria', 'serif'] },
};

export const modernFontStacksCore = defineTokens.fonts({ ...modernFontStackValues });
