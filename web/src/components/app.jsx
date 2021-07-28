import React from "react";
import { Switch, Route } from "react-router-dom";

import HomePage from "./homepage/home";
import NavBar from "./nav/navbar";

const App = () => {
  return (
    <>
      <NavBar />
      <Switch>
        <Route exact path="/" component={HomePage} />
      </Switch>
    </>
  );
};

export default App;
