import React from "react";
import { createRoot } from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const client = new ApolloClient({
  uri: "http://countries.trevorblades.com",
  cache: new InMemoryCache(),
});
const container = document.getElementById("app");
const root = createRoot(container!);
root.render(
  <React.StrictMode>
    <ChakraProvider cssVarsRoot="#app">
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </ChakraProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
