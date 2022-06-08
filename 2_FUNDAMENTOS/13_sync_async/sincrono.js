const fs = require("fs");

console.log("Inicio");

fs.writeFileSync(
  "arquivo.txt",
  "Não tente. Faça… ou não faça. Não há tentativa."
);

console.log("Fim");
