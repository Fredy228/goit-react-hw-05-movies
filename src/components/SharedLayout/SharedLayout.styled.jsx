import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Container = styled.div`
    max-width: 1200px;
    padding: 0 15px;
    margin: 0 auto;
`;

export const Header = styled.header`
    height: 100px;
    background-color: red;
`;

export const Nav = styled.nav`
    
`;

export const NavigationLink = styled(NavLink)`
    

    &.active {

    }
`;

