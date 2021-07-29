const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const db = require("./db/index.js");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const keys = require("./keys/keys");
const path = require("path");

const User = db.user;
const PORT = process.env.PORT || 4000;

const main = async () => {
  const app = express();

  // Middleware
  app.use(cors());

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(cookieParser());

  app.use((req, res, next) => {
    const token = req.cookies.token;

    if (token) {
      jwt.verify(token, keys.SESSION_SECRET, async (err, decoded) => {
        try {
          const user = await User.findOne({
            where: { id: decoded.id },
          });

          req.user = user;
          return next();
        } catch (err) {
          return next();
        }
      });
    } else {
      return next();
    }
  });

  await db.sequelize.sync();

  // await db.sequelize.sync({ force: true }).then(() => {
  //   console.log("Drop and re-sync db.");
  // });

  await require("./routes/user.routes.js")(app);

  await app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}.`);
  });

  // console.log("DIRECTORY: ", path.resolve(__dirname, ".."));
  if (process.env.NODE_ENV === "production") {
    const root = path.resolve(__dirname, "..", "web", "build");
    app.use(express.static(root));
    app.get("*", (req, res) => {
      res.sendFile("index.html", { root });
    });
  }
};

main().catch((errors) => {
  console.log(errors);
});
