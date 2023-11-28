import React from "react";
import FiltersStyle from "./FiltersStyle";

function Filters () {
    return(
        <FiltersStyle>
            <h1>Filters</h1>

            <label htmlFor="name">Valor mínimo:</label>
            <br/>
            <input id= "name" type="text"/>

            <br/>

            <label htmlFor="name">Valor máximo:</label>
            <br/>
            <input id= "name" type="text"/>

            <br/>

            <label htmlFor="name">Busca por nome:</label>
            <br/>
            <input id= "name" type="text"/>
        </FiltersStyle>
    )
}

export default Filters;