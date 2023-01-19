import styled, { css } from "styled-components";

export const Content = styled.section`
    position: fixed;
    top: 0;
    margin: 20vh 40vw 0;
`;

export const OpenBarButton = styled.button`
    display: flex;
    position: fixed;
    align-self: end;
    margin: 20px 20px 20px auto;
    border: none;
    background: none;
    color: blue;
    cursor: pointer;
    bottom: 0;
    right: 0;
`;

export const SettingBlock = styled.div`
    background-color: ${({ theme }) => theme.color.background};
    padding: 10px 30px;
    border-radius: 6px;
`;

export const FormBlock = styled.form`
    display: flex;
    flex-direction: column;
`;

export const StyledInput = styled.input`
    padding: 7px;
    border-radius: 7px;
    margin: 10px 0;
`;

export const StyledButton = styled.button`
    background-color: ${({ theme }) => theme.color.lightGrey};
    border: none;
    border-radius: 6px;
    padding: 5px 10px;
    align-self: flex-end;
    margin-bottom: 10px;
    cursor: pointer;
    color: ${({ theme }) => theme.color.dark};
    :hover{
        filter: brightness(85%);
    }
    :active{
        filter: brightness(110%);
    }
    ${({ setDefaultButton }) => setDefaultButton && css`
        background: none;
        color: ${({ theme }) => theme.color.lightGrey};
    `}
`;

export const ButtonBlock = styled.div`
    display: flex;
    justify-content: space-between;
`;