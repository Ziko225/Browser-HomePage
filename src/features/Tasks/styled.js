import styled from "styled-components";

export const Block = styled.section`
    display: flex;  
    flex-wrap:wrap;
    flex-direction:row;
    align-items:center;
    padding:10px;
    max-width:450px;
    height:100%;
`
export const TaskElement = styled.div`
    margin-top:-10px;
    width:110%;
    display: flex;
    flex-direction:row-reverse;
    justify-content:space-between;
`

export const Button = styled.button`
    width:20px;
    height:20px;
    padding:1px;
    color: ${({ theme }) => theme.color.black};
    background: none;
    border:none;
    transition:0.3s;
    font-size:20px;
    cursor: pointer;
    :hover{
        color:red;
        transform:scale(1.5)
    };
`