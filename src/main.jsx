import React from "react";
import ReactDOM from "react-dom/client";
import App from "./root/App"
import "../src/Styles/main.css"
import { Provider } from "react-redux";
import { store } from "../src/Redux/App/store"
ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
