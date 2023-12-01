import React from "react";
import {FiltersStyle, FilterContainer } from "./FiltersStyle";

function Filters (props) {
    const {minFilter, maxFilter, searchFilter} = props.states
    const {handleMinFilter, handleMaxFilter, handleSearchFilter} = props.handlers

    return(
        
        <FiltersStyle>

            <h1>Filters</h1>

            <FilterContainer>

                <label htmlFor="name">Valor mínimo:</label>
                <input 
                id= "name"
                type="number"
                value={minFilter}
                onChange={handleMinFilter}
                min={0}
                />

                <label htmlFor="name">Valor máximo:</label>
                <input 
                id= "name" 
                type="number" 
                value={maxFilter} 
                onChange={handleMaxFilter}
                min={0}
                />
            
                <label htmlFor="name">Busca por nome:</label>
                <input 
                id= "name" 
                type="text" 
                value={searchFilter} 
                onChange={handleSearchFilter}
                />

            </FilterContainer>
        </FiltersStyle>
    )
}

export default Filters;