import styled from "styled-components";

export const Button = styled.button`
    width:20px;
    height:20px;
    padding:1px;
    color: ${({ theme }) => theme.color.black};
    background: none;
    border:none;
    transition:0.3s;
    font-size:20px;
    cursor: pointer;
    :hover{
        color:red;
        transform:scale(1.5)
    };
`

export const Block = styled.div`
    margin-top:-10px;
    width:110%;
    display: flex;
    flex-direction:row-reverse;
    justify-content:space-between;
`
export const ContentBlock = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 150px;
    height: 100px;
    background-color: #333;
    margin: 20px;
    padding: 10px;
    border-radius: 10px;
    box-shadow:2px 2px 4px ${({ theme }) => theme.color.shadow};
    transition:0.2s;
    :hover{
        box-shadow: 0px 0px 5px 1px${({ theme }) => theme.color.text};
    };
`