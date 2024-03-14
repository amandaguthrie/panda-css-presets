import { definePreset } from '@pandacss/dev';
import type { RecursiveToken } from '@pandacss/types';
import { entries, fromEntries } from '@amandaguthrie/panda-preset-shared-utils';
import { type FontKeyModernFontStack, type FontModernFSPresetOptions, modernFontStackKeyArray } from './types';
import { modernFontStacksCore } from './modern-font-stacks';

const defaultOptions = {
  fonts: '*',
};

export function pandaPresetFontModernFS(options?: FontModernFSPresetOptions) {
  const mergedOptions = Object.assign({}, defaultOptions, options);
  const { fonts } = mergedOptions;

  // If an array of fonts is passed, filter to the valid font stack names. If there are no valid font stack names, return all font stacks.
  const validFonts = Array.isArray(fonts)
    ? fonts.filter((font) => modernFontStackKeyArray.includes(font)).length > 0
      ? fonts.filter((font) => modernFontStackKeyArray.includes(font))
      : '*'
    : '*';

  const coreTokens = {
    modernfs:
      validFonts === '*'
        ? modernFontStacksCore
        : fromEntries(
            entries(modernFontStacksCore).filter(([stackName]) =>
              validFonts.includes(stackName as FontKeyModernFontStack),
            ),
          ),
  } as RecursiveToken<string, any>;

  return definePreset({
    theme: {
      extend: {
        tokens: {
          fonts: coreTokens,
        },
      },
    },
  });
}
