import { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import * as MoviesAPI from '../MoviesAPI/MoviesAPI';
import { BASE_IMAGES_URL, DEFAULT_IMG } from "../../components/MoviesAPI/MoviesAPI";
import { BoxCast, BoxCatsItem, CatsImage, Text } from "./Cast.styled";
import { LoadSpin } from "components/LoadSpin/LoadSpin";

export const Cast = () => {
    const {movieId} = useParams();
    const [moveiesCredits, setMoveiesCredits] = useState([]);
    const isLoading = useRef(false);

    useEffect(() => {
        isLoading.current = true;
        MoviesAPI.getMoviesCredits(movieId).then(results => {
            setMoveiesCredits(results.cast);
        }).then(() =>{
            isLoading.current = false;
        }).catch(error => {
            console.log(error);
            isLoading.current = false;
        })
    }, [movieId])

    if(!isLoading.current) {
        return <BoxCast>
        {moveiesCredits.map(({profile_path, name, character, cast_id}) => {
            let urlImg = profile_path ? `${BASE_IMAGES_URL}${profile_path}` : DEFAULT_IMG;
            return(
                <BoxCatsItem key={cast_id}>
                    <CatsImage src={urlImg} loading='lazy'/>
                    <Text>{name}</Text>
                    <Text>Character: {character}</Text>
                </BoxCatsItem>
            )
        })}
    </BoxCast>
    } else {
        <LoadSpin/>
    }
}