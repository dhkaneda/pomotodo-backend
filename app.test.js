const app = require('./app')
const request = require('supertest');

describe("Test public routes", () => {
  it("should respond with a 200 at the /health path", () => {
    return request(app)
      .get("/health")
      .expect(200)
  })
})