import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { readJsonSnapshot, toJson, writeJsonSnapshot } from '@amandaguthrie/panda-preset-dev-utils';
import { GENERATE_SNAPSHOTS } from './test-constants';
import { extendLayerStylePropertyType, extendTextStylePropertyType } from '../src';

describe('Plugin: extendLayerStylePropertyType', async () => {
  await it('should be an export', async () => {
    const plugin = await import('../src').then((value) => value.extendLayerStylePropertyType);

    if (GENERATE_SNAPSHOTS) {
      await writeJsonSnapshot('default-layer-style', JSON.stringify(extendLayerStylePropertyType(['outline'])));
    }
    assert.equal(toJson(plugin(['outline'])), await readJsonSnapshot('default-layer-style'));
  });
});

describe('Plugin: extendTextStylePropertyType', async () => {
  await it('should be an export', async () => {
    const plugin = await import('../src').then((value) => value.extendTextStylePropertyType);

    if (GENERATE_SNAPSHOTS) {
      await writeJsonSnapshot(
        'default-text-style',
        JSON.stringify(extendTextStylePropertyType(['textDecorationColor'])),
      );
    }
    assert.equal(toJson(plugin(['textDecorationColor'])), await readJsonSnapshot('default-text-style'));
  });
});
