import React from "react";
import { connect } from "react-redux";
import { register } from "../../actions/session_actions";

const RegisterForm = () => {
  return (
    <div className="login-div">
      <h1>Register</h1>
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

export default connect(mapStateToProps, mapDispatchToProps)(RegisterForm);
