import React, { useState } from "react";
import axios from "axios";

const NavBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const fetchMovies = async (query) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await axios.get('https://api.themoviedb.org/3/search/movie', {
        params: {
          api_key: 'b5df024e4db9880b82b528f605bfab5e',
          query: query,
        },
      });
      setSearchResults(response.data.results);
    } catch (error) {
      setError('Failed to fetch movies');
      console.error('Error fetching movies:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      fetchMovies(searchQuery);
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light primary-color">
      <a className="navbar-brand title" href="#">
        <img src="../assets/images/logo.jpeg" alt="" />
        DaFlix <i className="fa-solid fa-film"></i>
      </a>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <form className="d-flex my-1 my-lg-0 mx-auto search" onSubmit={handleSearchSubmit}>
          <input
            className="form-control"
            type="search"
            placeholder="Search.."
            aria-label="Search"
            value={searchQuery}
            onChange={handleSearchInputChange}
          />&nbsp; &nbsp;
          <button
            className="btn btn-outline-success search"
            type="submit"
          >
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </form>
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="Favorites nav-link" href="#">
              <i className="fa-solid fa-star"></i><span className="sr-only">(current)</span>
            </a>
          </li>
        </ul>
      </div>

      {/* Search Results */}
      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <ul>
          {searchResults.map((movie) => (
            <li key={movie.id}>{movie.title}</li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default NavBar;