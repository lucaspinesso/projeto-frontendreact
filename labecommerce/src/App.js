import Filters from './Components/Filters/Filters';
import { Home } from './Components/ProductList/Home/Home';
import { Cart } from './Components/ShoppingCart/Cart/Cart';
import { GlobalStyle } from './GlobalStyle';
import { AppContainer } from './AppStyle'
import { productsList } from './assents/productsList'
import { useState } from 'react'

function App() {
  const [minFilter, setMinFilter] = useState(0)
  const [maxFilter, setMaxFilter] = useState(0)
  const [searchFilter, setSearchFilter] = useState("")
  const [cart, setCart] = useState("")
  const [amount, setAmount] = useState(0)

  const handleMinFilter  = (event) => setMinFilter(event.target.value)
  const handleMaxFilter  = (event) => setMaxFilter(event.target.value)
  const handleSearchFilter  = (event) => setSearchFilter(event.target.value)
  const handleCart  = (event) => setCart(event.target.value)
  const handleAmount  = (event) => setAmount(event.target.value)
  

  return (
    <AppContainer>
      <GlobalStyle />
      <Filters />
      <Home productsList = { productsList }/>
      <Cart />
    </AppContainer>
  );
}

export default App;