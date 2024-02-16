import fs from 'node:fs/promises';

export function toJson(object: Record<any, any>, pretty = false) {
  if (pretty) {
    return JSON.stringify(object, undefined, 2);
  }
  return JSON.stringify(object);
}

export async function readJsonSnapshot(snapshotFile: string) {
  return await fs.readFile(`./test/snapshots/${snapshotFile}.json`, { encoding: 'utf-8' });
}

export async function writeJsonSnapshot(snapshotFile: string, data: string) {
  return await fs.writeFile(`./test/snapshots/${snapshotFile}.json`, data, { encoding: 'utf-8' });
}
