import React from "react";

export default function Card({ name, image, id }) {
  return (
    <div className="card" style={{ width: "300px" }}>
      {/* <img src={image?.medium} className="card-img-top" alt={name} /> */}
      <div className="card-body">
        <h5 className="card-title">
          <mark>{id}</mark> {name}
        </h5>
      </div>
    </div>
  );
}
