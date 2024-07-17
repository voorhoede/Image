# Contributing
To setup, follow these steps:

```sh
git clone https://github.com/voorhoede/Image.git
cd Image
npm ci
```

## General Prerequisites
Node.js, [latest LTS is recommended](https://nodejs.org/en/about/releases/).

### Tips

## Publishing
1. Switch to the main branch and ensure it is up-to-date with remote.
1. Update `changelog.md` with relevant changes and stage with `git add`.
1. Run `npm version --force` with the appropiate version bump to include the changelog changes in the same commit.
1. This should automatically push the commit and new version tag to trigger publishing from CI.
