import styled from "styled-components";

export const ProductCardStyle = styled.div`
    display: grid;
    grid-template-rows: 1fr 0.5fr;
    grid-template-columns: 1fr;
    justify-items: stretch;
    align-items: center;
    background: var(--deep-blue);
    margin: 0.5vw;
    width: 285px;
    max-height: 44.5vh;

    @media (min-device-width : 320px) and (max-device-width : 950px){
        width: 185px;
        max-height: 46.3vh;
    }
`

export const ImgeContainer = styled.header`
    img {
        border: 2px solid black;
        margin: 2%;
        width: 270px;
        height: 290px;
    }

    @media (min-device-width : 320px) and (max-device-width : 950px){
        img{
            border: 2px solid black;
            margin: 2%;
            width: 165px;
            height: 200px;
        }
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