# ☘️ Lucky Horseshoe 🧲

A template for [Lucky](https://luckyframework.org/) web applications.

This template is special because it bootstraps `lucky init` in order to provide
a fresh, current copy of a lucky app, with quality of life adjustments played
over the lucky base app.

## What is added?

- [ameba](https://github.com/crystal-ameba/ameba) for style checking
- Github Action for CI
  - `crystal tool format` and `ameba` style linting
  - `crystal spec` for testing
- Github Action to automatically merge minor/patch dependabot PRs
