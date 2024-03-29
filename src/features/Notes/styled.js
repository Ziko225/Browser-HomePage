import styled from "styled-components";

export const ContentBlock = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 150px;
    min-height: 50px;
    background-color: ${({ theme }) => theme.color.background};
    margin: 20px;
    padding: 10px;
    border-radius: 10px;
    box-shadow: 1px 1px 5px ${({ theme }) => theme.color.dark};
    transition: 0.3s;
    &:hover {
        box-shadow: 0px 0px 8px 1px${({ theme }) => theme.color.smoke};
    }
`;

export const Block = styled.section`
    display: flex;  
    flex-wrap: wrap;
    flex-direction: row;
    align-items: center;
    padding: 10px;
    max-width: 450px;
    height: 100%;
    word-break: break-all;
    @media (max-width: ${({ theme }) => theme.breakpoint.tabletMax}) {
        max-width: 250px;
    }
`;

export const TaskElement = styled.div`
    margin-top: -10px;
    width: 110%;
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
`;

export const StyledButton = styled.button`
    width: 20px;
    height: 20px;
    padding: 1px;
    background: none;
    border: none;
    transition: 0.3s;
    font-size: 20px;
    color: ${({ theme }) => theme.color.smoke};
    cursor: pointer;
    &:hover {
        color: ${({ theme }) => theme.color.red};
    }
`;

export const StyledInput = styled.input`
    background-color:${({ theme }) => theme.color.darkGrey};
    border-radius: 10px;
    border-color: ${({ theme }) => theme.color.darkGrey};
    color:${({ theme }) => theme.color.smoke};
    padding: 5px 10px;
    margin: 20px;
    &::placeholder {
        color: ${({ theme }) => theme.color.lightGrey};
    }
`;