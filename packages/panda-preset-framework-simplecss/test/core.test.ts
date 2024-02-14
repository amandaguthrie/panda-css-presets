import { describe, it } from 'node:test';
import assert from 'node:assert/strict';

describe('Preset', async () => {
  await it('should be the default export', async () => {
    const preset = await import('../src');
    assert.doesNotThrow(() => preset.default());
  });
});
