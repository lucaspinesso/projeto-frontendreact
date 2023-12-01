import Filters from './Components/Filters/Filters';
import { Home } from './Components/ProductList/Home/Home';
import { Cart } from './Components/ShoppingCart/Cart/Cart';
import { GlobalStyle } from './GlobalStyle';
import { AppContainer } from './AppStyle'
import { productsList } from './assents/productsList'
import { useState } from 'react'
import { ProductCard } from "./Components/ProductList/ProductCard/ProductCard";
import { Items } from './Components/ShoppingCart/Items/Items';

function App() {

  const [minFilter, setMinFilter] = useState("")
  const [maxFilter, setMaxFilter] = useState("")
  const [searchFilter, setSearchFilter] = useState("")
  const [cart, setCart] = useState([])
  const [amount, setAmount] = useState(0)
  const [ordination, setOrdination] = useState("")
  const [quantity] = useState(1)

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

  const handleSearchFilter  = (event) => setSearchFilter(event.target.value)

  const handleOrdination  = (event) => setOrdination(event.target.value)

  const addPurchase = (id, name, value, quantity) => {

    const purchaseFinder = cart.find((finder) => finder.id === id)

    const purchaseIndexFinder = cart.findIndex((finder) => finder.id === id)

    if(purchaseFinder === undefined){

      const newPurchase = {
        id: id,
        name: name,
        value: value,
        quantity: quantity
      }
  
      const newPurchasesList = [...cart, newPurchase]

      setCart(newPurchasesList)

      const addAmount = amount + value

      setAmount(addAmount)

    }else{

      const newQuantity = purchaseFinder.quantity + 1

      const addAmount = amount + purchaseFinder.value

      setAmount(addAmount)

      cart.splice( purchaseIndexFinder, 1, {
          id: id,
          name: name,
          value: value,
          quantity: newQuantity
        }
      )

      const newAddList = [...cart]

      setCart(newAddList)
      
    }
  }

  const removePurchase = (id, name, value) => {

    const purchaseFinder = cart.find((finder) => finder.id === id)

    const purchaseIndexFinder = cart.findIndex((finder) => finder.id === id)

    if(purchaseFinder.quantity === 1){

      cart.splice(purchaseIndexFinder, 1)

      const newRemoveList = [...cart]

      setCart(newRemoveList)

      const removeAmount = amount - purchaseFinder.value

      setAmount(removeAmount)

    }else{

      const newQuantity = purchaseFinder.quantity - 1

      cart.splice(purchaseIndexFinder, 1, {
          id: id,
          name: name,
          value: value,
          quantity: newQuantity
        }
      )

      const newRemoveList = [...cart]

      setCart(newRemoveList)

      const removeAmount = amount - purchaseFinder.value

      setAmount(removeAmount)

    }
  }

  const renderHomeList = productsList

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

        searchFilter === "" || product.name.toLowerCase().includes(searchFilter.toLowerCase())

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
          addPurchase={addPurchase}
          quantity = {quantity}
        />

      )
    })
  
  const renderCart = cart.map(purchases => {
  
    return(

      <Items
        key = {purchases.id}
        id = {purchases.id}
        name = {purchases.name}
        value = {purchases.value}
        quantity = {purchases.quantity}
        removePurchase = {removePurchase}
      />

    )
  })

  return (

    <AppContainer>

      <GlobalStyle />

      <Filters

        states = {{ minFilter, maxFilter, searchFilter}}

        handlers = {{ handleMinFilter, handleMaxFilter, handleSearchFilter }}

        renderHomeList = {{ renderHomeList }}

      />

      <Home

        states = {{ ordination, cart }}

        handlers = {{ handleOrdination }}

        renderHomeList = {{ renderHomeList }}

      />

      <Cart

        states = {{ amount, cart }}

        renderCart = {{renderCart}}

      />

    </AppContainer>
  )
}

export default App;