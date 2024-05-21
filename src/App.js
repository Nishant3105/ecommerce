import React,{useState} from 'react'
import Header from "../src/components/layouts/Headers";
import ProductList  from "./components/layouts/ProductList";
import Footer from "./components/layouts/Footer"
import Cart from './components/cart/Cart';
import CartContextProvider from './context/CartContextProvider';
function App() {
  const [cartIsShown,setCartIsShown]=useState(false)

  const onClick=()=>{
    setCartIsShown(true)
  }
  const onClose=()=>{
    setCartIsShown(false)
  }
  return (
    <CartContextProvider>
      {cartIsShown && <Cart onClick={onClose}/>}
      <Header onClick={onClick}/>
      <ProductList/>
      <Footer/>
    </CartContextProvider>
  );
}

export default App;
