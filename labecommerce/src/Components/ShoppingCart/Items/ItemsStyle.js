import styled from "styled-components";

export const ItemsStyle = styled.div`
    display: flex;
    justify-content: begin;
    align-itens: center;
    background: var(--deep-blue);
    text-align: begin;
    font-size: 1.3vw;
    color: var(--soft-white);
    border: 2px solid white;

    @media (min-device-width : 320px) and (max-device-width : 950px){
        font-size: 14px;
        padding: 5px;
        text-align: center;
        justify-content: center;
        align-itens: center;
    }
`