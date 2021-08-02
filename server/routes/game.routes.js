module.exports = (app) => {
  const game = require("../controllers/games.controller.js");

  const express = require("express");
  const router = express.Router();

  router.post("/blackjack", game.blackjack);

  app.use("/api/game", router);
};
