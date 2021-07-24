import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import axios from "axios";
import { BASE_URL, CLIENT_ID, DOMAIN } from "./config";
import { Auth0Provider } from "@auth0/auth0-react";

axios.defaults.baseURL = BASE_URL;

ReactDOM.render(
  <Auth0Provider
    domain={DOMAIN}
    clientId={CLIENT_ID}
    redirectUri={window.location.origin}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Auth0Provider>
  ,
  document.getElementById("root")
);
