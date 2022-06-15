const express = require("express");
const { engine } = require("express-handlebars");

const app = express();

app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", "./views");

app.get("/dashboard", (req, res) => {
  const character = {
    name: "Darth",
    surname: "Vader",
  };

  res.render("dashboard", { character });
});

app.get("/", (req, res) => {
  const character = {
    name: "Darth",
    surname: "Vader",
  };

  const auth = true;

  res.render("home", { character, auth });
});

app.listen(3000, () => console.log("Servidor rodando na porta 3000"));
