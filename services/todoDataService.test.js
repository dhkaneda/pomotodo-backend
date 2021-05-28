const todoDataService = require("./todoDataService");
const TodoData = require("../models/TodoData");
const mongoose = require("../db");

describe("TodoData Service", () => {
  beforeEach(async () => {
    await TodoData.deleteMany({});
  });
  it("adds a todo and returns it with id", async () => {
    const todoData = {
      name: "Add entry",
      desc: "Personal log",
      dateCreated: "1622077232207",
      tags: ["caput"],
      pomodoroCount: 0,
    };

    const actual = await todoDataService.addTodo(todoData);

    expect(actual.order).toBeTruthy();
  });

  it("returns all the todo-data saved", async () => {
    const todo1 = {
      name: "Add entry",
      desc: "Personal log",
      dateCreated: "1622077232207",
      tags: ["caput"],
      pomodoroCount: 0,
    };
    const todo2 = {
      name: "Rep building",
      desc: "Physical training",
      dateCreated: "1622077232209",
      tags: ["manu"],
      pomodoroCount: 0,
    };
    await todoDataService.addTodo(todo1);
    await todoDataService.addTodo(todo2);

    const actual = await todoDataService.getTodos();

    expect(actual.order.length).toEqual(2);
  });
});
