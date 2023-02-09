import { FilmSearchList } from "components/ListFilms/FilmSearchList";
import { useState } from "react";
import { useSearchParams } from "react-router-dom"
import { Main, Input, Button, Form } from "./Movies.styled"

export const Movies = () => {
    const [_, setSearchParams] = useSearchParams();
    const [searchQuery, setSearchQuery] = useState('');

    const setSearch = event => {
        event.preventDefault();
        if(searchQuery === '') {
            window.alert('Enter query, please.')
            return;
        };
        setSearchParams({name: searchQuery})
        event.currentTarget.reset()
    }

    const handleInput = event => {
        const {value} = event.currentTarget;
        setSearchQuery(value.trim())
    }
    return(
        <Main>
            <Form onSubmit={setSearch}>
                <Input type="text" onChange={handleInput} placeholder="Enter name films" autoFocus/>
                <Button type="submit">Search</Button>
            </Form>
            <FilmSearchList/>
        </Main>
    )
}