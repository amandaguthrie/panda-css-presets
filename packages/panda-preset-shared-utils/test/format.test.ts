import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { capitalize } from '../src';

describe('Function capitalize', () => {
  it('should capitalize the first letter of a string', () => {
    assert.equal(capitalize('hello world'), 'Hello world');
  });
  it('should not change capitalization of other letters of the string', () => {
    assert.equal(capitalize('hello World'), 'Hello World');
  });
});
