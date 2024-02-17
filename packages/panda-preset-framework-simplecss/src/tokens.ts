import { defineTokens } from '@pandacss/dev';
import { defineSemanticTokens } from '@pandacss/dev';
import type { SimpleCssColorConfig, SimpleCssFontConfig } from './types';

export const coreColorTokens = (prefix: string, colorConfig: SimpleCssColorConfig) => {
  return defineTokens.colors({
    [prefix]: colorConfig,
  });
};

export const semanticColorTokens = (prefix: string) => {
  const osDark = `_${prefix}OsDark`;
  return defineSemanticTokens.colors({
    [prefix]: {
      border: {
        value: { base: `{colors.${prefix}.neutral.6}` },
      },
      bg: {
        DEFAULT: { value: { base: `{colors.${prefix}.white}`, [osDark]: `{colors.${prefix}.neutral.10}` } },
        accent: { value: { base: `{colors.${prefix}.neutral.1}`, [osDark]: `{colors.${prefix}.neutral.9}` } },
      },
      accent: {
        DEFAULT: { value: { base: `{colors.${prefix}.blue.3}`, [osDark]: `{colors.${prefix}.yellow.3}` } },
        hover: { value: { base: `{colors.${prefix}.blue.2}`, [osDark]: `{colors.${prefix}.yellow.1}` } },
        text: { value: `colors.${prefix}.bg` },
      },
      code: {
        value: { base: `{colors.${prefix}.red.3}`, [osDark]: `{colors.${prefix}.red.2}` },
      },
      disabled: {
        value: { base: `{colors.${prefix}.neutral.2}`, [osDark]: `{colors.${prefix}.black}` },
      },
      marked: {
        value: { base: `{colors.${prefix}.yellow.2}` },
      },
      preformatted: {
        value: { base: `{colors.${prefix}.neutral.8}`, [osDark]: `{colors.${prefix}.neutral.4}` },
      },
      text: {
        DEFAULT: { value: { base: `{colors.${prefix}.neutral.10}`, [osDark]: `{colors.${prefix}.neutral.3}` } },
        light: { value: { base: `{colors.${prefix}.neutral.7}`, [osDark]: `{colors.${prefix}.neutral.5}` } },
      },
    },
  });
};

export const fontsCore = (prefix: string, fontConfig: SimpleCssFontConfig) => {
  return defineTokens.fonts({
    [prefix]: fontConfig,
  });
};

export const radiiCore = (prefix: string) => {
  return defineTokens.radii({
    [prefix]: {
      standard: { value: '5px' },
    },
  });
};
