const express = require("express");
const route = express.Router();
const path = require("path");

const basePath = path.join(__dirname, "../templates");

route.get("/add", (req, res) => {
  res.sendFile(`${basePath}/userform.html`);
});

route.post("/save", (req, res) => {
  const name = req.body.name;
  const age = req.body.age;

  res.send(`<b>Nome: </b>${name}<br> <b>Idade: </b>${age}`);
});

module.exports = route;
