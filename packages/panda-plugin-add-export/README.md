# @amandaguthrie/panda-plugin-add-export

A [Panda CSS][panda-github] [plugin][panda-docs-plugins] that allows you to change internal structures, like `tokens` into exports.

The plugin uses the `codegen:prepare` hook to modify generated files before they are written to
disk.

This was originally created to aid in generating documentation for preset tokens, but may be expanded in the future.

## Contents

- [Install](#install)
- [Configure](#configure)
- [Examples](#examples)
- [License](#license)

## Install

Tested with Panda CSS version `0.36.0`.

**npm**

```shell
npm install -D @amandaguthrie/panda-plugin-add-export
```

**pnpm**

```shell
pnpm install -D @amandaguthrie/panda-plugin-add-export
```

**yarn**

```shell
yarn add -D @amandaguthrie/panda-plugin-add-export
```

**bun**

```shell
bun add -D @amandaguthrie/panda-plugin-add-export
```

---

[> Back to Contents](#contents)

---

## Configure

In your `panda.config.{ts,js}` file, import the plugin and include it in your plugins list.

```typescript
import { defineConfig } from '@pandacss/dev';
import { addExports } from '@amandaguthrie/panda-plugin-add-export';

export default defineConfig({
  // ...
  plugins: [
    // ... Other plugins
    addExports({exportTokens: true, outExtension: "mjs"})
  ],
  // ...
});
```

### Function addExports

The function `addExports` is the default export which accepts configuration options and returns a Panda
plugin. The types for the `pluginOptions` are exproted as `AddExportsPluginOptions`.

#### Parameters

- `pluginOptions` (`AddExportsPluginOptions`, _Optional_)
  - `exportTokens` (`boolean`, _Optional_)
      - Whether to export `const tokens` in `tokens\index.{mjs|js}` and add the export declaration to `tokens\index.d.ts`
      - `false` makes no changes to the tokens constant. `true` exports the tokens constant.
      - **Default:** `false`
  - `outExtension` (`"mjs" | "js"`, _Optional_)
    - Whether to search for .js or .mjs files from the artifacts. This should match your panda.config.
    - **Default:** `"mjs"`

#### Return

Panda CSS `Plugin`

---

[> Back to Contents](#contents)

---

## Examples

- [Add tokens to export](#add-tokens-export)

### Add `tokens` export

While the Panda CSS team is settling on which properties to include in this type, the plugin can help extend it with the
types you specify to avoid TypeScript errors in the meantime.

Panda CSS `tokens/index.{mjs|js}` example

```typescript
const tokens = {
  "colors.red": {
    // all the tokens
  }
}
```

`tokens/index.d.ts` example
```typescript
// more content
export * from './tokens'
```

Plugin configuration

```typescript
import { defineConfig } from '@pandacss/dev';
import addExports from '@amandaguthrie/panda-plugin-add-export';

export default defineConfig({
  // ...
  plugins: [
    // ... Other plugins
    addExports({extendTokens: true, outExtension: "mjs"})
  ],
  // ...
});
```

Panda CSS type generated in `tokens/index.{mjs|js}` with plugin:

```typescript
// export is added
export const tokens = {
  "colors.red": {
     // all the tokens
  },
  // more tokens
}
```

`tokens/index.d.ts` with plugin example
```typescript
// more content

// tokens const is added
export declare const tokens;

export * from './tokens'
```

[> Back to examples](#examples)

---


[> Back to Contents](#contents)

---

## License

[MIT][license] © 2024 [Amanda Guthrie][author]

---

[> Back to Contents](#contents)

---

<!-- Internal Links -->

[license]: LICENSE.md

<!-- External Links -->

[author]: https://github.com/amandaguthrie

[panda-docs-plugins]: https://panda-css.com/docs/references/config#plugins

[panda-github]: https://github.com/chakra-ui/panda

