import React from "react"
import { ProductCardStyle } from "./ProductCardStyle"

export function ProductCard () {
    return(
        <ProductCardStyle>
            <header>
                <p>ProductCard</p>
            </header>
            
            <section>
                <p>Nome do Produto</p>
                <p>Valor</p>
                <button>Adicionar ao Carrinho</button>
            </section>
        </ProductCardStyle>
    )
}