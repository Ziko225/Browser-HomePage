import styled from "styled-components";

export const ContentBlock = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 150px;
    min-height:50px;
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