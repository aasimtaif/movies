import React from "react";
import {Link} from 'react-router-dom'
import "../styles/movieCard.css";


export default function MovieCard({ movie }) {
    return (
    <Link to = {`/movie-list/${movie.imdbID}`}>
        <div className="movieCard">
            <img src={movie.Poster} alt={movie.Title} />
            <p>{movie.Title}</p>
            <p>{movie.Year}</p>
        </div>
        </Link>
    );
}
