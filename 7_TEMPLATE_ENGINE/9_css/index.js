const express = require("express");
const { engine } = require("express-handlebars");

const app = express();

app.use(express.static("public"));

app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", "./views");

app.get("/", (req, res) => {
  res.render("home");
});

app.listen(3000, () => console.log("Servidor rodando na porta 3000"));
