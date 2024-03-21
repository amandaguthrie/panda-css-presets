import fs from 'node:fs/promises';

export async function writeJsonSnapshot(snapshotFile: string, data: string) {
  return await fs.writeFile(`./test/snapshots/${snapshotFile}.json`, data, { encoding: 'utf-8' });
}
