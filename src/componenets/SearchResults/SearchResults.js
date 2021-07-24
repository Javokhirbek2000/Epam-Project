import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import SearchBar from '../Header/SearchBar/SearchBar';
import Spinner from "../helpers/Spinner";
import ShowsGrid from '../ShowsGrid/ShowsGrid';

export default function SearchResults() {
    const { query } = useParams();
    const [shows, setShows] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {

        const fetchData = async () => {
            setIsLoading(true);
            const data = await axios.get("/search/shows", { params: { q: query } });
            setShows(data.data);
            setIsLoading(false);
        }

        fetchData();
    }, [query]);

    if (isLoading) return <Spinner className="mt-5" />;

    return (
        <>
            <SearchBar />
            <h1 className="text-center mb-3">Search Results for {query}</h1>
            <ShowsGrid hasLoadMoreButton={false} shows={shows.map(show => show.show)} />
        </>
    );
};



