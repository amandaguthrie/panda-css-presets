# @amandaguthrie/panda-preset-color-radix

A [Panda CSS][panda-github] [preset][panda-docs-presets] that formats [Radix UI Colors][radix-github] as core and
semantic tokens.

This preset makes it easy to import Radix colors into Panda CSS and to generate semantic tokens with Radix color values
that use customizable light/dark conditions.

## Contents

- [Install](#install)
- [Configure](#configure)
- [Token Structure](#token-structure)
- [Examples](#examples)
- [License](#license)

## Install

**npm**

```shell
npm install -D @amandaguthrie/panda-preset-color-radix
```

**pnpm**

```shell
pnpm install -D @amandaguthrie/panda-preset-color-radix
```

**yarn**

```shell
yarn add -D @amandaguthrie/panda-preset-color-radix
```

**bun**

```shell
bun add -D @amandaguthrie/panda-preset-color-radix
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
import radixPreset, { type ColorRadixPresetOptions } from '@amandaguthrie/panda-preset-color-radix';

const radixPresetConfig: ColorRadixPresetOptions = {
  colors: '*',
  colorModeConditions: { default: 'dark', light: ['_light'], dark: ['_dark'] },
  semanticColorMap: { primary: { color: 'grass', default: 'dark' } },
};

export default defineConfig({
  // ...
  presets: [
    // ... Other presets
    radixPreset(radixPresetConfig),
  ],
  // ...
});
```

### Function pandaPresetColorRadix

The function `pandaPresetColorRadix` is the default export which optionally accepts configuration parameters and returns
Panda CSS core and semantic tokens as a preset.

#### Parameters

The parameters for the default export options are exported as type `ColorRadixPresetOptions`.

- `colors` (`"*" | ColorKeysRadix[]`, _Optional_)
    - Specify an array of Radix color names, or `"*"` to generate all Radix colors.
    - If a string in the array is not a Radix color name, it is filtered out.
    - If there are no valid Radix color names in the array, all colors are generated.
    - Default: `"*"`
- `colorModeConditions` (`ColorModeConditions`, _Optional_)

    - Properties
        - `default` (`ColorMode`, _Optional_)
            - Whether the core token `"DEFAULT"` should use the Radix light or dark color theme.
            - Options: `"light" | "dark"`
            - Default: `"dark"`
        - `light` (`Condition[]`, _Optional_)
            - A list of [Panda Conditions][panda-docs-conditions] to include that should use the Radix light color value
              when
              generating semantic tokens.
            - Default: `["_light"]`
        - `dark` (`Condition[]`, _Optional_)
            - A list of [Panda Conditions][panda-docs-conditions] to include that should use the Radix dark color value
              when
              generating semantic tokens.
            - Default: `["_dark"]`
- `coreColorPrefix` (`string`, _Optional_)
    - Customize or remove the prefix for generated core tokens.
    - The core token prefix is automatically used in semantic token generation.
    - Specify an empty string `"""` to remove the core token prefix.
    - Default: `"radix"`
- `semanticColorPrefix` (`string`, _Optional_)
    - Customize or remove the prefix for generated semantic tokens.
    - Specify an empty string `"""` to remove the core token prefix.
    - Default: `"radix"`
- `semanticColorMap` (`SemanticColorMap`, _Optional_)
    - `SemanticColorMap` (`Record<string, {color: ColorKeysRadix, default?: ColorMode}>`)
    - If a semantic color map is included, each configuration must have all the properties below.
        - `string` The name of the semantic token you would like to be generated using the included configuration
          options.
        - `color` (`ColorKeysRadix`, _Required_)
            - The Radix color to use to generate the semantic token's 1-12 values with base, light, and dark conditions.
            - If the Radix color is not included in the `colors` array, it will be automatically added. The core tokens
              need
              to be generated in order to use them in the semantic tokens.
        - `default` (`ColorMode`, _Optional_)
            - Whether the `base` value should use the Radix dark or light color mode.
            - Options: `"light" | "dark"`
            - Default: `colorModeConditions.default` ?? `"dark"`
- `contrastColorOverrides` (`ContrastColorOverrides`, _Optional_)
  - If overrides are included, all the properties below should be included.
  - `black` (`string`)
    - The color or color token to replace the default value of `black` for 0, 9c, and 13 scale values. It should have adequate contrast for accessibility with scale values 9-12 as a background color for colors amber, yellow, mint, lime, and sky.
  - `white` (`string`)
    - The color or color token to replace the default value of `white` for 0, 9c, and 13 scale values. It should have adequate contrast for accessibility with scale values 9-12 as a background color for colors other than amber, yellow, mint, lime, and sky.

#### Return

Panda CSS `Preset`

---

[> Back to Contents](#contents)

---

## Token Structure

> [!WARNING]
> At this time, `blackAlpha` and `whiteAlpha` are not included as core color tokens.

### Core Tokens

Core tokens generated by this preset utilize the following structure:

```typescript
const coreTokenStructure = {
  theme: {
    extend: {
      tokens: {
        colors: {
          radix: {
            gray: {
              "0": { DEFAULT: { value: "#000000"}, light: { value: "#ffffff" }, dark: { value: "#000000" } },
              "1": { DEFAULT: { value: "#111111" }, light: { value: "#fcfcfc" }, dark: { value: "#111111" } },
              "2": { DEFAULT: { value: "#191919" }, light: { value: "#f9f9f9" }, dark: { value: "#191919" } },
              "3": { DEFAULT: { value: "#222222" }, light: { value: "#f0f0f0" }, dark: { value: "#222222" } },
              "4": { DEFAULT: { value: "#2a2a2a" }, light: { value: "#e8e8e8" }, dark: { value: "#2a2a2a" } },
              "5": { DEFAULT: { value: "#313131" }, light: { value: "#e0e0e0" }, dark: { value: "#313131" } },
              "6": { DEFAULT: { value: "#3a3a3a" }, light: { value: "#d9d9d9" }, dark: { value: "#3a3a3a" } },
              "7": { DEFAULT: { value: "#484848" }, light: { value: "#cecece" }, dark: { value: "#484848" } },
              "8": { DEFAULT: { value: "#606060" }, light: { value: "#bbbbbb" }, dark: { value: "#606060" } },
              "9": { DEFAULT: { value: "#6e6e6e" }, light: { value: "#8d8d8d" }, dark: { value: "#6e6e6e" } },
              "9c": { DEFAULT: { value: "#ffffff"}, light: {value: "#ffffff" }, dark: { value : "#ffffff" } },
              "10": { DEFAULT: { value: "#7b7b7b" }, light: { value: "#838383" }, dark: { value: "#7b7b7b" } },
              "11": { DEFAULT: { value: "#b4b4b4" }, light: { value: "#646464" }, dark: { value: "#b4b4b4" } },
              "12": { DEFAULT: { value: "#eeeeee" }, light: { value: "#202020" }, dark: { value: "#eeeeee" } },
              "13": { DEFAULT: { value: "#ffffff"}, light: { value: "#000000" }, dark: { value: "#ffffff" } },
            },
            // ... Other Colors
            orange: {
              "0": { DEFAULT: { value: "#000000"}, light: { value: "#ffffff" }, dark: { value: "#000000" } },
              "1": { DEFAULT: { value: "#17120e" }, light: { value: "#fefcfb" }, dark: { value: "#17120e" } },
              "2": { DEFAULT: { value: "#1e160f" }, light: { value: "#fff7ed" }, dark: { value: "#1e160f" } },
              "3": { DEFAULT: { value: "#331e0b" }, light: { value: "#ffefd6" }, dark: { value: "#331e0b" } },
              "4": { DEFAULT: { value: "#462100" }, light: { value: "#ffdfb5" }, dark: { value: "#462100" } },
              "5": { DEFAULT: { value: "#562800" }, light: { value: "#ffd19a" }, dark: { value: "#562800" } },
              "6": { DEFAULT: { value: "#66350c" }, light: { value: "#ffc182" }, dark: { value: "#66350c" } },
              "7": { DEFAULT: { value: "#7e451d" }, light: { value: "#f5ae73" }, dark: { value: "#7e451d" } },
              "8": { DEFAULT: { value: "#a35829" }, light: { value: "#ec9455" }, dark: { value: "#a35829" } },
              "9": { DEFAULT: { value: "#f76b15" }, light: { value: "#f76b15" }, dark: { value: "#f76b15" } },
              "9c": { DEFAULT: { value: "#ffffff"}, light: {value: "#ffffff" }, dark: { value : "#ffffff" } },
              "10": { DEFAULT: { value: "#ff801f" }, light: { value: "#ef5f00" }, dark: { value: "#ff801f" } },
              "11": { DEFAULT: { value: "#ffa057" }, light: { value: "#cc4e00" }, dark: { value: "#ffa057" } },
              "12": { DEFAULT: { value: "#ffe0c2" }, light: { value: "#582d1d" }, dark: { value: "#ffe0c2" } },
              "13": { DEFAULT: { value: "#ffffff"}, light: { value: "#000000" }, dark: { value: "#ffffff" } },
            }
          }
        }
      }
    }
  }
}
```

Use them like other core color tokens.

#### Config File Examples

`{colors.radix.gray.1}` `{colors.radix.gray.1.light}` `{colors.radix.gray.1.dark}`

#### CSS Variable Examples

`var(--colors-radix-gray-1)` `var(--colors-radix-gray-1-light)` `var(--colors-radix-gray-1-dark)`

### Semantic Tokens

Semantic tokens generated by this preset utilize the following structure:

```typescript
const semanticTokenStructure = {
  theme: {
    extend: {
      tokens: {
        colors: {
          radix: {
            grass: {
              "0": { DEFAULT: { value: "#000000"}, light: { value: "#ffffff" }, dark: { value: "#000000" } },
              // ... Other color scale values
              "13": { DEFAULT: { value: "#ffffff"}, light: { value: "#000000" }, dark: { value: "#ffffff" } },
            }
          }
        }
      },
      semanticTokens: {
        colors: {
          radix: {
            primary: {
              "0": {
                value: {
                  base: "{colors.radix.grass.0.dark}",
                  _light: "{colors.radix.grass.0.light}",
                  _dark: "{colors.radix.grass.0.dark}"
                }
              },
              // ... Other color scale values
              "13": {
                value: {
                  base: "{colors.radix.grass.13.dark}",
                  _light: "{colors.radix.grass.13.light}",
                  _dark: "{colors.radix.grass.13.dark}"
                }
              }
            }
          }
        }
      }
    }
  }
}
```

Use them like other semantic color tokens.

#### Config File Example

`{colors.radix.primary.1}`

#### CSS Variable Example

`var(--colors-radix-primary-1)`

---

[> Back to Contents](#contents)

---

## Examples

- [Generate all colors as core tokens](#generate-all-colors-as-core-tokens)
- [Generate some colors as core tokens](#generate-some-colors-as-core-tokens)
- [Change the default color mode to light for core tokens](#change-the-default-color-mode-to-light-for-core-tokens)
- [Remove core token prefix](#remove-core-token-prefix)
- [Generate semantic colors with default settings](#generate-semantic-colors-with-default-settings)
- [Generate semantic colors with custom dark conditions](#generate-semantic-colors-with-custom-dark-conditions)
- [Generate semantic colors with custom light conditions](#generate-semantic-colors-with-custom-light-conditions)
- [Generate semantic colors with no conditions](#generate-semantic-colors-with-no-conditions)

### Generate all colors as core tokens

```typescript
import { defineConfig } from '@pandacss/dev';
import { pandaPresetColorRadix } from '@amandaguthrie/panda-preset-color-radix';

export default defineConfig({
  // ...
  presets: [
    // ... Other presets
    pandaPresetColorRadix(),
  ],
  // ...
});
```

[> Back to examples](#examples)

### Generate some colors as core tokens

```typescript
import { defineConfig } from '@pandacss/dev';
import { pandaPresetColorRadix } from '@amandaguthrie/panda-preset-color-radix';

export default defineConfig({
  // ...
  presets: [
    // ... Other presets
    pandaPresetColorRadix({ colors: ['cyan'] }),
  ],
  // ...
});
```

This generates only the color tokens that are included in the colors array.

[> Back to examples](#examples)

### Change the default color mode to light for core tokens

```typescript
import { defineConfig } from '@pandacss/dev';
import { pandaPresetColorRadix } from '@amandaguthrie/panda-preset-color-radix';

export default defineConfig({
  // ...
  presets: [
    // ... Other presets
    pandaPresetColorRadix({ colorModeConditions: { default: 'light' } }),
  ],
  // ...
});
```

```typescript
const defaultLightCoreStructure = {
  theme: {
    extend: {
      tokens: {
        colors: {
          radix: {
            // ... Other colors
            grass: {
              '0': {
                DEFAULT: { value: 'lightValue' },
                light: { value: 'lightValue' },
                dark: { value: 'darkValue' }
              },
              // ... Rest of color scale
            }
          }
        }
      }
    }
  }
}
```

[> Back to examples](#examples)

## Remove core token prefix

```typescript
import { defineConfig } from '@pandacss/dev';
import { pandaPresetColorRadix } from '@amandaguthrie/panda-preset-color-radix';

export default defineConfig({
  // ...
  presets: [
    // ... Other presets
    pandaPresetColorRadix({
      colors: ["grass"],
      coreColorPrefix: "",
    }),
  ],
  // ...
});
```

```typescript
const generatedBlankCorePrefix = {
  theme: {
    extend: {
      tokens: {
        colors: {
          // Notice that core token prefix is not included here
          grass: {
            1: {
              DEFAULT: { "value": "#fbfefb" },
              "light": { "value": "#fbfefb" },
              "dark": { "value": "#0e1511" }
            }
            // Other Colors
          }
        }
      },
      // Other Config
    }
  }
}
```

[> Back to examples](#examples)

### Generate semantic colors with default settings

```typescript
import { defineConfig } from '@pandacss/dev';
import { pandaPresetColorRadix } from '@amandaguthrie/panda-preset-color-radix';

export default defineConfig({
  // ...
  presets: [
    // ... Other presets
    pandaPresetColorRadix({ semanticColorMap: { primary: { color: 'grass', default: 'dark' } } }),
  ],
  // ...
});
```

```typescript
const defaultSemanticStructure = {
  theme: {
    extend: {
      semanticTokens: {
        colors: {
          radix: {
            primary: {
              0: {
                value: {
                  base: '{colors.grass.0.dark}',
                  _light: '{colors.grass.0.light}',
                  _dark: '{colors.grass.0.dark}',
                },
              },
              // ... Rest of color scale
            },
          },
        }
      }
    }
  }
}
```

[> Back to examples](#examples)

### Generate semantic colors with custom light conditions

```typescript
import { defineConfig } from '@pandacss/dev';
import { pandaPresetColorRadix } from '@amandaguthrie/panda-preset-color-radix';

export default defineConfig({
  // ...
  presets: [
    // ... Other presets
    pandaPresetColorRadix({
      colorModeConditions: {
        light: ['_light', '_osLight'],
      },
      semanticColorMap: {
        primary: { color: 'grass', default: 'light' },
      },
    }),
  ],
  // ...
});
```

This generates semantic tokens with the following structure.

```typescript
const customLightSemanticStructure = {
  theme: {
    extend: {
      semanticTokens: {
        colors: {
          radix: {
            primary: {
              0: {
                value: {
                  base: '{colors.grass.0.dark}',
                  _light: '{colors.grass.0.light}',
                  _osLight: '{colors.grass.0.light}',
                },
              },
              // ... Rest of color scale
            },
          },
        }
      }
    }
  }
}
```

[> Back to examples](#examples)

### Generate semantic colors with custom dark conditions

```typescript
import { defineConfig } from '@pandacss/dev';
import { pandaPresetColorRadix } from '@amandaguthrie/panda-preset-color-radix';

export default defineConfig({
  // ...
  presets: [
    // ... Other presets
    pandaPresetColorRadix({
      colorModeConditions: {
        dark: ['_dark', '_osDark'],
      },
      semanticColorMap: {
        primary: { color: 'grass', default: 'dark' },
      },
    }),
  ],
  // ...
});
```

This generates semantic tokens with the following structure.

```typescript
const customDarkSemanticStructure = {
  theme: {
    extend: {
      semanticTokens: {
        colors: {
          radix: {
            primary: {
              0: {
                value: {
                  base: '{colors.grass.0.dark}',
                  _dark: '{colors.grass.0.dark}',
                  _osDark: '{colors.grass.0.dark}',
                },
              },
              // ... Rest of color scale
            },
          },
        }
      }
    }
  }
}
```

[> Back to examples](#examples)

### Generate semantic colors with no conditions

Generate semantic colors with no light or dark conditions by passing empty arrays for `colorModeConditions.light` and
`colorModeConditions.dark`.

```typescript
import { defineConfig } from '@pandacss/dev';
import { pandaPresetColorRadix } from '@amandaguthrie/panda-preset-color-radix';

export default defineConfig({
  // ...
  presets: [
    // ... Other presets
    pandaPresetColorRadix({
      colorModeConditions: {
        light: [],
        dark: [],
      },
      semanticColorMap: {
        primary: { color: 'grass', default: 'dark' },
      },
    }),
  ],
  // ...
});
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

[author]: https://github.com/amandaguthrie

[panda-docs-conditions]: https://panda-css.com/docs/customization/conditions

[panda-docs-presets]: https://panda-css.com/docs/customization/presets

[panda-github]: https://github.com/chakra-ui/panda

[radix-github]: https://github.com/radix-ui/colors**
