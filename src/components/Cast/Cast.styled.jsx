import styled from "styled-components";

export const BoxCast = styled.ul`
    display: grid;
    max-width: calc(100vw - 48px);
    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
    grid-gap: 16px;
    margin-top: 20px;
    margin-bottom: 20px;
    padding: 0;
    list-style: none;
    margin-left: auto;
    margin-right: auto;
`;

export const BoxCatsItem = styled.li`
    border-radius: 2px;
    padding-bottom: 10px;
    box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
`;

export const CatsImage = styled.img`
    display: block;
    width: 100%;
    height: 400px;
    object-fit: cover;
`;

export const Text = styled.p`
    font-size: 16px;
    padding: 10px 0 0 10px;
    margin: 0;
`;