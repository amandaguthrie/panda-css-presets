import { definePreset } from '@pandacss/dev';
import { conditions } from './conditions';
import { globalCss } from './globalCss';
import { coreColorTokens, fontsCore, radiiCore, semanticColorTokens } from './tokens';
import { layerStyles } from './layerStyles';
import type { SimpleCssPresetOptions, SimpleCssPresetOptionsRequired } from './types';
import { deepMergeConfigOptions, parsePrefix } from '@amandaguthrie/panda-preset-shared-utils';

const defaultOptions: SimpleCssPresetOptionsRequired = {
  prefix: 'simplecss',
  colors: {
    black: { value: '#111111' },
    white: { value: '#FFFFFF' },
    blue: {
      2: { value: '#1266e2' },
      3: { value: '#0D47A1' },
    },
    neutral: {
      1: { value: '#F5F7FF' },
      2: { value: '#EFEFEF' },
      3: { value: '#DCDCDC' },
      4: { value: '#CCCCCC' },
      5: { value: '#ABABAB' },
      6: { value: '#898EA4' },
      7: { value: '#585858' },
      8: { value: '#444444' },
      9: { value: '#2B2B2B' },
      10: { value: '#212121' },
    },
    red: {
      2: { value: '#f06292' },
      3: { value: '#D81B60' },
    },
    yellow: {
      1: { value: '#FFE099' },
      2: { value: '#FFDD33' },
      3: { value: '#FFB300' },
    },
  },
  fonts: {
    mono: { value: ['Consolas', 'Menlo', 'Monaco', 'Andale Mono', 'Ubuntu Mono', 'monospace'] },
    sans: {
      value: [
        '-apple-system',
        'BlinkMacSystemFont',
        'Avenir Next',
        'Avenir',
        'Nimbus Sans L',
        'Roboto',
        'Noto Sans',
        'Segoe UI',
        'Arial',
        'Helvetica',
        'Helvetica Nueue',
        'sans-serif',
      ],
    },
  },
};

export const pandaPresetFrameworkSimpleCss = (options?: Partial<SimpleCssPresetOptions>) => {
  const mergedOptions = options
    ? (deepMergeConfigOptions(defaultOptions, options) as typeof defaultOptions)
    : defaultOptions;
  const prefix = parsePrefix(options?.prefix ?? '', defaultOptions.prefix) ?? defaultOptions.prefix;

  return definePreset({
    name: 'panda-preset-framework-simplecss',
    theme: {
      extend: {
        tokens: {
          colors: coreColorTokens(prefix, mergedOptions.colors),
          fonts: fontsCore(prefix, mergedOptions.fonts),
          radii: radiiCore(prefix),
        },
        semanticTokens: {
          colors: semanticColorTokens(prefix),
        },
        layerStyles: layerStyles(prefix),
      },
    },
    conditions: conditions(prefix),
    globalCss: globalCss(prefix),
  });
};
