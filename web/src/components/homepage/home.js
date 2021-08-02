import React from "react";
import { connect } from "react-redux";
import TableForm from "../tables/form";
import { Flex } from "@chakra-ui/react";

const Homepage = (props) => {
  return (
    <Flex w="100%" h="100%" alignItems="center" justifyContent="center">
      {props.state.tableForms.open ? <TableForm /> : null}
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

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);
