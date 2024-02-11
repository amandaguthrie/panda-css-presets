import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { readJsonSnapshot, toJson, writeJsonSnapshot } from '@puffin-ui/shared';
import { GENERATE_SNAPSHOTS } from './test-constants';
import pandaPresetBreakpoints from '../src';

describe('Preset', async () => {

  await it('should be the default export', async () => {
    const preset = await import('../src');

    if (GENERATE_SNAPSHOTS) {
      await writeJsonSnapshot('default', JSON.stringify(pandaPresetBreakpoints()));
    }
    assert.equal(toJson(preset.default()), await readJsonSnapshot('default'));
  });
});
