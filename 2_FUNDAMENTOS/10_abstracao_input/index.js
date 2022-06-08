const inquirer = require("inquirer");
const chalk = require("chalk");

inquirer
  .prompt([
    {
      name: "p1",
      message: "Qual a primeira nota?",
    },
    {
      name: "p2",
      message: "Qual a segunda nota?",
    },
  ])
  .then((answers) => {
    const media = parseInt(answers.p1) + parseInt(answers.p2) / 2;
    media < 5
      ? console.log(
          chalk.bgRed.black(`A media é ${media}, você não foi aprovado!`)
        )
      : console.log(
          chalk.green(`A media é ${media}, parabéns! você foi aprovado!`)
        );
  })
  .catch((err) => console.log(err));
