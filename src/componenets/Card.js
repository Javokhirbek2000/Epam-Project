import React from "react";
import { Link } from "react-router-dom";

export default function Card({ name, image, genres, id }) {
    return (
        <Link to={`/movie/${id}`} className="card w-100 d-block text-decoration-none text-dark">
            <img src={image?.medium} className="card-img-top" alt={name} height={"450px"} />
            <div className="card-body">
                <h5 className="card-title">
                    {name}
                </h5>
                {genres.map(genre => (
                    <span class="badge bg-secondary me-1">{genre}</span>
                ))}
            </div>
        </Link>
    );
}
