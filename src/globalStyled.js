import { createGlobalStyle } from "styled-components";


export default createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        background-image: url(${props => props.backgroundUrl});
        background-size: cover ;
        background-position: center;
        background-attachment: fixed;
        background-repeat: no-repeat;
        color: ${({ theme }) => theme.color.smoke};
        font-size: 700;
        font-family: 'Lato', sans-serif; 
    }
`;