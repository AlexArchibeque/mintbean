const path = require("path");
const fs = require("fs");

const directoryPath = path.join(
  __dirname,
  "..",
  "..",
  "/web/public/images/cards"
);

const cardValues = {
  queen: 10,
  king: 10,
  jack: 10,
  ace: "ace",
};

class Card {
  constructor(value, image) {
    this.image = image;
    this.value = value;
  }
}

class Deck {
  constructor(numberOfDecks = 1) {
    this.deck = this.makeDeck(numberOfDecks);
  }

  makeDeck(numberOfDecks) {
    let finalArr = [];
    const files = fs.readdirSync(directoryPath, "utf8");

    while (numberOfDecks > 0) {
      for (let card of files) {
        let cardPath = directoryPath + "/" + card;
        let cardValue = card.split("_")[0];
        let newCard;

        if (cardValues[cardValue]) {
          newCard = new Card(cardValues[cardValue], cardPath);
        } else {
          newCard = new Card(parseInt(cardValue), cardPath);
        }

        finalArr.push(newCard);
      }
      numberOfDecks--;
    }

    return finalArr;
  }
}

module.exports = Deck;
