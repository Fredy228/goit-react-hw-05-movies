import axios from 'axios';

const KEY_API = '1e08b8d990c5fa2af74f683ca643ea53';
const BASE_URL = 'https://api.themoviedb.org/3/';
export const BASE_IMAGES_URL = 'https://image.tmdb.org/t/p/w500';
export const DEFAULT_IMG ="https://i.ibb.co/cLM23Z5/default-card-img.jpg";

export const getTradingMovies = async () => {
    const response = await axios.get(`${BASE_URL}trending/movie/day?api_key=${KEY_API}`);
    return response.data
};

export const getSearchMovies = async (query) => {
    const response = await axios.get(`${BASE_URL}search/movie?api_key=${KEY_API}&query=${query}`);
    console.log(response.data)
    return response.data
};

export const getMoviesDetails = async (movie_id) => {
    const response = await axios.get(`${BASE_URL}movie/${movie_id}?api_key=${KEY_API}`);
    return response.data
}

export const getMoviesCredits = async (movie_id) => {
    const response = await axios.get(`${BASE_URL}movie/${movie_id}/credits?api_key=${KEY_API}`);
    return response.data
}

export const getMoviesReviews = async (movie_id) => {
    const response = await axios.get(`${BASE_URL}movie/${movie_id}/reviews?api_key=${KEY_API}`);
    console.log(response.data);
    return response.data
}

