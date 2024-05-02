import React, { useState, useEffect } from 'react';

const FavoriteHeart = ({ movieId }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setIsFavorite(favorites.includes(movieId));
  }, [movieId]);

  const toggleFavorite = () => {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    if (isFavorite) {
      const filteredFavorites = favorites.filter(id => id !== movieId);
      localStorage.setItem('favorites', JSON.stringify(filteredFavorites));
      setIsFavorite(false);
    } else {
      localStorage.setItem('favorites', JSON.stringify([...favorites, movieId]));
      setIsFavorite(true);
    }
  };

  return (
    <button onClick={toggleFavorite}>
      {isFavorite ? '❤️' : '🤍'}
    </button>
  );
};

export default FavoriteHeart;