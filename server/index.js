const express = require('express')
const mongoose = require('mongoose');
const app = express();

const connectionString = process.env.connectionString || 'mongodb://localhost/late-joiners';

mongoose.connect(connectionString);

 
app.get('/', function (req, res) {
  res.send('Hello World')
})
 
const port = process.env.PORT;
if (!port) {
  console.error('No port found in environment');
  process.exit(1);
}

app.listen(port)
console.log(`Server Started: Running on localhost:${port}`)