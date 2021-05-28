const uuid = require("uuid");
const TodoData = require("../models/TodoData");

module.exports = class TodoDataService {
  static async addTodo(todo) {
    const id = uuid.v4();
    todo.id = id;

    try {
      let response;
      let existingTodoData = await TodoData.find({});
      if (existingTodoData.length === 0) {
        const todoData = {};
        todoData.order = [];
        todoData.order.push(id);
        todoData.todos = {};
        todoData.todos[id] = todo;

        response = await TodoData(todoData).save();
      } else {
        existingTodoData = existingTodoData[0];
        existingTodoData.order.push(id);
        existingTodoData.todos[id] = todo;

        response = await TodoData(existingTodoData).save();
      }
      return response;
    } catch (error) {
      console.log(error);
    }
  }

  static async getTodos() {
    try {
      const response = await TodoData.findOne({});
      return response;
    } catch (error) {
      console.log(error);
    }
  }
};
