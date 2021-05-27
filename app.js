const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded());

app.get('/health', (req, res) => {
  res.status(200).end();
})

module.exports = app;