if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

let postgresUsername = process.env.PG_USERNAME;
let postgresPassword = process.env.PG_PASSWORD;

module.exports = {
  HOST: "localhost",
  USER: postgresUsername,
  PASSWORD: postgresPassword,
  DB: "testdb",
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
