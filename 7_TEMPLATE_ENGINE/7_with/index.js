const express = require("express");
const { engine } = require("express-handlebars");

const app = express();

app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", "./views");

app.get("/dashboard", (req, res) => {
  const characters = ["Darth Vader", "Luke Skywalker", "Mestre Yoda"];

  res.render("dashboard", { characters });
});

app.get("/post", (req, res) => {
  const post = {
    title: "Aprender Node.js",
    category: "JavaScript",
    body: "Este artigo vai te ajudar a aprender Node.js...",
    comments: 4,
  };

  res.render("blogpost", { post });
});

app.get("/", (req, res) => {
  const character = {
    name: "Darth",
    surname: "Vader",
  };

  const auth = true;
  const approved = true;

  res.render("home", { character, auth, approved });
});

app.listen(3000, () => console.log("Servidor rodando na porta 3000"));
