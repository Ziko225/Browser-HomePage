import styled, { css } from "styled-components";

export const Button = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    cursor: pointer;
    margin:20px;
    width:40px;
    height:40px;
    border-radius:50%;
    :hover{
        background-color:#444;
    }
`

export const Content = styled.div`
text-align:center;
    position: absolute;
    grid-template-columns:repeat(3, 100px);
    grid-template-rows: repeat(3, 120px), 100%;
    display:none;
    padding:10px;
    top: 0;
    right: 0;
    background-color:#333;
    margin:60px;
    width:300px;
    height:350px;
    border-radius:10px;
    justify-content:center;
    align-items:center;
    ${({ bar }) => bar && css`
         display:grid;
    `}
`

export const Block = styled.a`
    max-height:50px;
    padding:20px;
    margin:10px;
    display:flex;
    flex-direction:column;
    text-decoration:none;
    align-items:center;
    border-radius:10px;
    color:${({ theme }) => theme.color.text};
    cursor: pointer;
    :hover{
        background-color: #444;
    }
`

export const Footer = styled.a`
    color:${({ theme }) => theme.color.text};
    grid-column-start: 2;
    grid-column-end:2;
    text-decoration:none;
    :hover{
        border-bottom: white, 2px, solid;
    }
`

export const Img = styled.img`
    height:40px;
`