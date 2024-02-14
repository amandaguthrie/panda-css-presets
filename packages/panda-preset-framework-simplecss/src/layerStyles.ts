import { defineLayerStyles } from '@pandacss/dev';

export const layerStyles = (prefix: string) => {
  return defineLayerStyles({
    [`${prefix}.border`]: {
      value: {
        border: `1px solid token(colors.${prefix}.border)`,
      },
    },
    [`${prefix}.border.rounded`]: {
      value: {
        border: `1px solid token(colors.${prefix}.border)`,
        borderRadius: `${prefix}.standard`,
      },
    },
    [`${prefix}.border.block`]: {
      value: {
        borderTop: `1px solid token(colors.${prefix}.border)`,
        borderBottom: `1px solid token(colors.${prefix}.border)`,
      },
    },
  });
};
