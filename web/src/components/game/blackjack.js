import React, { useState, useEffect } from "react";
import { Box, Button, Flex } from "@chakra-ui/react";
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
      setGameInfo(newGameInfo);
    });
  }, []);

  console.log(gameInfo);

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
