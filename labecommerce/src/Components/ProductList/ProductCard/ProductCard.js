import React from "react"
import { ImgeContainer, ProductCardStyle, InformacoesContainer } from "./ProductCardStyle"

export function ProductCard (props) {
    const { id, name, value, imageUrl } = props
    
    return(
        <ProductCardStyle>
            <ImgeContainer>
                <img src={imageUrl} alt={name}/>
            </ImgeContainer>
            
            <InformacoesContainer>
                <p>{name}</p>
                <p>Valor {value}</p>
                <button>Adicionar ao Carrinho</button>
            </InformacoesContainer>
        </ProductCardStyle>
    )
}