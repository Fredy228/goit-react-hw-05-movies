import { List, Item, LinkFilm, Title } from "./FilmsList.styled";

export const TrandingFilmList = ({listFilms}) => {
    return (
        <>
            <Title>Tranding today</Title>
            <List>
                {listFilms.map((film, index) => {
                    return (
                        <Item key={film.id}>
                            {index + 1} <LinkFilm to={`movies/${film.id}`}>{film.title}</LinkFilm>
                        </Item>
                    )
                })}
            </List>
        </>
    )
}
