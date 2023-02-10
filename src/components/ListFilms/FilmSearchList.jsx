import { useEffect, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { List, Item, LinkFilm } from "./FilmsList.styled";
import * as MoviesAPI from '../MoviesAPI//MoviesAPI';
import { LoadSpin } from "components/LoadSpin/LoadSpin";

export const FilmSearchList = () => {
    const [searchParams] = useSearchParams();
    const name = searchParams.get("name");
    const [listFilms, setListFilms] = useState([]);
    const isLoading = useRef(false);

    useEffect(() => {
        if(!name) {
            return;
        }
        isLoading.current = true;
        MoviesAPI.getSearchMovies(name)
        .then(data => {
            if(data.results.length === 0) {
                window.alert('Oops...Found nothing.');
                isLoading.current = false;
            }
            setListFilms(data.results);
        })
        .then(() => {
            isLoading.current = false;
        })
        .catch(error => {
            console.log(error)
            isLoading.current = false;
        });
    }, [name])
    if(!isLoading.current) {
        return <List>
            {listFilms.map(({id, title}) => {
                return(
                    <Item key={id}>
                        <LinkFilm to={`${id}`}>{title}</LinkFilm>
                    </Item>
                )
            })}
        </List>
    } else {
       return <LoadSpin/>
    }
}