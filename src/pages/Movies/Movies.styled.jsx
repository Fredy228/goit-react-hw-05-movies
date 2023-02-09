import styled from "styled-components";

export const Main = styled.main`
    width: 100%;
`;

export const Input = styled.input`
    font-size: 18px;
    padding: 7px 10px;
    outline: transparent;
    border: 2px solid #F48484;
    border-radius: 10px 0 0 10px;
    border-right: none;
    width: 300px;
`;

export const Button = styled.button`
    font-size: 18px;
    color: black;
    padding: 7px 10px;
    background-color: #E8D2A6;
    border: 2px solid #E8D2A6;
    border-radius: 0 10px 10px 0;
    transition-property: background-color, border-color, color; 
    transition-timing-function: linear;
    transition-duration: 250ms;
    :hover {
        background-color: #F48484;
        border-color: #F48484;
        color: white;
        cursor: pointer;
    }
`;

export const Form = styled.form`
    text-align: center;
    padding: 15px;
`;