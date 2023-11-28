import React from "react";
import { CardConteiner, HomeStyle } from "./HomeStyle";
import { ProductCard } from "../ProductCard/ProductCard";

export function Home () {
    return(
        <div className="ProductList">
            <HomeStyle>
                <header>
                    Quantidade de produtos:
                    <section>
                        <p>Ordenação:</p>

                        <select name="Ordenação:">
                            <option value="crescente">Crescente</option>
                            <option value="decrescente">Decrescente</option>
                        </select>
                    </section>
                </header>

                <CardConteiner>
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                </CardConteiner>
            </HomeStyle>
        </div>
    )
}