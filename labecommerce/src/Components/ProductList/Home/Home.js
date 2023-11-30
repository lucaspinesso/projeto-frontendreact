import React from "react";
import { CardConteiner, QuantidadeProdutosConteiner, HomeStyle, OrdenaçãoContainer } from "./HomeStyle";

export function Home (props) {
    const { renderList } = props.renderList
    const { ordination } = props.states
    const { handleOrdination } = props.handlers

    return(
        <HomeStyle>
            <QuantidadeProdutosConteiner>
                <p>Quantidade de produtos: { renderList.length }</p>
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