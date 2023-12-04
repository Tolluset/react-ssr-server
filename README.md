# react-ssr-server

refers from: https://github.com/wikibook/react-deep-dive-example/tree/main/chapter3/ssr-example

This repository show how React SSR works with small server for understand React SSR. It can't using for real project.

```bash
pnpm i
bun index.ts

# And check localhost:3000
```

## How it works?

Make html string by React's `renderToString` function. After user got document, entry file invoke `hydrateRoot` function from `react-dom/client` package.

When `hydrateRoot` invoked, React set React things(e.g. useState, handler etc...) in to html.

After `hydrateRoot` is finished. User can interact with elements. :tada: :tada: :tada:
