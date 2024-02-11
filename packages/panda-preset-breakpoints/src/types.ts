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

/** The preset options */
export type BreakpointsPresetOptions = {
  /**
   * @description (Optional) The name of the design system to generate breakpoint core tokens for.
   * @example "bootstrap" will generate breakpoint tokens using Bootstrap v5 settings.
   * @default "chakra"
   */
  system?: DesignSystem;
  /**
   * @description (Optional) Whether to use {theme: {extend: {}}} to merge with current theme breakpoints or {theme: {}} to overwrite theme breakpoints.
   * - true = Extend theme breakpoints
   * - false = Overwrite theme breakpoints
   * @default true
   */
  extend?: boolean;
};