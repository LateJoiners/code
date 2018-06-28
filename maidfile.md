# Build Scripts

This is a living build script. Documentation changes along with the build script to ensure an easy experience for all.

[How do I modify this file?](https://www.npmjs.com/package/maid)

## test

Runs both server and client tests

Runs task `lint` before this

Runs tasks `test:client` `test:server` after this

```bash
echo "Running all tests..."

```

## test:client

Runs all client tests.

```
echo "Running client tests..."
cd ./client
npm test
```

## test:server

Runs all server tests.

```
echo "Running server tests..."
cd ../server
echo "TODO: No server testing is being done"
```

## lint

Verifies that all the client and server code meets the minimum coding standards

Runs tasks `lint:client` `lint:server` after this

```bash
echo "Running all linters..."
```

## lint:client

Verifies that all the client and server code meets the minimum coding standards

```bash
cd ./client
npm run lint --fix
```

## lint:server

Verifies that all the client and server code meets the minimum coding standards

```bash
cd ./server
echo "No server linting is being done"
```

## start

Runs tasks `start:client` `start:server` after this in parallel

```bash
echo 'Starting up the client and server'
```

## start:client

Starts up the angular client app

```bash
cd ./client
npm start

```

## start:server

Starts up the server API

```bash
cd ./server
echo "No server to start as yet"
```

## deploy

Deploys the client and server

Runs tasks `deploy:client` `deploy:server` after this

```bash
echo "Deploying client and server..."
```

## deploy:client

Deploys angular client application to heroku

```bash
# Pushing Server to Heroku
git subtree push --prefix client heroku-client master
# Scale up server
heroku ps:scale web=1 --app lj-client-app
# Open in browser
heroku open --app lj-client-app
```

## deploy:server

Deploys express server application to heroku

```bash
# Pushing Server to Heroku
git subtree push --prefix server heroku-server master
# Scale up server
heroku ps:scale web=1 --app lj-server
# Open in browser
heroku open --app lj-server
```

## login:server

SSH into server

```bash
heroku run bash --app lj-server
```

## login:client

SSH into client

```bash
heroku run bash --app lj-client-app
```