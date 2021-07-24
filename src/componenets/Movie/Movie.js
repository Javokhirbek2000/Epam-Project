import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import LikeButton from "../helpers/LikeButton";
import RecommendButton from "../helpers/RecommendButton";
import Spinner from "../helpers/Spinner";
import "./Movie.scss";

export default function Movie() {
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  const [images, setImages] = useState([]);
  const [actors, setActors] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const data = await axios.get(`/shows/${id}`);
      setMovie(data.data);
      const images = await axios.get(`/shows/${id}/images`);
      setImages(images.data);
      const actors = await axios.get(`/shows/${id}/cast`);
      setActors(actors.data);
      setLoading(false);
    };
    fetchData();
  }, [id]);

  if (loading) return <Spinner />;

  const url = images.filter((image) => image.type === "background")[0]
    ?.resolutions?.original.url;

  return (
    <>
      <div
        className="movie-text d-flex flex-column justify-content-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0,0, 0, 0.7)),url('${url}')`,
        }}>
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <h1 className="text-light display-2">{movie.name}</h1>
            </div>
          </div>
          <div className="row text-secondary">
            <div
              className="col-12 text-center text-white my-2 fs-5"
              dangerouslySetInnerHTML={{ __html: movie.summary }}></div>
          </div>
          <div className="d-flex flex-wrap align-content-center justify-content-evenly text-light">
            <div className="fs-5">
              Language:{" "}
              <span className="badge bg-light text-dark">{movie.language}</span>
            </div>
            <div className="fs-5">
              Status:{" "}
              <span className="badge bg-light text-dark">{movie.status}</span>
            </div>
            <div className="fs-5">
              Premiered:{" "}
              <span className="badge bg-light text-dark">
                {movie.premiered}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="container d-flex justify-content-evenly fs-4">
        <LikeButton show={movie} className="like-btn" />
        <RecommendButton id={movie.id} className="recommend-btn" />
      </div>
      <div className="container-fluid text-center my-3">
        <h1 className="text-center">Images</h1>
        {images
          .filter((image) => image.type === "poster")
          .map((image, i) => (
            <img
              key={i}
              className="d-inline-block m-2"
              alt={movie.name}
              src={`${image.resolutions?.medium?.url}`}
            />
          ))}
      </div>
      <div className="container-fluid text-center my-3">
        <h1 className="text-center">Actors</h1>
        <div className="d-flex justify-content-evenly flex-wrap">
          {actors.map((actor, index) => {
            return <div className="mx-3" key={index}>
              <div><img src={actor.person.image.medium} alt={actor.person.name} /></div>
              <p><span className="badge bg-secondary">{actor.character.name}</span></p>
              <h4>{actor.person.name}</h4>
              <p>{actor.person.birthday}</p>
            </div>
          })}
        </div>
      </div>
      <div className="bg-dark">
        <div className="container">
          <div className="d-flex py-3 align-items-center justify-content-evenly flex-wrap">
            <div className="text-white">
              <i className="bi bi-alarm fs-5"></i>
              <span className="fw-bolder fs-5 mx-2">{` ${movie?.schedule?.days}  ${movie?.schedule?.time} `}</span>
            </div>
            <div className="text-white">
              <i className="bi bi-award fs-5"></i>
              <span className="fw-bolder fs-5 mx-2">
                {movie?.rating?.average}
              </span>
            </div>
            <div>
              <a
                className="btn btn-outline-light text-decoration-none"
                target="_blank"
                href={movie.officialSite}
                rel="noreferrer">
                Official Site
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
