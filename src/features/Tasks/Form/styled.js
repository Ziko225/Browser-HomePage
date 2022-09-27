import styled from "styled-components";

export const Input = styled.input`
    background-color:${({ theme }) => theme.color.input};
    border-radius: 10px;
    flex-grow: 2;
    color:${({ theme }) => theme.color.text};
    padding:5px;
    text-align:center;
    margin: 20px;
    flex-basis:100%;
`

export const Block = styled.form`
    display: flex; 
    justify-content: center;
    align-items:center;
    width:70%;
`
