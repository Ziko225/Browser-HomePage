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
    box-shadow: 2px 2px 4px ${({ theme }) => theme.color.dark};
    transition: 0.3s;
    :hover{
        box-shadow: 0px 0px 8px 1px${({ theme }) => theme.color.smoke};
    };
`;

export const Block = styled.section`
    display: flex;  
    flex-wrap: wrap;
    flex-direction: row;
    align-items: center;
    padding: 10px;
    max-width: 450px;
    height: 100%;
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
    cursor: pointer;
    :hover{
        color: red;
        transform: scale(1.5);
    };
`;

export const StyledInput = styled.input`
    background-color:${({ theme }) => theme.color.darkGrey};
    border-radius: 10px;
    border-color: ${({ theme }) => theme.color.darkGrey};
    color:${({ theme }) => theme.color.smoke};
    padding: 5px 10px;
    margin: 20px;
    ::placeholder{
        color:${({ theme }) => theme.color.lightGrey};
    }
`;