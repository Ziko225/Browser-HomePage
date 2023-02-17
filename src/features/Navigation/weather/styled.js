import styled from "styled-components";

export const Content = styled.div`
    padding: 0px 25px 2px 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${({ theme }) => theme.color.white};
    background-color: ${({ theme }) => theme.color.darkGrey};
    border: 2px outset ${({ theme }) => theme.color.darkGrey};
    border-radius: 0 0 40px 0;
    filter: opacity(90%);
`;

export const Ico = styled.img`
    height: 30px;
    width: 30px;
`;
export const Element = styled.div`
    padding: 5px;
`;