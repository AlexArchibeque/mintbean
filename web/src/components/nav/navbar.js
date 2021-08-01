import React from "react";
import { connect } from "react-redux";
import { logout } from "../../actions/session_actions";
import { Link as ReactLink } from "react-router-dom";
import { Flex, Box, Link, Image } from "@chakra-ui/react";
import CreateTable from "../tables/create";
// import joinTable from '../tables/join';

const NavBar = (props) => {
  const logoutUser = () => {
    props.logout();
  };

  let right = null;
  let left = null;

  let user = props.userInfo;

  if (props.loggedIn) {
    left = (
      // come back and fix this.
      <Flex>
        <CreateTable />
      </Flex>
    );
    right = (
      <Flex>
        <Flex>
          <Box ml={4}>Hi {user.username}!</Box>
          <Box ml={2}>
            {" "}
            <Image
              height={25}
              width={25}
              src={user.photoUrl}
              borderRadius="50"
              // border="1px"
              // borderColor="black"
            />
          </Box>
          <Box ml={4} mr={4}>
            MB: {user.mintbeans}
          </Box>
        </Flex>

        <Link>
          <ReactLink to={"/"}>Home</ReactLink>
        </Link>

        <Link onClick={() => logoutUser()} ml={4}>
          Logout
        </Link>
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
  userInfo: state.session.user,
  loggedIn: state.session.isAuthenticated,
});

export default connect(mapStateToProps, { logout })(NavBar);
