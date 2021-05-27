require('dotenv').config();
const express = require('express');
const mongoose = require('./db');

const todoData = require('./controllers/todoDataController');

module.exports = function App() {
  const app = express();

  // MIDDLEWARE
  app.use(express.json());
  
  
  // ROUTES
  app.get('/health', (req, res) => {
    res.status(200).end();
  })
  
  app.post('/api/todo-data', todoData.addTodo);

  return app;
}