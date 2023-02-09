import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { List, Item, LinkFilm } from "./FilmsList.styled";
import * as MoviesAPI from '../MoviesAPI//MoviesAPI'

export const FilmSearchList = () => {
    const [searchParams] = useSearchParams();
    const name = searchParams.get("name");
    const [listFilms, setListFilms] = useState([])

    useEffect(() => {
        if(!name) {
            return;
        }
        MoviesAPI.getSearchMovies(name)
        .then(data => {
            if(data.results.length === 0) {
                window.alert('Oops...Found nothing.')
            }
            setListFilms(data.results);
        })
    }, [name])
    return(
        <List>
            {listFilms.map(film => {
                return(
                    <Item key={film.id}>
                        <LinkFilm to={`${film.id}`}>{film.name}</LinkFilm>
                    </Item>
                )
            })}
        </List>
    )
}