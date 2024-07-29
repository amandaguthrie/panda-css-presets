import { definePreset, type Preset } from '@pandacss/dev';
import type { Condition, RecursiveToken } from '@pandacss/types';
import {
  type ColorKeyRadix,
  type ColorMode,
  type ColorModeMapPartialKeys,
  radixAllColorsArray,
  type ScaleOneTwelve,
} from '@puffin-ui/types';
import { transformColorScale } from '@puffin-ui/utilities-color';
import { entries, fromEntries, parsePrefix } from '@amandaguthrie/panda-preset-shared-utils';
import type { ColorModeConditions, ColorRadixPresetDefaults, ColorRadixPresetOptions, SemanticColorMap } from './types';

const defaultOptions: ColorRadixPresetDefaults = {
  colors: '*',
  colorModeConditions: { default: 'dark', light: ['_light'], dark: ['_dark'] },
  coreColorPrefix: 'radix',
  semanticColorPrefix: 'radix',
  semanticColorMap: {},
};

export function pandaPresetColorRadix(options?: ColorRadixPresetOptions) {
  const mergedOptions = options != null ? Object.assign({}, defaultOptions, options) : defaultOptions;
  const { colors, colorModeConditions, coreColorPrefix, semanticColorMap, semanticColorPrefix } = mergedOptions;

  // If an array of colors is passed, filter the array to valid Radix color names. If the array has no valid color names, return all Radix colors.
  const validColors = Array.isArray(colors)
    ? colors.filter((color) => radixAllColorsArray.includes(color)).length > 0
      ? colors.filter((color) => radixAllColorsArray.includes(color))
      : '*'
    : '*';
  let semanticTokens: RecursiveToken<string, any> | undefined = undefined;
  if (Object.keys(semanticColorMap).length > 0) {
    // If this semantic color wasn't included in the colors array, add it.
    for (const mapDetail of Object.values(semanticColorMap)) {
      radixAllColorsArray.includes(mapDetail.color) &&
      Array.isArray(validColors) &&
      !validColors.includes(mapDetail.color) &&
      validColors.push(mapDetail.color);
    }
    semanticTokens = generateRadixSemanticTokens({
      coreColorPrefix,
      semanticColorPrefix,
      semanticColorMap,
      conditions: colorModeConditions,
    });
  }
  const radixColors = transformColorScale({ provider: 'radix', colors: validColors, outputScale: '1-12' });
  const coreTokens = generateRadixCoreColorTokens({
    colors: radixColors,
    coreColorPrefix,
    defaultColorMode: colorModeConditions.default,
  }) as RecursiveToken<string, any>;

  const preset: Preset = {
    name: 'panda-preset-color-radix',
    theme: {
      extend: {
        tokens: { colors: coreTokens },
      },
    },
  };

  if (semanticTokens !== undefined) {
    // @ts-ignore This is undefined but we can set it.
    preset.theme.extend.semanticTokens = { colors: semanticTokens };
  }

  return definePreset(preset);
}

/** @desc Generate Radix core color tokens from a list of Radix colors. */
function generateRadixCoreColorTokens({
  colors,
  coreColorPrefix,
  defaultColorMode,
}: {
  colors: ColorModeMapPartialKeys<ColorKeyRadix, ScaleOneTwelve>;
  coreColorPrefix: string;
  defaultColorMode: ColorMode;
}) {
  const { light, dark } = colors;

  const prefix = parsePrefix(coreColorPrefix, '');

  const coreTokens = fromEntries(
    // @ts-expect-error - This is a required vs partial error, but since we filtered the colors above in the transform function, there shouldn't be any undefined color values at this point.
    entries(light).map(([colorName, colorScale]) => {
      const scaleMap = fromEntries(
        // @ts-expect-error - There should be no undefined color scales at this point.
        entries(colorScale).map(([scaleKey, scaleValue]) => {
          const scaleConditions = {
            // @ts-expect-error - There shouldn't be any undefined color names at this point.
            DEFAULT: { value: defaultColorMode === 'light' ? scaleValue : dark[colorName][scaleKey] },
            light: { value: scaleValue },
            // @ts-expect-error - There shouldn't be any undefined color names at this point.
            dark: { value: dark[colorName][scaleKey] },
          };
          return [scaleKey, scaleConditions];
        }),
      );
      return [colorName, scaleMap];
    }),
  );

  return prefix ? { [prefix]: coreTokens } : coreTokens;
}

/** @desc Generate a 1-12 scale of light/dark values for semantic token using Radix colors as the base colors */
function generateRadixSemanticTokens({
  coreColorPrefix,
  semanticColorPrefix,
  semanticColorMap,
  conditions,
}: {
  coreColorPrefix: string;
  semanticColorPrefix: string;
  semanticColorMap: SemanticColorMap;
  conditions: ColorModeConditions;
}) {
  const fallbackDefault = conditions.default ?? 'dark';
  const semanticPrefix = parsePrefix(semanticColorPrefix, '');
  const corePrefix = parsePrefix(coreColorPrefix, '');
  const corePrefixToken = corePrefix ? `${corePrefix}.` : '';

  const validColors = fromEntries(
    entries(semanticColorMap).filter(([, mapDetail]) => radixAllColorsArray.includes(mapDetail.color)),
  );
  if (entries(validColors).length <= 0) {
    return undefined;
  }

  function forEachCondition(source: Record<string, any>, conditions: Condition[] | undefined, conditionValue: string) {
    const newValue = { ...source };
    if (conditions === undefined || conditions.length <= 0) {
      return source;
    }
    for (const condition of conditions) {
      newValue[condition] = conditionValue;
    }
    return newValue;
  }

  // If the map has no keys, set to undefined. Otherwise, map to semantic token format.
  const semanticTokens =
    Object.keys(semanticColorMap).length > 0
      ? fromEntries(
          entries(semanticColorMap).map(([tokenName, mapDetail]) => {
            const colorName = mapDetail.color;

            const colorValue: RecursiveToken<string, any> = { '1': {} };

            const thisDefault = mapDetail.default ?? fallbackDefault;

            for (let scale = 1; scale <= 12; scale++) {
              const scaleKey = scale.toString();
              const base = {
                base: `{colors.${corePrefixToken}${colorName}.${scaleKey}.${thisDefault}}`,
              };
              const lightConditions = forEachCondition(
                base,
                conditions.light,
                `{colors.${corePrefixToken}${colorName}.${scaleKey}.light}`,
              );
              const allConditions = forEachCondition(
                lightConditions,
                conditions.dark,
                `{colors.${corePrefixToken}${colorName}.${scaleKey}.dark}`,
              );
              colorValue[scaleKey] = { value: allConditions };
            }

            return [tokenName, colorValue];
          }),
        )
      : undefined;

  // If there are semantic tokens, check if there's a prefix set and wrap them. If there's no prefix, return the semantic tokens. Otherwise, return undefined.
  return semanticTokens ? (semanticPrefix ? { [semanticPrefix]: semanticTokens } : semanticTokens) : undefined;
}
