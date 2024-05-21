import React, {useState,useContext} from 'react'
import CartContext from './CartContext'


const CartContextProvider = (props) => {
  const [products,setProducts] = useState([])
  const addToCartHandler = (product) => {
    setProducts([...products,product])
  }
  
  const removeToCartHandler = (id) => {
     const updatedProducts=products.filter((product)=>product.id!==id)
     setProducts([...updatedProducts])
  }

    const cartContextValues={
      products:[],
      addToCart:addToCartHandler,
      removeFromCart:removeToCartHandler
    }
  return (
    <CartContext.Provider values={cartContextValues}>
      {props.children}
    </CartContext.Provider>
  )
}

export default CartContextProvider