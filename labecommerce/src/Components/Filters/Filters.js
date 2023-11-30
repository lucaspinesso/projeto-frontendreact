import React from "react";
import {FiltersStyle, FilterContainer } from "./FiltersStyle";

function Filters () {
    return(
        <FiltersStyle>
            <h1>Filters</h1>

            <FilterContainer>
                <label htmlFor="name">Valor mínimo:</label>
                <input id= "name" type="text"/>

                <label htmlFor="name">Valor máximo:</label>
                <input id= "name" type="text"/>
            
                <label htmlFor="name">Busca por nome:</label>
                <input id= "name" type="text"/>
            </FilterContainer>
        </FiltersStyle>
    )
}

export default Filters;