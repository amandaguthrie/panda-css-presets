# @amandaguthrie/panda-preset-breakpoints

A [Panda CSS][panda-github] [preset][panda-docs-presets] that generates default breakpoints from popular open source packages like
[Ant Design][ant-design-github], [Bootstrap][bootstrap-github], [Chakra UI][chakra-ui-github], [Mantine][mantine-github], [Material Design][material-design-web], [Primer][primer-github],
and [Tailwind CSS][tailwind-css-github].

This preset makes it easy to add breakpoints from other systems to Panda CSS.

## Contents

- [Install](#install)
- [Configure](#configure)
- [Examples](#examples)
- [License](#license)

## Install

**npm**

```shell
npm install -D @amandaguthrie/panda-preset-breakpoints
```

**pnpm**

```shell
pnpm install -D @amandaguthrie/panda-preset-breakpoints
```

**yarn**

```shell
yarn add -D @amandaguthrie/panda-preset-breakpoints
```

**bun**

```shell
bun add -D @amandaguthrie/panda-preset-breakpoints
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
import { defineConfig } from '@pandacss/dev';
import breakpointsPreset, { type BreakpointsPresetOptions } from '@amandaguthrie/panda-preset-breakpoints';

const breakpointsPresetConfig: BreakpointsPresetOptions = {
  system: "chakra"
};

export default defineConfig({
  // ...
  presets: [
    // ... Other presets
    breakpointsPreset(breakpointsPresetConfig),
  ],
  // ...
});
```

### Function pandaPresetBreakpoints

The function `pandaPresetBreakpoints` is the default export which optionally accepts configuration parameters and
returns a Panda CSS theme or theme extension preset.

#### Parameters

The parameters for the default export options are exported as type `BreakpointsPresetOptions`.

- `system` (`DesignSystem`, _Optional_)
    - Specify a design system to generate breakpoints for.
    - If a string is not a valid design system, the preset will return the default system
    - Default: `"chakra"`
- `overwrite` (`boolean`, _Optional_)
    - Whether to generate breakpoints in `theme: {}` and overwrite other breakpoint configurations or
      in `theme: {extend: {}}` to merge with other breakpoints.
    - Default: `false`

#### Return

Panda CSS `Preset`

---

[> Back to Contents](#contents)

---

## Examples

- [Generate default breakpoints](#generate-default-chakra-ui-breakpoints)
- [Generate breakpoints by specifying a design system](#generate-breakpoints-by-specifying-a-design-system)
- [Generate breakpoints that replace other breakpoints](#generate-breakpoints-that-replace-other-breakpoints)

### Generate default Chakra UI breakpoints

```typescript
import { defineConfig } from '@pandacss/dev';
import breakpointsPreset from '@amandaguthrie/panda-preset-breakpoints';

export default defineConfig({
  // ...
  presets: [
    // ... Other presets
    breakpointsPreset(),
  ],
  // ...
});
```

```typescript
const defaultPresetReturn = {
  theme: {
    extend: {
      breakpoints: {
        sm: '30em',
        md: '48em',
        lg: '62em',
        xl: '80em',
        '2xl': '96em'
      }
    }
  }
}
```

[> Back to examples](#examples)

### Generate breakpoints by specifying a design system

```typescript
import { defineConfig } from '@pandacss/dev';
import breakpointsPreset from '@amandaguthrie/panda-preset-breakpoints';

export default defineConfig({
  // ...
  presets: [
    // ... Other presets
    breakpointsPreset({ system: "primer" }),
  ],
  // ...
});
```

```typescript
const primerPresetReturn = {
  theme: {
    extend: {
      breakpoints: {
        xs: '320px',
        sm: '544px',
        md: '768px',
        lg: '1012px',
        xl: '1280px',
        '2xl': '1400px',
      }
    }
  }
}
```

[> Back to examples](#examples)

### Generate breakpoints that replace other breakpoints

```typescript
import { defineConfig } from '@pandacss/dev';
import breakpointsPreset from '@amandaguthrie/panda-preset-breakpoints';

export default defineConfig({
  // ...
  presets: [
    // ... Other presets
    breakpointsPreset({ system: "primer", overwrite: true }),
  ],
  // ...
});
```

```typescript
const primerOverwritePresetReturn = {
  theme: {
    breakpoints: {
      xs: '320px',
      sm: '544px',
      md: '768px',
      lg: '1012px',
      xl: '1280px',
      '2xl': '1400px',
    }
  }
}
```

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

[ant-design-github]: https://github.com/ant-design/ant-design

[author]: https://github.com/amandaguthrie

[bootstrap-github]: https://github.com/twbs/bootstrap

[chakra-ui-github]: https://github.com/chakra-ui/chakra-ui

[mantine-github]: https://github.com/mantinedev

[material-design-web]: https://m3.material.io/

[panda-docs-presets]: https://panda-css.com/docs/customization/presets

[panda-github]: https://github.com/chakra-ui/panda

[primer-github]: https://github.com/primer

[tailwind-css-github]: https://github.com/tailwindlabs/tailwindcss
