import React from "react";

function Carousel({ movies }) {
  console.log("carousel");
  return (
    <div
      id="carouselExampleCaptions"
      className="carousel slide"
      data-bs-ride="carousel">
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1"
          aria-label="Slide 2"></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="2"
          aria-label="Slide 3"></button>
      </div>
      <div className="carousel-inner">
        {movies?.map((movie, i) => (
          <div
            key={movie.id}
            className={`carousel-item h-100 ${i === 0 ? "active" : ""}`}>
            <img
              style={{ objectFit: "cover" }}
              src={movie.image.original}
              className="d-block w-100 h-100"
              alt={`${movie.name}`}
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>{movie.name} </h5>
              <p>{`${movie.schedule.time} | ${movie.schedule.days}`}</p>
            </div>
          </div>
        ))}
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default React.memo(Carousel);
