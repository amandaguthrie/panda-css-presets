import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import { readJsonSnapshot, toJson, writeJsonSnapshot } from '@amandaguthrie/panda-preset-dev-utils';
import type { ColorRadixPresetOptions } from '../src';
import pandaPresetColorRadix from '../src';
import { GENERATE_SNAPSHOTS } from './test-constants';

describe('Semantic Token Configuration & Generation', () => {
	it('should not generate any semantic tokens with default configuration', async () => {
		assert.equal(toJson(pandaPresetColorRadix()), await readJsonSnapshot('default'));
	});
	it('should not generate any semantic tokens when semanticColorMap is undefined', async () => {
		const config: ColorRadixPresetOptions = {};
		if (GENERATE_SNAPSHOTS) {
			await writeJsonSnapshot('semantic-map-undefined', toJson(pandaPresetColorRadix(config)));
		}
		assert.equal(toJson(pandaPresetColorRadix(config)), await readJsonSnapshot('semantic-map-undefined'));
	});
	it('should generate semantic tokens when provided with a semantic color map', async () => {
		const config: ColorRadixPresetOptions = {
			semanticColorMap: {
				primary: { color: 'grass' },
			},
		};
		if (GENERATE_SNAPSHOTS) {
			await writeJsonSnapshot('default-color-map', toJson(pandaPresetColorRadix(config)));
		}
		assert.equal(toJson(pandaPresetColorRadix(config)), await readJsonSnapshot('default-color-map'));
	});
	it('should use light conditions when provided', async () => {
		const config: ColorRadixPresetOptions = {
			colorModeConditions: {
				light: ['_osLight'],
			},
			semanticColorMap: {
				primary: { color: 'grass' },
			},
		};

		// It should not be the same as the last test. _light should be replaced with _osLight.
		assert.notEqual(toJson(pandaPresetColorRadix(config)), await readJsonSnapshot('default-color-map'));

		if (GENERATE_SNAPSHOTS) {
			await writeJsonSnapshot('light-conditions-custom', toJson(pandaPresetColorRadix(config)));
		}

		assert.equal(toJson(pandaPresetColorRadix(config)), await readJsonSnapshot('light-conditions-custom'));
	});
	it('should use dark conditions when provided', async () => {
		const config: ColorRadixPresetOptions = {
			colorModeConditions: {
				dark: ['_osDark'],
			},
			semanticColorMap: {
				primary: { color: 'grass' },
			},
		};

		// It should not be the same as the last test. _dark should be replaced with _osDark.
		assert.notEqual(toJson(pandaPresetColorRadix(config)), await readJsonSnapshot('default-color-map'));

		if (GENERATE_SNAPSHOTS) {
			await writeJsonSnapshot('dark-conditions-custom', toJson(pandaPresetColorRadix(config)));
		}

		assert.equal(toJson(pandaPresetColorRadix(config)), await readJsonSnapshot('dark-conditions-custom'));
	});

	it('should add missing core tokens', async () => {
		const config: ColorRadixPresetOptions = {
			colors: ['cyan'],
			semanticColorMap: {
				primary: { color: 'grass' },
			},
		};

		if (GENERATE_SNAPSHOTS) {
			await writeJsonSnapshot('colors-array-add-semantic', toJson(pandaPresetColorRadix(config)));
		}

		assert.match(toJson(pandaPresetColorRadix(config)), /"grass":{/g);
		assert.equal(toJson(pandaPresetColorRadix(config)), await readJsonSnapshot('colors-array-add-semantic'));
	});

	it('should ignore color tokens that are not Radix color names', async () => {
		const config: ColorRadixPresetOptions = {
			semanticColorMap: {
				// @ts-expect-error testing invalid token
				primary: { color: 'blueberry' },
			},
		};

		if (GENERATE_SNAPSHOTS) {
			await writeJsonSnapshot('color-map-ignore-invalid', toJson(pandaPresetColorRadix(config)));
		}

		assert.doesNotMatch(toJson(pandaPresetColorRadix(config)), /"semanticTokens":{}/g);
		assert.equal(toJson(pandaPresetColorRadix(config)), await readJsonSnapshot('color-map-ignore-invalid'));
	});
	it('should use a semantic color prefix when provided', async () => {
		const config: ColorRadixPresetOptions = {
			colors: ['grass'],
			semanticColorPrefix: 'brand',
			semanticColorMap: {
				primary: { color: 'grass' },
			},
		};

		if (GENERATE_SNAPSHOTS) {
			await writeJsonSnapshot('semantic-prefix-custom', toJson(pandaPresetColorRadix(config)));
		}
		assert.match(toJson(pandaPresetColorRadix(config)), /"brand":/g);
		assert.equal(toJson(pandaPresetColorRadix(config)), await readJsonSnapshot('semantic-prefix-custom'));
	});
	it('should allow "" as a semantic color prefix to remove the prefix', async () => {
		const config: ColorRadixPresetOptions = {
			colors: ['grass'],
			semanticColorPrefix: '',
			semanticColorMap: {
				primary: { color: 'grass' },
			},
		};

		if (GENERATE_SNAPSHOTS) {
			await writeJsonSnapshot('semantic-prefix-blank-custom', toJson(pandaPresetColorRadix(config)));
		}
		assert.match(
			toJson(pandaPresetColorRadix(config)),
			/"semanticTokens":{"colors":{"primary":{"0":{"value":{"base":"{colors.radix.grass.0.dark}",/g,
		);
		assert.equal(toJson(pandaPresetColorRadix(config)), await readJsonSnapshot('semantic-prefix-blank-custom'));
	});
	it('should use core color prefix in semantic color values', async () => {
		const config: ColorRadixPresetOptions = {
			colors: ['grass'],
			coreColorPrefix: 'core',
			semanticColorPrefix: 'brand',
			semanticColorMap: {
				primary: { color: 'grass' },
			},
		};

		if (GENERATE_SNAPSHOTS) {
			await writeJsonSnapshot('semantic-core-prefix-custom', toJson(pandaPresetColorRadix(config)));
		}
		assert.match(toJson(pandaPresetColorRadix(config)), /colors.core.grass.8.dark/g);
		assert.equal(toJson(pandaPresetColorRadix(config)), await readJsonSnapshot('semantic-core-prefix-custom'));
	});
});
