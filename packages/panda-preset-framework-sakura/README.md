# @amandaguthrie/panda-preset-framework-sakura

A [Panda CSS][panda-github] [preset][panda-docs-presets] that implements and extends [sakura][sakura-github], a minimal
and classless CSS framework with themes.

This preset makes it easy to set up [sakura][sakura-github] with Panda CSS, including customizing theme colors, fonts,
and switching themes using custom `data-*` attributes.

## Contents

- [Install](#install)
- [Configure](#configure)
- [Examples](#examples)
- [License](#license)

## Install

**npm**

```shell
npm install -D @amandaguthrie/panda-preset-framework-sakura
```

**pnpm**

```shell
pnpm install -D @amandaguthrie/panda-preset-framework-sakura
```

**yarn**

```shell
yarn add -D @amandaguthrie/panda-preset-framework-sakura
```

**bun**

```shell
bun add -D @amandaguthrie/panda-preset-framework-sakura
```

---

[> Back to Contents](#contents)

---

## Configure

In your `panda.config.{ts,js}` file, import the preset and include it in your presets list. This preset does rely on
the default settings of `@pandacss/preset-base` for the following
conditions: `_disabled`, `_focus`, `_focusVisible`, `_hover`, `_rtl`, `_visited`.

> [!TIP]
> `@pandacss/preset-base` should be included in your config. If you have `eject: true`, then it is not included.

```typescript
import { defineConfig } from '@pandacss/dev';
import sakuraPreset, { type SakuraPresetOptions } from '@amandaguthrie/panda-preset-framework-sakura';

const sakuraConfig: SakuraPresetOptions = {
  prefix: "sakura"
};

export default defineConfig({
  preflight: false,
  // ...
  presets: [
    // ... Other presets
    sakuraPreset(sakuraConfig),
  ],
  // ...
});
```

### Function `pandaPresetFrameworkSakura`

The function `pandaPresetFrameworkSakura` is the default export which optionally accepts configuration parameters and
returns a Panda CSS preset.

#### Parameters

The parameters for the default export options are exported as type `SakuraPresetOptions`.

- `prefix` (`string`, _Optional_)
    - A prefix to use in conditions, tokens, etc. This helps prevent conflicts with your other styles.
    - Default: `"sakura"`

#### Return

Panda CSS `Preset`

---

[> Back to Contents](#contents)

---

## Condition Reference

| Condition         | Value                                |
|-------------------|--------------------------------------|
| `_sakuraMobile`   | `'@media (max-width: 382px)'`        |
| `_sakuraTablet`   | `'@media (max-width: 684px)'`        |
| `_sakura${Theme}` | `&[data-${prefix}-theme="${theme}"]` |

## Token Reference

### Colors

The value below specifies the default color value. The value is adjusted based on `data-sakura-theme=*` conditions.

`sakura` should be replaced with your `prefix`, if configured.

| Token                     | Type       | CSS Variable                     | Value                   |
|---------------------------|------------|----------------------------------|-------------------------|
| `colors.sakura.bg`        | `semantic` | `var(--colors-sakura-bg)`        | `colors.sakura.bg`      |
| `colors.sakura.bg.alt`    | `semantic` | `var(--colors-sakura-bg-alt)`    | `colors.sakura.bg.alt`  |
| `colors.sakura.black`     | `core`     | `var(--colors-sakura-black)`     | `#000000`               |
| `colors.sakura.blossom`   | `semantic` | `var(--colors-sakura-blossom)`   | `colors.sakura.blossom` |
| `colors.sakura.fade`      | `semantic` | `var(--colors-sakura-fade)`      | `colors.sakura.fade`    |
| `colors.sakura.force`     | `core`     | `var(--colors-sakura-force)`     | `#DA4453`               |
| `colors.sakura.neutral.0` | `core`     | `var(--colors-sakura-neutral-0)` | `#f9f9f9`               |
| `colors.sakura.neutral.1` | `core`     | `var(--colors-sakura-neutral-1)` | `#f7f7f7`               |
| `colors.sakura.neutral.2` | `core`     | `var(--colors-sakura-neutral-2)` | `#f1f1f1`               |
| `colors.sakura.neutral.3` | `core`     | `var(--colors-sakura-neutral-3)` | `#c9c9c9`               |
| `colors.sakura.neutral.4` | `core`     | `var(--colors-sakura-neutral-4)` | `#4a4a4a`               |
| `colors.sakura.neutral.5` | `core`     | `var(--colors-sakura-neutral-5)` | `#313131`               |
| `colors.sakura.neutral.6` | `core`     | `var(--colors-sakura-neutral-6)` | `#222222`               |
| `colors.sakura.text`      | `semantic` | `var(--colors-sakura-text)`      | `colors.sakura.text`    |
| `colors.sakura.white`     | `core`     | `var(--colors-sakura-white)`     | `#FFFFFF`               |

### Fonts

| Token                  | Type       | CSS Variable                  | Value                                                                                               |
|------------------------|------------|-------------------------------|-----------------------------------------------------------------------------------------------------|
| `fonts.sakura.base`    | `core`     | `var(--fonts-sakura-base)`    | `-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif` |
| `fonts.sakura.heading` | `semantic` | `var(--fonts-sakura-heading)` | `fonts.sakura.heading`                                                                              |

[> Back to Contents](#contents)

---

## Examples

- [Change the default theme](#change-the-default-theme)
- [Use a custom theme](#use-a-custom-theme)

### Change the default theme

[> Back to examples](#examples)

### Use a custom theme

[> Back to examples](#examples)

## Acknowledgement

* [Panda CSS][panda-github] for building a robust and extensible styling solution
* [Sakura][sakura-github] for designing a minimalist yet aesthetically pleasing template

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

[sakura-github]: https://github.com/oxalorg/sakura
