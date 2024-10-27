import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import { readJsonSnapshot, toJson, writeJsonSnapshot } from '@amandaguthrie/panda-preset-dev-utils';
import pandaPresetBreakpoints from '../src';
import { GENERATE_SNAPSHOTS } from './test-constants';

describe('Preset', async () => {
	await it('should be the default export', async () => {
		const preset = await import('../src');

		if (GENERATE_SNAPSHOTS) {
			await writeJsonSnapshot('default', JSON.stringify(pandaPresetBreakpoints()));
		}
		assert.equal(toJson(preset.default()), await readJsonSnapshot('default'));
	});
});
