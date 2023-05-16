import styled, { css } from "styled-components";

export const Content = styled.section`
    position: absolute;
    bottom: 0;
    right: 0;
    margin: 0 85px 50px 0;
`;

export const OpenBarButton = styled.button`
    display: flex;
    padding: 10px;
    border-radius: 50%;
    position: fixed;
    align-self: end;
    margin: 20px 20px 20px auto;
    border: none;
    background: none;
    cursor: pointer;
    bottom: 0;
    right: 0;
    &:hover {
        background-color: ${({ theme }) => theme.color.opacityLight};
    }
    ${({ open }) => open && css`
        background-color: ${({ theme }) => theme.color.grey};
    `}
`;

export const SettingBlock = styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${({ theme }) => theme.color.background};
    padding: 20px 30px;
    border-radius: 6px;
    min-width: 240px;
`;

export const HeaderBlock = styled.header`
    display: flex;
    align-items: flex-start;
`;

export const Titile = styled.h2`
    margin-top: 0;
    padding: 0;
`;

export const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
`;

export const StyledInput = styled.input`
    padding: 7px;
    border-radius: 7px;
    margin: 10px 0;
`;

export const StyledButton = styled.button`
    min-height: 35px;
    background-color: ${({ theme }) => theme.color.smoke};
    border: none;
    border-radius: 5px;
    padding: 5px 10px;
    margin-bottom: 10px;
    cursor: pointer;
    color: ${({ theme }) => theme.color.dark};
    &:hover {
        filter: brightness(120%);
    }
    &:active {
        border: 2px inset ${({ theme }) => theme.color.grey};
    }
    ${({ setDefaultButton }) => setDefaultButton && css`
        background: none;
        color: ${({ theme }) => theme.color.smoke};
        margin: 0;
        align-self: flex-end;
        &:hover {
            text-decoration: underline
        }
        &:active {
            border: 2px inset ${({ theme }) => theme.color.grey};
        }
    `}
`;