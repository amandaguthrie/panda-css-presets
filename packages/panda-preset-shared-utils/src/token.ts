import { isOnlyWhitespace } from './validate';

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
