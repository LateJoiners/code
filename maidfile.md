# Build Scripts

This is a living build script. Documentation changes along with the build script to ensure an easy experience for all.

[How do I modify this file?](https://www.npmjs.com/package/maid)

## test

Runs both server and client tests

Runs task `lint` before this

```bash
echo "Running client tests..."
cd ./client
npm test

# Run server side tests
echo "Running server tests..."
cd ../server
echo "TODO: No server testing is being done"
```

## lint

Verifies that all the client and server code meets the minimum coding standards

```bash
cd ./client
npm run lint --fix 

cd ../server
echo "TODO: No server linting is being done"
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

Deploys application to heroku

```bash
# Pushing Server to Heroku
git subtree push --prefix output heroku master
# Scale up server
heroku ps:scale web=1
# Open in browser
heroku open
```
