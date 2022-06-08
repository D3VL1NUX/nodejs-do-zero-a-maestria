const fs = require("fs");

console.log("Inicio");

fs.writeFile(
  "arquivo.txt",
  "Não tente. Faça… ou não faça. Não há tentativa.",
  function (err) {
    setTimeout(function () {
      console.log("Arquivo criado!");
    }, 1000);
  }
);

console.log("Fim");
