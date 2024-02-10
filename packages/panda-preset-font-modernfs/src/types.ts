export const modernFontStackKeyArray = [
  'monospaceCode',
  'monospaceSlabSerif',
  'classicalHumanist',
  'geometricHumanist',
  'handwritten',
  'humanist',
  'industrial',
  'neoGrotesque',
  'roundedSans',
  'systemUi',
  'antique',
  'didone',
  'oldStyle',
  'slabSerif',
  'transitional',
] as const;
export type FontKeyModernFontStack = (typeof modernFontStackKeyArray)[number];

export type FontModernFSPresetOptions = {
  /**
   * @description (Optional) An array of font stack names from Modern Font Stack to generate core tokens for.
   * @default "*"
   * @example "*" will generate tokens for all Modern Font Stack Names.
   * @example ["humanist", "industrial"] will generate tokens only for the "humanist" and "industral" stacks.
   */
  fonts?: '*' | FontKeyModernFontStack[];
};
