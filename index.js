const express = require('express');
const db = require('./dbconnection').knex

const app = express();
const port = 3001

// TODO show all users

// TODO register a user

// TODO update a user score

app.listen(port, () => {
  console.log(`Server started listening on port ${port}.`);
})