import { Outlet } from "react-router-dom"
import { Container, Nav, NavigationLink, Header } from "./SharedLayout.styled"

export const SharedLayout = () => {
    return(
        <>
            <Header>
                <Container>
                    <Nav>
                        <NavigationLink to='/'>Home</NavigationLink>
                        <NavigationLink to='movies'>Movies</NavigationLink>
                    </Nav>
                </Container>
            </Header>
            <Container>
                <Outlet/>
            </Container>
        </>
    )
};