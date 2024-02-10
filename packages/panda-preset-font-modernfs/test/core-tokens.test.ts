import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { type FontModernFSPresetOptions, pandaPresetFontModernFS } from '../src';
import { readJsonSnapshot, toJson, writeJsonSnapshot } from '@puffin-ui/shared';
import { GENERATE_SNAPSHOTS } from './test-constants';

describe('Core Token Configuration & Generation', async () => {
  await it('should generate all fonts when no fonts are specified', async () => {
    if (GENERATE_SNAPSHOTS) {
      await writeJsonSnapshot('default', JSON.stringify(pandaPresetFontModernFS()));
    }

    assert.equal(toJson(pandaPresetFontModernFS()), await readJsonSnapshot('default'));
  });
  await it('should generate the specified fonts when an array is specified', async () => {
    const config: Partial<FontModernFSPresetOptions> = {
      fonts: ['geometricHumanist'],
    };
    if (GENERATE_SNAPSHOTS) {
      await writeJsonSnapshot('fonts-array-valid', JSON.stringify(pandaPresetFontModernFS(config)));
    }
    assert.equal(toJson(pandaPresetFontModernFS(config)), await readJsonSnapshot('fonts-array-valid'));
  });
  await it('should ignore font stack names that are not in the Modern Font Stacks set', async () => {
    const config: Partial<FontModernFSPresetOptions> = {
      // @ts-expect-error - testing invalid font
      fonts: ['geometricHumanist', 'metricHumanist'],
    };
    // This output should be the same as "fonts-array-valid" because it should ignore metricHumanist
    assert.equal(toJson(pandaPresetFontModernFS(config)), await readJsonSnapshot('fonts-array-valid'));
  });
  await it('should generate all fonts if no valid fonts are specified', async () => {
    const config: Partial<FontModernFSPresetOptions> = {
      // @ts-expect-error - testing invalid font
      fonts: ['metricHumanist', 'cinnamon'],
    };
    // This output should be the same as "default" because it should return all fonts.
    assert.equal(toJson(pandaPresetFontModernFS(config)), await readJsonSnapshot('default'));
  });
});
