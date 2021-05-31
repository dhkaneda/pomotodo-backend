const express = require('express');
const router = express.Router();

const todoData = require("../controllers/todoDataController");
const TodoData = require("../models/TodoData");

if (TodoData.findOne({}) === undefined) {
  TodoData({ order: [], todos: {} }).save();
}

router.get("/health", (req, res) => {
  res.status(200).end();
});

router.post("/api/todo-data", todoData.addTodo);
router.get("/api/todo-data", todoData.getTodos);
router.patch("/api/todo-data", todoData.updateOrder);
router.patch("/api/todo-data/:id", todoData.updateTodo);
router.delete("/api/todo-data/:id", todoData.deleteTodo);

module.exports = router;
