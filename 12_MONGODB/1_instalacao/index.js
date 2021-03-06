const express = require("express");
const { engine } = require("express-handlebars");

const app = express();

const conn = require("./db/conn");

app.engine("handlebars", engine());
app.set("view engine", "handlebars");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(3000);
