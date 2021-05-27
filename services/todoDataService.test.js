const todoDataService = require('./todoDataService');
const mongoose = require('../db');

describe('TodoData Service', () => {
  it('adds a todo and returns it with id', async () => {
    const todoData = {
      "name": "Add entry",
      "desc": "Personal log",
      "dateCreated": "1622077232207",
      "tags": ["caput"],
    }
  
    const actual = await todoDataService.addTodo(todoData);
  
    expect(actual.order).toBeTruthy();
  })
  
})
