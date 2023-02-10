import styled from "styled-components";
import { Link } from "react-router-dom";

export const Main = styled.main`
    text-align: center;
`;

export const TextP = styled.p`
    font-size: 28px;
`;

export const LinkHome = styled(Link)`
    font-size: 24px;
    padding: 10px;
    border-radius: 10px;
    color: black;
    transition: background-color 250ms linear;
    :hover {
        background-color: #E8D2A6;
    }
`;