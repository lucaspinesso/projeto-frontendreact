import styled from "styled-components";

export const ProductCardStyle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: var(--deep-blue);
    font-size: 2vh;
    color: var(--soft-white);
    margin: 0.5vw;
    max-width: 30vw;
`

export const ImgeContainer = styled.header`
    img {
        border: 2px solid black;
        margin: 0.5vw;
        max-width: 100%;
        max-hight: 100%;
    }
`

export const InformacoesContainer = styled.section`
    display: flex;
    flex-direction: column;
    text-align: begin;
    border: 2px solid black;
    margin: 0.5vw;
    padding: 0.5vw;
`