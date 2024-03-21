import { describe, it } from 'node:test';
import { parsePrefix } from '../src';
import assert from 'node:assert/strict';

describe('Token Functions', async () => {
  await it('Function parsePrefix', async () => {
    await it('should trim any number of . from the start and end of a string', async () => {
      assert.equal(parsePrefix('.test..', 'fallback'), 'test');
    });
    await it('should not trim interior . from a string', async () => {
      assert.equal(parsePrefix('.test.1..', 'fallback'), 'test.1');
    });
    await it('should use the validated fallback if the prefix is invalid', async () => {
      assert.equal(parsePrefix('', '.fallback..'), 'fallback');
    });
    await it('should return undefined if both prefix and fallbackPrefix are invalid', async () => {
      assert.equal(parsePrefix('', ' '), undefined);
    });
  });
})


