import * as MoviesAPI from '../components/MoviesAPI/MoviesAPI';

export const Home = () => {
    MoviesAPI.getTradingMovies()
    return (
        'Hello'
    )
};