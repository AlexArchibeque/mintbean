import axios from "axios";

export const getDeck = async (deckSize) => {
  return await axios.post("/api/game/deck", { decksize: deckSize });
};
