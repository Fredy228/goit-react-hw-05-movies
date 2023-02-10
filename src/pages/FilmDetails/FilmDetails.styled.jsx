import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Main = styled.main`
    width: 100%;
    padding: 15px 0;
`;

export const GenerousBlock = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    padding-bottom: 5px;
    border-bottom: 2px solid #86A3B8;
`;

export const PicturesBlock = styled.div`
    margin-right: 15px;
`;

export const GenerousInfo = styled.div``;

export const TitleFilm = styled.h2`
    font-size: 24px;
`;

export const TextInfo = styled.p`
    font-size: 16px;
`;

export const TitleChapter = styled.h3`
    font-size: 16px;
`;

export const PictureFilm = styled.img`
    height: auto;
    width: 270px;
    display: block;
`;

export const Span = styled.span`
    margin-right: 10px;
    padding: 5px;
    background-color: #E8D2A6;
    border-radius: 5px;
`;

export const AddInfoBar = styled.div`
    width: 100%;
    text-align: center;
    padding-bottom: 10px;
    border-bottom: 2px solid #86A3B8;
`;

export const ListAddLink = styled.ul`
    padding: 0;
    margin: 0;
    list-style: none;
    display: flex;
    justify-content: center;
`;

export const ItemAddLink = styled.li`
    padding: 0 5px;
`;

export const AddLink = styled(NavLink)`
    font-size: 16px;
    padding: 5px 10px;
    border-radius: 5px;
    color: black;
    &.active {
        background-color: #F55050;
        color: white;
    }
`;
