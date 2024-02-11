import { type ExtendableOptions, type ExtendableTheme } from '@pandacss/types';

export type ExtendableOptionsTheme = Required<Exclude<Pick<ExtendableOptions, 'theme'>, undefined>>;

export type WrapInThemeArgs = {
  themeContent: Exclude<ExtendableOptions['theme'], undefined>;
};

/**
 * Wrap theme content with a theme config.
 * @param themeContent The theme content to wrap in a theme config.
 */
export function wrapInTheme({ themeContent }: WrapInThemeArgs) {
  return { theme: themeContent } as ExtendableOptionsTheme;
}

export type WrapInExtendThemeArgs = {
  themeContent: Exclude<ExtendableTheme['extend'], undefined>;
};

/**
 * Wrap theme content with an extendable theme config.
 * @param themeContent The theme content to wrap in an extendable theme config.
 */
export function wrapInExtendTheme({ themeContent }: WrapInExtendThemeArgs) {
  return {
    theme: {
      extend: themeContent,
    },
  } as ExtendableOptionsTheme;
}

type ExtendThemeArgs = WrapInExtendThemeArgs & {
  extend: true;
};

export type WrapInArgs<Key extends keyof WrapInExtendThemeArgs | keyof WrapInThemeArgs> = WrapInThemeArgs[Key] | WrapInExtendThemeArgs[Key]

type OverwriteThemeArgs = WrapInThemeArgs & {
  extend: false;
};

/**
 * Wrap theme content in a theme or theme extend config.
 * @param themeContent The theme content to be wrapped with a config.
 * @param extend Whether the config should be extended or overwritten.
 * - true - The theme content will be wrapped with {theme: {extend: themeContent}}
 * - false - The theme content will be wrapped with {theme: themeContent}
 */
export function maybeExtendTheme({
  themeContent,
  extend,
}: ExtendThemeArgs | OverwriteThemeArgs): ExtendableOptionsTheme {
  return extend ? wrapInExtendTheme({ themeContent }) : wrapInTheme({ themeContent });
}
