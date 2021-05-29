require("dotenv").config();
const express = require("express");
const router = require('./router');
const mongoose = require("./db");

module.exports = function App() {
  const app = express();

  app.use(express.json());

  app.use(router);

  return app;
};
