const express = require('express')
const app = express()
 
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