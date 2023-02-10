import { TrandingFilmList } from 'components/ListFilms/TrandingFilmsList';
import { LoadSpin } from 'components/LoadSpin/LoadSpin';
import { useEffect, useRef, useState } from 'react';
import * as MoviesAPI from '../components/MoviesAPI/MoviesAPI';


const Home = () => {
    const [listFilms, setListFilms] = useState([]);
    const isLoading = useRef(true);

    useEffect(() => {
        isLoading.current = true;
        MoviesAPI.getTradingMovies()
        .then(results => setListFilms(results.results))
        .then(() => {
            isLoading.current = false;
        }).catch(error => {
            console.log(error);
            isLoading.current = false;
        })
    }, [])

    if(!isLoading.current) {
        return <TrandingFilmList listFilms={listFilms}/>
    } else {
        return <LoadSpin/>
    }
};

export default Home;