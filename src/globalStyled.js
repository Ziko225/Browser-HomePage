import { createGlobalStyle } from "styled-components";
import background from "./background.jpg"

const backgroundLink = localStorage.getItem("bglink");

export default createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background-image: url(${backgroundLink && backgroundLink.match(/\.(jpeg|jpg|gif|png)$/) != null ? backgroundLink : background});
    background-size: cover ;
    background-position: center;
    background-attachment: fixed;
    background-repeat: no-repeat;
    color: ${({ theme }) => theme.color.text};
    font-family: 'Lato', sans-serif;
  }
`;