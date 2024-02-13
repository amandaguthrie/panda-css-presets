import type { Condition } from '@pandacss/types';
import type { ColorKeyRadix, ColorMode } from '@puffin-ui/types';

export type ColorModeConditions = {
  /**
   * @description Whether the default color value for core and semantic tokens should be the Radix light theme or dark theme.
   * @default 'dark'
   * @example 'dark' generates core tokens with scale values like {DEFAULT: {value: '#000000'}, light: {value: '#FFFFFF'}, dark: {value: '#000000'}}
   */
  default: ColorMode;
  /**
   * @description An array of Panda condition names (lowercase strings, prefixed with an _) that should generate with the Radix light theme color value.
   * @default ['_light']
   * @example ['_light', '_osLight', '_yourCustomLightCondition'] generates semantic tokens with values like {value: {base: "#000000", "_dark" "#000000", "_osDark": "#000000", "_yourCustomLightCondition" : "#000000"}}
   */
  light: Condition[];
  /**
   * @description An array of Panda condition names (lowercase strings, prefixed with an _) that should generate with the Radix light theme color value.
   * @default ['dark']
   * @example ['_light', '_osDark', '_yourCustomDarkCondition']  generates semantic tokens with values like {value: {base: "#000000", "_dark" "#000000", "_osDark": "#000000", "_yourCustomDarkCondition" : "#000000"}}
   */
  dark: Condition[];
};

/**
 * @description The name given to a semantic token. Will be prefixed with the token category and appended with any nested values.
 */
export type SemanticTokenName = string;

/**
 * @description A map of semantic token names and their configurations for generating a color scale from a core token.
 */
export type SemanticColorMap = Record<
  SemanticTokenName,
  {
    /**
     * @description Which Radix color name should be aligned with this semantic token.
     */
    color: ColorKeyRadix;
    /**
     * @description Whether the default color value for this semantic token map should be the Radix light theme or dark theme.
     * @default ColorModeConditions.default ?? 'dark'
     * @example 'dark' generates semantic tokens with scale values like {value: {base: '#000000', "_light": '#FFFFFF', "_dark": '#000000'}}
     * @example 'light' generates semantic tokens with scale values like {value: {base: '#FFFFFF', "_light": '#FFFFFF', "_dark": '#000000'}}
     */
    default?: ColorMode;
  }
>;

/**
 * @type ColorRadixPresetDefaults
 */

export type ColorRadixPresetDefaults = {
  /**
   * @description (Optional) An array of Radix color names to generate color tokens for. To generate tokens for all Radix colors, specify "*" as a string value.
   * @default "*"
   * @example "*" will generate tokens for all Radix colors.
   * @example ["cyan", "grass"] will generate tokens only for Radix colors cyan, grass, and other colors specified (if any) in semanticColorMap.
   */
  colors: '*' | ColorKeyRadix[];
  /**
   * @description (Optional) Specify the color mode for default color values and which light and dark conditions to generate semantic tokens for.
   * @see {@link ColorModeConditions} for more information on the individual properties.
   */
  colorModeConditions: ColorModeConditions;
  /**
   * @description (Optional) Replace or remove the 'radix' prefix for core color tokens.
   * - Default: 'radix'.
   * - The custom prefix will automatically be used for semantic color token values.
   * @example "custom" => "{colors.custom.grass.1}"
   * @example  "" => "{colors.grass.1}"
   */
  coreColorPrefix: string;
  /**
   * @description (Optional) Replace or remove the 'radix' prefix for semantic color tokens.
   * - Default: 'radix'.
   * @example "custom" => "{colors.custom.primary.1}"
   * @example  "" => "{colors.primary.1}"
   */
  semanticColorPrefix: string;
  /**
   * @description (Optional) Specify a color map to generate semantic tokens that point to generated Radix color tokens.
   * @see {@link SemanticColorMap} for more information on the individual properties.
   */
  semanticColorMap: SemanticColorMap;
};

/**
 * @type ColorRadixPresetOptions
 */

export type ColorRadixPresetOptions = Omit<Partial<ColorRadixPresetDefaults>, 'colorModeConditions'> & {
  colorModeConditions?: Partial<ColorModeConditions>;
};
