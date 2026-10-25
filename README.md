# React + Redux Boilerplate

Vite, React, TypeScript, Redux Toolkit, React-Redux, RTK Query, React Router, Oxlint.

## Use

```sh
npx degit <user>/<repo> my-app   # or "Use this template" on GitHub
cd my-app
cp .env.example .env
npm install
npm run dev
```

Scripts: `dev`, `build`, `preview`, `lint`, `lint:fix`.

## Structure

```
src/
  app/        store.ts, hooks.ts (typed hooks), router.tsx
  features/   counter/ (slice), posts/ (RTK Query API)
  layouts/    RootLayout.tsx
  pages/      Home.tsx, NotFound.tsx
```

Add a feature: create `src/features/<name>/` with a slice and/or API, register the reducer (and API middleware) in `app/store.ts`, and add a route in `app/router.tsx`. Imports use the `@/` alias for `src/`.
