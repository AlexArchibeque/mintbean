import React from "react";
import { connect } from "react-redux";
import { login } from "../../actions/session_actions";

const LoginForm = () => {
  return (
    <div className="login-div">
      <h1>Login</h1>
      <div className="errors-div"></div>
      <form className="inner-login-container"></form>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
