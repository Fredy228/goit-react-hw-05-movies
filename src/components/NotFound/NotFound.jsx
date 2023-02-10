import { TextP, LinkHome, Main } from "./NotFound.styled";

const NotFound = () => {

    return(
        <Main>
            <TextP>404 Not found page</TextP>
            <LinkHome to='/'>Go to home page</LinkHome>
        </Main>
    )
}

export default NotFound;