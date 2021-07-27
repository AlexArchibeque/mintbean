const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const db = require("./db/index.js");

const corsOptions = {
  origin: "http://localhost:3000",
};

const PORT = process.env.PORT || 4000;

const main = async () => {
  const app = express();

  // Middleware
  app.use(cors(corsOptions));

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));

  db.sequelize.sync();

  // db.sequelize.sync({ force: true }).then(() => {
  //   console.log("Drop and re-sync db.");
  // });

  app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}.`);
  });
};

main().catch((errors) => {
  console.log(errors);
});
