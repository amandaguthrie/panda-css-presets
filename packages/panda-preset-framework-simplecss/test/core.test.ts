import assert from 'node:assert/strict';
import { describe, it } from 'node:test';

describe('Preset', async () => {
	await it('should be the default export', async () => {
		const preset = await import('../src');
		assert.doesNotThrow(() => preset.default());
	});
});
