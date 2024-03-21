import type { Artifact, ArtifactContent, ArtifactId } from '@pandacss/types';

/**
 * @description Accepts an array of artifacts and an artifact ID. Returns the artifact's index or undefined.
 * @summary Returns a positive integer if the artifact is found, otherwise returns `undefined`.
 */
export function findArtifactIndex(artifacts: Artifact[], id: ArtifactId) {
  const artifactIndex = artifacts.findIndex((artifact) => artifact.id === id);
  return artifactIndex === -1 ? undefined : artifactIndex;
}

/**
 * @description Accepts an array of artifacts, an artifact ID, and a file name for that artifact ID. Returns the file's content or undefined.
 * @summary Returns `ArtifactContent` if the file is found, otherwise returns `undefined`.
 */
export function findFile(artifacts: Artifact[], id: ArtifactId, file: string): ArtifactContent | undefined {
  const artifactIndex = findArtifactIndex(artifacts, id);
  const fileContent = artifactIndex ? artifacts[artifactIndex].files.find((f) => f.file === file) : undefined;
  return fileContent ?? undefined;
}

/**
 * @description Accepts an array of artifacts, an artifact ID, and a file name for that artifact ID. Returns the file's index or undefined.
 * @summary Returns a positive integer if the file is found in the artifact's `files` array, otherwise returns `undefined`.
 */
export function findFileIndex(artifacts: Artifact[], id: ArtifactId, file: string) {
  const artifactIndex = findArtifactIndex(artifacts, id);
  const fileIndex = artifactIndex !== undefined ? artifacts[artifactIndex].files.findIndex((f) => f.file === file) : undefined;
  return fileIndex === -1 ? undefined : fileIndex;
}
