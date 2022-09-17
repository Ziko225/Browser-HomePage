import styled from "styled-components";

export const Input = styled.input`
    background-color:#555;
    border-radius: 10px;
    width:50%;
    color:${({ theme }) => theme.color.text};
    padding:5px;
    text-align:center;
    margin: 20px;
`

export const Block = styled.section`
    display: flex;  
    flex-wrap:wrap;
    flex-direction:row;
    align-items:center;
    padding:10px;
    max-width:450px;
    height:100%;
`
