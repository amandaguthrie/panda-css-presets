import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { isEmptyString, isOnlyWhitespace } from '../src/validate';

describe('Function isEmptyString', () => {
  it('should return true if s is an empty string', () => {
    assert.equal(isEmptyString(''), true);
  });
  it('should return false if s is a string with a length > 0', () => {
    assert.equal(isEmptyString('abc'), false);
  });
  it('should return false if s is an array', () => {
    assert.equal(isEmptyString([]), false);
  });
  it('should return false if s is an object', () => {
    assert.equal(isEmptyString({}), false);
  });
  it('should return false if s is null', () => {
    assert.equal(isEmptyString(null), false);
  });
  it('should return false if s is undefined', () => {
    assert.equal(isEmptyString(undefined), false);
  });
});

describe('Function isOnlyWhitespace', () => {
  it('should return true if s is an empty string', () => {
    assert.equal(isOnlyWhitespace(''), true);
  });
  it('should return true if s is a string only containing whitespace characters', () => {
    assert.equal(isOnlyWhitespace(' \n'), true);
  });
  it('should return false if s is a string with non-whitespace characters', () => {
    assert.equal(isOnlyWhitespace('abc'), false);
  });
  it('should return false if s is an array', () => {
    assert.equal(isOnlyWhitespace([]), false);
  });
  it('should return false if s is an object', () => {
    assert.equal(isOnlyWhitespace({}), false);
  });
  it('should return false if s is null', () => {
    assert.equal(isOnlyWhitespace(null), false);
  });
  it('should return false if s is undefined', () => {
    assert.equal(isOnlyWhitespace(undefined), false);
  });
});
