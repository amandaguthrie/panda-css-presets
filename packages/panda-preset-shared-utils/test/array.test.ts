import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { arrExpandPath, arrJoinTruthy, arrTruthy } from '../src/array';
import { toJson } from '@puffin-ui/shared';

describe('Function arrTruthy', () => {
  it('should return string values, including white space', () => {
    assert.equal(toJson(arrTruthy(['colors', 'blue', ' '])), toJson(['colors', 'blue', ' ']));
  });
  it('should omit falsy values', () => {
    assert.equal(toJson(arrTruthy([0, null, undefined, NaN])), toJson([]));
  });
});

describe('Function arrJoinTruthy', () => {
  it('should return truthy values joined by separator', () => {
    assert.equal(arrJoinTruthy(['colors', 'blue', ' '], '.'), 'colors.blue. ');
  });
  it('should omit falsy values and return truthy values joined by separator', () => {
    assert.equal(arrJoinTruthy(['colors', 0, 'blue', null, ' ', 1, undefined, NaN], '.'), 'colors.blue. .1');
  });
  it('should omit falsy values and return an empty string', () => {
    assert.equal(arrJoinTruthy([0, null, undefined, NaN], '.'), '');
  });
});

describe('Function arrExpandPath', () => {
  it('should return values expanded by on', () => {
    assert.equal(toJson(arrExpandPath(['colors', 'brand', 'blue.1'], '.')), toJson(['colors', 'brand', 'blue', '1']));
  });
  it('should return an array without falsy values when there are extra separators', () => {
    assert.equal(
      toJson(arrExpandPath(['colors', 'brand-', '-blue--1'], '-')),
      toJson(['colors', 'brand', 'blue', '1']),
    );
  });
});
