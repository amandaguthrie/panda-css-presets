import type { Preset } from '@pandacss/dev';

export const conditions = (prefix: string): Preset['conditions'] => {
  return {
    [`${prefix}OsDark`]: '@media (prefers-color-scheme: dark)',
    [`${prefix}Mobile`]: '@media only screen and (max-width: 720px)',
  };
};
