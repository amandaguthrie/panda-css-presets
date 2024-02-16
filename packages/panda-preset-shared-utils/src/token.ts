import { isOnlyWhitespace } from './validate';
import { arrExpandPath, arrJoinTruthy } from './array';
import type { TokenCategory } from '@pandacss/types';

/** {${category}.${prefix}.${token}} */
export type TokenFormatConfig = 'config';

/** var(--${category}-${prefix}-${token}) */
export type TokenFormatCssVar = 'cssVar';

/** token(${category}.${prefix}.${token}) */
export type TokenFormatCssFn = 'cssFn';

/** Union of token format types */
export type FormatTokenType = TokenFormatConfig | TokenFormatCssVar | TokenFormatCssFn;

/** Separator to use when joining tokens for config */
const ConfigSeparator = '.';

/** Separator to use when joining tokens for  Css variables */
const CssVarSeparator = '-';

/** Return type of formatToken */
type FormatToken = Record<FormatTokenType, string>;

/** An array of strings that starts with a TokenCategory */
export type FormatTokenPath = [TokenCategory, ...string[]];

/** Returns a token formatted for a Panda CSS config */
function formatTokenConfig(path: FormatTokenPath) {
  return `{${arrJoinTruthy(arrExpandPath(path, ConfigSeparator), ConfigSeparator)}}`;
}

/** Returns a token formatted as a CSS variable */
function formatTokenCssVar(path: FormatTokenPath) {
  return `var(--${arrJoinTruthy(arrExpandPath(path, ConfigSeparator), CssVarSeparator)})`;
}

/** Returns a token formatted as a Panda CSS token() function */
function formatTokenCssFn(path: FormatTokenPath) {
  return `token(${arrJoinTruthy(arrExpandPath(path, ConfigSeparator), ConfigSeparator)})`;
}

/**
 * @desc Validates and trims the start and end '.' off from a prefix, if necessary. If the prefix is invalid, returns the fallback prefix.
 * @param prefix The user-provided prefix to validate and trim.
 * @param fallbackPrefix The fallback prefix to validate and trim.
 * @returns If prefix is invalid, returns the fallback prefix. If prefix and fallbackPrefix are invalid, returns undefined.
 */
export function parsePrefix(prefix: unknown, fallbackPrefix: string) {
  const startEndPeriod = /^\.*|\.*$/g;

  function validatePrefix(p: unknown) {
    if (typeof p === 'string') {
      let validPrefix = p.trim();
      if (validPrefix.startsWith('.') || validPrefix.endsWith('.')) {
        validPrefix = validPrefix.replace(startEndPeriod, '');
      }
      return !isOnlyWhitespace(validPrefix) ? validPrefix : undefined;
    }
    return undefined;
  }

  return validatePrefix(prefix) ?? validatePrefix(fallbackPrefix);
}

/**
 * Return a token formatted for config, as a CSS function, or as a CSS variable.
 * @param path Array of strings representing the token path.
 * @param type The token type to return
 * @returns The token formatted for Panda CSS config, Panda CSS token function, or as a CSS variable.
 * @example formatToken(['colors','brand','blue.1'], 'config') //=> "{colors.brand.blue.1}"
 * @example formatToken(['colors','brand','blue.1'], 'cssFn') //=> "token(colors.brand.blue.1)"
 * @example formatToken(['colors','brand','blue.1'], 'cssVar') //=> "var(--colors-brand-blue-1)"
 */
export function formatToken(path: FormatTokenPath, type: FormatTokenType) {
  const format: FormatToken = {
    config: formatTokenConfig(path),
    cssFn: formatTokenCssFn(path),
    cssVar: formatTokenCssVar(path),
  };
  return format[type];
}

/**
 * Inline a CSS value with a Panda CSS token function.
 * @param path The token path to create a token
 * @param inline The string that includes a placeholder to replace with the token
 * @param placeholder The placeholder string that should be replaced with the token. Default: '%token%'
 * @returns The inline string with the placeholder replaced with the formatted token function.
 * @example inlineTokenFn(['colors','brand','blue.1'], '1px solid %token%') //=> "1px solid token(colors.brand.blue.1)"
 */
export function inlineTokenFn(path: FormatTokenPath, inline: string, placeholder = '%token%') {
  return inline.replaceAll(placeholder, formatToken(path, 'cssFn'));
}
