const keys = require("../keys/keys");

module.exports = {
  HOST: "localhost",
  USER: keys.PG_USERNAME,
  PASSWORD: keys.PG_PASSWORD,
  DB: "pokerdb",
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
