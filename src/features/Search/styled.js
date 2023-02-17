import styled from "styled-components";
import { ReactComponent as SearchIco } from "./searchIco.svg";

export const Content = styled.section`
    position: absolute;
    top: 25vh;
    left: 50%;
    transform: translate(-50%, 0);
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
        position: static;
        transform: translate(0, 0);
        display: flex;
        justify-content: center;
        margin-top: 50px;
        width: 100%;
    }
`;

export const InputBox = styled.div`
    display: flex;
    align-items: center;
    color: ${({ theme }) => theme.color.white};
`;

export const StyledInput = styled.input`
    min-width: 500px;
    padding: 9px 20px 9px 35px;;
    border-radius: 15px;
    font-size: 17px;
    color: currentColor;
    background-color: ${({ theme }) => theme.color.darkGrey};
    border-color: ${({ theme }) => theme.color.darkGrey};
    @media (max-width: ${({ theme }) => theme.breakpoint.tabletMax}) {
        min-width: 450px;
    }
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
        min-width: 300px;
    }
`;

export const StyledSearchIco = styled(SearchIco)`
    position: absolute;
    margin-left: 12px;
`;