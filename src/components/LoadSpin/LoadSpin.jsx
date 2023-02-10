import {TailSpin} from 'react-loader-spinner';
import { Div } from './LoadSpin.styled';

export const LoadSpin = () => {
    return(
        <Div>
            <TailSpin
            height="80"
            width="80"
            color="#F55050"
            ariaLabel="tail-spin-loading"
            radius="1"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
            />
        </Div>
    )
}
