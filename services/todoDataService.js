const uuid = require('uuid')
const TodoData = require('../models/TodoData');

module.exports = class TodoDataService {

  static async addTodo(todo) {
    const id = uuid.v4();
    const todoData = {}
    todoData.order = [];
    todoData.order.push(id);

    todo.id = id;
    todo.pomodoroCount = 0;

    todoData.todos = {};
    todoData.todos[id] = todo;
    
    try {
      const response = await new TodoData(todoData).save();
      return response;
    } catch (error) {
      console.log(error);
    }
  }

}