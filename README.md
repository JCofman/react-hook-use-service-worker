# React use service worker hook &amp; Utilities &middot;

> Get everything out of your PWA

This is a [React Hook](https://reactjs.org/docs/hooks-overview.html) which can register a service worker.

## Affiliate

If you like to support my OSS work you could "buy me a coffee" or want to take a look on tools I recommend you could checkout.

<table><tr><td align="center"><a href="https://www.buymeacoffee.com/jcofman" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/lato-yellow.png" alt="Buy Me A Coffee" width="201" height="51" ><br /><sub><b>Buy me a coffee</b></sub></a><br /> My personal patreon</a></td><td align="center"><a href="https://a.paddle.com/v2/click/49831/106566?link=1947" target="_blank"><img src="https://img.stackshare.io/service/6882/687474703a2f2f692e696d6775722e636f6d2f446d6d4a56335a2e706e67.png" alt="Buy Me A Coffee" width="50" height="50" ><br /><sub><b>Sizzy</b></sub></a><br /> A super useful App when developing for different screens</a></td></tr></table>

## 🎯 Objective

Make it easier to target low-end devices while progressively adding high-end-only features on top. Using these hooks and utilities can help you give users a great experience best suited to their device and network constraints.

## 🚀 Installation

`npm i react-hook-use-service-worker --save` or `yarn add react-hook-use-service-worker`

## Usage

You can import the hooks you wish to use as follows:

```js
// in your main app.js
import React, { Component } from 'react';
import {
  ProvideServiceWorker,
  useServiceWorker,
} from 'react-hook-use-service-worker';

class App extends Component {
  render() {
    return (
      <ProvideServiceWorker filename="/my-sw.js">
        {children}
      </ProvideServiceWorker>
    );
  }
}
export default App;

// in your components

const MyComponent = () => {
  const mySW = useServiceWorker();
  console.log(mySW.serviceWorkerStatus);
  return <div>{mySW.serviceWorkerStatus}</div>;
};
```

## Commands

TSDX scaffolds your new library inside `/src`, and also sets up a [Parcel-based](https://parceljs.org) playground for it inside `/example`.

The recommended workflow is to run TSDX in one terminal:

```bash
npm start # or yarn start
```

This builds to `/dist` and runs the project in watch mode so any edits you save inside `src` causes a rebuild to `/dist`.

Then run the example inside another:

```bash
cd example
npm i # or yarn to install dependencies
npm start # or yarn start
```

The default example imports and live reloads whatever is in `/dist`, so if you are seeing an out of date component, make sure TSDX is running in watch mode like we recommend above. **No symlinking required**, [we use Parcel's aliasing](https://github.com/palmerhq/tsdx/pull/88/files).

To do a one-off build, use `npm run build` or `yarn build`.

To run tests, use `npm test` or `yarn test`.

## Configuration

Code quality is [set up for you](https://github.com/palmerhq/tsdx/pull/45/files) with `prettier`, `husky`, and `lint-staged`. Adjust the respective fields in `package.json` accordingly.

### Jest

Jest tests are set up to run with `npm test` or `yarn test`. This runs the test watcher (Jest) in an interactive mode. By default, runs tests related to files changed since the last commit.

#### Setup Files

This is the folder structure we set up for you:

```shell
/example
  index.html
  index.tsx       # test your component here in a demo app
  package.json
  tsconfig.json
/src
  index.tsx       # EDIT THIS
/test
  blah.test.tsx   # EDIT THIS
.gitignore
package.json
README.md         # EDIT THIS
tsconfig.json
```

#### React Testing Library

We do not set up `react-testing-library` for you yet, we welcome contributions and documentation on this.

### Rollup

TSDX uses [Rollup v1.x](https://rollupjs.org) as a bundler and generates multiple rollup configs for various module formats and build settings. See [Optimizations](#optimizations) for details.

### TypeScript

`tsconfig.json` is set up to interpret `dom` and `esnext` types, as well as `react` for `jsx`. Adjust according to your needs.

## Continuous Integration

## Contributors

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore -->
<table><tr><td align="center"><a href="https://jcofman.de"><img src="https://avatars2.githubusercontent.com/u/2118956?v=4" width="100px;" alt="Jacob Cofman"/><br /><sub><b>Jacob Cofman</b></sub></a><br /><a href="https://github.com/JCofman/jc-website/commits?author=JCofman" title="Code">💻</a></td></tr></table>

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
