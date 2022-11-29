const Sequelize = require("sequelize");

const db = new Sequelize("ProyectoP5", null, null, {
  host: "localhost",
  dialect: "postgres",
  logging: false,
});

module.exports = db;
