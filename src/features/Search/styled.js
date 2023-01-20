import styled from "styled-components";
import { ReactComponent as SearchIco } from "./searchIco.svg";

export const Content = styled.section`
    position: absolute;
    top: 25vh;
    left: 50%;
    transform: translate(-50%, 0);
`;

export const InputBox = styled.div`
    display: flex;
    align-items: center;
    color: ${({ theme }) => theme.color.white};
`;

export const StyledInput = styled.input`
    min-width: 400px;
    padding: 12px 20px 12px 35px;;
    border-radius: 15px;
    font-size: 17px;
    color: currentColor;
    background-color: ${({ theme }) => theme.color.darkGrey};
    border-color: ${({ theme }) => theme.color.darkGrey}
`;

export const StyledSearchIco = styled(SearchIco)`
    position: absolute;
    margin-left: 12px;
`;