import { Outlet, useParams } from "react-router-dom";
import { GenerousBlock, GenerousInfo, Main, PictureFilm, PicturesBlock, TextInfo, TitleChapter, TitleFilm, Span, AddInfoBar, AddLink, ListAddLink, ItemAddLink } from "./FilmDetails.styled";
import * as MoviesAPI from '../../components/MoviesAPI/MoviesAPI';
import { useEffect, useRef, useState } from "react";
import { BASE_IMAGES_URL, DEFAULT_IMG } from "../../components/MoviesAPI/MoviesAPI";

export const FilmDetails = () => {
    const isLoading = useRef(false);
    const [filmInfo, setFilmInfo] = useState({});
    const {movieId} = useParams();
    const {poster_path, title, genres, overview, release_date, vote_average} = filmInfo;
    let urlPoster = !poster_path ? DEFAULT_IMG : `${BASE_IMAGES_URL}${poster_path}`;
    let dataFiml = release_date ? release_date.slice(0,4) : 'Data unknow';

    useEffect(() => {
        MoviesAPI.getMoviesDetails(movieId).then(results => {
            setFilmInfo(results);
        }).then(()=> {
            isLoading.current = true;
        })
    }, [movieId]);

    if(isLoading) {
        return(
            <Main>
                <GenerousBlock>
                    <PicturesBlock>
                        <PictureFilm src={urlPoster}/>
                    </PicturesBlock>
                    <GenerousInfo>
                        <TitleFilm>{`${title} (${dataFiml})`}</TitleFilm>
                        <TextInfo>User Score: { `${Math.round(vote_average * 10)}%`}</TextInfo>
                        <TitleChapter>Overview</TitleChapter>
                        <TextInfo>{overview}</TextInfo>
                        <TitleChapter>Genres</TitleChapter>
                        <TextInfo>{genres && genres.map(item => {
                            return(<Span key={item.id}>{item.name}</Span>)
                        })}</TextInfo>
                    </GenerousInfo>
                </GenerousBlock>
                <AddInfoBar>
                    <TitleChapter>Additional information</TitleChapter>
                    <ListAddLink>
                        <ItemAddLink>
                            <AddLink to='cast'>Cast</AddLink>
                        </ItemAddLink>
                        <ItemAddLink>
                            <AddLink to='reviews'>Reviews</AddLink>
                        </ItemAddLink>
                    </ListAddLink>
                </AddInfoBar>
    
                <Outlet/>
            </Main>
        )
    }
};