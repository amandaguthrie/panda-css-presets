import type { Theme } from '@pandacss/types';

/** A helper array to generate {@link DesignSystem} type */
export const designSystemsArray = ['ant', 'bootstrap', 'chakra', 'material', 'mantine', 'primer', 'tailwind'];

export const designSystemsArrayStatic = [
	'ant',
	'bootstrap',
	'chakra',
	'material',
	'mantine',
	'primer',
	'tailwind',
] as const;

/** A design system. */
export type DesignSystem = (typeof designSystemsArrayStatic)[number];

/** A dictionary of design systems and their breakpoint configurations */
export type BreakpointMap = Record<DesignSystem, Exclude<Theme['breakpoints'], undefined>>;

/** panda-preset-breakpoints preset options */
export type BreakpointsPresetOptions = {
	/**
	 * @description (Optional) The name of the design system to generate breakpoint core tokens for.
	 * @example "bootstrap" will generate breakpoint tokens using Bootstrap v5 default settings.
	 * @default "chakra"
	 */
	system?: DesignSystem;
	/**
	 * @description (Optional) Whether to merge or replace other presets' breakpoints.
	 * - true = Return the configuration in `{theme: {extend: {breakpoints: {}}}` to merge the configuration with other presets' breakpoints.
	 * - false = Return the configuration in `{theme: {breakpoints: {}}` to replace other presets' breakpoint configuration with this one.
	 * @default true
	 */
	extend?: boolean;
};
