import { type BreakpointsPresetOptions, type DesignSystem, designSystemsArray } from './types';
import { breakpoints } from './breakpoints';
import type { Preset } from '@pandacss/types';

const defaultOptions: Required<BreakpointsPresetOptions> = {
  system: 'chakra',
  overwrite: false,
};

export function pandaPresetBreakpoints(options?: BreakpointsPresetOptions): Preset {
  const defaults = { ...defaultOptions } as Required<BreakpointsPresetOptions>;
  const mergedOptions = Object.assign(defaults, options);

  function isDesignSystem(s: string) {
    return designSystemsArray.includes(s);
  }

  const brPts = breakpoints[isDesignSystem(mergedOptions.system) ? mergedOptions.system : defaultOptions.system];

  if (mergedOptions.overwrite) {
    return {
      theme: {
        breakpoints: brPts,
      },
    };
  }

  return {
    theme: {
      extend: {
        breakpoints: brPts,
      },
    },
  };
}