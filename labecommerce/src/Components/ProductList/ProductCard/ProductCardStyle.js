import styled from "styled-components";

export const ProductCardStyle = styled.div`
    display: grid;
    grid-template-rows: 1fr 0.5fr;
    grid-template-columns: 1fr;
    justify-items: stretch;
    align-items: center;
    background: var(--deep-blue);
    margin: 0.5vw;
    width: 385px;
    max-height: 45vh;
`

export const ImgeContainer = styled.header`
    img {
        border: 2px solid black;
        margin: 2%;
        width: 365px;
        height: 290px;
    }
`

export const InformacoesContainer = styled.section`
    display: flex;
    flex-direction: column;
    text-align: begin;
    border: 2px solid black;
    margin: 0.5vw;
    padding: 0.5vw;
    font-size: 18px;
`