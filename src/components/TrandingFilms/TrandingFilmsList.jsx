import { List, Item, LinkFilm, Title } from "./TrandingFilmsList.styled";

export const TrandingFilmList = ({listFilms}) => {
    console.log(listFilms)
    return (
        <>
            <Title>Tranding today</Title>
            <List>
                {listFilms.map((film, index) => {
                    return (
                        <Item key={film.id}>
                            {index + 1} <LinkFilm to={`${film.id}`}>{film.title}</LinkFilm>
                        </Item>
                    )
                })}
            </List>
        </>
    )
}
