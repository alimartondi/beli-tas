import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import functionStore from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";

const x = functionStore();
const store = x.store;
const persistor = x.persistor;

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={<div>Loading</div>} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
