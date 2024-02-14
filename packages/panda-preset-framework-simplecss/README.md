# @amandaguthrie/panda-preset-framework-simplecss

A [Panda CSS][panda-github] [preset][panda-docs-presets] that recreates [simple.css][simple-css-github]. Simple.css is a CSS template that focuses on styling HTML semantic elements without classes to quickly prototype and build simple pages.

This preset makes it easy to generate the styles like [simple.css][simple-css-github] from within Panda CSS while making it your own with configurable color and font tokens.

[StackBlitz Sandbox / Demo](https://stackblitz.com/edit/panda-preset-framework-simplecss?file=index.html)

## Contents

- [Install](#install)
- [Configure](#configure)
- [Examples](#examples)
- [License](#license)

## Install

**npm**

```shell
npm install -D @amandaguthrie/panda-preset-framework-simplecss
```

**pnpm**

```shell
pnpm install -D @amandaguthrie/panda-preset-framework-simplecss
```

**yarn**

```shell
yarn add -D @amandaguthrie/panda-preset-framework-simplecss
```

**bun**

```shell
bun add -D @amandaguthrie/panda-preset-framework-simplecss
```

---

[> Back to Contents](#contents)

---

## Configure

In your `panda.config.{ts,js}` file, import the preset and include it in your presets list. This preset does rely on
the default settings of @pandacss/preset-base as a dependency.

>[!CAUTION]
> It is important to set `preflight` to `false`. Simple.css has its own reset and there will be undesirable effects to margins, heading spacing, etc. if preflight is enabled.

> [!TIP]
> If you don't currently have any presets in your config file, add
> `@pandacss/preset-base` to the array.

```typescript
import { defineConfig } from '@pandacss/dev';
import presetBase from "@pandacss/preset-base";
import simpleCssPreset, { type BreakpointsPresetOptions } from '@amandaguthrie/panda-preset-framework-simplecss';

const simpleCssConfig: SimpleCssPresetOptions = {
  prefix: "simplecss"
};

export default defineConfig({
  preflight: false,
  // ...
  presets: [
    presetBase,
    // ... Other presets
    simpleCssPreset(simpleCssConfig),
  ],
  // ...
});
```

### Function `pandaPresetFrameworkSimpleCss`

The function `pandaPresetFrameworkSimpleCss` is the default export which optionally accepts configuration parameters and
returns a Panda CSS preset.

#### Parameters

The parameters for the default export options are exported as type `SimpleCssPresetOptions`.

- `prefix` (`string`, _Optional_)
    - A prefix to use in conditions, tokens, etc. This prevents conflicts with your other styles.
    - Default: `"simplecss"`
- `colors` (`Partial<SimpleCssColorConfig>`, _Optional_)
    - A color map to replace default colors with your own.
    - Default: See `defaultOptions` in `src/preset.ts`.
- `fonts` (`Partial<SimpleCssFontConfig>`, _Optional_)
    - A font map to replace default fonts with your own.
    - Default:
```typescript
const fontConfigDefault = {
  mono: { value: ['Consolas', 'Menlo', 'Monaco', 'Andale Mono', 'Ubuntu Mono', 'monospace'] },
  sans: { value: ['-apple-system', 'BlinkMacSystemFont', 'Avenir Next', 'Avenir', 'Nimbus Sans L', 'Roboto', 'Noto Sans', 'Segoe UI', 'Arial', 'Helvetica', 'Helvetica Nueue', 'sans-serif',], },
}
```

#### Return

Panda CSS `Preset`

---

[> Back to Contents](#contents)

---

## Token Reference

---

### Colors
| Token | Type | CSS Variable | Value |
| ----- | ------------ | --- | --- |
| `colors.simplecss.accent` | `semantic`| `var(--colors-simplecss-accent)` | `colors.simplecss.accent`|
| `colors.simplecss.accent.hover` | `semantic`| `var(--colors-simplecss-accent-hover)` | `colors.simplecss.accent.hover`|
| `colors.simplecss.accent.text` | `semantic`| `var(--colors-simplecss-accent-text)` | `colors.simplecss.accent.text`|
| `colors.simplecss.bg` | `semantic`| `var(--colors-simplecss-bg)` | `colors.simplecss.bg`|
| `colors.simplecss.bg.accent` | `semantic`| `var(--colors-simplecss-bg-accent)` | `colors.simplecss.bg.accent`|
| `colors.simplecss.black` | `core`| `var(--colors-simplecss-black)` | `#111111`|
| `colors.simplecss.blue.2` | `core`| `var(--colors-simplecss-blue-2)` | `#1266e2`|
| `colors.simplecss.blue.3` | `core`| `var(--colors-simplecss-blue-3)` | `#0D47A1`|
| `colors.simplecss.border` | `semantic`| `var(--colors-simplecss-border)` | `colors.simplecss.border`|
| `colors.simplecss.code` | `semantic`| `var(--colors-simplecss-code)` | `colors.simplecss.code`|
| `colors.simplecss.disabled` | `semantic`| `var(--colors-simplecss-disabled)` | `colors.simplecss.disabled`|
| `colors.simplecss.marked` | `semantic`| `var(--colors-simplecss-marked)` | `colors.simplecss.marked`|
| `colors.simplecss.neutral.1` | `core`| `var(--colors-simplecss-neutral-1)` | `#F5F7FF`|
| `colors.simplecss.neutral.10` | `core`| `var(--colors-simplecss-neutral-10)` | `#212121`|
| `colors.simplecss.neutral.2` | `core`| `var(--colors-simplecss-neutral-2)` | `#EFEFEF`|
| `colors.simplecss.neutral.3` | `core`| `var(--colors-simplecss-neutral-3)` | `#DCDCDC`|
| `colors.simplecss.neutral.4` | `core`| `var(--colors-simplecss-neutral-4)` | `#CCCCCC`|
| `colors.simplecss.neutral.5` | `core`| `var(--colors-simplecss-neutral-5)` | `#ABABAB`|
| `colors.simplecss.neutral.6` | `core`| `var(--colors-simplecss-neutral-6)` | `#898EA4`|
| `colors.simplecss.neutral.7` | `core`| `var(--colors-simplecss-neutral-7)` | `#585858`|
| `colors.simplecss.neutral.8` | `core`| `var(--colors-simplecss-neutral-8)` | `#444444`|
| `colors.simplecss.neutral.9` | `core`| `var(--colors-simplecss-neutral-9)` | `#2B2B2B`|
| `colors.simplecss.preformatted` | `semantic`| `var(--colors-simplecss-preformatted)` | `colors.simplecss.preformatted`|
| `colors.simplecss.red.2` | `core`| `var(--colors-simplecss-red-2)` | `#f06292`|
| `colors.simplecss.red.3` | `core`| `var(--colors-simplecss-red-3)` | `#D81B60`|
| `colors.simplecss.text` | `semantic`| `var(--colors-simplecss-text)` | `colors.simplecss.text`|
| `colors.simplecss.text.light` | `semantic`| `var(--colors-simplecss-text-light)` | `colors.simplecss.text.light`|
| `colors.simplecss.white` | `core`| `var(--colors-simplecss-white)` | `#FFFFFF`|
| `colors.simplecss.yellow.1` | `core`| `var(--colors-simplecss-yellow-1)` | `#FFE099`|
| `colors.simplecss.yellow.2` | `core`| `var(--colors-simplecss-yellow-2)` | `#FFDD33`|
| `colors.simplecss.yellow.3` | `core`| `var(--colors-simplecss-yellow-3)` | `#FFB300`|

### Fonts
| Token | Type | CSS Variable | Value |
| ----- | ------------ | --- | --- |
| `fonts.simplecss.mono` | `core`| `var(--fonts-simplecss-mono)` | `Consolas, Menlo, Monaco, Andale Mono, Ubuntu Mono, monospace`|
| `fonts.simplecss.sans` | `core`| `var(--fonts-simplecss-sans)` | `-apple-system, BlinkMacSystemFont, Avenir Next, Avenir, Nimbus Sans L, Roboto, Noto Sans, Segoe UI, Arial, Helvetica, Helvetica Nueue, sans-serif`|

### Radii
| Token | Type | CSS Variable | Value |
| ----- | ------------ | --- | --- |
| `radii.simplecss.standard` | `core`| `var(--radii-simplecss-standard)` | `5px`|


[> Back to Contents](#contents)

---

## Examples

- [Replace colors using preset config](#replace-colors-using-preset-config)
- [Replace colors using Panda config](#replace-colors-using-panda-config)

### Replace colors using preset config

```typescript
import { defineConfig } from '@pandacss/dev';
import presetBase from "@pandacss/preset-base";
import simpleCssPreset from '@amandaguthrie/panda-preset-frameworks-simplecss';

export default defineConfig({
  preflight: false,
  // ...
  presets: [
    presetBase,
    // ... Other presets
    simpleCssPreset({ colors: { red: { 2: { value: "#EC8E7B" }, 3: { value: "#E54D2E" } } } }),
  ],
  // ...
});
```

```typescript
const defaultPresetReturn = {
  theme: {
    extend: {
      tokens: {
        colors: {
          simplecss: {
            // Other colors are default preset colors
            red: { 2: { value: "#EC8E7B" }, 3: { value: "#E54D2E" } }
          }
        }
      }
    }
  }
}
```

[> Back to examples](#examples)

### Replace colors using Panda config

```typescript
import { defineConfig } from '@pandacss/dev';
import presetBase from "@pandacss/preset-base";
import simpleCssPreset from '@amandaguthrie/panda-preset-frameworks-simplecss';

export default defineConfig({
  preflight: false,
  // ...
  theme: {
    extend: {
      tokens: {
        colors: {
          simplecss: { // If you changed the prefix in the config, use your prefix instead of simplecss.
            red: { 2: { value: "#EC8E7B" }, 3: { value: "#E54D2E" } }
          }
        }
      }
    }
  },
  presets: [
    presetBase,
    // ... Other presets
    simpleCssPreset(),
  ],
  // ...
});
```

[> Back to examples](#examples)

## Acknowledgement

* [Panda CSS][panda-github] for building a robust and extensible styling solution
* [Simple.css][simple-css-github] for designing a minimalist yet aesthetically pleasing template

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

[panda-docs-presets]: https://panda-css.com/docs/customization/presets

[panda-github]: https://github.com/chakra-ui/panda

[simple-css-github]: https://github.com/kevquirk/simple.css
