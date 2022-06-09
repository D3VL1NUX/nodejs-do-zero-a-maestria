const chalk = require("chalk");
const idade = 18;

if (idade < 18) {
  console.log(chalk.red.bold("Você não pode entrar!"));
} else {
  console.log(chalk.green.bold("Você pode entrar!"));
}
