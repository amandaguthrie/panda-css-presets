import { type BreakpointsPresetOptions, designSystemsArray } from './types';
import { breakpoints } from './breakpoints';
import type { Preset } from '@pandacss/types';
import { maybeExtendTheme } from '@amandaguthrie/panda-preset-shared-utils';

const defaultOptions: Required<BreakpointsPresetOptions> = {
  system: 'chakra',
  extend: true,
};

export function pandaPresetBreakpoints(options?: BreakpointsPresetOptions) {
  const defaults = Object.assign({}, defaultOptions);
  const mergedOptions = Object.assign(defaults, options);

  function isDesignSystem(s: string) {
    return designSystemsArray.includes(s);
  }

  const brPts = breakpoints[isDesignSystem(mergedOptions.system) ? mergedOptions.system : defaultOptions.system];

  const themeContent = { breakpoints: brPts };

  return maybeExtendTheme({ themeContent, extend: mergedOptions.extend }) as Preset;
}
