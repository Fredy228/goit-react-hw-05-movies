import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as MoviesAPI from '../MoviesAPI/MoviesAPI';
import { ItemReviews, ListReviews, TextReviews, TitleReviews } from "./Reviews.styled";

export const Reviews = () => {
    const {movieId} = useParams();
    const [moviesReviews, setMoviesReviews] = useState([]);

    useEffect(() => {
        MoviesAPI.getMoviesReviews(movieId).then(data => {
            setMoviesReviews(data.results);
        })
    }, [movieId])
    return(
        <ListReviews>
            {moviesReviews.map(({author, content, id}) => {
                return(
                    <ItemReviews key={id}>
                        <TitleReviews>Author: {author}</TitleReviews>
                        <TextReviews>{content}</TextReviews>
                    </ItemReviews>
                )
            })}
        </ListReviews>
    )
}