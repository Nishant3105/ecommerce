import React, { useState } from 'react'
import { Route, Switch, Redirect} from 'react-router-dom'
import Headers from './components/layouts/Headers';
import Footer from "./components/layouts/Footer"
// import Root from './pages/Root/Root';
import About from './pages/About/About';
import ProductList from './pages/Product/ProductList';
import ProductDetails from './pages/Product/ProductDetails';
import Home from './pages/Home/Home';
import Cart from './context/CartContext';
import CartContextProvider from './context/CartContextProvider';
import ContactUs from './pages/ContactUs/ContactUs';

function App() {

  const [cartIsShown, setCartIsShown] = useState(false)

  const onClick = () => {
    setCartIsShown(true)
  }
  const onClose = () => {
    setCartIsShown(false)
  }
  return (
    <CartContextProvider>
      {cartIsShown && <Cart onClick={onClose} />}
      <Headers onClick={onClick} />
      <Switch>
        <Route exact path="/">
          <Redirect to="/home"/>
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/productlist" exact>
          <ProductList />
        </Route>
        <Route path="/productlist/:product_id">
          <ProductDetails />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/contactus">
          <ContactUs/>
        </Route>
      </Switch>
      <Footer />
    </CartContextProvider>
  );

}

export default App;


