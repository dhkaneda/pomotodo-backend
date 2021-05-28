const todoDataService = require("../services/todoDataService");

module.exports = class TodoDataController {
  static async addTodo(req, res) {
    try {
      const todoData = await todoDataService.addTodo(req.body);
      res.status(201).json(todoData);
    } catch (error) {
      res.status(500).json({ error });
    }
  }

  static async getTodos(req, res) {
    try {
      const todoData = await todoDataService.getTodos();
      res.status(200).send(todoData);
    } catch (error) {
      res.status(500).json({ error });
    }
  }
};
