# ☘️ Lucky Horseshoe 🧲

A template for [Lucky](https://luckyframework.org/) web applications.

This template is special because it bootstraps `lucky init` in order to provide
a fresh, current copy of a lucky app, with quality of life adjustments played
over the lucky base app.

## What is added?

- [esbuild](https://esbuild.github.io/), which is way (up to 1000x) faster than webpack
- [tailwindcss](https://tailwindcss.com/)
- [turbo](https://turbo.hotwired.dev/)
- [stimulus](https://stimulus.hotwired.dev/)
- [ameba](https://github.com/crystal-ameba/ameba) for style checking
- Github Action for CI
  - `crystal tool format` and `ameba` style linting
  - `crystal spec` for testing
- Dependabot Configuration
  - Github actions
  - yarn
- Github Action to automatically merge minor/patch dependabot PRs
