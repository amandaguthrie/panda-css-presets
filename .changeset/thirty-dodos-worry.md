---
"@amandaguthrie/panda-preset-shared-utils": minor
---

<br>

### 🆕 Adds

#### Utility functions

* `arrJoinTruthy()`:
    * Filter out falsy values from an array and join them as a string with the provided separator.
    * Example: `arrJoinTruthy(['colors', 'brand', 0, 'blue', null, 1], '.') // => "colors.brand.blue.1"`


* `arrTruthy()`
    * Filter out falsy values from an array.
    * Example: `arrTruthy(['colors', 'brand', 0, 'blue', null, '', 1]) // => ['colors', 'brand', 'blue', 1]`


* `arrExpandPath()`
    * Expand array values by a given separator. Intended to normalize token path array values.
    * Example: `arrExpandPath(['colors', 'brand', 'blue..1.']) // => ['colors', 'brand', 'blue', '1']`


* `formatToken()`
    * Return a token formatted for config, as a CSS function, or as a CSS variable.
    * Examples:
        * config: `formatToken(['colors','brand','blue.1'], 'config') // => "{colors.brand.blue.1}"`
        * cssFn: `formatToken(['colors','brand','blue.1'], 'cssFn') // => "token(colors.brand.blue.1)"`
        * cssVar: `formatToken(['colors','brand','blue.1'], 'cssVar') // =>"var(--colors-brand-blue-1)"`


* `inlineToken()`
    * Inline a CSS value with a Panda CSS token function.
    * Examples:
        * With default
          placeholder: `inlineTokenFn(['colors','brand','blue.1'], '1px solid %token%') // "1px solid token(colors.brand.blue.1)"`
        * With custom
          placeholder: `inlineTokenFn(['colors','brand','blue.1'], '2px solid %temp%', '%temp%') // "2px solid token(colors.brand.blue.1)"`


* `maybePrefixObj()`
    * Nest an object in a prefix layer, otherwise return the object.
    * Example: `maybePrefixObj({blue: {value: "aliceblue"}}, "brand") //=> {brand: {blue: {value: "aliceblue"}}}`


* `prefixCondition()`
    * Prefix a condition key for the conditions config or defining css
    * Examples:
        * Default: `prefixCondition("theme", "brand") // "brandTheme"`
        * CSS: `prefixCondition("theme", "brand", "css") // "_brandTheme"`


* `prefixConditionConfig()`
    * Prefix multiple conditions to be used in a Panda CSS conditions config.
    *
    Example: `prefixConditionConfig({mobile: "@media (max-width: 382px)", tablet: "@media (max-width: 680px)"}, "brand") //=> {brandMobile: "@media (max-width: 382px)", brandTablet: "@media (max-width: 680px)"}`

* `prefixConditionCss()`
    * Prefix top-level keys as conditions to be used in a Panda CSS semantic token value or CSS style
    * Example: `prefixConditionCss({mobile: "@media (max-width: 382px)", tablet: "@media (max-width: 680px)"}, "brand") //=> {_brandMobile: "@media (max-width: 382px)", _brandTablet: "@media (max-width: 680px)"}`

### 🪄 Changes

#### \> Internal
* `entries()`, `fromEntries()`, `toJson()`, `readJsonSnapshot`, and `writeJsonSnapshot()` moved internal to remove `@puffin-ui/shared` dependency.