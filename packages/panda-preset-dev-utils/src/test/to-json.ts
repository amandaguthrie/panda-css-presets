export function toJson(object: Record<any, any>, pretty = false) {
  if (pretty) {
    return JSON.stringify(object, undefined, 2);
  }
  return JSON.stringify(object);
}
