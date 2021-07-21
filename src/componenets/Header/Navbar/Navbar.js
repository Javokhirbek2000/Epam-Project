import React from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.scss";

export default function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-light shadow-sm">
                <div className="container">
                    <Link className="navbar-brand" to="/"><img src="https://icons.iconarchive.com/icons/alecive/flatwoken/256/Apps-Player-Video-icon.png" /></Link>
                    <div>
                        <button className="btn btn-primary me-2">Sign In</button>
                        <button className="btn btn-outline-primary">Sign Up</button>
                    </div>
                </div>
            </nav>
        </div>
    )
}