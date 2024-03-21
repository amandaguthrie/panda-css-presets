import type { CssProperty, PandaPlugin } from '@pandacss/types';
import { definePlugin } from '@pandacss/dev';

export function extendLayerStylePropertyType(cssVars: CssProperty[]): PandaPlugin {
  return definePlugin({
    name: 'type-extend-layer-style',
    hooks: {
      'codegen:prepare': (params) => {
        const types = params.artifacts.find((artifact) => artifact.id === 'types-gen');
        const file = types?.files.find((file) => file.file === 'composition.d.ts');
        if (file) {
          const codeArray = file?.code?.split('\n\n');
          const layerStylePropertyIndex = codeArray?.findIndex((line) => line.includes('type LayerStyleProperty '));
          if (layerStylePropertyIndex && layerStylePropertyIndex !== -1 && codeArray) {
            cssVars.forEach((property) => {
              codeArray[layerStylePropertyIndex] += `\n  | '${property}'`;
            });
          }
          file.code = codeArray?.join('\n\n');
        }
      },
    },
  });
}
