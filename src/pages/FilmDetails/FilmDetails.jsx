import { Outlet, useParams } from "react-router-dom";
import { Main } from "./FilmDetails.styled";
import * as MoviesAPI from '../../components/MoviesAPI/MoviesAPI';
import { useEffect } from "react";


export const FilmDetails = () => {
    // const [filmInfo, setFilmInfo] = useState({});
    const {movieId} = useParams();

    useEffect(() => {
        MoviesAPI.getMoviesDetails(movieId);
    }, [movieId])

    return(
        <Main>


            <Outlet/>
        </Main>
    )
};