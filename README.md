# hmartos Personal Landing Page

This is the personal landing page for Héctor Martos - Senior Software Engineer

## Environment setup

Create a file in the root named `.env.development.local` and setup the following variables

```bash
NODE_ENV=development
REACT_APP_PROJECT_NAME=hmartos-landing
REACT_APP_PROJECT_DESCRIPTION='Landing page for Héctor Martos - Senior Software Engineer'
FULLPAGE_LICENSE_KEY='XXXXXXXX-XXXXXXXX-XXXXXXXX-XXXXXXXX'
```

To create a production ready artifact you will need to setup a `.env.production.local` file with the same variables.

## Getting started

- Install dependencies with `yarn install`
- Execute `yarn start` to run the application in a local development server

## Building

- Execute `yarn build` to generate a production-ready artifact in `out` folder.

## Creating a new release

- Create a new release branch with the new version you want to create, i.e. release/1.2.3

- Update package.json version

- Update CHANGELOG.md

- Merge the release branch into the master branch

- Create and push a new tag with the new version

- Merge the master branch into the development branch

## Testing

- Execute `yarn test` to execute unit tests in watch mode

## Continuous integration

TODO

## Resources

### fullPage

[fullPage](https://alvarotrigo.com/fullPage/)

### Section Colors

[Coolors](https://coolors.co/gradient-palette/5a11a5-d5c0fd?number=5)

### Icons

[React FontAwesome](https://github.com/FortAwesome/react-fontawesome)

### Favicon

[Favicon Generator](https://favicon.io/favicon-generator/)

## TODO

- Add Android icons to `manifest.json` - android-chrome-192x192.png and android-chrome-512x512.png
- SEO h1 h2 h3 h4
- Continuous integration
- Add Hotjar
- Tests
- Storybook
- npm run validate on pre push hook