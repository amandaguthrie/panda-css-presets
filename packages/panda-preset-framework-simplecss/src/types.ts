/** Simple CSS preset options */
export type SimpleCssPresetOptions = {
	/**
	 * @description (Optional) The prefix to use in generated tokens.
	 * @default "simplecss"
	 * @example Prefix "simplecss" generates tokens like --colors-simplecss-access and --fonts-simplecss-sans
	 * @example Prefix "test" generates tokens like --colors-test-accent and --fonts-test-sans
	 */
	prefix: string;
	/** (Optional) Replace color values with custom colors. */
	colors: Partial<SimpleCssColorConfig>;
	/** (Optional) Replace font values with custom fonts. */
	fonts: Partial<SimpleCssFontConfig>;
};

/** The same thing as {@link SimpleCssPresetOptions} but everything is required. */
export type SimpleCssPresetOptionsRequired = {
	prefix: SimpleCssPresetOptions['prefix'];
	colors: Required<SimpleCssPresetOptions['colors']>;
	fonts: Required<SimpleCssPresetOptions['fonts']>;
};

/** Core Color Token Schema */
export type SimpleCssColorConfig = {
	black: { value: string };
	white: { value: string };
	blue: {
		2: { value: string };
		3: { value: string };
	};
	neutral: {
		1: { value: string };
		2: { value: string };
		3: { value: string };
		4: { value: string };
		5: { value: string };
		6: { value: string };
		7: { value: string };
		8: { value: string };
		9: { value: string };
		10: { value: string };
	};
	red: {
		2: { value: string };
		3: { value: string };
	};
	yellow: {
		1: { value: string };
		2: { value: string };
		3: { value: string };
	};
};

/** Core Font Token Schema */
export type SimpleCssFontConfig = {
	mono: { value: string[] };
	sans: { value: string[] };
};
