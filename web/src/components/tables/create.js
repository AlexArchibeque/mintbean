import React from "react";
import { connect } from "react-redux";

import { Link } from "@chakra-ui/react";
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
