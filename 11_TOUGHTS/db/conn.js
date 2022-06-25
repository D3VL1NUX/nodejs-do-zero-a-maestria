const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("toughts", "devlinux", "NodeJS@29101991", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = sequelize;
