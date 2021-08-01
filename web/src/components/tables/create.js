import React from "react";
import { connect } from "react-redux";

import { Link as ReactLink } from "react-router-dom";
import { Flex, Box, Link, Image } from "@chakra-ui/react";
import { useState } from "react";
import { receiveCreateTableForm } from "../../actions/form_actions";

const CreateTable = (props) => {
  return (
    <>
      <Link onClick={() => props.createTable("blackjack")}>Create table</Link>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    state: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createTable: (gameType) => dispatch(receiveCreateTableForm(gameType)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateTable);
