## test

Run task `lint` before this

```bash
# Run client side tests
cd ./client
npm test

# Run server side tests
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

```js
console.log('Starting up the client and server');
```

## start:client

Starts up the client app

```bash
cd ./client
npm start

```

## start:server

Starts up the client app

```bash
cd ./server
echo "No server to start as yet"

```