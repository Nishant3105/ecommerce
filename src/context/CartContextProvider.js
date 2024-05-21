import React, {useState} from 'react'
import CartContext from './CartContext'



const CartContextProvider = (props) => {
  const [products,setProducts] = useState([])
  const addToCartHandler = (product) => {
    const existingProduct=products.find((cartItem)=>cartItem.title===product.title)
    console.log(existingProduct)
    if(existingProduct){
      const updatedProducts = products.map((cartItem) =>
        cartItem.id === product.id ? { ...cartItem, quantity: Number(cartItem.quantity) + 1 } : cartItem
      );
      setProducts(updatedProducts);    }
    else{
      setProducts([...products,{...product,quantity:1}])
    }
  }
  
  const removeToCartHandler = (id) => {
     const updatedProducts=products.filter((product)=>product.id!==id)
     setProducts([...updatedProducts])
  }

    const cartContextValues={
      products:products,
      addToCart:addToCartHandler,
      removeFromCart:removeToCartHandler
    }
  return (
    <CartContext.Provider value={cartContextValues}>
      {props.children}
    </CartContext.Provider>
  )
}

export default CartContextProvider