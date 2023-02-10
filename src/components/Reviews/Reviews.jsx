import { LoadSpin } from "components/LoadSpin/LoadSpin";
import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import * as MoviesAPI from '../MoviesAPI/MoviesAPI';
import { ItemReviews, ListReviews, TextReviews, TitleReviews } from "./Reviews.styled";

const Reviews = () => {
    const {movieId} = useParams();
    const [moviesReviews, setMoviesReviews] = useState([]);
    const isLoading = useRef(false);

    useEffect(() => {
        isLoading.current = true;
        MoviesAPI.getMoviesReviews(movieId).then(data => {
            setMoviesReviews(data.results);
        }).then(() => {
            isLoading.current = false;
        }).catch(error => {
            console.log(error);
            isLoading.current = false;
        })
    }, [movieId])
    if(!isLoading.current) {
        if(moviesReviews.length > 0) {
            return <ListReviews>
            {moviesReviews.map(({author, content, id}) => {
                return(
                    <ItemReviews key={id}>
                        <TitleReviews>Author: {author}</TitleReviews>
                        <TextReviews>{content}</TextReviews>
                    </ItemReviews>
                )
            })}
        </ListReviews>
        } else {
            return <TextReviews>We don't have any reviews for this movie...</TextReviews>
        }
    } else {
        <LoadSpin/>
    }
}

export default Reviews;