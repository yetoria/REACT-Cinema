import axios from 'axios';
import React from 'react';

const getPopularMovies = async () => {
  try {
    const response = await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=b5df024e4db9880b82b528f605bfab5e');
    return response.data.results;
  } catch (error) {
    console.error('Erreur lors de la récupération des films populaires:', error);
    return [];
  }
};

export { getPopularMovies };