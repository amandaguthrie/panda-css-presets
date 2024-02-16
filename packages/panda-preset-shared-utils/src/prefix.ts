import { capitalize } from './format';
import { parsePrefix } from './token';
import { entries, fromEntries } from './record';

/**
 * Prefix a condition key for the conditions config or defining css
 * @param condition The condition key to prefix
 * @param prefix The prefix to add to the condition key
 * @param type Whether to return the prefixed condition for the conditions config (prefixCondition) or css (_prefixCondition)
 * @returns The prefixed condition key
 * @example prefixCondition("theme", "brand") // "brandTheme"
 * @example prefixCondition("theme", "brand", "css") // "_brandTheme"
 */
export function prefixCondition(condition: string, prefix: string | undefined, type: 'css' | 'config' = 'config') {
  return prefix ? `${type === 'css' ? '_' : ''}${prefix}${capitalize(condition)}` : condition;
}

/**
 * Prefix multiple conditions to be used in a Panda CSS conditions config.
 * @param conditions An object of Panda CSS condition definitions
 * @param prefix The prefix to use with each key
 * @returns An object of Panda CSS condition definitions with the prefix added to each key
 * @example prefixConditionConfig({mobile: "@media (max-width: 382px)", tablet: "@media (max-width: 680px)"}, "brand") //=> {brandMobile: "@media (max-width: 382px)", brandTablet: "@media (max-width: 680px)"}
 */
export function prefixConditionConfig(conditions: Record<string, string>, prefix?: string) {
  return fromEntries(entries(conditions).map(([cnd, val]) => [prefixCondition(cnd, prefix), val]));
}

/**
 * Prefix top-level keys as conditions to be used in a Panda CSS semantic token value or CSS style
 * @param conditions An object of Panda CSS conditions and their styles
 * @param prefix The prefix to use with each key
 * @returns An object of Panda CSS conditional styles with the prefix added to each key
 * @example prefixConditionCss({mobile: "@media (max-width: 382px)", tablet: "@media (max-width: 680px)"}, "brand") //=> {_brandMobile: "@media (max-width: 382px)", _brandTablet: "@media (max-width: 680px)"}
 */
export function prefixConditionCss(conditions: Record<string, unknown>, prefix?: string) {
  return fromEntries(
    entries(conditions).map(([cnd, val]) => {
      if (cnd === 'base') {
        return [cnd, val];
      }
      return [prefixCondition(cnd, prefix, 'css'), val];
    }),
  );
}

/**
 * Nest an object in a prefix layer, otherwise return the object.
 * @param obj An object
 * @param prefix The prefix to possibly nest the object in. If prefix invalid or undefined, returns the object without the prefix.
 * @returns When the prefix is specified and valid, returns obj nested in prefix. When the prefix is undefined or invalid, returns obj.
 * @example maybePrefixObj({blue: {value: "aliceblue"}}, "brand") //=> {brand: {blue: {value: "aliceblue"}}}
 * @example maybePrefixObj({blue: {value: "aliceblue"}}, "") // "" Is an invalid prefix => {blue: {value: "aliceblue}}
 */
export function maybePrefixObj(obj: Record<string, any>, prefix: string | undefined) {
  const pfx = parsePrefix(prefix, '');
  return pfx ? { [pfx]: obj } : obj;
}
