import { entries, fromEntries } from '@puffin-ui/shared';

const tokens = {
  'colors.simplecss.black': {
    value: '#111111',
    variable: 'var(--colors-simplecss-black)',
  },
  'colors.simplecss.white': {
    value: '#FFFFFF',
    variable: 'var(--colors-simplecss-white)',
  },
  'colors.simplecss.blue.2': {
    value: '#1266e2',
    variable: 'var(--colors-simplecss-blue-2)',
  },
  'colors.simplecss.blue.3': {
    value: '#0D47A1',
    variable: 'var(--colors-simplecss-blue-3)',
  },
  'colors.simplecss.neutral.1': {
    value: '#F5F7FF',
    variable: 'var(--colors-simplecss-neutral-1)',
  },
  'colors.simplecss.neutral.2': {
    value: '#EFEFEF',
    variable: 'var(--colors-simplecss-neutral-2)',
  },
  'colors.simplecss.neutral.3': {
    value: '#DCDCDC',
    variable: 'var(--colors-simplecss-neutral-3)',
  },
  'colors.simplecss.neutral.4': {
    value: '#CCCCCC',
    variable: 'var(--colors-simplecss-neutral-4)',
  },
  'colors.simplecss.neutral.5': {
    value: '#ABABAB',
    variable: 'var(--colors-simplecss-neutral-5)',
  },
  'colors.simplecss.neutral.6': {
    value: '#898EA4',
    variable: 'var(--colors-simplecss-neutral-6)',
  },
  'colors.simplecss.neutral.7': {
    value: '#585858',
    variable: 'var(--colors-simplecss-neutral-7)',
  },
  'colors.simplecss.neutral.8': {
    value: '#444444',
    variable: 'var(--colors-simplecss-neutral-8)',
  },
  'colors.simplecss.neutral.9': {
    value: '#2B2B2B',
    variable: 'var(--colors-simplecss-neutral-9)',
  },
  'colors.simplecss.neutral.10': {
    value: '#212121',
    variable: 'var(--colors-simplecss-neutral-10)',
  },
  'colors.simplecss.red.2': {
    value: '#f06292',
    variable: 'var(--colors-simplecss-red-2)',
  },
  'colors.simplecss.red.3': {
    value: '#D81B60',
    variable: 'var(--colors-simplecss-red-3)',
  },
  'colors.simplecss.yellow.1': {
    value: '#FFE099',
    variable: 'var(--colors-simplecss-yellow-1)',
  },
  'colors.simplecss.yellow.2': {
    value: '#FFDD33',
    variable: 'var(--colors-simplecss-yellow-2)',
  },
  'colors.simplecss.yellow.3': {
    value: '#FFB300',
    variable: 'var(--colors-simplecss-yellow-3)',
  },
  'fonts.simplecss.mono': {
    value: 'Consolas, Menlo, Monaco, Andale Mono, Ubuntu Mono, monospace',
    variable: 'var(--fonts-simplecss-mono)',
  },
  'fonts.simplecss.sans': {
    value:
      '-apple-system, BlinkMacSystemFont, Avenir Next, Avenir, Nimbus Sans L, Roboto, Noto Sans, Segoe UI, Arial, Helvetica, Helvetica Nueue, sans-serif',
    variable: 'var(--fonts-simplecss-sans)',
  },
  'radii.simplecss.standard': {
    value: '5px',
    variable: 'var(--radii-simplecss-standard)',
  },
  'colors.simplecss.accent': {
    value: 'var(--colors-simplecss-accent)',
    variable: 'var(--colors-simplecss-accent)',
  },
  'colors.simplecss.accent.hover': {
    value: 'var(--colors-simplecss-accent-hover)',
    variable: 'var(--colors-simplecss-accent-hover)',
  },
  'colors.simplecss.accent.text': {
    value: 'var(--colors-simplecss-accent-text)',
    variable: 'var(--colors-simplecss-accent-text)',
  },
  'colors.simplecss.border': {
    value: 'var(--colors-simplecss-border)',
    variable: 'var(--colors-simplecss-border)',
  },
  'colors.simplecss.bg': {
    value: 'var(--colors-simplecss-bg)',
    variable: 'var(--colors-simplecss-bg)',
  },
  'colors.simplecss.bg.accent': {
    value: 'var(--colors-simplecss-bg-accent)',
    variable: 'var(--colors-simplecss-bg-accent)',
  },
  'colors.simplecss.code': {
    value: 'var(--colors-simplecss-code)',
    variable: 'var(--colors-simplecss-code)',
  },
  'colors.simplecss.disabled': {
    value: 'var(--colors-simplecss-disabled)',
    variable: 'var(--colors-simplecss-disabled)',
  },
  'colors.simplecss.marked': {
    value: 'var(--colors-simplecss-marked)',
    variable: 'var(--colors-simplecss-marked)',
  },
  'colors.simplecss.preformatted': {
    value: 'var(--colors-simplecss-preformatted)',
    variable: 'var(--colors-simplecss-preformatted)',
  },
  'colors.simplecss.text': {
    value: 'var(--colors-simplecss-text)',
    variable: 'var(--colors-simplecss-text)',
  },
  'colors.simplecss.text.light': {
    value: 'var(--colors-simplecss-text-light)',
    variable: 'var(--colors-simplecss-text-light)',
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
  radii: {},
};

entries(defaultTokens).forEach(([token, variable]) => {
  const category = token.split('.')[0];
  if(category && category in tokensByCategory){
    const tokensByCatCat = tokensByCategory[category]
    if(tokensByCatCat){
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
