const App = require("./app");
const request = require("supertest");
const mongoose = require("mongoose");
const TodoData = require("./models/TodoData");
const todoDataService = require("./services/TodoDataService");

const app = new App();

describe("Test public routes", () => {
  beforeEach(async () => {
    await TodoData.deleteMany({});
  });

  afterAll(() => {
    mongoose.connection.close();
  });

  it("should respond with a 200 at the /health path", () => {
    return request(app).get("/health").expect(200);
  });

  it("should add a todo, returning it in an order and object mapped by id", () => {
    return request(app)
      .post("/api/todo-data")
      .send({
        name: "Add entry",
        desc: "Personal log",
        dateCreated: "1622077232207",
        tags: ["caput"],
        pomodoroCount: 0,
      })
      .expect(201)
      .then(({ body }, err) => {
        const todoId = body.order[0];
        const returnedTodo = body.todos[todoId];

        // example response body
        // {
        //   "order": [
        //     "57f78108-4704-41a9-989b-3721ceedfad1"
        //   ],
        //   "todos": {
        //     "57f78108-4704-41a9-989b-3721ceedfad1": {
        //       "name": "Add entry",
        //       "desc": "Personal log",
        //       "dateCreated": "1622077232207",
        //       "dateCompleted": null,
        //       "tags": ["caput"],
        //       "pomodoroCount": 0
        //     }
        //   }
        // }

        expect(Array.isArray(body.order)).toBeTruthy();
        expect(returnedTodo.pomodoroCount).toEqual(0);
        expect(returnedTodo.name).toEqual("Add entry");
        expect(returnedTodo.desc).toEqual("Personal log");
        expect(returnedTodo.dateCreated).toEqual("1622077232207");
      });
  });

  it("should return all the todos saved, with the order", () => {
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
    return todoDataService
      .addTodo(todo1)
      .then(() => {
        todoDataService.addTodo(todo2);
      })
      .then(() => {
        return request(app)
          .get("/api/todo-data")
          .expect(200)
          .then(({ body }, err) => {
            expect(body.order.length).toEqual(2);
          });
      });
  });
});
