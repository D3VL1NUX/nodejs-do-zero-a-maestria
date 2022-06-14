const express = require("express");
const path = require("path");

const app = express();

const PORT = 3000;

const basePath = path.join(__dirname, "templates");

const checkAuth = function (req, res, next) {
  req.authStatus = true;

  if (req.authStatus) {
    console.log("Está logado, pode continuar");
    next();
  } else {
    console.log("Não está logado, faço o login para continuar");
    next();
  }
};

app.use(checkAuth);

app.get("/", (req, res) => {
  res.sendFile(`${basePath}/index.html`);
});

app.listen(PORT, () => {
  console.log(`Server rodando na porta ${PORT}`);
});
