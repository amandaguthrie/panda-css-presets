import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import { readJsonSnapshot, toJson, writeJsonSnapshot } from '@amandaguthrie/panda-preset-dev-utils';
import type { ColorRadixPresetOptions } from '../src';
import pandaPresetColorRadix from '../src';
import { GENERATE_SNAPSHOTS } from './test-constants';

describe('Core Token Configuration & Generation', async () => {
	await it('should generate all colors when no options are specified', async () => {
		if (GENERATE_SNAPSHOTS) {
			await writeJsonSnapshot('default', JSON.stringify(pandaPresetColorRadix()));
		}

		assert.equal(toJson(pandaPresetColorRadix()), await readJsonSnapshot('default'));
	});
	await it('should generate the specified colors when an array is specified', async () => {
		const config: Partial<ColorRadixPresetOptions> = {
			colors: ['cyan'],
		};
		if (GENERATE_SNAPSHOTS) {
			await writeJsonSnapshot('colors-array-valid', JSON.stringify(pandaPresetColorRadix(config)));
		}
		assert.equal(toJson(pandaPresetColorRadix(config)), await readJsonSnapshot('colors-array-valid'));
	});
	await it('should ignore color names that are not Radix colors', async () => {
		const config: Partial<ColorRadixPresetOptions> = {
			// @ts-expect-error - testing invalid color
			colors: ['cyan', 'blueberry'],
		};
		// This output should be the same as "colors-array-valid" because it should ignore blueberry
		assert.equal(toJson(pandaPresetColorRadix(config)), await readJsonSnapshot('colors-array-valid'));
	});
	await it('should generate all colors if no valid colors are specified', async () => {
		const config: Partial<ColorRadixPresetOptions> = {
			// @ts-expect-error - testing invalid color
			colors: ['blueberry', 'cinnamon'],
		};
		// This output should be the same as "default" because it should return all colors.
		assert.equal(toJson(pandaPresetColorRadix(config)), await readJsonSnapshot('default'));
	});

	await it('should change the DEFAULT color value when provided with a colorModeConditions.default', async () => {
		const config: Partial<ColorRadixPresetOptions> = {
			colorModeConditions: {
				default: 'light',
			},
		};
		// It should be different from default which uses dark default
		assert.notEqual(toJson(pandaPresetColorRadix(config)), await readJsonSnapshot('default'));

		if (GENERATE_SNAPSHOTS) {
			await writeJsonSnapshot('default-light', toJson(pandaPresetColorRadix(config)));
		}
		assert.equal(toJson(pandaPresetColorRadix(config)), await readJsonSnapshot('default-light'));
	});
	await it('should use a color prefix when provided', async () => {
		const config: Partial<ColorRadixPresetOptions> = {
			coreColorPrefix: 'core',
		};

		if (GENERATE_SNAPSHOTS) {
			await writeJsonSnapshot('colors-core-prefix-custom', toJson(pandaPresetColorRadix(config)));
		}
		assert.match(toJson(pandaPresetColorRadix(config)), /{"colors":{"core":{"gray":/g);
		assert.equal(toJson(pandaPresetColorRadix(config)), await readJsonSnapshot('colors-core-prefix-custom'));
	});
	await it('should allow "" as a core color prefix to remove the prefix', async () => {
		const config: Partial<ColorRadixPresetOptions> = {
			colors: ['grass'],
			coreColorPrefix: '',
		};

		if (GENERATE_SNAPSHOTS) {
			await writeJsonSnapshot('colors-core-prefix-blank-custom', toJson(pandaPresetColorRadix(config)));
		}
		assert.match(toJson(pandaPresetColorRadix(config)), /"tokens":{"colors":{"grass":/g);
		assert.equal(toJson(pandaPresetColorRadix(config)), await readJsonSnapshot('colors-core-prefix-blank-custom'));
	});
	await it('should use the white value as 9c for any color other than amber, yellow, mint, lime, and sky', async () => {
		const config: ColorRadixPresetOptions = {
			colors: ['indigo'],
		};
		if (GENERATE_SNAPSHOTS) {
			await writeJsonSnapshot(
				'colors-core-uses-correct-light-value-for-dark-colors',
				toJson(pandaPresetColorRadix(config)),
			);
		}

		assert.match(
			toJson(pandaPresetColorRadix(config)),
			/"9c":{"DEFAULT":{"value":"#ffffff"},"light":{"value":"#ffffff"},"dark":{"value":"#ffffff"}}}/g,
		);
	});
	await it('should use the white custom value as 9c for any color other than amber, yellow, mint, lime, and sky', async () => {
		const config: ColorRadixPresetOptions = {
			colors: ['indigo'],
			contrastColorOverrides: {
				black: '#000001',
				white: '#FFFFFE',
			},
		};
		if (GENERATE_SNAPSHOTS) {
			await writeJsonSnapshot(
				'colors-core-uses-correct-light-value-for-dark-colors-custom',
				toJson(pandaPresetColorRadix(config)),
			);
		}

		assert.match(
			toJson(pandaPresetColorRadix(config)),
			/"9c":{"DEFAULT":{"value":"#FFFFFE"},"light":{"value":"#FFFFFE"},"dark":{"value":"#FFFFFE"}}}/g,
		);
	});
	await it('should use the black value as 9c for amber, yellow, mint, lime, and sky', async () => {
		const config: ColorRadixPresetOptions = {
			colors: ['sky'],
		};
		if (GENERATE_SNAPSHOTS) {
			await writeJsonSnapshot(
				'colors-core-uses-correct-dark-value-for-light-colors',
				toJson(pandaPresetColorRadix(config)),
			);
		}

		assert.match(
			toJson(pandaPresetColorRadix(config)),
			/"9c":{"DEFAULT":{"value":"#000000"},"light":{"value":"#000000"},"dark":{"value":"#000000"}}}/g,
		);
	});
	await it('should use the black custom value as 9c for amber, yellow, mint, lime, and sky', async () => {
		const config: ColorRadixPresetOptions = {
			colors: ['sky'],
			contrastColorOverrides: {
				black: '#000001',
				white: '#FFFFFE',
			},
		};
		if (GENERATE_SNAPSHOTS) {
			await writeJsonSnapshot(
				'colors-core-uses-correct-dark-value-for-light-colors-custom',
				toJson(pandaPresetColorRadix(config)),
			);
		}

		assert.match(
			toJson(pandaPresetColorRadix(config)),
			/"9c":{"DEFAULT":{"value":"#000001"},"light":{"value":"#000001"},"dark":{"value":"#000001"}}}/g,
		);
	});
});
