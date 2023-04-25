import { createGlobalStyle } from "styled-components";

const backgroundLink = localStorage.getItem("bglink");
const darkTheme = JSON.parse(localStorage.getItem("isDarkTheme") || false);
const backgroundImg = require(darkTheme ? "./background/backgroundDark.jpg" : "./background/backgroundLight.jpg");
const backgroundUrlChecker = backgroundLink && backgroundLink.match(/^http[^\?]*.(jpg|jpeg|gif|png|tiff|bmp)(\?(.*))?$/gmi) != null ? backgroundLink : backgroundImg;

export default createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        background-image: url(${backgroundUrlChecker});
        background-size: cover ;
        background-position: center;
        background-attachment: fixed;
        background-repeat: no-repeat;
        color: ${({ theme }) => theme.color.smoke};
        font-size: 700;
        font-family: 'Lato', sans-serif; 
    }
`;