import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./Styles/main.css"
import { Provider} from "react-redux"
import { store } from "./Redux/App/store.js";
ReactDOM.createRoot(document.getElementById("root")).render(
<Provider store={store}>
<App />
</Provider>

);
