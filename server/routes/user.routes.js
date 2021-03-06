module.exports = (app) => {
  const user = require("../controllers/user.controller.js");

  const express = require("express");
  const router = express.Router();

  // check if currently logged in as user.
  router.get("/me", user.me);

  // Create a new user
  router.post("/register", user.register);

  // Create a new user
  router.post("/login", user.login);

  // Retrieve a single user with id
  router.get("/:id", user.findOne);

  // Update a user's mintbeans with id
  router.put("/:id", user.updateMintbeans);

  // Delete a user with id
  router.delete("/:id", user.logout);

  app.use("/api/user", router);
};
