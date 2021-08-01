import React from "react";
import { connect } from "react-redux";
import { logout } from "../../actions/session_actions";
import { Link as ReactLink } from "react-router-dom";
import { Flex, Button, Box, Link } from "@chakra-ui/react";

const NavBar = (props) => {
  const logoutUser = () => {
    props.logout();
  };

  let right = null;
  let left = null;

  if (props.loggedIn) {
    right = (
      <Flex>
        <Link>
          <ReactLink to={"/"}>Home</ReactLink>
        </Link>

        <Link onClick={() => logoutUser()} ml={4}>
          Logout
        </Link>
      </Flex>
    );
    left = (
      // come back and fix this.
      <Flex>
        <Link>Create Room</Link>
        <Link ml={4}>Join Room</Link>
      </Flex>
    );
  } else {
    right = (
      <Flex>
        <Link>
          <ReactLink to={"/"}>Home</ReactLink>
        </Link>
        <Box ml={4}>
          <Link>
            <ReactLink to={"/login"}>Login</ReactLink>
          </Link>
          <Link ml={2}>
            <ReactLink to={"/register"}>Register</ReactLink>
          </Link>
        </Box>
      </Flex>
    );
  }

  return (
    <Flex zIndex={1} position="sticky" top={0} bg="lightblue" p={4}>
      <Box>{left}</Box>
      <Box ml={"auto"}>{right}</Box>
    </Flex>
  );
};

const mapStateToProps = (state) => ({
  currentState: state,
  loggedIn: state.session.isAuthenticated,
});

export default connect(mapStateToProps, { logout })(NavBar);
