import styled from "styled-components";

export const HomeStyle = styled.div`
    background: var(--yellow);
    min-height: 97.8vh;;
    text-align: begin;
    font-size: 2vh;
    padding: 10px;

    header{
        display: flex;
        justify-content: space-between;
        
        section{
            display: flex;
            flex-direction: row;
            justify-content: space-between;
        }
    }
`

export const CardConteiner = styled.section`
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    width: 60vw;
`