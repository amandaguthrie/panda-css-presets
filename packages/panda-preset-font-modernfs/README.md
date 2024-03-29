# @amandaguthrie/panda-preset-font-modernfs

A [Panda CSS][panda-github] [preset][panda-docs-presets] that formats [Modern Font Stack][modern-font-stack-github] font
stacks as core tokens.

This preset makes it easy to import Modern Font Stack fonts into Panda CSS.

## Contents

- [Install](#install)
- [Configure](#configure)
- [Token Structure](#token-structure)
- [Examples](#examples)
- [License](#license)

## Install

**npm**

```shell
npm install -D @amandaguthrie/panda-preset-font-modernfs
```

**pnpm**

```shell
pnpm install -D @amandaguthrie/panda-preset-font-modernfs
```

**yarn**

```shell
yarn add -D @amandaguthrie/panda-preset-font-modernfs
```

**bun**

```shell
bun add -D @amandaguthrie/panda-preset-font-modernfs
```

---

[> Back to Contents](#contents)

---

## Configure

In your `panda.config.{ts,js}` file, import the preset and include it in your presets list. This preset does not rely on
any of the default @pandacss presets as a dependency.

> [!TIP]
> If you don't currently have any presets in your config file and are using any of the Panda CSS defaults, add
> `@pandacss/preset-base` and/or `@pandacss/preset-panda` to the array.

```typescript
import {defineConfig} from '@pandacss/dev';
import modernFSPreset, {type FontModernFSPresetOptions} from '@amandaguthrie/panda-preset-font-modernfs';

const modernFSPresetConfig: FontModernFSPresetOptions = {
  fonts: '*'
};

export default defineConfig({
  // ...
  presets: [
    // ... Other presets
    modernFSPreset(modernFSPresetConfig),
  ],
  // ...
});
```

### Function pandaPresetFontModernFS

The function `pandaPresetFontModernFS` is the default export which optionally accepts configuration parameters and
returns
Panda CSS core tokens as a preset.

#### Parameters

The parameters for the default export options are exported as type `FontModernFSPresetOptions`.

- `fonts` (`"*" | FontKeyModernFontStack[]`, _Optional_)
    - Specify an array of Modern Font Stack names, or `"*"` to generate all Modern Font Stack names.
    - If a string in the array is not a valid Modern Font Stack name, it is filtered out.
    - If there are no valid Modern Font Stack names in the array, all font stacks are generated.
    - Default: `"*"`

#### Return

Panda CSS `Preset`

---

[> Back to Contents](#contents)

---

## Token Structure

### Core Tokens

Core tokens generated by this preset utilize the following structure:

```typescript
const coreTokenStructure = {
  modernfs: {
    humanist: {value: []}
    // Other fonts
  },
};
```

Use them like other core font tokens.

#### Config File

`{fonts.modernfs.humanist}` `{fonts.modernfs.neoGrotesque}`

#### CSS Variable Examples

`var(--fonts-modernfs-humanist)` `var(--fonts-modernfs-neo-grotesque)`

---

[> Back to Contents](#contents)

---

## Examples

- [Generate all fonts as core tokens](#generate-all-fonts-as-core-tokens)
- [Generate some fonts as core tokens](#generate-some-fonts-as-core-tokens)

### Generate all fonts as core tokens

```typescript
import {defineConfig} from '@pandacss/dev';
import modernFSPreset from '@amandaguthrie/panda-preset-font-modernfs';

export default defineConfig({
  // ...
  presets: [
    // ... Other presets
    modernFSPreset(),
  ],
  // ...
});
```

```typescript
const allFonts = {
  theme: {
    extend: {
      tokens: {
        fonts: {
          modernfs: {
            monospaceCode: {value: ["ui-monospace", "Cascadia Code", "Source Code Pro", "Menlo", "Consolas", "DejaVu Sans Mono", "monospace"]},
            // ... Other fonts
            transitional: {value: ["Charter", "Bitstream Charter", "Sitka Text", "Cambria", "serif"]}
          }
        }
      }
    }
  }
}
```

[> Back to examples](#examples)

### Generate some fonts as core tokens

```typescript
import {defineConfig} from '@pandacss/dev';
import modernFSPreset from '@amandaguthrie/panda-preset-font-modernfs';

export default defineConfig({
  // ...
  presets: [
    // ... Other presets
    modernFSPreset({fonts: ["geometricHumanist"]}),
  ],
  // ...
});
```

This generates only the font tokens that are included in the fonts array.

```typescript
const someFonts = {
  theme: {
    extend: {
      tokens: {
        fonts: {
          modernfs: {
            geometricHumanist: {value: ["Avenir", "Montserrat", "Corbel", "URW Gothic", "source-sans-pro", "sans-serif"]}
          }
        }
      }
    }
  }
}
```

---

[> Back to Contents](#contents)

---
## Acknowledgement

* [Panda CSS][panda-github] for building a robust and extensible styling solution
* [Modern Font Stacks][modern-font-stack-github] for curating cohesive collections of native web fonts

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

[modern-font-stack-github]: https://github.com/system-fonts/modern-font-stacks

[panda-docs-presets]: https://panda-css.com/docs/customization/presets

[panda-github]: https://github.com/chakra-ui/panda
