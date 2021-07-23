import React, { useState } from "react";
import { ITEMS_PER_PAGE } from "../../config";
import Card from "../Card";
import Spinner from "../helpers/Spinner";

export default function ShowsGrid({ shows, totalItems, fetchMore, loading, hasLoadMoreButton = true }) {
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
            <Card name={film.name} image={film.image} genres={film.genres} id={film.id} />
          </div>
        ))}
      </div>

      {
        hasLoadMoreButton && loading ? <Spinner /> : <button className="btn btn-primary btn-lg" onClick={handleLoadMore}>
          Load More
        </button>
      }
    </div>
  );
}
