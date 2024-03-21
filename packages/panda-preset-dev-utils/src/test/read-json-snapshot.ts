import fs from 'node:fs/promises';

export async function readJsonSnapshot(snapshotFile: string) {
  return await fs.readFile(`./test/snapshots/${snapshotFile}.json`, { encoding: 'utf-8' });
}
