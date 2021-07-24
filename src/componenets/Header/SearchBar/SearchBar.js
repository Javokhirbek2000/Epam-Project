import React, { useState } from 'react'
import "./searchBar.scss";
import { useHistory } from "react-router-dom";

export default function SearchBar() {
    const [query, setQuery] = useState("");
    const history = useHistory();

    function handleSubmit(ev) {
        ev.preventDefault();
        history.push(`/search/${query}`)
        setQuery("");
    }
    return (
        <div className="container-fluid search-bar mb-4 d-flex align-items-center justify-content-center">
            <form onSubmit={handleSubmit} className="w-75">
                <div className="input-group">
                    <input type="search" id="form1" className="form-control search-input" onChange={(ev) => setQuery(ev.target.value)} placeholder="Search a movie..." />
                    <button className="input-group-append btn btn-primary" type="submit"><i className="bi bi-search"></i></button>
                </div>
            </form>
        </div>
    )
}
