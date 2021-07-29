import React from "react";
import { Provider } from "react-redux";
import { HashRouter } from "react-router-dom";
import { ChakraProvider, ColorModeProvider } from "@chakra-ui/react";
import theme from "./themes/theme";

import App from "./components/app";

const Root = ({ store }) => {
  return (
    <Provider store={store}>
      <HashRouter>
        <ChakraProvider resetCSS theme={theme}>
          <ColorModeProvider
            options={{
              useSystemColorMode: true,
            }}
          >
            <App />
          </ColorModeProvider>
        </ChakraProvider>
      </HashRouter>
    </Provider>
  );
};

export default Root;
