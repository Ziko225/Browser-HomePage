import styled from "styled-components";

export const Content = styled.div`
    padding: 4px 15px 5px 2px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${({theme}) => theme.color.white};
    background-color: ${({theme}) => theme.color.darkGrey};
    border: 2px outset ${({theme}) => theme.color.darkGrey};
    border-radius: 0 0 40px 0;
    filter: opacity(90%);
`;

export const Ico = styled.img`
    height: 40px;
    width: 40px;
`;
export const Element = styled.div`
    padding: 5px;
`;