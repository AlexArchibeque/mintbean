const db = require("../db/index");
const User = db.user;
const Op = db.Sequelize.Op;
const jwt = require("jsonwebtoken");

const argon2 = require("argon2");

// Auth Options
const loginExpiration = 86400;

const cookieOptions = {
  expiresIn: loginExpiration,
  httpOnly: true,
};

exports.me = async (req, res) => {
  const token = req.cookies.token;
  //   console.log("token: ", token);
  //   console.log("user:", req.user);

  if (token) {
    let decodedId;
    jwt.verify(token, process.env.SESSION_SECRET, async (err, decoded) => {
      decodedId = decoded.id;
    });
    try {
      const user = await User.findByPk(decodedId);
      if (user.dataValues.id === req.user.dataValues.id) {
        return res.json(user);
      } else {
        return res.status(400).send({
          message: "No user found.",
        });
      }
    } catch (err) {
      return res.status(400).send({
        message: err.message || "No user found.",
      });
    }
  }

  return res.status(400).send({
    message: "Not Logged In!",
  });
};

// Create and Save a new User
exports.register = async (req, res) => {
  let password = req.body.password;
  let username = req.body.username;

  if (!password || password.length < 2) {
    return res.status(400).send({
      message: "Password is too short.",
    });
  }

  if (!username) {
    return res.status(400).send({
      message: "There needs to be a username.",
    });
  }

  if (await User.findOne({ where: { username: username } })) {
    return res.status(400).send({
      message: "Username Taken.",
    });
  }

  const hashedPassword = await argon2.hash(password);

  let randomNumber = Math.floor(Math.random() * 1000);

  const userInfo = {
    username: username,
    password: hashedPassword,
    mintbeans: 1000,
    photoUrl: `https://picsum.photos/id/${randomNumber}/100/100`,
  };

  try {
    const user = await User.create(userInfo);

    const token = jwt.sign({ id: user.id }, process.env.SESSION_SECRET, {
      expiresIn: loginExpiration,
    });

    res.cookie("token", token, cookieOptions);

    return res.json(user);
  } catch (err) {
    return res.status(500).send({
      message: err.message || "Some error occurred while creating the User.",
    });
  }
};

// login a user.
exports.login = async (req, res) => {
  let password = req.body.password;
  let username = req.body.username;

  const user = await User.findOne({ where: { username: username } });

  if (user) {
    const valid = await argon2.verify(user.password, password);

    if (valid) {
      const token = jwt.sign({ id: user.id }, process.env.SESSION_SECRET, {
        expiresIn: loginExpiration,
      });

      res.cookie("token", token, cookieOptions);
      return res.json(user);
    } else {
      return res.status(400).send({
        message: `Invalid password.`,
      });
    }
  } else {
    return res.status(400).send({
      message: `No user named ${username}`,
    });
  }
};

// Find a single User with an id
exports.findOne = async (req, res) => {
  let userId = req.params.id;
  try {
    const user = await User.findByPk(userId);
    if (user) {
      return res.json(user);
    } else {
      return res.status(400).send({
        message: "No user found.",
      });
    }
  } catch (err) {
    return res.status(400).send({
      message: err.message || `Something went wrong.`,
    });
  }
};

// Update a User by the id in the request
exports.updateMintbeans = async (req, res) => {
  let userId = req.params.id;
  let mintBeans = req.body.mintBeans;

  try {
    let user = await User.findByPk(userId);
    if (user) {
      let currentNum = Math.floor(
        parseInt(user.dataValues.mintbeans) + parseInt(mintBeans)
      );
      if (currentNum <= 0) {
        currentNum = 1000;
      }
      if (
        await User.update({ mintbeans: currentNum }, { where: { id: userId } })
      ) {
        return res.json({ mintbeans: currentNum });
      } else {
        return res.status(400).send({
          message: "Points addition/subtraction error",
        });
      }
    } else {
      return res.status(400).send({
        message: "Points addition/subtraction error",
      });
    }
  } catch (err) {
    return res.status(400).send({
      message: err.message || `Something went wrong.`,
    });
  }
};

// Delete a User with the specified id in the request
exports.logout = async (req, res) => {
  res.clearCookie("token");
  return res.sendStatus(204);
};
