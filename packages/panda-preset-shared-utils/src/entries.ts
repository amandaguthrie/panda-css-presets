export type RecordKeyDefault = string | number | symbol;

export function entries<K extends RecordKeyDefault, V>(obj: Record<K, V>): [K, V][] {
  const result: [K, V][] = [];
  for (const key in obj) {
    result.push([key, obj[key]] as [K, V]);
  }
  return result;
}

export function fromEntries<K extends RecordKeyDefault, V>(entries: [K, V][]): Record<K, V> {
  const result: Record<K, V> = {} as Record<K, V>;
  entries.forEach((entry) => {
    result[entry[0]] = entry[1];
  });
  return result;
}
