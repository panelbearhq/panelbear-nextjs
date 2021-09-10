# Panelbear Next.js integration

Official [Panelbear](https://panelbear.com) integration for Next.js.

## Quickstart

### Install

Run the following command to install in your project:

```
npm install @panelbear/panelbear-nextjs
```

Or with yarn:

```
yarn add @panelbear/panelbear-nextjs
```

### Basic usage

You can now import, and use the Panelbear hook on your project.

```javascript
// ./pages/_app.js

import { usePanelbear } from '@panelbear/panelbear-nextjs';

function CustomApp({ Component, pageProps }) {
  // Load Panelbear only once during the app lifecycle
  usePanelbear('YOUR_SITE_ID');

  return <Component {...pageProps} />;
}

export default CustomApp;
```

### Debug-mode

When developing in localhost, Panelbear does not send events to avoid using your quota.

You can enable debug mode to send events when testing things locally. It will also log messages to console.

You can now import, and use the Panelbear hook on your project.

```javascript
// ./pages/_app.js

import { usePanelbear } from '@panelbear/panelbear-nextjs';

function CustomApp({ Component, pageProps }) {
  
  usePanelbear('YOUR_SITE_ID', {
    debug: true
  });

  return <Component {...pageProps} />;
}

export default CustomApp;
```


## Changelog

### 1.0.0

- Initial open source release.

## Security Disclosure

If you discover any issue regarding security, please disclose the information responsibly by following the instructions [here](https://panelbear.com/security/). Do NOT create a Issue on the GitHub repo.

## Contributors

[@anthonynsimon](https://github.com/anthonynsimon)

## Alternatives

For community alternatives to this package, you can check out:

- [next-use-panelbear](https://github.com/alizahid/next-use-panelbear)

## Contributing

Please check for any existing issues before openning a new Issue. If you'd like to work on something, please open a new Issue describing what you'd like to do before submitting a Pull Request.

## License

See [LICENSE](https://github.com/panelbearhq/panelbear-nextjs/blob/master/LICENSE).
