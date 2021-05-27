require('dotenv').config();
const mongoose =  require("mongoose");
const express = require('express');

const todoData = require('./controllers/todoDataController');

module.exports = function App() {
  const app = express();
  
  // DB CONNECTION
  mongoose.connect(process.env.mongoURI, {useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true })
  .then(res => console.log(`Connection Succesful ${res}`))
  .catch(err => console.log(`Error in DB connection ${err}`));
  
  
  // MIDDLEWARE
  app.use(express.json());
  app.use(express.urlencoded());
  
  
  // ROUTES
  app.get('/health', (req, res) => {
    res.status(200).end();
  })
  
  app.post('/api/todo-data', todoData.addTodo);

  return app;
}