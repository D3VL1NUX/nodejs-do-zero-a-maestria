const _ = require("lodash");

const personagens = ["Dart Vader", "Luke Skywalker", "Leia Skywalker"];
const jedi = ["Anakin Skywalker", "Obi-Wan Kenobi", "Mestre Yoda"];

const diff = _.difference(personagens, jedi);

console.log(diff);
