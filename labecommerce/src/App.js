import Filters from './Components/Filters/Filters';
import { Home } from './Components/ProductList/Home/Home';
import { Cart } from './Components/ShoppingCart/Cart/Cart';
import { GlobalStyle } from './GlobalStyle';
import { AppContainer } from './AppStyle'
import { productsList } from './assents/productsList'
import { useState } from 'react'
import { ProductCard } from "./Components/ProductList/ProductCard/ProductCard";

function App() {
  const [minFilter, setMinFilter] = useState("")
  const [maxFilter, setMaxFilter] = useState("")
  const [searchFilter, setSearchFilter] = useState("")
  const [cart, setCart] = useState("")
  const [amount, setAmount] = useState("")
  const [ordination, setOrdination] = useState("")

  const handleMinFilter  = (event) => {
    if(event.target.value < 0){
      alert("O valor deve ser positivo!")
    }else{
      setMinFilter(event.target.value)
    }
  }
  const handleMaxFilter  = (event) => {
    if(event.target.value < 0){
      alert("O valor deve ser positivo!")
    }else{
      setMaxFilter(event.target.value)
    }
  }
  const handleSearchFilter  = (event) => setSearchFilter(event.target.value.toLocaleLowerCase())
  const handleCart  = (event) => setCart(event.target.value)
  const handleAmount  = (event) => setAmount(event.target.value)
  const handleOrdination  = (event) => setOrdination(event.target.value)
  
  const renderList = productsList
    .filter((product) => {
      return (
        minFilter === "" || product.value >= minFilter
      )
    })
    .filter((product) => {
      return (
        maxFilter === "" || product.value <= maxFilter
      )
    })
    .filter((product) => {
      return (
        searchFilter === "" || product.name.toLocaleLowerCase().includes(searchFilter)
      )
    })
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
      )})

  return (
    <AppContainer>
      <GlobalStyle />
      <Filters 
      states = {{ minFilter, maxFilter, searchFilter}}
      handlers = {{ handleMinFilter, handleMaxFilter, handleSearchFilter }}
      renderList = {{ renderList }}
      />
      <Home 
      states = {{ ordination }}
      handlers = {{ handleOrdination }} 
      renderList = {{ renderList }}/>
      <Cart 
      states = {{ amount, cart }}
      handlers = {{ handleAmount, handleCart }}
      />
    </AppContainer>
  );
}

export default App;