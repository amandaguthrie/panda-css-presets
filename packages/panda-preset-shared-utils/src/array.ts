/**
 * @desc Filter out falsy values from an array and join them as a string with the provided separator.
 * @param a An array of any type to filter out falsy values from.
 * @param on A string to join the array values with.
 * @returns A string of the array's joined truthy values.
 * @example arrJoinTruthy(['colors', 'brand', 0, 'blue', null, 1], '.') //=> "colors.brand.blue.1"
 */
export function arrJoinTruthy<T extends any[]>(a: T, on: string) {
  return arrTruthy(a).join(on);
}

/**
 * @desc Filter out falsy values from an array.
 * @param a An array of any type to filter out falsy values from.
 * @returns The provided array without falsy values.
 * @example arrTruthy(['colors', 'brand', 0, 'blue', null, '', 1]) //=> ['colors', 'brand', 'blue', 1]
 */
export function arrTruthy<T extends any[]>(a: T) {
  return a.filter(Boolean);
}

/**
 * @desc Expand array values by a given separator. Intended to normalize token path array values.
 * @param a An array of string values to expand
 * @param on The value to split the array values on
 * @returns An array of string values split by the specified separator.
 * @example arrExpandPath(['colors', 'brand', 'blue..1.']) //=> ['colors', 'brand', 'blue', '1']
 */
export function arrExpandPath<T extends string[]>(a: T, on: string) {
  return arrTruthy(
    a.reduce((previousValue, currentValue) => {
      previousValue.push(...currentValue.split(on));
      return previousValue;
    }, [] as string[]),
  );
}
