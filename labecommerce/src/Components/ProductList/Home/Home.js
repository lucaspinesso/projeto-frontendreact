import React from "react";
import { CardConteiner, QuantidadeProdutosConteiner, HomeStyle, OrdenaçãoContainer } from "./HomeStyle";
import { ProductCard } from "../ProductCard/ProductCard";
import { useState } from "react"

export function Home (props) {
    const { productsList } = props

    const [ordination, setOrdination] = useState("")

    const handleOrdination  = (event) => setOrdination(event.target.value)

    const renderList = productsList
    .sort((a, b) => ordination === "" || ordination === "z-a" && a.name > b.name ? 1 : -1)
    .sort((a, b) => ordination === "" || ordination === "a-z" && a.name > b.name ? -1 : 1)
    .sort((a, b) => ordination === "" || ordination === "crescente" && a.value > b.value ? 1 : -1)
    .sort((a, b) => ordination === "" || ordination === "decrescente" && a.value > b.value ? -1 : 1)
    .map(product => {
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

                    <select value={ordination} onChange={handleOrdination}>
                        <option value="default">Selecione uma opção</option>
                        <option value="a-z">Nome: de A até Z</option>
                        <option value="z-a">Nome: de Z até A</option>
                        <option value="crescente">Preço: Crescente</option>
                        <option value="decrescente">Preço: Decrescente</option>
                    </select>
                </OrdenaçãoContainer>
            </QuantidadeProdutosConteiner>

            <CardConteiner>
                {renderList}
            </CardConteiner>
        </HomeStyle>
    )
}