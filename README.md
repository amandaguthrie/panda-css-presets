# panda-css-presets

A collection of [Panda CSS][panda-github] [presets][panda-docs-presets].

## Contents

- [Plugins](#plugins)
- [Presets](#presets)

---

## Plugins

| Hook              | Preset Link                                                             | Description                                                                      |
|-------------------|-------------------------------------------------------------------------|----------------------------------------------------------------------------------|
| `codegen:prepare` | [panda-plugin-add-exports]()                                            | Export certain local variables, like `tokens` data, during `codegen`.            |
| `codegen:prepare` | [panda-plugin-type-extend](packages/panda-plugin-type-extend/README.md) | Extend generated types for layer and text styles with additional CSS properties. |

---

[> Back to Contents](#contents)

---

## Presets

| Category    | Preset Link                                                                              | Description                                                            |
|-------------|------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| Breakpoints | [panda-preset-breakpoints](packages/panda-preset-breakpoints/README.md)                  | Generates theme breakpoints from popular open source design libraries. |
| Color       | [panda-preset-color-radix](packages/panda-preset-color-radix/README.md)                  | Generates core and semantic tokens with Radix UI colors.               |
| Font        | [panda-preset-font-modernfs](packages/panda-preset-font-modernfs/README.md)              | Generates core tokens with Modern Font Stacks fonts.                   |
| Framework   | [panda-preset-framework-simplecss](packages/panda-preset-framework-simplecssx/README.md) | Simple.css for Panda. Configurable colors and fonts.                   |

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