# Project CodeToads

> A Fun Toad-Filled Competitive Coding Challenge App

## Team

  - __Product Owner__: Robin Giannattasio
  - __Scrum Master__: Anthony Nourian
  - __Development Team Members__: Jonathan Huang, Artjom Svjatickis

## Tech Stack
  - React
  - Redux
  - Node/Express
  - RethinkDB

## Table of Contents

1. [Usage](#usage)
1. [Requirements](#requirements)
1. [Development](#development)
    1. [Installing Dependencies](#installing-dependencies)
    1. [Tasks](#tasks)
1. [Contributing](#contributing)

## Usage <a id="usage"></a>

1. Signup/Login
1. Join the Pond (lobby)
1. Select Single Toad or Multi Toad mode
1. Play the game!

## Requirements <a id="requirements"></a>

1. Node v5.8.0
1. RethinkDB 2.3.1
1. Auth0 9.1.3

## Development <a id="development"></a>

### Installing Dependencies <a id="installing-dependencies"></a>

Webpack is required!
From within the root directory:

```sh
npm install -g webpack
npm install
npm run build
npm start
```

### Tasks <a id="tasks"></a>

From within the root directory:

1. Signup for Auth0.
1. Signup for CodeWars and get an API key.
1. Create a .ENV file with your API Keys.
  - cwKey is CodeWars key.

```sh
  AUTH0_CLIENT_ID=xxxxxxxxx
  AUTH0_CLIENT_SECRET=xxxxxxxxx
  AUTH0_DOMAIN=xxxxxxxxx.auth0.com
  AUTH0_CALLBACK_URL=http://localhost:3000/callback
  cwKey=xxxxxxxxx
```

1.  Create an auth0-variables.js file in the client/ directory

```sh
  var AUTH0_CLIENT_ID='xxxxxxxxx';
  var AUTH0_DOMAIN='xxxxxxxxx.auth0.com';
  var AUTH0_CALLBACK_URL=location.href;

  var AUTH0 = {
   clientID: AUTH0_CLIENT_ID,
   domain: AUTH0_DOMAIN,
   url: AUTH0_CALLBACK_URL
  };
```

## Contributing <a id="contributing"></a>

See [CONTRIBUTING.md](CONTRIBUTING.md) for contribution guidelines.
