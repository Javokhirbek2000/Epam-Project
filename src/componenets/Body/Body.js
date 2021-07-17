import React from "react";
import Carousel from "./Carousel/Carousel";
import { useEffect, useState } from "react";
import axios from "axios";
import ShowsGrid from "../ShowsGrid/ShowsGrid";

export default function Body() {
  const [shows, setShows] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalItems, setTotalItems] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage]);

  async function fetchData() {
    setLoading(true);
    const data = await axios.get("/shows", { params: { page: currentPage } });
    setShows([...shows, ...data.data]);
    setTotalItems(shows.length + data.data.length);
    setLoading(false);
  }

  function fetchMore() {
    setCurrentPage(currentPage + 1);
  }

  return (
    <div>
      <Carousel movies={shows.slice(0, 3)} />
      <ShowsGrid
        loading={loading}
        shows={shows}
        totalItems={totalItems}
        fetchMore={fetchMore}
      />
    </div>
  );
}
