import type { Artifact } from '@pandacss/types';
import { findArtifactIndex, findFile, findFileIndex } from '@amandaguthrie/panda-preset-shared-utils';
import type { AddExportsPluginOptions } from './addExports';

export function exportTokens(artifacts: Artifact[], options: AddExportsPluginOptions) {
  if (options.exportTokens) {
    const artId = 'design-tokens';
    const artifactIndex = findArtifactIndex(artifacts, artId);
    const jsFileName = `index.${options.outExtension}`;
    const tsFileName = `index.d.ts`;
    const jsFile = findFile(artifacts, artId, jsFileName);
    const jsFileIndex = findFileIndex(artifacts, artId, jsFileName);
    const tsFile = findFile(artifacts, artId, tsFileName);
    const tsFileIndex = findFileIndex(artifacts, artId, tsFileName);

    if (
      jsFile?.code &&
      tsFile?.code &&
      artifactIndex !== undefined &&
      jsFileIndex !== undefined &&
      tsFileIndex !== undefined
    ) {
      const splitToken = '\n\n';
      const splitJs = jsFile.code.split(splitToken);
      const tokensConst = splitJs.map((str) =>
        str.includes('const tokens') ? str.replace('const tokens', 'export const tokens') : str,
      );
      jsFile.code = tokensConst.join(splitToken);
      artifacts[artifactIndex].files[jsFileIndex].code = jsFile.code;

      const splitTs = tsFile.code.split(splitToken);
      const expLine = splitTs.map((str) =>
        str.includes("export * from './tokens'") ? `export declare const tokens;\n\n${str}` : str,
      );
      artifacts[artifactIndex].files[tsFileIndex].code = expLine.join(splitToken);
    }
  }
}
