import { deepmergeCustom } from 'deepmerge-ts';

export type * from 'deepmerge-ts';

export { deepmerge } from 'deepmerge-ts';

export const deepMergeConfigOptions = deepmergeCustom({
  enableImplicitDefaultMerging: true,
  mergeArrays: false,
});
