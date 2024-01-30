const express = require('express');
const db = require('./dbconnection').knex

const app = express();
const port = 3001

app.use(express.json())

// TODO show all users
app.get('/users', (req, res) => {

  db.select('*').from('users').then(data => {
    if (data.length) {
      res.send(data)
    } else {
      res.status(400).json('error getting users')
    }
  }).catch(error => {
    console.log(error)
    res.status(400).json('error getting users, see console log for details')
  })
})

// TODO show one user by id
// restrict access to logged in user

// TODO register a user
app.post('/register', (req, res) => {

  const { username, email, password } = req.body;

  db('users')
    .returning('*')
    .insert({ username, email, password, created: new Date() })
    .then(data => {res.send(data) })
    .catch(error => {res.status(400).json(error)})

})

// TODO update a user score
// restrict access to logged in user

app.listen(port, () => {
  console.log(`Server started listening on port ${port}.`);
})