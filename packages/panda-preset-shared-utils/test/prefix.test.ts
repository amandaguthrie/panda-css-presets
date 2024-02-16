import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { prefixCondition, prefixConditionConfig, prefixConditionCss } from '../src';
import { toJson } from '@puffin-ui/shared';

describe('Function prefixCondition', () => {
  it('should return the condition if there is no prefix', () => {
    assert.equal(prefixCondition('blue', undefined), 'blue');
  });
  it('should by default return a config-formatted condition', () => {
    assert.equal(prefixCondition('blue', 'brand'), 'brandBlue');
  });
  it('should by default return a config-formatted condition when the type is config', () => {
    assert.equal(prefixCondition('blue', 'brand', 'config'), 'brandBlue');
  });
  it('should return a css-formatted condition when the type is css', () => {
    assert.equal(prefixCondition('blue', 'brand', 'css'), '_brandBlue');
  });
});

describe('Function prefixConditionConfig', () => {
  it('should add the prefix to each condition key', () => {
    assert.equal(
      toJson(
        prefixConditionConfig(
          {
            mobile: '@media (max-width: 382px)',
            tablet: '@media (max-width: 680px)',
          },
          'brand',
        ),
      ),
      toJson({ brandMobile: '@media (max-width: 382px)', brandTablet: '@media (max-width: 680px)' }),
    );
  });
});

describe('Function prefixConditionCss', () => {
  it('should add the prefix to each condition key', () => {
    assert.equal(
      toJson(
        prefixConditionCss(
          {
            mobile: '@media (max-width: 382px)',
            tablet: '@media (max-width: 680px)',
          },
          'brand',
        ),
      ),
      toJson({ _brandMobile: '@media (max-width: 382px)', _brandTablet: '@media (max-width: 680px)' }),
    );
  });
});
