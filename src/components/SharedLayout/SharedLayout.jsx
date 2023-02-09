import { Outlet } from "react-router-dom"
import { Container, Nav, NavigationLink, Header } from "./SharedLayout.styled"

export const SharedLayout = () => {
    return(
        <Container>
            <Header>
                <Nav>
                    <NavigationLink to='/' end>Home</NavigationLink>
                    <NavigationLink to='/movies'>Movies</NavigationLink>
                </Nav>
            </Header>
            <Outlet/>
        </Container>
    )
}