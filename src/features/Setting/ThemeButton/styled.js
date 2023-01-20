import styled, { css } from "styled-components";
import { ReactComponent as themeIco } from './themeIco.svg';

export const ThemeContainer = styled.div`
    display: flex;
    align-items: center;
    margin-left: auto;
    font-weight: 700;
    font-size: 12px;
`;

export const ThemeCaption = styled.span`
    color: ${({ theme }) => theme.color.white};
`;

export const ThemeSwitcher = styled.button`
    display: flex;
    border: none;
    border-radius: 25px;
    padding: 0;
    min-width: 47px;
    margin-left: 12.47px;
    cursor: pointer;
    background-color: ${({ theme }) => theme.color.lightGrey};
`;

export const StyledThemeIco = styled(themeIco)`
    border-radius: 50%;
    color: ${({ theme }) => theme.color.lightBG};
    background-color: ${({ theme }) => theme.color.white};
    margin: 2.5px;
    transition: 500ms;

    ${({ darkTheme }) => darkTheme && css`
        transform: translate(100%);
    `}
`;