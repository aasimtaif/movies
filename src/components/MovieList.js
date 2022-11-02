import React from "react";
import MovieCard from "./MovieCard.js";
import "../styles/movieList.css";

export default function MovieList({ movieList, isLoading }) {
 
  if (isLoading) {
    return <p>Loading movies please wait...</p>;
  }
   else {
    console.log(typeof movieList);

    return (
      <div className="movieList">
        {movieList?.map((movie, index) => {
          return <MovieCard key={index} movie={movie} />;
        })}
      </div>
    );
  }
}
