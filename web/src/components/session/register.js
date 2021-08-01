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

const RegisterForm = (props) => {
  let error = null;

  return (
    <Wrapper variant="small">
      <Formik
        initialValues={{ username: "", password: "" }}
        onSubmit={async (values) => {
          console.log(values);
        }}
      >
        <Form>
          <Field name="username">
            {({ field, form }) => (
              <FormControl isInvalid={form.errors.name}>
                <FormLabel htmlFor="username">Username</FormLabel>
                <Input
                  {...field}
                  name="username"
                  placeholder="username"
                  label="username"
                  type="username"
                  id="username"
                />
                {error ? <FormErrorMessage>{error}</FormErrorMessage> : null}
              </FormControl>
            )}
          </Field>

          <Box mt={4}>
            <Field name="password">
              {({ field, form }) => (
                <FormControl isInvalid={form.errors.name}>
                  <FormLabel htmlFor="password">Password</FormLabel>
                  <Input
                    {...field}
                    name="password"
                    placeholder="password"
                    label="Password"
                    type="password"
                    id="password"
                  />
                  {error ? <FormErrorMessage>{error}</FormErrorMessage> : null}
                </FormControl>
              )}
            </Field>
          </Box>

          <Button mt={4} type="submit" colorScheme="teal">
            Register
          </Button>
        </Form>
      </Formik>
    </Wrapper>
  );
};

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterForm);
