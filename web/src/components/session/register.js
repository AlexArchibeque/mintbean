import React from "react";
import { connect } from "react-redux";
import { register } from "../../actions/session_actions";
import { Formik, Form, Field } from "formik";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
} from "@chakra-ui/react";
import { Wrapper } from "../reusables/wrapper";
import { useState, useEffect } from "react";

const RegisterForm = (props) => {
  const [errors, setErrors] = useState({});

  useEffect(() => {
    setErrors(props.errors);
  }, [props.errors]);

  return (
    <Wrapper variant="small">
      <Box fontSize="20" fontWeight="600">
        Register
      </Box>
      <Formik
        initialValues={{ username: "", password: "" }}
        onSubmit={async (values) => {
          const response = await props.register(values);

          if (response) {
            props.history.push("/");
          }
        }}
      >
        <Form>
          <Box mt={4}>
            <Field name="username">
              {({ field }) => (
                <FormControl isInvalid={errors.username}>
                  <FormLabel htmlFor="username">Username</FormLabel>
                  <Input
                    {...field}
                    name="username"
                    placeholder="username"
                    label="username"
                    type="username"
                    id="username"
                  />
                  {errors.username ? (
                    <FormErrorMessage>{errors.username}</FormErrorMessage>
                  ) : null}
                </FormControl>
              )}
            </Field>
          </Box>

          <Box mt={4}>
            <Field name="password">
              {({ field }) => (
                <FormControl isInvalid={errors.password}>
                  <FormLabel htmlFor="password">Password</FormLabel>
                  <Input
                    {...field}
                    name="password"
                    placeholder="password"
                    label="Password"
                    type="password"
                    id="password"
                  />
                  {errors.password ? (
                    <FormErrorMessage>{errors.password}</FormErrorMessage>
                  ) : null}
                </FormControl>
              )}
            </Field>
          </Box>

          <Button mt={4} type="submit" colorScheme="teal">
            Login
          </Button>
        </Form>
      </Formik>
    </Wrapper>
  );
};

const mapStateToProps = (state) => {
  return {
    errors: state.errors.session,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    register: (userData) => dispatch(register(userData)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterForm);
