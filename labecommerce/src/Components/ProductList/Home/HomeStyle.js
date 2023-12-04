import styled from "styled-components";

export const HomeStyle = styled.div`
    background-image: url("https://media.tenor.com/AJBv6U1rfkQAAAAC/background-image-galaxy.gif");
    min-height: 97.8vh;;
    text-align: begin;
    font-size: 2vh;
    padding: 2vw;
    width: 68.5vw;
    color: var(--soft-white);

    @media (min-device-width : 320px) and (max-device-width : 950px){
        width: 50vw;
        font-size: 16px;
    }
`

export const QuantidadeProdutosConteiner = styled.header`
    display: flex;
    justify-content: space-between;

    @media (min-device-width : 320px) and (max-device-width : 950px){
        flex-direction: column;
        width: 95%;
        justify-content: center;
        align-items: center;
    }
`

export const OrdenaçãoContainer = styled.section`
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    @media (min-device-width : 320px) and (max-device-width : 950px){
        display: flex;
        flex-direction: column;
        max-width: 100%;
    }
`

export const CardConteiner = styled.section`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`