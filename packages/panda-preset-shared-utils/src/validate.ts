export function isEmptyString(s: unknown) {
  if (!(typeof s === 'string')) {
    return false;
  }
  return s.length === 0;
}

export function isOnlyWhitespace(s: unknown) {
  if (!(typeof s === 'string')) {
    return false;
  }
  return s.trim().replace(/\s/g, '').length === 0;
}
