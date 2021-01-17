import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { ApolloProvider } from "@apollo/client";
import ReactDOM from "react-dom";
import client from "./apollo";
import ToDoContainer from "./containers/ToDoContainer";
import "./index.scss";

const App = () => (
  <main className="app">
    <ToDoContainer />
  </main>
);

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);

if (module.hot) module.hot.accept();
