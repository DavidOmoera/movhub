import axios from 'axios';

const API_KEY = 'your_api_key'; // Replace with your TMDB API key
const BASE_URL = 'https://api.themoviedb.org/3';

export const fetchMovies = async (searchTerm: string) => {
  const response = await axios.get(`${BASE_URL}/search/movie`, {
    params: {
      api_key: API_KEY,
      query: searchTerm,
    },
  });
  return response.data.results;
};

export const fetchMovieDetails = async (movieId: number) => {
  const response = await axios.get(`${BASE_URL}/movie/${movieId}`, {
    params: {
      api_key: API_KEY,
    },
  });
  return response.data;
};
