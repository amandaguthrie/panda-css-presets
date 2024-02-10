# monorepo-template-ts-pnpm

## Highlights
- changesets
- eslint
- GitHub issue templates
- GitHub quality and release workflows
- pnpm workspace monorepo
- prettier
- Top-level build, reset, lint, prettier, test, typecheck, and release scripts.
- Typescript

## Initial Configuration

### GitHub Repository
- Set an NPM auth token as a GitHub secret with key `NPM_TOKEN` to be used to publish to NPM via release workflow.
- Set a GitHub personal access token as a GitHub secret with key `GH_PAT` to automate changeset pull requests via release workflow.


### Project Files

#### `.changeset` directory
##### `config.json`
- Update `changelog` settings, including `repo`.

#### `.github` directory
##### `composite-actions/install/action.yml`
- Update `Setup Git User` command email and name
##### `ISSUE_TEMPLATE` directory
- Update `config.yml` with repository discussions link

For each template:
- Update package `options`

##### `workflows` directory
**`quality.yml`**
- Runs on branch `main` for any push or pull request.
- Runs prettier, eslint, and TypeScript type checks.

**`release.yml`**
> [!CAUTION]
> - Requires an NPM auth token to be set as `NPM_TOKEN` in repository secrets to publish to NPM.
> - Requires a GitHub personal access token to be  set in repository secrets as `GH_PAT` to automate changeset pull requests.

- Runs on branch `main` for any pushes that contain changes in `.changeset` or `packages`.
- Builds and publishes packages if there is a changeset version, otherwise releases changes to the `dev` tag.

#### `packages/_template` directory
##### `package.json`
- Update `name`
- Update `description`
- Update `author`
- Update `repository.url` and `repository.directory`
- Remove `private` if publishing to registry
- If npm registry is public, update `publishConfig`









