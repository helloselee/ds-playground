# Changesets

This folder is managed by [Changesets](https://github.com/changesets/changesets).

To record a change for the next release:

```bash
pnpm changeset
```

Pick the package(s), the semver bump (patch/minor/major), and write a short
summary. Commit the generated file in `.changeset/`.

On merge to `main`, the Release workflow either opens a "Version Packages" PR
(which bumps versions + updates CHANGELOG.md) or publishes `@xpndui/ui` to npm
once that PR is merged.
