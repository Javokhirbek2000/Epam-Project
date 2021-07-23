import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import axios from "axios";
import { BASE_URL } from "./config";
import { Auth0Provider } from " @auth0/auth0-react";

axios.defaults.baseURL = BASE_URL;

ReactDOM.render(
  <Auth0Provider
    domain="dev-8hid7zkk.us.auth0.com"
    clientId="plxDLxLi3SkLgfA4Vu0FCGTDxiWaQ2b4"
    redirectUri={"https://localhost:3000/"}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Auth0Provider>
  ,
  document.getElementById("root")
);
