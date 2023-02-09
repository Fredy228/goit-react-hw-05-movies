import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Container = styled.div`
    max-width: 1200px;
    padding: 0 15px;
    margin: 0 auto;
`;

export const Header = styled.header`
    background-color:  #86A3B8;
    padding: 15px 0;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
`;

export const Nav = styled.nav`
    width: 100%;
`;

export const NavigationLink = styled(NavLink)`
    margin-right: 15px;
    color: white;
    padding: 7px 10px;
    text-decoration: none;
    font-size: 18px;
    transition: box-shadow 250ms linear;
    border-radius: 10px;

    :hover {
        box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
    }

    &.active {
        background-color: #F55050;
    }
`;

