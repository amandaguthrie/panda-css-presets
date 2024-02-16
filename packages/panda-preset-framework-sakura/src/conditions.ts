import { prefixConditionConfig } from '@amandaguthrie/panda-preset-shared-utils';

export const conditions = (prefix: string) => {
  const conditions = {
    mobile: '@media (max-width: 382px)',
    tablet: '@media (max-width: 684px)',
    dark: `&[data-${prefix}-theme="dark"]`,
    darkSolarized: `&[data-${prefix}-theme="dark-solarized"]`,
    earthly: `&[data-${prefix}-theme="earthly"]`,
    ink: `&[data-${prefix}-theme="ink"]`,
    pink: `&[data-${prefix}-theme="pink"]`,
    radical: `&[data-${prefix}-theme="radical"]`,
    vader: `&[data-${prefix}-theme="vader"]`,
  };

  return prefixConditionConfig(conditions, prefix);
};
