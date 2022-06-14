const express = require("express");
const path = require("path");
const users = require("./users");

const app = express();

const port = 3000;

const basePath = path.join(__dirname, "templates");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

app.use("/users", users);

app.get("/", (req, res) => {
  res.sendFile(`${basePath}/index.html`);
});

app.listen(port, () => console.log("Servidor rodando na porta 300..."));
