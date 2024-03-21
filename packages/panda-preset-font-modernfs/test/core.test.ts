import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { readJsonSnapshot, toJson } from '@amandaguthrie/panda-preset-dev-utils';

describe('Preset', async () => {
  await it('should be the default export', async () => {
    const preset = await import('../src');
    assert.equal(toJson(preset.default()), await readJsonSnapshot('default'));
  });
});
