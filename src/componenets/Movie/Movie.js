import axios from 'axios';
import React, { useState } from 'react'
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function Movie() {
    const { id } = useParams();
    const [movie, setMovie] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            const data = await axios.get(`/shows/${id}`);
            setMovie(data.data);
        };
        fetchData();
    }, [id])

    return (
        <div>
            {movie.name}
        </div>
    )
}
