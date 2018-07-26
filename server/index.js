const express = require('express');
const mongoose = require('mongoose');
const config = require('./config');
const app = express();
const { register } = require('./routes');

const connectionString =
  process.env.connectionString || config.connectionString;
const port = process.env.PORT;
if (!port) {
    console.error('No port found in environment');
    process.exit(1);
}

mongoose.connect(
    connectionString,
    err => {
        if (err) {
            console.error('Unable to connect to mongo', err);
            process.exit(1);
        }
    }
);

register(app);

app.listen(port, err => {
    if (err) {
        console.error(`Unable to start express server on port ${port}`, err);
        process.exit(1);
    }
    console.log(`Server Started: Running on localhost:${port}`);
});
