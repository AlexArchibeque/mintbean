const Deck = require("../games/deck");

exports.deck = async (req, res) => {
  try {
    let deck = await new Deck(req.body.decksize);

    return res.json(deck);
  } catch (err) {
    return res.status(400).send({
      message: "something went wrong.",
    });
  }
};
