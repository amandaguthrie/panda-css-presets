export const sakuraThemeArray = [
  'custom',
  'dark',
  'darkSolarized',
  'default',
  'earthly',
  'ink',
  'pink',
  'radical',
  'vader',
];
const sakuraThemeArrayConst = [
  'custom',
  'dark',
  'darkSolarized',
  'default',
  'earthly',
  'ink',
  'pink',
  'radical',
  'vader',
] as const;

const sakuraThemeDataArrayConst = [
  'custom',
  'dark',
  'dark-solarized',
  'default',
  'earthly',
  'ink',
  'pink',
  'radical',
  'vader',
] as const;

const sakuraThemeColorsArrayConst = ['blossom', 'fade', 'bg', 'bgAlt', 'text'] as const;

/** Theme option */
export type SakuraPresetTheme = (typeof sakuraThemeArrayConst)[number];

/** Theme names as used in [data-sakura-theme=""] conditions */
export type SakuraPresetHTMLDataSakuraTheme = (typeof sakuraThemeDataArrayConst)[number];

/** Theme color token */
export type SakuraPresetThemeColor = (typeof sakuraThemeColorsArrayConst)[number];

/**
 * @description Custom theme color configuration
 * @property blossom Accent color
 * @property fade Primary color
 * @property bg Background color of page
 * @property bgAlt Background color of code blocks/other elements
 * @property text Color of text situated on page background (bg)
 */
export type SakuraPresetThemeConfigColor = Record<SakuraPresetThemeColor, string>;

/** Theme token configuration */
export type SakuraPresetThemeTokenConfig = Record<SakuraPresetTheme, SakuraPresetThemeConfigColor>;

export type SemanticTokenConfig = {
  /** @description Prefix used in conditions and tokens
   * @default "sakura"
   */
  prefix: string;
  /** Optionally specify a custom theme */
  customTheme?: SakuraPresetThemeTokenConfig;
  /** Optionally change the default theme */
  defaultTheme?: SakuraPresetTheme;
};

export type PresetSakuraOptions = SemanticTokenConfig & {
  /** @description The Sakura Panda CSS preset includes some extra styles around aside, details, and sibling checkbox/radio buttons and labels.
   * - true = Include the extra styles
   * - false = Do not include the extra styles
   * @default true
   */
  withExtraStyles?: boolean;
};
