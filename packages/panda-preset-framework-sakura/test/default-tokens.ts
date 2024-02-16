import { entries, fromEntries } from '@puffin-ui/shared';

const tokens = {
  'colors.sakura.black': {
    value: '#000000',
    variable: 'var(--colors-sakura-black)',
  },
  'colors.sakura.force': {
    value: '#DA4453',
    variable: 'var(--colors-sakura-force)',
  },
  'colors.sakura.neutral.0': {
    value: '#f9f9f9',
    variable: 'var(--colors-sakura-neutral-0)',
  },
  'colors.sakura.neutral.1': {
    value: '#f7f7f7',
    variable: 'var(--colors-sakura-neutral-1)',
  },
  'colors.sakura.neutral.2': {
    value: '#f1f1f1',
    variable: 'var(--colors-sakura-neutral-2)',
  },
  'colors.sakura.neutral.3': {
    value: '#c9c9c9',
    variable: 'var(--colors-sakura-neutral-3)',
  },
  'colors.sakura.neutral.4': {
    value: '#4a4a4a',
    variable: 'var(--colors-sakura-neutral-4)',
  },
  'colors.sakura.neutral.5': {
    value: '#313131',
    variable: 'var(--colors-sakura-neutral-5)',
  },
  'colors.sakura.neutral.6': {
    value: '#222222',
    variable: 'var(--colors-sakura-neutral-6)',
  },
  'colors.sakura.white': {
    value: '#FFFFFF',
    variable: 'var(--colors-sakura-white)',
  },
  'fonts.sakura.base': {
    value: '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif',
    variable: 'var(--fonts-sakura-base)',
  },
  'fontSizes.sakura.base': {
    value: '1.8rem',
    variable: 'var(--font-sizes-sakura-base)',
  },
  'colors.sakura.blossom': {
    value: 'var(--colors-sakura-blossom)',
    variable: 'var(--colors-sakura-blossom)',
  },
  'colors.sakura.fade': {
    value: 'var(--colors-sakura-fade)',
    variable: 'var(--colors-sakura-fade)',
  },
  'colors.sakura.bg': {
    value: 'var(--colors-sakura-bg)',
    variable: 'var(--colors-sakura-bg)',
  },
  'colors.sakura.bg.alt': {
    value: 'var(--colors-sakura-bg-alt)',
    variable: 'var(--colors-sakura-bg-alt)',
  },
  'colors.sakura.text': {
    value: 'var(--colors-sakura-text)',
    variable: 'var(--colors-sakura-text)',
  },
  'fonts.sakura.heading': {
    value: 'var(--fonts-sakura-heading)',
    variable: 'var(--fonts-sakura-heading)',
  },
};

const defaultTokens = fromEntries(
  entries(tokens).map(([token, detail]) => [
    token,
    {
      value: detail.value.startsWith(`var(`)
        ? detail.value.slice(6, detail.value.length - 1).replace(/-/g, '.')
        : detail.value,
      variable: detail.variable,
      type: detail.value.startsWith('var(') ? 'semantic' : 'core',
    },
  ]),
);

const tokensByCategory: Record<string, Record<string, Record<string, string>>> = {
  colors: {},
  fonts: {},
};

entries(defaultTokens).forEach(([token, variable]) => {
  const category = token.split('.')[0];
  if (category && category in tokensByCategory) {
    const tokensByCatCat = tokensByCategory[category];
    if (tokensByCatCat) {
      tokensByCatCat[token] = variable;
    }
  }
});

// eslint-disable-next-line @typescript-eslint/no-unused-vars
let categoryTables = '';

entries(tokensByCategory).forEach(([category, t]) => {
  let categoryTable = `### ${category.slice(0, 1).toUpperCase() + category.slice(1)}\n| Token | Type | CSS Variable | Value |\n| ----- | ------------ | --- | --- |\n`;
  entries(t)
    .sort()
    .forEach(
      ([t, detail]) =>
        (categoryTable += `| \`${t}\` | \`${detail.type}\`| \`${detail.variable}\` | \`${detail.value}\`|\n`),
    );

  categoryTables += categoryTable += '\n';
});

console.log(categoryTables);

export function arrExpandValues<T extends string[]>(a: T, on: string) {
  return a
    .reduce((previousValue, currentValue) => {
      previousValue.push(...currentValue.split(on));
      return previousValue;
    }, [] as string[])
    .filter(Boolean);
}

console.log(arrExpandValues(['colors', 'sakura', 'blue.'], '.'));
