import React from "react";
import { connect } from "react-redux";
import { logout } from "../../actions/session_actions";
import { Link } from "react-router-dom";

const NavBar = (props) => {
  console.log(props);

  const logoutUser = () => {
    props.logout();
  };

  return (
    <>
      {props.loggedIn ? (
        <div>
          <Link to={"/"}>Home </Link>
          <button onClick={() => logoutUser()}>LOGOUT</button>
        </div>
      ) : (
        <div>
          <button onClick={() => logoutUser()}>LOGOUT</button>
          <Link to={"/"}>Home </Link>
          <Link to={"/login"}>Login</Link>
          <Link to={"/register"}>Register</Link>
        </div>
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  loggedIn: state.session.isAuthenticated,
});

export default connect(mapStateToProps, { logout })(NavBar);
