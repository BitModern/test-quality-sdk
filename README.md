# TestQuality SDK

TestQuality SDK is a JavaScript and TypeScript package that you can use in your node.js or browser applications to access the TestQuality API.

Further documentation of the API can be found on [https://doc.testquality.com](https://doc.testquality.com)

For an example of using the API, review [https://github.com/BitModern/testQualityCli](https://github.com/BitModern/testQualityCli)

## ClientSdk

The client is the root of SDK, you must create a Client object in order for the SDK functions to work.

To request a client id and secret please contact support@bitmodern.com.

```js
const singleClient = new ClientSdk({
  // clientId is provided when registering your app
  clientId: 'your client id',

  // clientSecret is provided when registering your app
  clientSecret: 'your client secret',

  // errorHandler is convient function for capturing any backend error,
  // errors are also provided in promises
  errorHandler: (newError: HttpError) => {
    logError(newError);
  },

  // persistentStorage is required if saving the tokens is needed,
  // this may not be the case if you are using personal access tokens
  persistentStorage: new EnvStorage(),

  // logger provides way of captures any log information
  logger: logger as LoggerInterface,
});
```

There is a rich set of functions available for performing crud opperations with TestQuality data. Please look under the [./src/gen](https://github.com/BitModern/test-quality-sdk/tree/main/src/gen) to learn more.

## Authentication

There are two ways to authenticate, either via login or personal access token.

### Personal Access Token

If a personal access token has been generated. Once client is created set the token.

```js
  const client = new ClientSdk({...});
  client.getAuth().setToken({access_token: 'your personal access token'});

  ... call functions ...
```

### Login

```js
  const client = new ClientSdk({...});
  client.getAuth().login('email', 'password', true /* store token using persistentStorage */);

  ... call functions ...
```

## Test

Before you run the tests, you need to specify a email and password in .env file. Look at the .env.example.

    cp .env.example .env

Then to run tests

    yarn test
