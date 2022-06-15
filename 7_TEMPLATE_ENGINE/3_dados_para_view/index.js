const express = require("express");
const { engine } = require("express-handlebars");

const app = express();

app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", "./views");

app.get("/", (req, res) => {
  const user = {
    name: "Darth",
    surname: "Vader",
  };

  const urlImage = {
    url: "https://cdn.ome.lt/qnK3hf0_08-cjuoRDb98LkEg3Do=/1200x630/smart/extras/conteudos/darth-vader-fortnite.jpg",
  };

  res.render("home", { user, urlImage });
});

app.listen(3000, () => console.log("Servidor rodando na porta 3000"));
