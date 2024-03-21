import { describe, it } from 'node:test';
import type { Artifact } from '@pandacss/types';
import { findArtifactIndex, findFileIndex } from '../src';
import assert from 'node:assert/strict';

const mockArtifacts: Artifact[] = [
  {
    id: 'design-tokens',
    files: [
      { file: 'index.d.ts', code: undefined },
      { file: 'index.mjs', code: undefined },
    ],
  },
];

describe('Hooks Functions', async () => {
  await it('Function findArtifactIndex', async () => {
    await it('should return the index when the artifact is found', async () => {
      assert.equal(findArtifactIndex(mockArtifacts, 'design-tokens'), 0);
    });
    await it('should return undefined when the artifact is not found', async () => {
      // @ts-expect-error
      assert.equal(findArtifactIndex(mockArtifacts, 'design-token'), undefined);
    });
  });

  await it('Function findFileIndex', async () => {
    await it('should return the index when the file is found', async () => {
      assert.equal(findFileIndex(mockArtifacts, 'design-tokens', 'index.d.ts'), 0);
    });
    await it("should return undefined when the file is not found in the artifact's files", async () => {
      assert.equal(findFileIndex(mockArtifacts, 'design-tokens', 'colors.mjs'), undefined);
    });
    await it('should return undefined when the artifact cannot be found in artifacts', async () => {
      // @ts-expect-error
      assert.equal(findFileIndex(mockArtifacts, 'design-token', 'index.d.ts'), undefined);
    });
  });
});
