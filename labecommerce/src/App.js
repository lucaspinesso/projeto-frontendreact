import Filters from './Components/Filters/Filters';
import { Home } from './Components/ProductList/Home/Home';
import { Cart } from './Components/ShoppingCart/Cart/Cart';
import { GlobalStyle } from './GlobalStyle';
import { AppContainer } from './AppStyle'
import { productsList } from './assents/productsList'

function App() {
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