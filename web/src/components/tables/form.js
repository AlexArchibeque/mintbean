import React, { useState } from "react";
import { connect } from "react-redux";
import {
  Box,
  Input,
  FormControl,
  FormLabel,
  Button,
  Radio,
  RadioGroup,
  Stack,
} from "@chakra-ui/react";
import { Formik, Form, Field } from "formik";
import Blackjack from "../game/blackjack";

const TableForm = (props) => {
  let errors = { title: "", decks: "" };
  const [value, setValue] = useState(1);
  const [gameStart, setgameStart] = useState(false);
  const [gameInfo, setGameInfo] = useState({});
  let body = null;

  gameStart
    ? (body = <Blackjack info={gameInfo} />)
    : (body = (
        <Formik
          initialValues={{ decks: "", title: "" }}
          onSubmit={async (values) => {
            values.decks = value;
            await setGameInfo(values);
            await setgameStart(true);
          }}
        >
          <Form>
            <Box mt={4}>
              <Field name="title">
                {({ field }) => (
                  <FormControl isInvalid={errors.title}>
                    <FormLabel htmlFor="title">Table Title</FormLabel>
                    <Input
                      {...field}
                      name="title"
                      placeholder="title"
                      label="title"
                      type="title"
                      id="title"
                      color="white"
                      bg="black"
                    />
                  </FormControl>
                )}
              </Field>
            </Box>

            <Box mt={8}>
              <FormLabel htmlFor="decks">Table decks</FormLabel>
              <RadioGroup onChange={setValue} value={value} color="white">
                <Stack direction="row">
                  <Radio value="1">One Deck</Radio>
                  <Radio value="3">Three Decks</Radio>
                  <Radio value="5">Five Decks</Radio>
                </Stack>
              </RadioGroup>
            </Box>

            <Button mt={4} type="submit" colorScheme="teal">
              Create Table
            </Button>
          </Form>
        </Formik>
      ));

  return (
    <Box w="1200px" h="600px" mt={20} bg="slategray" p={10}>
      {" "}
      {body}{" "}
    </Box>
  );
};

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(TableForm);
