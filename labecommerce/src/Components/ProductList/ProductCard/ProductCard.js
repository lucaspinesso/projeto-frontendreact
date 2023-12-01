import React from "react"
import { ImgeContainer, ProductCardStyle, InformacoesContainer } from "./ProductCardStyle"

export function ProductCard (props) {

    const { id, name, value, imageUrl, addPurchase, quantity } = props
    
    return(

        <ProductCardStyle>

            <ImgeContainer>

                <img src={imageUrl} alt={name}/>

            </ImgeContainer>
            
            <InformacoesContainer>

                <p>{name}</p>

                <p>Valor - R${value.toFixed(2)}</p>

                <button onClick={() => addPurchase(id, name, value, quantity )}>Adicionar ao Carrinho</button>

            </InformacoesContainer>
        </ProductCardStyle>
    )
}