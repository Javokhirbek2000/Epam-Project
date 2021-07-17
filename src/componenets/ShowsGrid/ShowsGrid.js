import React, { useState } from "react";
import { ITEMS_PER_PAGE } from "../../config";
import Card from "../Card";

export default function ShowsGrid({ shows, totalItems, fetchMore, loading }) {
  const [innerPage, setInnerPage] = useState(1);
  function handleLoadMore() {
    if (innerPage * ITEMS_PER_PAGE >= totalItems) {
      fetchMore();
    }
    setInnerPage(innerPage + 1);
  }
  return (
    <div className="container">
      <div className="row">
        {shows.slice(0, ITEMS_PER_PAGE * innerPage).map((film, i) => (
          <div className="col-lg-4 col-md-6 col-sm-12 mb-4" key={film.id}>
            <Card name={film.name} image={film.image} id={i + 1} />
          </div>
        ))}
      </div>
      <button className="btn btn-primary" onClick={handleLoadMore}>
        {loading ? "Loading..." : "Load more"}
      </button>
    </div>
  );
}
