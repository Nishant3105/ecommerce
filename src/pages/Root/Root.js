import React,{useState} from 'react'
import {Outlet} from 'react-router-dom'
import Headers from '../../components/layouts/Headers';
import Footer from "../../components/layouts/Footer"
import Cart from '../../components/cart/Cart';
import CartContextProvider from '../../context/CartContextProvider';

const Root = () => {
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
        <Headers onClick={onClick}/>
        <Outlet/>
        <Footer/>
      </CartContextProvider>
    );

}

export default Root