### 🆕 Adds

<!-- Level 4 headings/content may be deleted and replaced with "None" if irrelevant -->

#### \> `${package-name}`

- Yay, a new thing!

---

### 🪄 Changes

<!-- Level 4 headings/content may be deleted and replaced with "None" if irrelevant -->

#### \> `${package-name}`

- **`${Feature/Function/Types}`:** It used to do this, and now it does this.
    - **Breaking?** Yes/No

#### \> Internal

- Description

---

### 📪 Closes Issues

<!-- List GitHub issue IDs, else "None" -->
None

---

### ✅ Quality Checklist

<!-- Check boxes by changing them to [x]. -->

#### \> 🟢 All Pull Requests

- [ ] Tests updated?
- [ ] Test snapshot generation is turned off?
- [ ] Documentation updated?
- [ ] Changesets added/updated?
- [ ] Checks passing (eslint, prettier, Typescript, unit tests)?

<!-- If Adds contains a new package, fill out this section. -->

#### \> ✨ New Package(s)

- [ ] Followed package naming convention? `@amandaguthrie/panda-preset-${category_one}-${package}`
- [ ] `package.json` version is 0.0.0?
- [ ] `package.json` `private: true` is removed and `publishconfig.access: "public"`?
- [ ] `package.json` repository `name`, `description`, and `repostory.directory` are updated?
- [ ] Added new package to GitHub issue templates packages list?
- [ ] Added new package to root `README.md` listing?

<!-- If anything in Adds/Changes, please fill out this section. -->

#### \> ⬆️ Version Change(s)

* **Major:** Breaking changes
* **Minor:** Backward-compatible feature additions
* **Patch:** Backward-compatible bug fixes

- [ ] Changesets version request matches semver definitions?
- [ ] If major version, decisioning logic around choosing backward-incompatible changes over backward-compatible changes
  is included in changeset?