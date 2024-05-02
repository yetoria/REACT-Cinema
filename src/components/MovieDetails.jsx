import React from 'react';

const MovieDetails = ({ movie }) => {
  if (!movie) {
    return <div>Sélectionnez un film pour voir les détails.</div>;
  }

  return (
    <div>
      <h2>{movie.title} ({movie.releaseDate})</h2>
      <p><strong>Genre:</strong> {movie.genre}</p>
      <p><strong>Synopsis:</strong> {movie.synopsis}</p>
      <div>
        <strong>Acteurs:</strong>
        <ul>
          {movie.actors.map((actor, index) => (
            <li key={index}>{actor}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MovieDetails;