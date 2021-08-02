import React, { useState, useEffect } from "react";
import { Box, Button, Flex, Image } from "@chakra-ui/react";
import { connect } from "react-redux";
import { getDeck } from "../../util/game_api_util";

const BlackJack = ({ info }) => {
  const [gameInfo, setGameInfo] = useState({});

  // Set up game run before render.
  useEffect(() => {
    let deck;

    getDeck(parseInt(info.decks)).then((res) => {
      deck = res.data.deck;
      let newGameInfo = { deck, type: "blackjack" };
      console.log(newGameInfo);
      setGameInfo(newGameInfo);
    });
  }, []);

  return (
    <Flex alignItems="center" justifyContent="center" h="100%">
      <Flex
        flexDirection="column"
        alignItems="center"
        justifyContent="space-between"
        h="100%"
      >
        {/* Dealer Area */}
        <Flex flexDirection="column">
          <h1>{info.title}</h1>
          <Box>Cards Area</Box>
          {gameInfo.deck
            ? gameInfo.deck.map((card) => {
                return (
                  <div>
                    <Image src="web/public/images/cards/2_of_clubs.png" />
                    {card.value}
                  </div>
                );
              })
            : null}
        </Flex>

        {/* User area */}
        <Flex>
          <Box>Card Area</Box>
          <Box>
            <Button>Hit</Button>
            <Button>Stay</Button>
          </Box>
        </Flex>
      </Flex>

      <Flex h="100%" w="100px">
        <Box pl={40}>DeckArea33</Box>
      </Flex>
    </Flex>
  );
};

const mapStateToProps = (state) => {
  return {
    state: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(BlackJack);
