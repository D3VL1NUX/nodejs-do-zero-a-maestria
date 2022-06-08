const chalk = require("chalk");
const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("Qual é a sua linguagem preferida? ", (language) => {
  language === "Java"
    ? console.log(chalk.red("Java é pesado hi hi hi"))
    : console.log(chalk.green(`Minha linguagem preferida é ${language}`));
  readline.close();
});
