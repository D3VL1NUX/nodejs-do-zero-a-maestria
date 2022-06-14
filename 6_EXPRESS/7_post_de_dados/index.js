const express = require("express");
const path = require("path");

const app = express();

const PORT = 3000;

const basePath = path.join(__dirname, "templates");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/users/add", (req, res) => {
  res.sendFile(`${basePath}/userform.html`);
});

app.post("/users/save", (req, res) => {
  const name = req.body.name;
  const age = req.body.age;

  res.send(`<b>Nome: </b>${name}<br> <b>Idade: </b>${age}`);
});

app.get("/", (req, res) => {
  res.sendFile(`${basePath}/index.html`);
});

app.listen(PORT, () => {
  console.log(`Server rodando na porta ${PORT}`);
});
