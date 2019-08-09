import { hot } from "react-hot-loader";
import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import store from "./store/Store.js";
import { Provider } from "react-redux";
import getPokemons from "./actions/GetPokemons";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("app")
);

const renderApp = () => {
  ReactDOM.hydrate(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById("app")
  );
};

if (module.hot) {
  module.hot.accept("./components/App", () => renderApp());
}
