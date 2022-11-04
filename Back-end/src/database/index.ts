import Logger from "../../config/logger";

const Sequelize = require("sequelize");

const DB_NAME = "dindin";
const DB_USER = "root";
const DB_PASS = "lindo2849";
const DB_CONFIG = {
  dialect: "mysql",
  host: "localhost",
  port: 3306,
  define: {
    timestamps: false
}
};

// objeto para guardar a conexão do banco dados
let db: any = {};

try {
  db = new Sequelize(DB_NAME, DB_USER, DB_PASS, DB_CONFIG);
} catch (error) {
  Logger.error("Error ao tentar uma conexão com banco dados");
}

async function hasConection() {
  try {
    await db.authenticate();
    Logger.info("Banco dados conectado!");
  } catch (error) {
    Logger.error("Erro ao tentar se conectar ao banco de dados1");
  }
}

Object.assign(db, {
  hasConection,
});

module.exports = db;
