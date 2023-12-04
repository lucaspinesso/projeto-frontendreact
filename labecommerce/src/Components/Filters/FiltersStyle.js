import styled from "styled-components";

export const FiltersStyle = styled.header`
    background-image: url(https://p1.pxfuel.com/preview/799/669/78/moon-sky-night-sky.jpg);
    min-height: 97.8vh;
    width: 10vw;
    text-align: begin;
    padding: 1vw;
    border: 0.5vw solid white;
    color: var(--soft-white);

    @media (min-device-width : 320px) and (max-device-width : 950px){
        width: 17.5vw;
        font-size: 12px;
    }
`

export const FilterContainer = styled.form`
    display: flex;
    flex-direction: column;
    font-size: 1.1vw;
    margin-top: 1vh;

    button{
        margin-top: 1vh;
    }

    @media (min-device-width : 320px) and (max-device-width : 950px){
        font-size: 16px;
    } 
`