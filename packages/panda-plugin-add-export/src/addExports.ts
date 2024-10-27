import { definePlugin } from '@pandacss/dev';
import type { PandaPlugin } from '@pandacss/types';
import { exportTokens } from './exportTokens';

/**
 * @description Plugin options for the AddExports Panda CSS plugin
 */
export type AddExportsPluginOptions = {
	/**
	 * @summary `false` makes no changes to the tokens constant. `true` exports the tokens constant.
	 * @description Whether to export `const tokens` in `tokens\index.{mjs|js}` and add the export declaration to `tokens\index.d.ts`
	 * @default false
	 */
	exportTokens?: boolean;
	/**
	 * @description Whether to search for .js or .mjs files from the artifacts. This should match your panda.config.
	 * @default "mjs"
	 */
	outExtension?: 'js' | 'mjs';
};

const defaultOptions: AddExportsPluginOptions = {
	exportTokens: false,
	outExtension: 'mjs',
};

export function addExports(pluginOptions?: AddExportsPluginOptions): PandaPlugin {
	const options = pluginOptions ? Object.assign({}, defaultOptions, pluginOptions) : defaultOptions;

	return definePlugin({
		name: 'add-exports',
		hooks: {
			'codegen:prepare': ({ artifacts }) => {
				exportTokens(artifacts, options);
			},
		},
	});
}
