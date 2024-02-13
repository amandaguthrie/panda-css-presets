// @ts-nocheck Lots of interesting things happening with the defineGlobalStyles type def.

import { defineGlobalStyles } from '@pandacss/dev';

export const globalCss = (prefix: string) => {
  const mobileCondition = `_${prefix}Mobile`;
  return defineGlobalStyles({
    ':root, ::backdrop': {
      '& img, & video': {
        opacity: 0.8,
      },
    },
    '*, *::before, *::after': {
      boxSizing: 'border-box',
    },
    'textarea, select, input, progress': {
      appearance: 'none',
      '-webkit-appearance': 'none',
      '-moz-appearance': 'none',
    },
    html: {
      fontFamily: `${prefix}.sans`,
      scrollBehavior: 'smooth',
    },
    body: {
      backgroundColor: `${prefix}.bg`,
      color: `${prefix}.text`,
      fontSize: '1.15rem',
      lineHeight: '1.5',
      display: 'grid',
      gridTemplateColumns: '1fr min(45rem, 90%) 1fr',
      margin: 0,
      '& > *': {
        gridColumn: 2,
      },
      '& > header': {
        backgroundColor: `${prefix}.bg.accent`,
        borderBottom: `1px solid token(colors.${prefix}.border)`,
        gridColumn: '1 / -1',
        padding: '0 0.5rem 2rem 0.5rem',
        textAlign: 'center',
        '& h1': {
          maxWidth: '1200px',
          margin: '1rem auto',
        },
        '& p': {
          margin: '1rem auto',
          maxWidth: '40rem',
        },
      },
      '& > footer': {
        borderTop: `1px solid token(colors.${prefix}.border)`,
        color: `${prefix}.text.light`,
        fontSize: '0.9rem',
        marginTop: '4rem',
        padding: '2rem 1rem 1.5rem 1rem',
        textAlign: 'center',
      },
    },
    main: {
      paddingTop: '1.5rem',
    },
    header: {
      '& > nav': {
        fontSize: '1rem',
        lineHeight: '2',
        padding: '1rem 0 0 0',
        '& ol li, & ul li': {
          display: 'inline-block',
        },
        '& a': {
          layerStyle: `${prefix}.border.rounded`,
          color: `${prefix}.text`,
          display: 'inline-block',
          margin: '0 0.5rem 1rem 0.5rem',
          padding: '0.1rem 1rem',
          textDecoration: 'none',
          '&:hover,&.current,&[aria-current="page"]': {
            borderColor: `${prefix}.accent`,
            color: `${prefix}.accent`,
            cursor: 'pointer',
          },
          [mobileCondition]: {
            border: 'none',
            lineHeight: 1,
            padding: 0,
            textDecoration: 'underline',
          },
        },
      },
    },
    h1: {
      fontSize: '3rem',
      [mobileCondition]: {
        fontSize: '2.5rem',
      },
    },
    h2: {
      fontSize: '2.6rem',
      marginTop: '3rem',
      [mobileCondition]: {
        fontSize: '2.1rem',
      },
    },
    h3: {
      fontSize: '2rem',
      marginTop: '3rem',
      [mobileCondition]: {
        fontSize: '1.75rem',
      },
    },
    h4: {
      fontSize: '1.44rem',
      [mobileCondition]: {
        fontSize: '1.25rem',
      },
    },
    h5: {
      fontSize: '1.15rem',
    },
    h6: {
      fontSize: '0.96rem',
    },
    p: {
      margin: '1.5rem 0',
    },
    'h1, h2, h3, h4, h5, h6, p': {
      overflowWrap: 'break-word',
    },
    a: {
      color: `${prefix}.accent`,
      _hover: {
        textDecoration: 'none',
      },
    },
    'button, .button, a.button, input[type="submit"], input[type="reset"], input[type="button"], label[type="button"]':
      {
        backgroundColor: `${prefix}.accent`,
        border: `1px solid token(colors.${prefix}.accent)`,
        color: `${prefix}.accent.text`,
        lineHeight: 'normal',
        padding: '0.5rem 0.9rem',
        textDecoration: 'none',
      },
    'button[aria-disabled="true"], input:disabled, textarea:disabled, select:disabled, button[disabled]': {
      backgroundColor: `${prefix}.disabled`,
      borderColor: `${prefix}.disabled`,
      color: `${prefix}.text.light`,
      cursor: 'not-allowed',
    },
    'input[type="range"]': {
      padding: 0,
    },
    'abbr[title]': {
      cursor: 'help',
      textDecorationLine: 'underline',
      textDecorationStyle: 'dotted',
    },
    '.button:not([aria-disabled="true"])': {
      _hover: {
        backgroundColor: `${prefix}.accent.hover`,
        borderColor: `${prefix}.accent.hover`,
        cursor: 'pointer',
      },
    },
    'button, input[type="submit"], input[type="reset"], input[type="button"], label[type="button"]': {
      _enabled: {
        _hover: {
          backgroundColor: `${prefix}.accent.hover`,
          borderColor: `${prefix}.accent.hover`,
          cursor: 'pointer',
        },
      },
    },
    '.button:focus-visible, button:focus-visible:where(:enabled), input:enabled:focus-visible:where([type="submit"],[type="reset"],[type="button"])':
      {
        outline: `2px solid token(colors.${prefix}.accent)`,
        outlineOffset: '1px',
      },
    aside: {
      fontSize: '1rem',
      marginInlineStart: '15px',
      width: '30%',
      padding: '0 15px',
      float: 'right',
      _rtl: {
        float: 'left',
      },
      [mobileCondition]: {
        width: '100%',
        float: 'none',
        marginInlineStart: 0,
      },
    },
    'aside, details, pre, progress': {
      backgroundColor: `${prefix}.bg.accent`,
      layerStyle: `${prefix}.border.rounded`,
      marginBottom: '1rem',
    },
    'article, fieldset, dialog': {
      layerStyle: `${prefix}.border.rounded`,
      padding: '1rem',
    },
    'article h2:first-child, section h2:first-child': {
      marginTop: '1rem',
    },
    blockquote: {
      marginInlineStart: '2rem',
      marginInlineEnd: 0,
      marginBlock: '2rem',
      padding: '0.4rem 0.8rem',
      borderInlineStart: `0.35rem solid token(colors.${prefix}.accent)`,
      color: `${prefix}.text.light`,
      fontStyle: 'italic',
    },
    cite: { fontSize: '0.9rem', color: `${prefix}.text.light` },
    'code, kbd, pre, pre span, samp': {
      color: `${prefix}.code`,
      fontFamily: `${prefix}.mono`,
    },
    figure: {
      margin: 0,
      display: 'block',
      overflowX: 'auto',
      '& > table': {
        width: 'max-content',
      },
    },
    figcaption: {
      textAlign: 'center',
      fontSize: '0.9rem',
      color: `${prefix}.text.light`,
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
    dialog: {
      margin: 'auto',
      maxWidth: '40rem',
      '&::backdrop': {
        backgroundColor: `${prefix}.bg`,
        opacity: '0.8',
      },
      [mobileCondition]: {
        margin: 'auto 1em',
        maxWidth: '100%',
      },
    },
    dt: { color: `${prefix}.text.light` },
    hr: {
      border: 'none',
      height: '1px',
      background: `${prefix}.border`,
      margin: '1rem auto',
    },
    kbd: {
      color: `${prefix}.preformatted`,
      border: `1px solid token(colors.${prefix}.preformatted)`,
      borderRadius: `${prefix}.standard`,
      padding: '0.1rem 0.4rem',
    },
    input: {
      '&[type="checkbox"]': {
        '&:checked': {
          '&:after': {
            content: "' '",
            width: '0.18em',
            height: '0.32em',
            borderRadius: 0,
            position: 'absolute',
            top: '0.05em',
            left: '0.17em',
            backgroundColor: 'transparent',
            borderRight: `0.08em solid token(colors.${prefix}.bg)`,
            borderBottom: `0.08em solid token(colors.${prefix}.bg)`,
            fontSize: '1.8em',
            transform: 'rotate(45deg)',
          },
        },
      },
      '&[type="color"]': {
        height: '2.5rem',
        padding: '0.2rem',
      },
      '&[type="file"]': {
        border: 0,
      },
      '&[type="radio"]': {
        borderRadius: '100%',
        '&:checked': {
          '&:after': {
            content: '" "',
            width: '0.25em',
            height: '0.25em',
            borderRadius: '100%',
            position: 'absolute',
            top: '0.125em',
            backgroundColor: `${prefix}.bg`,
            left: '0.125em',
            fontSize: '32px',
          },
        },
      },
      '&[type="checkbox"], &[type="radio"]': {
        verticalAlign: 'middle',
        position: 'relative',
        width: 'min-content',
        '& + label': {
          display: 'inline-block',
        },
        '&:checked': {
          backgroundColor: `${prefix}.accent`,
        },
      },
    },
    label: {
      display: 'block',
    },
    mark: {
      padding: '2px 5px',
      borderRadius: `${prefix}.standard`,
      backgroundColor: `${prefix}.marked`,
      color: 'black',
      '& a': {
        color: `${prefix}.accent`,
      },
    },
    pre: {
      color: `${prefix}.preformatted`,
      maxWidth: '100%',
      overflow: 'auto',
      padding: '1rem 1.4rem',
      '& code': {
        background: 'none',
        color: `${prefix}.preformatted`,
        margin: 0,
        padding: 0,
      },
    },
    progress: {
      width: '100%',
      '&:indeterminate': {
        backgroundColor: `${prefix}.bg.accent`,
        '&::-moz-progress-bar': {
          backgroundColor: `${prefix}.bg.accent`,
        },
      },
      '&::-webkit-progress-bar': {
        backgroundColor: `${prefix}.bg.accent`,
        borderRadius: `${prefix}.standard`,
      },
      '&::-webkit-progress-value': {
        backgroundColor: `${prefix}.accent`,
        borderRadius: `${prefix}.standard`,
      },
      '&::-moz-progress-bar': {
        backgroundColor: `${prefix}.accent`,
        borderRadius: `${prefix}.standard`,
        transitionDuration: '0.3s',
        transitionProperty: 'width',
      },
    },
    section: {
      layerStyle: `${prefix}.border.block`,
      margin: '3rem 0',
      padding: '2rem 1rem',
      '&:first-child,& + section': {
        borderTop: 0,
        paddingTop: 0,
      },
      '&:last-child': {
        borderBottom: 0,
        paddingBottom: 0,
      },
    },
    sub: {
      top: '0.3em',
    },
    'sub, sup': {
      position: 'relative',
      verticalAlign: 'baseline',
    },
    sup: {
      top: '-0.4em',
    },
    summary: {
      cursor: 'pointer',
      fontWeight: 'bold',
      padding: '0.7rem 1rem',
      margin: '-0.7rem -1rem',
      wordBreak: 'break-all',
    },
    table: {
      borderCollapse: 'collapse',
      margin: '1.5rem 0',
      '& caption': {
        fontWeight: 'bold',
        marginBottom: '0.5rem',
      },
    },
    textarea: {
      '&:not([cols])': {
        width: '100%',
      },
    },

    th: {
      backgroundColor: `${prefix}.bg.accent`,
      fontWeight: 'bold',
    },
    'td, th': {
      layerStyle: `${prefix}.border`,
      textAlign: 'start',
      padding: '0.5rem',
    },
    tr: {
      '&:nth-child(even)': {
        backgroundColor: `${prefix}.bg.accent`,
      },
    },
    'img, video': {
      maxWidth: '100%',
      height: 'auto',
      borderRadius: `${prefix}.standard`,
    },
    'textarea, select, input, button, .button': {
      fontSize: 'inherit',
      fontFamily: 'inherit',
      padding: '0.5rem',
      marginBottom: '0.5rem',
      borderRadius: `${prefix}.standard`,
      boxShadow: 'none',
      maxWidth: '100%',
      display: 'inline-block',
    },
    'textarea, select, input': {
      backgroundColor: `${prefix}.bg`,
      layerStyle: `${prefix}.border`,
      color: `${prefix}.text`,
      [mobileCondition]: {
        width: '100%',
      },
    },
    '.notice': {
      background: `token(colors.${prefix}.bg)`,
      border: `2px solid token(colors.${prefix}.border)`,
      borderRadius: `${prefix}.standard`,
      margin: '2rem 0',
      padding: '1.5rem',
    },
  });
};
