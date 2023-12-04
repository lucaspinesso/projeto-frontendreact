import React from "react"
import { CartStyle } from "./CartStyle"

export function Cart (props) {

    const { amount } = props.states
    const { renderCart } = props.renderCart

    return(

        <CartStyle>

            <h1>Cart</h1>

            <br/>

            {renderCart}

            <br/>

            <h3>Valor total: R$ {amount.toFixed(2)}</h3>

        </CartStyle>
    )
}