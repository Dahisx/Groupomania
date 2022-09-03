import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import "@fontsource/lato";
import "@fontsource/lato/700.css";
import store from "./store";
import { Provider } from "react-redux";
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';

import App from "./App";

let persistor = persistStore(store);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);
