const minimist = require("minimist");

const args = minimist(process.argv.slice(2));

const nome = args["nome"];
const idade = args["idade"];

console.log(`O nome dele é ${nome} e ele tem ${idade} anos`);
