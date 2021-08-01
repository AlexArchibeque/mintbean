import React from "react";
import { connect } from "react-redux";
import { login } from "../../actions/session_actions";
import { Formik, Form } from "formik";
import {
  Box,
  Button,
  Link,
  Flex,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
} from "@chakra-ui/react";
import { Wrapper } from "../reusables/wrapper";

const LoginForm = () => {
  return (
    <Wrapper variant="small">
      <Formik
        initialValues={{ username: "", password: "" }}
        onSubmit={async (values) => {
          console.log(values);
        }}
      >
        <Form>
          <FormControl id="Username">
            <FormLabel>Username</FormLabel>
            <Input type="username" />
          </FormControl>
          <FormControl id="password">
            <FormLabel>Password</FormLabel>
            <Input type="password" />
          </FormControl>
        </Form>
      </Formik>
      <h1>Login</h1>
      <div className="errors-div"></div>
      <form className="inner-login-container"></form>
    </Wrapper>
  );
};

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
