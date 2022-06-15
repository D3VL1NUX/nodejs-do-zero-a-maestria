const express = require("express");
const { engine } = require("express-handlebars");

const app = express();

const handlebars = require("express-handlebars").create({
  partialsDir: ["views/partials"],
});

app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", "./views");

app.get("/blog", (req, res) => {
  const post = {
    title: "Aprender Node.js",
    category: "JavaScript",
    body: "Este artigo vai te ajudar a aprender Node.js...",
    comments: 4,
  };

  res.render("blog", { post });
});

app.get("/", (req, res) => {
  res.render("home");
});

app.listen(3000, () => console.log("Servidor rodando na porta 3000"));
