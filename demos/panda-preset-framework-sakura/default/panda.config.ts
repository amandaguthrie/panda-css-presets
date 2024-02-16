import { defineConfig } from '@pandacss/dev';
import pandaPresetFrameworkSakura from '@amandaguthrie/panda-preset-framework-sakura';

export default defineConfig({
  // Whether to use css reset
  preflight: false,

  // Where to look for your css declarations
  include: ['./src/**/*.{js,jsx,ts,tsx,svelte}'],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {},
  },

  presets: [pandaPresetFrameworkSakura({ prefix: 'sakura', defaultTheme: 'dark' })],

  // The output directory for your css system
  outdir: 'styled-system',

  staticCss: {
    css: [
      {
        properties: { background: ['*'], backgroundColor: ['*'], border: ['*'], borderColor: ['*'], color: ['*'] },
        conditions: ['*'],
      },
    ],
  },
});
