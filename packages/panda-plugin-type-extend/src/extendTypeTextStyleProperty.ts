import { definePlugin } from '@pandacss/dev';
import type { CssProperty, PandaPlugin } from '@pandacss/types';

export function extendTextStylePropertyType(cssVars: CssProperty[]): PandaPlugin {
	return definePlugin({
		name: 'type-extend-text-style',
		hooks: {
			'codegen:prepare': (params) => {
				const types = params.artifacts.find((artifact) => artifact.id === 'types-gen');
				const file = types?.files.find((file) => file.file === 'composition.d.ts');
				if (file) {
					const codeArray = file?.code?.split('\n\n');
					const textStylePropertyIndex = codeArray?.findIndex((line) => line.includes('type TextStyleProperty '));
					if (textStylePropertyIndex && textStylePropertyIndex !== -1 && codeArray) {
						for (const property of cssVars) {
							codeArray[textStylePropertyIndex] += `\n  | '${property}'`;
						}
					}
					file.code = codeArray?.join('\n\n');
				}
			},
		},
	});
}
