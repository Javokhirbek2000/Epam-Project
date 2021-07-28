import React from "react";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

import "./Header.scss";
import Spinner from "../helpers/Spinner";

export default function Header() {
  const { user, loginWithRedirect, isAuthenticated, isLoading, logout } =
    useAuth0();

  return (
    <div>
      <nav className="navbar navbar-light shadow-sm">
        <div className="container d-flex justify-content-space-between flex-wrap">
          <Link className="navbar-brand" to="/">
            <img
              src="https://icons.iconarchive.com/icons/alecive/flatwoken/256/Apps-Player-Video-icon.png"
              alt="Poster"
            />
          </Link>
          <div className="text-dark fs-1 fw-bolder m-auto">Excellent Movies</div>
          <div>
            {isLoading ? (
              <Spinner className="" />
            ) : isAuthenticated ? (
              <div className="m-auto">
                <Link to="/favorites" className="btn btn-primary ml-3 favorite-btn">Favorites</Link>
                <img
                  width="50"
                  height="50"
                  className="rounded-circle mx-2"
                  src={user.picture}
                  alt={user.given_name}
                />
                <button
                  className="btn btn-outline-primary"
                  onClick={() => logout()}>
                  Sign Out
                </button>
              </div>
            ) : (
              <button
                className="btn btn-primary me-2"
                onClick={() => loginWithRedirect()}>
                Log In
              </button>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}
