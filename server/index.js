const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

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

  app.get("/", (req, res) => {
    res.json({ message: "Hello and this works." });
  });

  app.get("/hello", (req, res) => {
    res.json({ message: "Hello and this also works." });
  });

  app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}.`);
  });
};

main().catch((errors) => {
  console.log(errors);
});
