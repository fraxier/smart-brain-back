const express = require('express');
const db = require('./dbconnection').knex

const app = express();
const port = 3000

db.select('*').from('users').then(data => {
  console.log(data)
})


app.get('/', (req, res) => {
  res.send('<h1>Hello world!</h1>')
})

app.listen(port, () => {
  console.log(`Server started listening on port ${port}.`);
})