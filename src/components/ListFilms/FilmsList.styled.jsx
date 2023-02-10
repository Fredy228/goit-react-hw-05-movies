import styled from "styled-components";
import { Link } from "react-router-dom";

export const List = styled.ul`
    list-style: none;
    padding: 0;
    max-width: 800px;
    margin: 0 auto;
`;

export const Item = styled.li`
    padding: 5px;
    border-radius: 5px;
    transition: background-color 100ms linear;
    :hover {
        background-color: #E8D2A6;
    }
`;

export const LinkFilm = styled(Link)`
    color: black;
    text-transform: capitalize;

`;

export const Title = styled.h2`
    font-size: 24px;
    text-align: center;
`