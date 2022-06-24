const express = require("express");
const { engine } = require("express-handlebars");

const app = express();
const conn = require("./db/conn");

const Task = require("./models/Task");

app.engine("handlebars", engine());
app.set("view engine", "handlebars");

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("/");
});

conn
  .sync()
  .then(() => {
    app.listen(3000);
  })
  .catch((err) => {
    console.log(err);
  });
