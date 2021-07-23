import React from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.scss";

export default function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-light shadow-sm">
                <div className="container">
                    <Link className="navbar-brand" to="/"><img src="https://icons.iconarchive.com/icons/alecive/flatwoken/256/Apps-Player-Video-icon.png" alt="Poster image" /></Link>
                    <div className="text-dark fs-1 fw-bolder">
                        Movies
                    </div>
                    <div>
                        <button className="btn btn-primary me-2" onClick={() => alert("Logging out!")}>Sign Out</button>
                    </div>
                </div>
            </nav>
        </div>
    )
}