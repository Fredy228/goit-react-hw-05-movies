import { TrandingFilmList } from 'components/TrandingFilms/TrandingFilmsList';
import { useEffect, useState } from 'react';
import * as MoviesAPI from '../components/MoviesAPI/MoviesAPI'

export const Home = () => {
    const [listFilms, setListFilms] = useState([]);

    useEffect(() => {
        MoviesAPI.getTradingMovies().then(results => setListFilms(results.results));
    }, [])
    
    return (
        <TrandingFilmList listFilms={listFilms}/>
    )
};