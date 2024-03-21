import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { readJsonSnapshot, toJson, writeJsonSnapshot } from '@amandaguthrie/panda-preset-dev-utils';
import { GENERATE_SNAPSHOTS } from './test-constants';
import {
  maybeExtendTheme,
  wrapInExtendTheme,
  type WrapInExtendThemeArgs,
  wrapInTheme,
  type WrapInThemeArgs,
} from '../src';

describe('Theme Functions', async () => {
  await it('Function wrapInTheme', async () => {
    await it('should return theme content wrapped with theme: {}', async () => {
      const testFile = 'theme-fn-wrapInTheme';
      const themeContent: WrapInThemeArgs['themeContent'] = { breakpoints: {} };
      if (GENERATE_SNAPSHOTS) {
        await writeJsonSnapshot(testFile, toJson(wrapInTheme({ themeContent })));
      }

      assert.equal(toJson(wrapInTheme({ themeContent })), await readJsonSnapshot(testFile));
    });
  });

  await it('Function wrapInExtendTheme', async () => {
    await it('should return theme content wrapped with theme: {extend: {}}', async () => {
      const testFile = 'theme-fn-wrapInExtendTheme';
      const themeContent: WrapInExtendThemeArgs['themeContent'] = { breakpoints: {} };
      if (GENERATE_SNAPSHOTS) {
        await writeJsonSnapshot(testFile, toJson(wrapInExtendTheme({ themeContent })));
      }

      assert.equal(toJson(wrapInExtendTheme({ themeContent })), await readJsonSnapshot(testFile));
    });
  });

  await it('Function maybeExtendTheme', async () => {
    await it('should return content wrapped with theme: {extend: themeContent} when extend is true', async () => {
      const testFile = 'theme-fn-maybeExtendTheme-extend';
      const themeContent = { breakpoints: {} };
      const config = { themeContent, extend: true };
      if (GENERATE_SNAPSHOTS) {
        await writeJsonSnapshot(testFile, toJson(maybeExtendTheme(config)));
      }

      assert.equal(toJson(maybeExtendTheme(config)), await readJsonSnapshot(testFile));
    });
    await it('should return content wrapped with theme: themeContent when extend is false', async () => {
      const testFile = 'theme-fn-maybeExtendTheme-overwrite';
      const themeContent = { breakpoints: {} };
      const config = { themeContent, extend: false };
      if (GENERATE_SNAPSHOTS) {
        await writeJsonSnapshot(testFile, toJson(maybeExtendTheme(config)));
      }

      assert.equal(toJson(maybeExtendTheme(config)), await readJsonSnapshot(testFile));
    });
  });
})




