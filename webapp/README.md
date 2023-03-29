# pygments-front

## Requirements

- yarn (Note: Any version will do as yarn 2 is packaged with the project.)
- node ≥ 14.15 (LTS as of 27/11/2020)

## Getting started

1. Install dependencies with `yarn install`
2. Copy `.env.local.sample` as `.env.local` and fill in the environment variables
3. For development, run `yarn dev`
4. For production, run `yarn build` and `yarn start` afterwards. Make sure to set the correct APP_STAGE in .env.local

## Environment Variables

For shared and public environment variables, see `.env`.

For private and local environment variables, see `.env.local.sample`.

### Difference between NODE_ENV and APP_STAGE

Nowadays, NODE_ENV is mostly used for code transpilation and features for libraries and frameworks.

The APP_STAGE is an intermediary variable that targets a specific environment and is seperated from code transpilation concerns.

As such, use APP_STAGE for applicative features and environment specific code and NODE_ENV only for transpilation.

## Technology

- React
- Next.js
- Storybook

_Check the package.json for the list of supported browsers._

## Architecture

### Overview

```
+-- src
|   +-- ui-kit
|   |   +-- components
|   |   |   +-- <UINugget>
|   |   |   |   +-- <UINugget>.tsx
|   |   +-- layout
|   |   |   +-- <ui template>
|   |   |   |   +-- <UITemplate>.tsx
|   +-- styles
|   +-- lib
|   |   +-- http-client
|   |   +-- <external lib>
|   +-- pages
|   +-- core
|   |   +-- common
|   |   |   +-- hooks
|   |   |   +-- utils
|   |   |   +-- components
|   |   |   |   +-- <Component>
|   |   |   |   |   +-- <Component>.tsx
|   |   |   +-- layouts
|   |   |   |   +-- <Layout>
|   |   |   |   |   +-- <Layout>.tsx
|   |   +-- users
|   |   |   +-- data
|   |   |   |   +-- <Model>.ts
|   |   |   |   +-- <ModelRepository>.ts
|   |   |   +-- hooks
|   |   |   +-- <sub-domain 1>
|   |   |   |   +-- <SubDomain1>.tsx
|   |   |   +-- <sub-domain 2>
|   |   |   |   +-- <SubDomain2>.tsx
|   +-- domains
|   |   +-- <domain>
|   |   |   +-- <DomainScene>.tsx
|   |   |   +-- data
|   |   |   |   +-- <Model>.ts
|   |   |   |   +-- <ModelRepository>.ts
|   |   |   +-- hooks
|   |   |   +-- <sub-domain 1>
|   |   |   |   +-- <SubDomain1>.tsx
|   |   |   +-- <sub-domain 2>
|   |   |   |   +-- <SubDomain2>.tsx
```

### Organisation

There are three main components to understand:

#### 1. `pages`

A page responsibility is to associate a route (URL) with a domain.

For example `/movies` should link to the `domains/movie/listing/AllMoviesScene.tsx` file.

A page can setup common code accross the browser page like meta tags for SEO, the layout, etc.

#### 2. `domains` and `core`

A `domain` is a group of features under a common theme (for example `Movie`). If a domain is shared with other domains, then it must be a `core` domain (for example `User`).

Each folder must have at least **one** file appended with the keyword `Scene` in order to identify the entry point of that domain (see example in `pages` above).

The folder may regroup all specific file and dependencies related to that domain but anything shared between domains must go into the core folder.

#### 3. `ui-kit`

The `ui-kit` folder must only contain ui nuggets that is shared and used across the application.

It allows the development of components in isolation with the help of storybook, a visual playground.

A ui component must be generic in the `ui-kit` folder however, it can become specific when extended in a `domain`.
For example, a generic Spinner is available in the ui-kit; and specified in the movie domain as having only the color red.
Use composition to your advantage!

## Storybook

Storybook is used as a development playground and a Visual TDD tool. As such, each graphical dependency should have a matching story.

### Workflow

1. Set up a basic React component
2. Create a matching Story which imports the component
3. Use the Storybook playground to develop and integrate the component
4. Use in the application

## Branching model

## Release process

---

Bootstrapped with [faberstrap](https://github.com/faberNovel/templater_react)
