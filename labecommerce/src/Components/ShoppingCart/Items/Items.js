import React from "react"
import { ItemsStyle } from "./ItemsStyle"

export function Items (props) {
    const { id, quantity, name, value, removePurchase } = props
    
    return(

        <ItemsStyle>

            <p>
                x{quantity} - {name} - R${value.toFixed(2)} <button onClick={() => removePurchase(id, name, value, quantity)}>Remover</button></p>

        </ItemsStyle>
    )
}