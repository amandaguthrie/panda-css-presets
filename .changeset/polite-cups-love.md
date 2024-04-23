---
"@amandaguthrie/panda-preset-color-radix": minor
---
<br />

- Refactor logic for semantic token map generation to exclude the `semanticTokens` key if no map is provided or if all mapped color names are invalid. Fixes #16
- Move shared `entries` and `fromEntries` utilities from `@puffin-ui/shared`
  to `@amandaguthrie/panda-preset-shared-utils`
- Move test library from `@puffin-ui/shared` to `@amandaguthrie/panda-preset-dev-utils`
- Update dependencies
