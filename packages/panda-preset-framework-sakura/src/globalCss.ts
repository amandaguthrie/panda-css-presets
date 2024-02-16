import { defineGlobalStyles, defineStyles } from '@pandacss/dev';
import { deepmerge, inlineTokenFn, prefixCondition } from '@amandaguthrie/panda-preset-shared-utils';

// @TODO: Need conditions _disabled, _focusVisible, _hover, _visited from @pandacss/preset-base

// @TODO: See if Panda CSS allows these properties in layerStyles or textStyles at some point. It doesn't as of 0.31.0.

export const wordWrap = defineStyles({
  overflowWrap: 'break-word',
  wordBreak: 'break-word',
  wordWrap: 'break-word',
  // '-ms-word-break': 'break-all',
});

export const globalCss = ({ prefix, withExtraStyles }: { prefix: string; withExtraStyles: boolean }) => {
  const mobile = prefixCondition('mobile', prefix, 'css');
  const tablet = prefixCondition('tablet', prefix, 'css');

  // @ts-ignore Expression produces union too complex to represent
  const baseStyles = defineGlobalStyles({
    html: {
      fontSize: '62.5%',
      fontFamily: `${prefix}.base`,
    },
    // @ts-expect-error Typescript issue with dynamic condition keys
    body: {
      fontSize: `${prefix}.base`,
      lineHeight: 1.618,
      maxWidth: '38em',
      margin: 'auto',
      color: `${prefix}.text`,
      backgroundColor: `${prefix}.bg`,
      padding: '13px',
      [mobile]: {
        fontSize: inlineTokenFn(['fontSizes', prefix, 'base'], 'calc(%token% * 0.85)'),
      },
      [tablet]: {
        fontSize: inlineTokenFn(['fontSizes', prefix, 'base'], 'calc(%token% * 0.75)'),
      },
    },
    a: {
      color: `${prefix}.blossom`,
      textDecoration: 'none',
      _hover: {
        borderBottom: inlineTokenFn(['colors', prefix, 'text'], '2px solid %token%'),
        color: `${prefix}.fade`,
      },
      _visited: {
        color: `brightness(var(--colors-${prefix}-blossom), -10%)`,
      },
    },
    blockquote: {
      backgroundColor: `${prefix}.bg.alt`,
      borderInlineStart: inlineTokenFn(['colors', prefix, 'blossom'], '5px solid %token%'),
      marginBottom: '2.5rem',
      marginInline: 0,
      padding: '0.8em',
      paddingInlineStart: '1em',
      '& p': {
        marginBottom: 0,
      },
    },
    '.button, button, input[type="submit"], input[type="reset"], input[type="button"], input[type=file]::file-selector-button':
      {
        backgroundColor: `${prefix}.blossom`,
        border: inlineTokenFn(['colors', prefix, 'blossom'], '1px solid %token%'),
        borderRadius: '1px',
        boxSizing: 'border-box',
        color: `${prefix}.bg`,
        cursor: 'pointer',
        display: 'inline-block',
        padding: '5px 10px',
        textAlign: 'center',
        textDecoration: 'none',
        whiteSpace: 'nowrap',
        _disabled: {
          cursor: 'default',
          opacity: 0.5,
        },
        _hover: {
          backgroundColor: `${prefix}.fade`,
          color: `${prefix}.bg`,
          outline: 0,
        },
        _focusVisible: {
          outlineStyle: 'solid',
          outlineWidth: '2px',
        },
      },
    'code, kbd, samp': {
      backgroundColor: `${prefix}.bg.alt`,
      fontSize: '0.9em',
      padding: '0 0.5em',
      whiteSpace: 'pre-wrap',
    },
    hr: { borderColor: `${prefix}.blossom` },
    'h1, h2, h3, h4, h5, h6': {
      fontFamily: `${prefix}.heading`,
      fontWeight: 700,
      lineHeight: 1.1,
      marginBottom: '1.5rem',
      marginTop: '3rem',
      ...wordWrap,
    },
    h1: { fontSize: '2.35em' },
    h2: { fontSize: '2.00em' },
    h3: { fontSize: '1.75em' },
    h4: { fontSize: '1.5em' },
    h5: { fontSize: '1.25em' },
    h6: { fontSize: '1em' },
    'img, video': {
      height: 'auto',
      marginBottom: '2.5rem',
      marginTop: 0,
      maxWidth: '100%',
    },
    input: {
      '&[type="checkbox"]': {
        _focus: {
          outline: inlineTokenFn(['colors', prefix, 'blossom'], '1px dotted %token%'),
        },
      },
    },
    'input, select, textarea': {
      backgroundColor: `${prefix}.bg.alt`,
      border: inlineTokenFn(['colors', prefix, 'bg.alt'], '1px solid %token%'),
      borderRadius: '4px',
      boxShadow: 'none',
      boxSizing: 'border-box',
      color: `${prefix}.text`,
      marginBottom: '10px',
      padding: '6px 10px',
      _focus: {
        border: inlineTokenFn(['colors', prefix, 'blossom'], '1px solid %token%'),
        outline: 0,
      },
    },
    'input, textarea': {
      border: inlineTokenFn(['colors', prefix, 'text'], '1px solid %token%'),
      _focus: {
        border: inlineTokenFn(['colors', prefix, 'blossom'], '1px solid %token%'),
      },
    },
    'label, legend, fieldset': {
      display: 'block',
      fontWeight: '600',
      marginBottom: '0.5rem',
    },
    li: {
      marginBottom: '0.4em',
    },
    p: { marginBottom: '2.5rem', marginTop: 0 },
    'small, sub, sup': { fontSize: '75%' },
    pre: {
      backgroundColor: `${prefix}.bg.alt`,
      display: 'block',
      fontSize: '0.9em',
      marginBottom: '2.5rem',
      marginTop: 0,
      overflowX: 'auto',
      padding: '1em',
      '& > code': {
        backgroundColor: 'transparent',
        fontSize: '1em',
        padding: 0,
        whiteSpace: 'pre',
      },
    },
    table: {
      borderCollapse: 'collapse',
      marginBottom: '2rem',
      textAlign: 'justify',
      width: '100%',
    },
    'td, th': {
      borderBottom: inlineTokenFn(['colors', prefix, 'bg.alt'], '1px solid %token%'),
      padding: '0.5em',
    },
    textarea: {
      width: '100%',
    },
    ul: {
      paddingLeft: '1.4em',
      marginBottom: '2.5rem',
      marginTop: 0,
    },
  });

  const extensions = defineGlobalStyles({
    // @ts-expect-error
    aside: {
      marginInlineStart: '15px',
      width: '30%',
      padding: '0 15px',
      float: 'right',
      _rtl: {
        float: 'left',
      },
      [mobile]: {
        width: '100%',
        float: 'none',
        marginInlineStart: 0,
      },
    },
    'aside, details': {
      backgroundColor: `${prefix}.bg.alt`,
      marginBottom: '1rem',
    },
    details: {
      padding: '0.7rem 1rem',
      '&[open]': {
        '& :last-child': {
          marginBottom: '0',
        },
        '& > summary': {
          marginBottom: '0.5rem',
          '& + *': {
            marginBottom: '0.5rem',
          },
        },
      },
    },
    input: {
      '&[type="checkbox"], &[type="radio"]': {
        verticalAlign: 'middle',
        position: 'relative',
        width: 'min-content',
        '& + label': {
          display: 'inline-block',
        },
      },
    },
  });

  return withExtraStyles ? deepmerge(baseStyles, extensions) : baseStyles;
};
