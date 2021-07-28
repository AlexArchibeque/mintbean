const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const db = require("./db/index.js");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const keys = require("./keys/keys");

const User = db.user;

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

  // await db.sequelize.sync();

  await db.sequelize.sync({ force: true }).then(() => {
    console.log("Drop and re-sync db.");
  });

  await require("./routes/user.routes.js")(app);

  await app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}.`);
  });
};

main().catch((errors) => {
  console.log(errors);
});
