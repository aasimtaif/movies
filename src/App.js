import { Navbar } from "./components";
import "./App.css";
import { useState } from "react";
import axios from "axios";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Movie from "./pages/Movie";
import MovieDetails from "./pages/MovieDetails";

const API_BASE_URL = "http://www.omdbapi.com"
const API_KEY = "b2ced4ea"

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const search = async (e) => {
    if (e.code === "Enter") {
      setIsLoading(true);
      const response = await axios.get(
        `${API_BASE_URL}/?s=${inputValue}&apiKey=${API_KEY}`
      );
      const movies = response.data.Search; //search is a key of response object, holding array of resultant movies as an array
      console.log(movies);
      setMovies(movies);
      console.log(movies)
      setIsLoading(false);
    }
  };

  return (
    <div className="main">
      <Navbar
        search={search}
        setInputValue={setInputValue}
        inputValue={inputValue}
      />
      <Router>
        <Routes>
          <Route path="/movie-list" element={<Movie movieList={movies} isLoading={isLoading} />} />
        </Routes>
        <Routes>
          <Route path="/movie-list/:id" element={<MovieDetails  />} />
        </Routes>
        <Routes>
          <Route path="/about" element={<About />} />
        </Routes>
        <Routes>
          <Route path="/" element={<Home movieList={movies} isLoading={isLoading}/>} />
        </Routes>
      </Router>

    </div>
  );
}
export default App;
