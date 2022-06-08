const chalk = require("chalk");

const nota = 10;

if (nota >= 10) {
  console.log(chalk.green.bold("Parabéns você foi aprovado!"));
} else {
  console.log(chalk.bgRed.black("Você precisa melhorar sua nota!"));
}
