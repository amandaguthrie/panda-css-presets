# @amandaguthrie/panda-plugin-type-extend

A [Panda CSS][panda-github] [plugin][panda-docs-plugins] that allows you to extend `LayerStyleProperty`
and `TextStyleProperty` types.

The plugin uses the `codegen:prepare` hook to modify the generated `types/composition.d.ts` file before it is written to
disk.

> [!CAUTION]
> Currently, Panda CSS generates all CSS properties I've tested for layer and text styles, even those not in the provided types. 
> 
>I've reached out to the Panda CSS team on intended functionality since there is a mismatch between which properties can be generated and the types and am awaiting a response.
> 
> This plugin aims to extend the Typescript types given by Panda CSS in LayerStyleProperty/TextStyleProperty so they don't give unnecessary Typescript errors in the IDE/during type check.
> 
> If in the future Panda CSS enforces which properties are generated in layer/text styles, this plugin does not cover adding the properties to the generator - only to the types.

## Contents

- [Install](#install)
- [Configure](#configure)
- [Examples](#examples)
- [License](#license)

## Install

Tested with Panda CSS versions `0.35.0` - `0.36.0`.

**npm**

```shell
npm install -D @amandaguthrie/panda-plugin-type-extend
```

**pnpm**

```shell
pnpm install -D @amandaguthrie/panda-plugin-type-extend
```

**yarn**

```shell
yarn add -D @amandaguthrie/panda-plugin-type-extend
```

**bun**

```shell
bun add -D @amandaguthrie/panda-plugin-type-extend
```

---

[> Back to Contents](#contents)

---

## Configure

In your `panda.config.{ts,js}` file, import the plugin and include it in your plugins list.

```typescript
import { defineConfig } from '@pandacss/dev';
import { extendLayerStylePropertyType, extendTextStylePropertyType } from '@amandaguthrie/panda-plugin-type-extend';

export default defineConfig({
  // ...
  plugins: [
    // ... Other plugins
    extendLayerStylePropertyType(['outline', 'outlineColor', 'outlineOffset', 'outlineStyle', 'outlineWidth']),
    extendTextStylePropertyType(['textDecorationColor'])
  ],
  // ...
});
```

### Function extendLayerStylePropertyType

The function `extendLayerStylePropertyType` is an export which accepts an array of CSS properties and returns a Panda
plugin.

#### Parameters

- `cssVars` (`CssProperty[]`, _Required_)
    - Specify CSS properties to add to the `LayerStyleProperty` type.
    -

#### Return

Panda CSS `Plugin`

### Function extendTextStylePropertyType

The function `extendTextStylePropertyType` is an export which accepts an array of CSS properties and returns a Panda
plugin.

#### Parameters

- `cssVars` (`CssProperty[]`, _Required_)
    - Specify CSS properties to add to the `TextStyleProperty` type.
    -

#### Return

Panda CSS `Plugin`

---

[> Back to Contents](#contents)

---

## Examples

- [Add CSS properties to LayerStyleProperty](#add-css-properties-to-layerstyleproperty)
- [Add CSS properties to TextStyleProperty](#add-css-properties-to-textstyleproperty)

### Add CSS properties to `LayerStyleProperty`

While the Panda CSS team is settling on which properties to include in this type, the plugin can help extend it with the
types you specify to avoid TypeScript errors in the meantime.

Panda CSS type generated in `types/composition.d.ts` without plugin:

```typescript
type LayerStyleProperty =
  | 'background'
  | 'backgroundColor'
  // ... Removed for brevity
  | 'padding'
  | `padding${Placement}`
```

Plugin configuration

```typescript
import { defineConfig } from '@pandacss/dev';
import { extendLayerStylePropertyType } from '@amandaguthrie/panda-plugin-type-extend';

export default defineConfig({
  // ...
  plugins: [
    // ... Other plugins
    extendLayerStylePropertyType(['outline', 'outlineColor', 'outlineOffset', 'outlineStyle', 'outlineWidth'])
  ],
  // ...
});
```

Panda CSS type generated in `types/composition.d.ts` with plugin:

```typescript
type LayerStyleProperty =
  | 'background'
  | 'backgroundColor'
  // ... Removed for brevity
  | 'padding'
  | `padding${Placement}`
  | 'outline'
  | 'outlineColor'
  | 'outlineOffset'
  | 'outlineStyle'
  | 'outlineWidth'
```

[> Back to examples](#examples)

### Add CSS properties to `TextStyleProperty`

While the Panda CSS team is settling on which properties to include in this type, the plugin can help extend it with the
types you specify to avoid TypeScript errors in the meantime.

Panda CSS type generated in `types/composition.d.ts` without plugin:

```typescript
type TextStyleProperty =
  | 'fontSize'
  | 'fontSizeAdjust'
  // Removed for brevity
  | 'textOverflow'
  | 'textRendering'
```

Plugin configuration

```typescript
import { defineConfig } from '@pandacss/dev';
import { extendTextStylePropertyType } from '@amandaguthrie/panda-plugin-type-extend';

export default defineConfig({
  // ...
  plugins: [
    // ... Other plugins
    extendTextStylePropertyType(['hangingPunctuation', 'textUnderlinePosition', 'textUnderlineOffset'])
  ],
  // ...
});
```

Panda CSS type generated in `types/composition.d.ts` with plugin:

```typescript
type TextStyleProperty =
  | 'fontSize'
  | 'fontSizeAdjust'
  // Removed for brevity
  | 'textOverflow'
  | 'textRendering'
  | 'hangingPunctuation'
  | 'textUnderlinePosition'
  | 'textUnderlineOffset'
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

