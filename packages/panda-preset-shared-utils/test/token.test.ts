import { describe, it } from 'node:test';
import { parsePrefix } from '../src';
import assert from 'node:assert/strict';

describe('Function parsePrefix', () => {
  it('should trim any number of . from the start and end of a string', () => {
    assert.equal(parsePrefix('.test..', 'fallback'), 'test');
  });
  it('should not trim interior . from a string', () => {
    assert.equal(parsePrefix('.test.1..', 'fallback'), 'test.1');
  });
  it('should use the validated fallback if the prefix is invalid', () => {
    assert.equal(parsePrefix('', '.fallback..'), 'fallback');
  });
  it('should return undefined if both prefix and fallbackPrefix are invalid', () => {
    assert.equal(parsePrefix('', ' '), undefined);
  });
});
