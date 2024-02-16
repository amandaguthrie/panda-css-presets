import { defineSemanticTokens, defineTokens } from '@pandacss/dev';
import type { SakuraPresetTheme, SakuraPresetThemeColor, SemanticTokenConfig } from './types';
import { prefixConditionCss } from '@amandaguthrie/panda-preset-shared-utils';

const colorsCore = (prefix: string) => {
  return defineTokens.colors({
    [prefix]: {
      black: { value: '#000000' },
      force: { value: '#DA4453' },
      neutral: {
        0: { value: '#f9f9f9' },
        1: { value: '#f7f7f7' },
        2: { value: '#f1f1f1' },
        3: { value: '#c9c9c9' },
        4: { value: '#4a4a4a' },
        5: { value: '#313131' },
        6: { value: '#222222' },
      },
      white: { value: '#FFFFFF' },
    },
  });
};

type ThemeMap = Record<SakuraPresetTheme, Record<SakuraPresetThemeColor, string>>;

const themeMap = ({ customTheme, defaultTheme, prefix }: SemanticTokenConfig) => {
  const sakuraTheme = {
    blossom: '#1d7484',
    fade: '#982c61',
    bg: `{colors.${prefix}.neutral.0}`,
    bgAlt: `{colors.${prefix}.neutral.2}`,
    text: `{colors.${prefix}.neutral.4}`,
  };

  const tMap: ThemeMap = {
    custom: sakuraTheme,
    dark: {
      blossom: `{colors.${prefix}.white}`,
      fade: `{colors.${prefix}.neutral.3}`,
      bg: `{colors.${prefix}.neutral.6}`,
      bgAlt: `{colors.${prefix}.neutral.4}`,
      text: `{colors.${prefix}.neutral.3}`,
    },
    darkSolarized: {
      blossom: '#2aa198',
      fade: '#657b83',
      bg: '#002b36',
      bgAlt: '#073642',
      text: '#839496',
    },
    default: sakuraTheme,
    earthly: {
      blossom: '#007559',
      fade: '#006994',
      bg: `{colors.${prefix}.white}`,
      bgAlt: `{colors.${prefix}.neutral.1}`,
      text: `{colors.${prefix}.neutral.6}`,
    },
    ink: {
      blossom: '#3b22ea',
      fade: `{colors.${prefix}.force}`,
      bg: `{colors.${prefix}.white}`,
      bgAlt: `{colors.${prefix}.neutral.1}`,
      text: `{colors.${prefix}.neutral.5}`, // rgba(0,0,0,0.85)
    },
    pink: {
      blossom: '#980255',
      fade: '#753851',
      bg: `#ffe4f5`,
      bgAlt: '#f8d2e9',
      text: '#49002d',
    },
    radical: {
      blossom: '#D415D4',
      fade: '#00ffff',
      bg: `{colors.${prefix}.black}`,
      bgAlt: '#1b1e24',
      text: '#32cd32',
    },
    vader: {
      blossom: '#ee5867',
      fade: `{colors.${prefix}.force}`,
      bg: '#120c0e',
      bgAlt: '#40363a',
      text: '#d9d8dc',
    },
  };

  const _defaultTheme = defaultTheme ? Object.assign({}, sakuraTheme, defaultTheme) : sakuraTheme;

  const _customTheme = customTheme ? Object.assign({}, _defaultTheme, customTheme) : _defaultTheme;

  return {
    ...tMap,
    default: _defaultTheme,
    custom: _customTheme,
  } as ThemeMap;
};

const colorsSemantic = ({ customTheme, defaultTheme, prefix }: SemanticTokenConfig) => {
  const themes = themeMap({ customTheme, defaultTheme, prefix });

  const generateValue = (themeColor: SakuraPresetThemeColor) => {
    const conditions: Record<SakuraPresetTheme, string> = {} as Record<SakuraPresetTheme, string>;
    Object.keys(themes).forEach((theme) => {
      if (!(theme === 'default')) {
        conditions[theme as keyof typeof conditions] = themes[theme as keyof typeof themes][themeColor];
      }
    });

    return {
      value: {
        base: themes['default'][themeColor],
        ...prefixConditionCss(conditions, prefix),
      },
    };
  };

  return defineSemanticTokens.colors({
    [prefix]: {
      blossom: generateValue('blossom'),
      fade: generateValue('fade'),
      bg: {
        DEFAULT: generateValue('bg'),
        alt: generateValue('bgAlt'),
      },
      text: generateValue('text'),
    },
  });
};

const fontSizesCore = (prefix: string) => {
  return defineTokens.fontSizes({
    [prefix]: {
      base: { value: '1.8rem' },
    },
  });
};

const fontsCore = (prefix: string) => {
  return defineTokens.fonts({
    [prefix]: {
      base: {
        value: [
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'Noto Sans',
          'sans-serif',
        ],
      },
    },
  });
};

const fontsSemantic = (prefix: string) => {
  return defineSemanticTokens.fonts({
    [prefix]: {
      heading: { value: `{fonts.${prefix}.base}` },
    },
  });
};

export const coreTokens = (prefix: string) => {
  return defineTokens({
    colors: colorsCore(prefix),
    fonts: fontsCore(prefix),
    fontSizes: fontSizesCore(prefix),
  });
};

export const semanticTokens = ({ customTheme, defaultTheme, prefix }: SemanticTokenConfig) => {
  return defineSemanticTokens({
    colors: colorsSemantic({ customTheme, defaultTheme, prefix }),
    fonts: fontsSemantic(prefix),
  });
};
