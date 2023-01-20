import styled, { css } from "styled-components";

export const Button = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    margin: 20px;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: ${({ theme }) => theme.color.white};
    :hover{
        background-color: ${({ theme }) => theme.color.grey};
    }
    ${({ bar }) => bar && css`
        background-color: ${({ theme }) => theme.color.grey};
    `}
`;

export const Content = styled.div`
    display: grid;
    text-align: center;
    position: absolute;
    grid-template-columns: repeat(3, 100px);
    grid-template-rows: repeat(4, 1fr);
    padding: 10px;
    top: 0;
    right: 0;
    background-color: ${({ theme }) => theme.color.background};
    margin: 60px;
    width: 300px;
    height: 350px;
    border-radius: 10px;
`;

export const Block = styled.a`
    max-height: 50px;
    padding: 20px;
    margin: 10px;
    display: flex;
    flex-direction: column;
    text-decoration: none;
    align-items: center;
    border-radius: 10px;
    color: ${({ theme }) => theme.color.smoke};
    cursor: pointer;
    :hover{
        background-color: ${({ theme }) => theme.color.grey};
    }
`;

export const Footer = styled.a`
    color: ${({ theme }) => theme.color.smoke};
    grid-column-start: 2;
    text-decoration: none;
    :hover{
        border-bottom: 1px solid ${({ theme }) => theme.color.smoke};
    }
`;

export const Img = styled.img`
    height: 40px;
`;