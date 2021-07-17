import React from 'react';
import Card from "../Card";
import Carousel from './Carousel/Carousel';
import { useEffect, useState, useCallback } from 'react';

export default function Body() {
    const [api, setApi] = useState([]);
    const [carouselMovies, setCarouselMovies] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        let endpoint = `https://api.tvmaze.com/shows?page=${currentPage}`
        fetch(endpoint)
            .then(res => res.json())
            .then(res => {
                const data = res;

                setApi(data.splice(0, 5));
            });

    }, [api, currentPage]);

    useCallback(() => {
        setCarouselMovies(api.splice(0, 3))
    }, [carouselMovies]);
    return (
        <div>
            <Carousel movies={carouselMovies} />
            {api.map((film) => {
                return <Card movie={film} key={film.id} />
            })}
            <button onClick={() => setCurrentPage((prev) => prev + 1)}>Load more</button>
        </div>
    )
}
