import { Main, Input, Button, Form } from "./Movies.styled"

export const Movies = () => {
    return(
        <Main>
            <Form>
                <Input type="text" placeholder="Enter name films"/>
                <Button>Search</Button>
            </Form>
        </Main>
    )
}