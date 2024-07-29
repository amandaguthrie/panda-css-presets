# @amandaguthrie/panda-preset-color-radix

## 0.3.0

### Minor Changes

- [#20](https://github.com/amandaguthrie/panda-css-presets/pull/20) [`0153d74`](https://github.com/amandaguthrie/panda-css-presets/commit/0153d74560bd9d6138ae8544749dbfc8a3298e4f) Thanks [@amandaguthrie](https://github.com/amandaguthrie)! - \* Add name property to preset for Panda CSS v0.44.0 compatibility
  - Adapt tests, re-run test snapshots

### Patch Changes

- [#18](https://github.com/amandaguthrie/panda-css-presets/pull/18) [`69d7ddf`](https://github.com/amandaguthrie/panda-css-presets/commit/69d7ddf14e6f9af11a141b42ad4e144383e1ecb9) Thanks [@amandaguthrie](https://github.com/amandaguthrie)! - Migrate from ESLint/Prettier to Biome.
  Change .forEach to for ... of loops and switch from != undefined to != null or !== undefined.
- Updated dependencies [[`0153d74`](https://github.com/amandaguthrie/panda-css-presets/commit/0153d74560bd9d6138ae8544749dbfc8a3298e4f), [`69d7ddf`](https://github.com/amandaguthrie/panda-css-presets/commit/69d7ddf14e6f9af11a141b42ad4e144383e1ecb9)]:
  - @amandaguthrie/panda-preset-shared-utils@0.4.0

## 0.2.0

### Minor Changes

- [#13](https://github.com/amandaguthrie/panda-css-presets/pull/13) [`c297a67`](https://github.com/amandaguthrie/panda-css-presets/commit/c297a67ab0fa45e69459ab7695a69729ce7fc466) Thanks [@amandaguthrie](https://github.com/amandaguthrie)! - <br />

  - Refactor logic for semantic token map generation to exclude the `semanticTokens` key if no map is provided or if all mapped color names are invalid. Fixes #16
  - Move shared `entries` and `fromEntries` utilities from `@puffin-ui/shared`
    to `@amandaguthrie/panda-preset-shared-utils`
  - Move test library from `@puffin-ui/shared` to `@amandaguthrie/panda-preset-dev-utils`
  - Update dependencies

### Patch Changes

- Updated dependencies [[`c297a67`](https://github.com/amandaguthrie/panda-css-presets/commit/c297a67ab0fa45e69459ab7695a69729ce7fc466)]:
  - @amandaguthrie/panda-preset-shared-utils@0.3.0

## 0.1.1

### Patch Changes

- [#10](https://github.com/amandaguthrie/panda-css-presets/pull/10) [`66cbd67`](https://github.com/amandaguthrie/panda-css-presets/commit/66cbd674bfc30a92cb1beb01b3cdb6c15e4b91cd) Thanks [@amandaguthrie](https://github.com/amandaguthrie)! - ## Internal Changes
  - Moved internal function `parsePrefix` to `@amandaguthrie/panda-preset-shared-utils`.
  - Updated preset default and options types.
- Updated dependencies [[`66cbd67`](https://github.com/amandaguthrie/panda-css-presets/commit/66cbd674bfc30a92cb1beb01b3cdb6c15e4b91cd)]:
  - @amandaguthrie/panda-preset-shared-utils@0.2.0

## 0.1.0

### Minor Changes

- [#8](https://github.com/amandaguthrie/panda-css-presets/pull/8) [`497e82a`](https://github.com/amandaguthrie/panda-css-presets/commit/497e82a226307bf93fa0b141066a4054f46f2c4e) Thanks [@amandaguthrie](https://github.com/amandaguthrie)! - - Update configuration option merge to use an empty object as the target
  - Update tests to more specifically check the returned JSON for specific strings

## 0.0.1

### Patch Changes

- [#1](https://github.com/amandaguthrie/panda-css-presets/pull/1) [`4a5d92e`](https://github.com/amandaguthrie/panda-css-presets/commit/4a5d92e3a392a6dc2df00445aba5df1c85359d67) Thanks [@amandaguthrie](https://github.com/amandaguthrie)! - - Configure preset and helper functions
  - Add test suites
  - Add types and JSDOC documentation
  - Create README instructions
