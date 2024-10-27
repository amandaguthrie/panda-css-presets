---
"@amandaguthrie/panda-preset-color-radix": patch
---

<br/>

##### Adds Three Color Scale Values

We've added three scale values to the standard Radix colors for ease of theming.

- **0:** Intended for white in light mode and black for dark mode.
- **9c:** The contrast color for color scale 9. A few Radix colors require dark text to meet contrast requirements. This
  makes it easier by building those contrast values into the core and semantic color scales in a consistent fashion.
  Defaults to white for all colors except for amber, yellow, mint, lime, and sky.
- **13:** Intended for black in light mode and white for dark mode.

The default black and white colors can be replaced in the preset options using the <code>contrastColorOverrides</code> object.
