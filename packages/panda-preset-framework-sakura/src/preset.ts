import { definePreset, type Preset } from '@pandacss/dev';
import { coreTokens, semanticTokens } from './tokens';
import { conditions } from './conditions';
import type { PresetSakuraOptions } from './types';
import { globalCss } from './globalCss';

const defaultOptions: Omit<PresetSakuraOptions, 'withExtraStyles'> & { withExtraStyles: boolean } = {
  prefix: 'sakura',
  customTheme: undefined,
  defaultTheme: 'default',
  withExtraStyles: true,
};

export const pandaPresetFrameworkSakura = (options?: PresetSakuraOptions) => {
  const mergedOptions = options ? Object.assign({}, defaultOptions, options) : defaultOptions;
  const { customTheme, prefix, defaultTheme, withExtraStyles } = mergedOptions;
  const preset: Preset = {
    theme: {
      extend: {
        tokens: coreTokens(prefix),
        semanticTokens: semanticTokens({ prefix, customTheme, defaultTheme }),
      },
    },
    conditions: {
      extend: {
        ...conditions(prefix),
      },
    },
    globalCss: globalCss({ prefix, withExtraStyles }),
  };

  return definePreset(preset);
};
