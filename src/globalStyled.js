import { createGlobalStyle } from "styled-components";
import background from "./background.jpg"

export default createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background-image:url(${background});
    background-size:cover ;
    background-attachment:fixed;
    background-repeat:no-repeat;
    color:${({ theme }) => theme.color.text};
    font-family: 'Lato', sans-serif;
  }
`