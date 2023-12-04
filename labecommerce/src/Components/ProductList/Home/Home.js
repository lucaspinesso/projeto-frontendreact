import React from "react";
import { CardConteiner, QuantidadeProdutosConteiner, HomeStyle, OrdenaçãoContainer } from "./HomeStyle";

export function Home (props) {

    const { renderHomeList } = props.renderHomeList
    const { ordination } = props.states
    const { handleOrdination } = props.handlers
    
    return(

        <div style={{ 
            backgroundImage: `url("https://media.tenor.com/AJBv6U1rfkQAAAAC/background-image-galaxy.gif")` 
        }}>
        <HomeStyle>
            

            <QuantidadeProdutosConteiner>

                <p>Quantidade de produtos: { renderHomeList.length }</p>

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

                {renderHomeList}

            </CardConteiner>
        </HomeStyle>
        </div>
    )
}