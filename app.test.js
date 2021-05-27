const App = require('./app')
const request = require('supertest');
const mongoose =  require("mongoose");

const app = new App();

describe("Test public routes", () => {
  afterAll(() => {
    mongoose.connection.close();
  }); 

  it("should respond with a 200 at the /health path", () => {
    return request(app)
      .get("/health")
      .expect(200)
  })

  it("should add a todo", () => {
    return request(app)
      .post("/api/todo-data")
      .send(
        {
          "name": "Add entry",
          "desc": "Personal log",
          "dateCreated": "1622077232207",
          "tags": ["caput"],
        }
      )
      .expect(201)
      .then(({body}, err) => {
        const todoId = body.order[0]
        const returnedTodo = body.todos[todoId];

        expect(Array.isArray(body.order)).toBeTruthy();
        expect(returnedTodo.pomodoroCount).toEqual(0);
        expect(returnedTodo.name).toEqual("Add entry");
        expect(returnedTodo.desc).toEqual("Personal log");
        expect(returnedTodo.dateCreated).toEqual("1622077232207");
      })
  })

})

