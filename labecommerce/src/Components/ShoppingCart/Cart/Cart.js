import React from "react"
import { CartStyle } from "./CartStyle"
import { Items } from "../Items/Items"

export function Cart () {
    return(
        <div className="ShoppingCart">
            <CartStyle>
                <h1>Cart (Carrinho)</h1>
                <Items/>
                <p>Valor total:</p>
            </CartStyle>
        </div>
    )
}