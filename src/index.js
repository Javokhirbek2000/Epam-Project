import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import axios from "axios";
import { BASE_URL } from "./config";

axios.defaults.baseURL = BASE_URL;

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
