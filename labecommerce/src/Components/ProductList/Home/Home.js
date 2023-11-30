import React from "react";
import { CardConteiner, QuantidadeProdutosConteiner, HomeStyle, OrdenaçãoContainer } from "./HomeStyle";
import { ProductCard } from "../ProductCard/ProductCard";

export function Home (props) {
    const { productsList } = props

    const renderList = productsList.map(product =>{
        return (
            <ProductCard
                    key={product.id}
                    id={product.id}
                    name={product.name}
                    value={product.value}
                    imageUrl={product.imageUrl}
            />
        )
    })

    return(
        <HomeStyle>
            <QuantidadeProdutosConteiner>
                <p>Quantidade de produtos: { productsList.length }</p>
                <OrdenaçãoContainer>
                    Ordenação:

                    <select name="Ordenação:">
                        <option value="crescente">Crescente</option>
                        <option value="decrescente">Decrescente</option>
                    </select>
                </OrdenaçãoContainer>
            </QuantidadeProdutosConteiner>

            <CardConteiner>
                {renderList}
            </CardConteiner>
        </HomeStyle>
    )
}