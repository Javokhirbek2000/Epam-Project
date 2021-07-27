import React from "react";
import { Link } from "react-router-dom";
import LikeButton from "../helpers/LikeButton";
import RecommendButton from "../helpers/RecommendButton";

import "./Card.scss";

export default function Card({ name, image, genres, id }) {
  return (
    <div className="card">
      <LikeButton show={{ name, image, genres, id }} className="like-button" />
      <RecommendButton id={id} className="recommend-button" />

      <img
        src={
          image !== null
            ? image.medium
            : "https://t3.ftcdn.net/jpg/00/36/94/26/240_F_36942622_9SUXpSuE5JlfxLFKB1jHu5Z07eVIWQ2W.jpg"
        }
        className="card-img-top w-100"
        style={{ objectFit: "cover" }}
        alt={name}
        height={"450px"}
      />
      <Link
        to={`/movie/${id}`}
        className="card-body d-block text-decoration-none text-dark">
        <h5 className="card-title">{name}</h5>
        {genres.map((genre, index) => (
          <span key={index} className="badge bg-secondary me-1">
            {genre}
          </span>
        ))}
      </Link>
    </div>
  );
}
