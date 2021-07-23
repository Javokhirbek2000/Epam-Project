import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import ShowsGrid from "../ShowsGrid/ShowsGrid";
import SearchBar from "../Header/SearchBar/SearchBar";

export default function Body() {
    const [shows, setShows] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const [totalItems, setTotalItems] = useState(0);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetchData();
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
        <>
            <SearchBar />
            <h1 className="text-center mb-3">Popular Movies</h1>
            <ShowsGrid
                loading={loading}
                shows={shows}
                totalItems={totalItems}
                fetchMore={fetchMore}
            />
        </>
    );
}