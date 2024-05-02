import React, { useState, useEffect } from "react";
import axios from "axios";
import FavoriteHeart from './FavoriteHeart'; 

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [hoveredMovie, setHoveredMovie] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=b5df024e4db9880b82b528f605bfab5e`);
        setMovies(response.data.results); 
      } catch (error) {
        console.error("Erreur lors de la récupération des données des films :", error);
      }
    };

    fetchMovies();
  }, []);

  const handleMouseEnter = (movie) => {
    setHoveredMovie(movie);
  };

  const handleMouseLeave = () => {
    setHoveredMovie(null);
  };

  return (
    <div className="container">
      <h1 className="text-center text-white">Liste des films</h1>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {movies.map((movie) => (
          <div key={movie.id} className="col-md-2">
            <div className="card bg-transparent text-white" onMouseEnter={() => handleMouseEnter(movie)} onMouseLeave={handleMouseLeave}>
              {hoveredMovie && hoveredMovie.id === movie.id && (
                <div
                  style={{
                    position: 'absolute',
                    color: 'white',
                    zIndex: '10',
                    padding: '10px',
                    borderColor: 'white',
                  }}
                >
                  <p className="card-text">{movie.overview}</p>
                </div>
              )}
              <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} className="card-img-top" alt={movie.title} />
              <div className="card-body">
                <h5 className="card-title">{movie.title}</h5>
                <div className="favorite-heart">
                  <FavoriteHeart movieId={movie.id} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieList;
