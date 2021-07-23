import React from "react";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

import "./Header.scss";
import Spinner from "../helpers/Spinner";

export default function Header() {
  const { user, loginWithRedirect, isAuthenticated, isLoading, logout } =
    useAuth0();

  console.log(user);

  return (
    <div>
      <nav className="navbar navbar-light shadow-sm">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img
              src="https://icons.iconarchive.com/icons/alecive/flatwoken/256/Apps-Player-Video-icon.png"
              alt="Poster"
            />
          </Link>
          <div className="text-dark fs-1 fw-bolder">Movies</div>
          <div>
            {isLoading ? (
              <Spinner />
            ) : isAuthenticated ? (
              <>
                <img
                  width="50"
                  height="50"
                  className="rounded-circle me-2"
                  src={user.picture}
                  alt={user.given_name}
                />
                <button
                  className="btn btn-outline-primary"
                  onClick={() => logout()}>
                  Sign Out
                </button>
              </>
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
