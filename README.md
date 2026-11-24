# ACCESS Explorer

Explores the causal graph from the [ACCESS benchmark](https://arxiv.org/abs/2502.08148), which links abstract events in everyday life. Search nodes and sentences, trace what causes each node and what it leads to, compare two nodes, and isolate the network's feedback loops.

This independent application uses the versioned [Cytocausal library](https://github.com/SonghaiFan/cytocausal) as installed dependencies:

```sh
npm ci
npm run dev
```

Open `http://localhost:3101`.

## Data

`public/dataset.json` is the full graph, generated from the original Causal Explorer project with its node scores and feedback loops:

```sh
CYTOCAUSAL_EXPLORER=/path/to/causal_explorer npm run import-data
```

The data is built on GLUCOSE and limited to non-commercial use. See [DATA.md](DATA.md).

## Tests

`npm run test:e2e` runs the browser tests against a production build, so run `npm run build` first. They need Chrome installed.

## Library dependency

The three `@cytocausal/*` packages are pinned to the public Cytocausal `v0.1.0-alpha.1` GitHub Release tarballs. The lockfile records their integrity and overrides keep transitive Cytocausal dependencies on the same release. No sibling checkout, workspace link, or copied library source is needed. These packages are not yet published on npm.

## Deployment

Production: https://access.songhai.site

Vercel builds this repository from its root with Node 22, `npm ci`, and `npm run build`. The documentation link defaults to https://cytocausal.songhai.site; `NEXT_PUBLIC_DOCS_URL` can override it.

## History

Extracted with `git subtree split` from `SonghaiFan/cytocausal` at `e3c8c8fbef81a8a3c40dff539c02c8cccef9abf4`, preserving this application's commit history, data and browser tests.
