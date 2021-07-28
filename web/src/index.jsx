import React from "react";
import ReactDOM from "react-dom";
import Root from "./root";
import configureStore from "./store/store";

document.addEventListener("DOMContentLoaded", () => {
  const rootEl = document.getElementById("root");

  let preLoadedState = undefined;

  // add Authentication

  const store = configureStore(preLoadedState);
  ReactDOM.render(<Root store={store} />, rootEl);

  // For testing purposes
  window.getState = store.getState;
});
