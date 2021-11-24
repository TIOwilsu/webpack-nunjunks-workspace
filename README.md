# Webpack workspace

[![Build Status](https://travis-ci.com/ivarprudnikov/webpack-static-html-pages.svg?branch=master)](https://travis-ci.com/ivarprudnikov/webpack-static-html-pages)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com)
[![GitHub issues](https://img.shields.io/github/issues/ivarprudnikov/webpack-static-html-pages.svg)](https://github.com/ivarprudnikov/webpack-static-html-pages/issues)
[![GitHub last commit](https://img.shields.io/github/last-commit/ivarprudnikov/webpack-static-html-pages.svg)](https://github.com/ivarprudnikov/webpack-static-html-pages/commits/master)

## Prerequisites

- [Install `node` (comes with `npm`)](https://nodejs.org/). Suggested version expressed in [.nvmrc](./.nvmrc) file.

## Development

- `npm i` or `yarn` - install dependencies
- `npm start` or `yarn start` - start development server
- `npm test` or `yarn test` - run minimal tests (eg: lint javascript files)
- `npm run cy:run` or `yarn cy:run` - run Cypress functional/browser/e2e tests. Works only when running website locally ((`npm start` or `npm run preview`) or (`yarn start` or `yarn preview`))

### Where are generated files?

In `development` mode `webpack` does not write generated files to disk, in order to change it
switch `devServer.writeToDisk` to `true` in [webpack.dev.js](./webpack.dev.js)

## Production

- `npm run build` or `yarn build` to prepare `html`, `css`, `js` files in `dist/` directory
- `npm run preview` or `yarn preview` - run build and serve production files locally

## References

- @lifenautjoe and his [webpack-starter-basic](https://github.com/lifenautjoe/webpack-starter-basic)
- @ivarprudnikov and his [webpack-static-html-pages](https://github.com/ivarprudnikov/webpack-static-html-pages)
