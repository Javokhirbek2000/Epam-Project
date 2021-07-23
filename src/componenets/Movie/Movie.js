import axios from 'axios';
import React, { useState } from 'react'
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Spinner from '../helpers/Spinner';
import "./Movie.scss";


export default function Movie() {
    const { id } = useParams();
    const [movie, setMovie] = useState({});
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const data = await axios.get(`/shows/${id}`);
            setMovie(data.data);
            const images = await axios.get(`/shows/${id}/images`);
            setImages(images.data);
            setLoading(false);
        };
        fetchData();
    }, [id])


    if (loading) return <Spinner />;

    const url = images.filter(image => image.type === "background")[0]?.resolutions?.original.url;
    const height = images.filter(image => image.type === "background")[0]?.resolutions?.original.height;

    return (
        <>
            <div className="container-fluid movie-text mt-3 d-flex flex-column justify-content-center" style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0,0, 0, 0.7)),url('${url}')`,
                height: `${height}px`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover"
            }}>
                <div className="row">
                    <div className="col-12 text-center">
                        <h1 className="text-light">{movie.name}</h1>
                    </div>
                </div>
                <div className="row text-secondary">
                    <div className="col-12 text-center my-2 fs-5" dangerouslySetInnerHTML={{ __html: movie.summary }}></div>
                </div>
                <div className="row text-light">
                    <div className="col-4 fs-5">
                        Language: <span className="badge bg-dark">{movie.language}</span>
                    </div>
                    <div className="col-4  fs-5">
                        Status: <span className="badge bg-dark">{movie.status}</span>
                    </div>
                    <div className="col-4  fs-5">
                        Premiered: <span className="badge bg-dark">{movie.premiered}</span>
                    </div>
                </div>
            </div>
            <div className="container-fluid text-center my-3">
                {images.filter(image => image.type === "poster").map(image => {
                    return <img className="d-inline-block m-2" src={`${image.resolutions?.medium?.url}`} />
                })}
            </div>
            <div className="container-fluid" style={{ backgroundColor: "#222", color: "white" }}>
                <div className="row">
                    <div className="col-4 my-2">
                        <i className="bi bi-alarm fs-5"></i>
                        <span className="fw-bolder fs-5 mx-2">{` ${movie?.schedule?.days}  ${movie?.schedule?.time} `}</span>
                    </div>
                    <div className="col-4">
                        <i class="bi bi-award fs-5"></i>
                        <span className="fw-bolder fs-5 mx-2">{movie?.rating?.average}</span>
                    </div>
                    <div className="col-4">
                        <button className="btn btn-outline-light">
                            <a className="text-decoration-none text-light" target="_blank" href={movie.officialSite}>Official Site</a>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}
