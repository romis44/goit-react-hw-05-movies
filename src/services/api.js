import axios from 'axios';

// const API_KEY = 'ca6651118169730896bcd7a53aacb58e';
const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = 'a2700da0d8f509f67de6165a96b841be';

export const getTrendingMovie = async () => {
  const response = await axios.get(
    `${BASE_URL}/trending/movie/day?api_key=${API_KEY}`
  );
  return response.data;
};

export const getSearchMovie = async query => {
  const response = await axios.get(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}&language=en-US&page=1&include_adult=false`
  );
  return response.data.results;
};

export const getMovieDetails = async id => {
  const response = await axios.get(
    `${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=en-US&`
  );
  return response.data;
};

export const getMovieCredits = async movieId => {
  const response = await axios.get(
    `${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`
  );
  return response.data.cast;
};

export const getMovieReviews = async movieId => {
  const response = await axios.get(
    `${BASE_URL}/movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`
  );
  return response.data.results;
};
