import { describe, it } from 'node:test';
import { formatToken, inlineTokenFn, parsePrefix } from '../src';
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

describe('Function formatToken', () => {
  it('should return a valid config token', () => {
    assert.equal(formatToken(['colors', 'brand', 'blue.1'], 'config'), '{colors.brand.blue.1}');
  });
  it('should return a valid css fn', () => {
    assert.equal(formatToken(['colors', 'brand', 'blue.1'], 'cssFn'), 'token(colors.brand.blue.1)');
  });
  it('should return a valid css var', () => {
    assert.equal(formatToken(['colors', 'brand', 'blue.1'], 'cssVar'), 'var(--colors-brand-blue-1)');
  });
});

describe('Function inlineTokenFn', () => {
  it('should return an inlined token function', () => {
    assert.equal(
      inlineTokenFn(['colors', 'brand', 'blue.1'], '1px solid %token%', '%token%'),
      '1px solid token(colors.brand.blue.1)',
    );
  });
  it('should replace all placeholders with inlined token functions', () => {
    assert.equal(
      inlineTokenFn(['colors', 'brand', 'blue.1'], '%token% 1px solid %token%'),
      'token(colors.brand.blue.1) 1px solid token(colors.brand.blue.1)',
    );
  });
});
