import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { readJsonSnapshot, toJson, writeJsonSnapshot } from "@amandaguthrie/panda-preset-dev-utils"
import { GENERATE_SNAPSHOTS } from './test-constants';
import {extendLayerStylePropertyType} from '../src';

describe('Plugin: extendLayerStylePropertyType', async () => {
  await it('should be an export', async () => {
    const plugin = await import('../src').then((value) => value.extendLayerStylePropertyType);

    if (GENERATE_SNAPSHOTS) {
      await writeJsonSnapshot('default-layer-style', JSON.stringify(extendLayerStylePropertyType(['outline'])));
    }
    assert.equal(toJson(plugin(['outline'])), await readJsonSnapshot('default-layer-style'));
  });
});
