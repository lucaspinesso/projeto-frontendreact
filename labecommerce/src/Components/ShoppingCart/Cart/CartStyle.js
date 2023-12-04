import styled from "styled-components";

export const CartStyle = styled.footer`
    background-image: url(https://i.pinimg.com/originals/b3/28/71/b32871eed14dd75796906e82a22b916b.jpg);
    min-height: 97.8vh;
    width: 21.5vw;
    text-align: begin;
    font-size: 2vh;
    padding: 8px;
    color: var(--soft-white);
    border: 0.5vw solid white;

    @media (min-device-width : 320px) and (max-device-width : 950px){
        width: 21vw;

        h3{
            text-align: center;
            font-size: 18px;
        }
    }
`