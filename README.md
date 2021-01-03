# USC VGSA Website

Netlify Status: (TODO)

Source code for an [Eleventy](https://www.11ty.dev/) website hosted on Netlify
at <https://uscvgsa.netlify.app>.

## Instructions

### Installation

```bash
npm install
```

### Development Server

This will serve the website at <https://localhost:8000> and reload changes to
source files:

```bash
npm start
```

### Command Reference

The following scripts are in `package.json`. Run them with `npm run <COMMAND>`.

- `dev:assets`: Use Webpack to live reload asset files (JS and SCSS).
- `dev:site`: Run the Eleventy live server.
- `start`: Start the development server and Webpack (i.e. `dev:assets` with
  `dev:site`)
- `build:clean`: Clean the build folder.
- `build:assets`: Build the assets with Webpack.
- `build:site`: Build the site with Eleventy.
- `build`: Build the website to the `build` folder (i.e. all the `build` steps).
- `lint`: Run eslint on JavaScript files in the repo.
- `linkinator`: Runs linkinator on the site to check for broken links.
- `test`: Runs any tests (e.g. linkinator) on the site. Can also invoke with
  `npm test`.

## Technologies

This website uses a _ton_ of technologies. For information on including many of
these technologies, see
[this tutorial](https://dev.to/stowball/creating-a-production-ready-eleventy-project-with-webpack-babel-and-sass-35ep).
The following is a list of key technologies used in this repo:

- Website
  - `eleventy` is a static site generator that is the core of this website
  - `webpack` allows us to bundle lots of handy features like custom (S)CSS and
    JS
  - `babel` for transpiling new JS for compatibility with old browsers
  - Tons of plugins for `webpack` that facilitate optimizations like minifying
    HTML, CSS, and JS
- Development Tools
  - `prettier` for auto-formatting
  - `eslint` for linting
  - `husky` and `lint-staged` for automatically running linters on staged files
- CI/CD
  - `Netlify` builds and tests the site and deploys it to
  - <https://vgsa.usc.edu> and <https://uscvgsa.netlify.app> (same place).

Refer to `package.json` for a complete list of dependencies.

## Features

- Add `katex: true` in the front matter to turn on Katex styling (JS rendering
  is done at build time)

## References

- [Website Overhaul Design Doc](docs/design/website_overhaul.pdf)
- [Creating a production-ready Eleventy project with webpack, Babel and Sass](https://dev.to/stowball/creating-a-production-ready-eleventy-project-with-webpack-babel-and-sass-35ep)
  - Helpful in setting up project structure
