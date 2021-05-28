require("dotenv").config();
const express = require("express");
const mongoose = require("./db");
const TodoData = require("./models/TodoData");

const todoData = require("./controllers/todoDataController");

module.exports = function App() {
  const app = express();

  // Add boilerplate document if none exists
  if (TodoData.findOne({}) === undefined) {
    TodoData({
      order: [],
      todos: {},
    }).save();
  }

  // MIDDLEWARE
  app.use(express.json());

  // ROUTES
  app.get("/health", (req, res) => {
    res.status(200).end();
  });

  app.post("/api/todo-data", todoData.addTodo);
  app.get("/api/todo-data", todoData.getTodos);

  return app;
};
