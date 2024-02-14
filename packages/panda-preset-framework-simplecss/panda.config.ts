import { defineConfig } from '@pandacss/dev';
import { pandaPresetFrameworkSimpleCss } from './src/preset';

export default defineConfig({
  // Whether to use css reset
  preflight: false,
  eject: false,

  // Where to look for your css declarations
  include: ['./src/**/*.{js,jsx,ts,tsx}', './pages/**/*.{js,jsx,ts,tsx}'],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {},
  },

  presets: [pandaPresetFrameworkSimpleCss({})],

  // The output directory for your css system
  outdir: 'styled-system',
});
