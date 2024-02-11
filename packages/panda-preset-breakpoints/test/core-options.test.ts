import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import pandaPresetBreakpoints, { type BreakpointsPresetOptions, type DesignSystem } from '../src';
import { readJsonSnapshot, toJson, writeJsonSnapshot } from '@puffin-ui/shared';
import { GENERATE_SNAPSHOTS } from './test-constants';

describe('Core Token Configuration & Generation', async () => {
  const chakraConfig = /{"theme":{"extend":{"breakpoints":{"sm":"30em","md":"48em","lg":"62em","xl":"80em","2xl":"96em"}}}}/g;
  // Default is "primer"
  const defaultConfig = '{"theme":{"extend":{"breakpoints":{"xs":"320px","sm":"544px","md":"768px","lg":"1012px","xl":"1280px","2xl":"1400px"}}}}';

  await it('should return the default config if no options are provided', async () => {
    if (GENERATE_SNAPSHOTS) {
      await writeJsonSnapshot('default', JSON.stringify(pandaPresetBreakpoints()));
    }
    assert.equal(toJson(pandaPresetBreakpoints()), defaultConfig);
    assert.equal(toJson(pandaPresetBreakpoints()), await readJsonSnapshot('default'));
  });
  await it('should return the default config if an invalid design system is provided', async () => {
    const config: BreakpointsPresetOptions = {
      // @ts-expect-error We're testing an invalid value
      system: 'blueberry'
    };
    if (GENERATE_SNAPSHOTS) {
      await writeJsonSnapshot('options-system-invalid', JSON.stringify(pandaPresetBreakpoints(config)));
    }
    assert.equal(toJson(pandaPresetBreakpoints(config)), await readJsonSnapshot('options-system-invalid'));
  });
  await it('should generate design system breakpoints when a system is specified', async () => {
    const config: BreakpointsPresetOptions = {
      system: 'chakra' as DesignSystem,
    };
    if (GENERATE_SNAPSHOTS) {
      await writeJsonSnapshot('options-system-valid', JSON.stringify(pandaPresetBreakpoints(config)));
    }
    assert.equal(toJson(pandaPresetBreakpoints(config)), await readJsonSnapshot('options-system-valid'));
  });
  await it('should default to extend the theme when overwrite is not provided', async () => {
    const config: BreakpointsPresetOptions = {
      system: 'chakra' as DesignSystem,
    };
    if (GENERATE_SNAPSHOTS) {
      await writeJsonSnapshot('options-overwrite-undefined', JSON.stringify(pandaPresetBreakpoints(config)));
    }
    assert.match(toJson(pandaPresetBreakpoints()), /{"theme":{"extend":{"breakpoints":/g);
    assert.equal(toJson(pandaPresetBreakpoints(config)), await readJsonSnapshot('options-system-valid'));
    assert.equal(toJson(pandaPresetBreakpoints(config)), await readJsonSnapshot('options-overwrite-undefined'));
  });
  await it('should return the breakpoints in theme if overwrite is true', async () => {
    const config: BreakpointsPresetOptions = {
      system: 'chakra' as DesignSystem,
      overwrite: true,
    };

    if (GENERATE_SNAPSHOTS) {
      await writeJsonSnapshot('options-overwrite-true', JSON.stringify(pandaPresetBreakpoints(config)));
    }
    assert.match(toJson(pandaPresetBreakpoints(config)), /{"theme":{"breakpoints":/g)
    assert.equal(toJson(pandaPresetBreakpoints(config)), await readJsonSnapshot('options-overwrite-true'));
  });
});
