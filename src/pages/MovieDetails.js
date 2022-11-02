import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";

const API_KEY = "b2ced4ea";
const API_BASE_URL = `http://www.omdbapi.com`;

export default function MovieDetails() {
    const [isLoading, setIsLoading] = useState(true)
    const [movieDetails, setMovieDetails] = useState(null)

    const { id } = useParams();
    useEffect(() => {
        const fetchMoviesDetails = async () => {
            const response = await axios.get(`${API_BASE_URL}/?i=${id}&apiKey=${API_KEY}`
            );
            setMovieDetails(response.data)
            setIsLoading(false)
        }
        fetchMoviesDetails()
        console.log(movieDetails)
    }, [id])
    if (isLoading) {
        return <div>Loading...</div>
    } else if (movieDetails) {
        return (
            <div className="movieDetails">
                <img src={movieDetails.Poster} alt = {movieDetails.Title} />
                <p className = "movieDetailsElements">
                Title: <span> {movieDetails.Title} </span>
                </p>
                <p>
                Actors: <span> {movieDetails.Actors} </span>
                </p>
                <p className = "movieDetailsElements">
                Awards: <span>{movieDetails.Awards} </span>
                </p>
                <p className = "movieDetailsElements">
                Director: <span>{movieDetails.Director} </span>
                </p>
                <p className = "movieDetailsElements">
                Rated: <span>{movieDetails.Rated} </span>
                </p>
                <p>
                Imdb Rating: <span>{movieDetails.imdbRating} </span>
                </p>
                
                <p className = "movieDetailsElements">
                BoxOffice: <span>{movieDetails.BoxOffice} </span>
                </p>
            </div>
        );
    } else {
        return null;
    }

}
