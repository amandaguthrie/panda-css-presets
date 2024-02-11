import type { BreakpointMap } from './types';

/**
 * Ant Design Breakpoints
 * @link https://ant.design/components/layout#breakpoint-width
 * @license MIT
 */
const ant = {
  xs: '480px',
  sm: '576px',
  md: '768px',
  lg: '992px',
  xl: '1200px',
  '2xl': '1600px',
};

/**
 * Bootstrap 5 Breakpoints
 * @link https://getbootstrap.com/docs/5.0/layout/breakpoints/
 * @license MIT
 */
const bootstrap = {
  xs: '0',
  sm: '576px',
  md: '768px',
  lg: '992px',
  xl: '1200px',
  '2xl': '1400px',
};

/**
 * Chakra UI Breakpoints
 * @link https://chakra-ui.com/docs/styled-system/responsive-styles
 * @license MIT
 */
const chakra = {
  sm: '30em', // ~480px
  md: '48em', // ~768px
  lg: '62em', // ~992px
  xl: '80em', // ~1280px
  '2xl': '96em', // ~1536px
};

/**
 * Mantine
 * @link https://mantine.dev/styles/responsive/#configure-breakpoints
 * @license MIT
 */
const mantine = {
  xs: '36em', // ~576px
  sm: '48em', // ~768px
  md: '62em', // ~992px
  lg: '75em', // ~1200px
  xl: '88em', // ~1408px
};

/**
 * Material Design System Breakpoints
 * @link https://m3.material.io/foundations/layout/applying-layout/window-size-classes
 */
const material = {
  xs: '0',
  sm: '600px',
  md: '840px',
  lg: '1200px',
  xl: '1600px',
};

/**
 * Primer Design System Breakpoints
 * @link https://primer.style/foundations/layout#breakpoints
 * @license MIT
 */
const primer = {
  xs: '320px',
  sm: '544px',
  md: '768px',
  lg: '1012px',
  xl: '1280px',
  '2xl': '1400px',
};

/**
 * Tailwind CSS Default Breakpoints
 * @link https://tailwindcss.com/docs/responsive-design
 * @license MIT
 */
const tailwind = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
};

export const breakpoints: BreakpointMap = {
  ant,
  bootstrap,
  chakra,
  mantine,
  material,
  primer,
  tailwind,
};

