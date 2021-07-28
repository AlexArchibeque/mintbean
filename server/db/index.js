const dbConfig = require("./db.config");

const Sequelize = require("sequelize");
const keys = require("../keys/keys");

let sequelize;

keys.PG_URL
  ? (sequelize = new Sequelize(keys.PG_UIRL))
  : (sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
      host: dbConfig.HOST,
      dialect: dbConfig.dialect,

      pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle,
      },
    }));

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require("../models/user.model")(sequelize, Sequelize);

module.exports = db;
