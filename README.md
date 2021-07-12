# TestQuality SDK

TestQuality SDK is a JavaScript and TypeScript package that you can use in your node.js or browser applications to access the TestQuality API.

Further documentation of the API can be found on [https://doc.testquality.com](https://doc.testquality.com)

For an example of using the API, review [https://github.com/BitModern/testQualityCli](https://github.com/BitModern/testQualityCli)

## Client

The client is the root of SDK, you must create a Client object in order for the SDK functions to work.

```
const singleClient = new Client({
  clientId: env.client_id,
  clientSecret: env.client_secret,
  baseUrl: env.api.url,
  debug: env.api.xDebug,
  errorHandler: (newError: HttpError) => {
    logError(newError);
  },
  persistentStorage: new EnvStorage(),
  logger: logger as LoggerInterface,
});
```

There is a rich set of functions available for performing crud opperations with TestQuality data. Please look under the [./src/gen](https://github.com/BitModern/test-quality-sdk/tree/main/src/gen) to learn more.
