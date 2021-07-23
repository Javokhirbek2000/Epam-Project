import React from "react";
import { Link } from "react-router-dom";

export default function Card({ name, image, genres, id }) {
  return (
    <Link
      to={`/movie/${id}`}
      className="card w-100 d-block text-decoration-none text-dark">
      <img
        src={
          image !== null
            ? image.medium
            : "https://t3.ftcdn.net/jpg/00/36/94/26/240_F_36942622_9SUXpSuE5JlfxLFKB1jHu5Z07eVIWQ2W.jpg"
        }
        className="card-img-top"
        style={{ objectFit: "cover" }}
        alt={name}
        height={"450px"}
      />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        {genres.map((genre, index) => (
          <span key={index} className="badge bg-secondary me-1">
            {genre}
          </span>
        ))}
      </div>
    </Link>
  );
}
