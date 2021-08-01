import React from "react";
import { Switch, Route } from "react-router-dom";

import HomePage from "./homepage/home";
import NavBar from "./nav/navbar";
import LoginForm from "./session/login";
import RegisterForm from "./session/register";

const App = () => {
  return (
    <>
      <NavBar />
      <Switch>
        <Route exact path="/register" component={RegisterForm} />
        <Route exact path="/login" component={LoginForm} />
        <Route exact path="/" component={HomePage} />
      </Switch>
    </>
  );
};

export default App;
